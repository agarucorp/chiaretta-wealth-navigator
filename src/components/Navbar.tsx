import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      // Scrollspy logic
      const sectionIds = ['hero', 'advisory', 'portfolio', 'about', 'contact'];
      let currentSection = 'hero';
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80) {
            currentSection = id;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'advisory', label: t('nav.advisory') },
    { id: 'portfolio', label: t('nav.portfolio') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${scrolled ? '' : 'bg-transparent'} backdrop-blur-md`}
      style={{ fontFamily: 'Public Sans, sans-serif', backgroundColor: scrolled ? 'rgba(30,35,65,0.85)' : 'transparent' }}
    >
      <div className="container mx-auto py-3">
        <div className="flex items-center justify-between relative">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center pl-6"
          >
            <svg width="32" height="32" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
              <path d="M8.22525 0.657128C8.15756 0.654628 8.08938 0.657878 8.01613 0.661722C7.64306 0.681034 7.19866 0.778628 6.72519 0.959847C5.77972 1.21966 4.78691 1.68266 3.84775 2.34047C1.15606 4.22569 -0.073655 6.99419 1.10219 8.52328C2.27803 10.0524 5.41541 9.76185 8.10709 7.87657C10.7988 5.99128 12.0284 3.22741 10.8526 1.69832C10.8439 1.68697 10.8343 1.67732 10.8254 1.66619C10.5737 2.76641 9.31722 4.2476 7.59794 5.34472C5.43 6.72816 3.35513 6.97685 2.96138 5.90432C2.78575 5.426 2.97494 4.76838 3.42956 4.06047C3.42935 4.13572 3.43719 4.20866 3.45685 4.27603C3.6786 5.03725 5.12722 4.96019 6.69334 4.10635C8.25947 3.2525 9.35159 1.94122 9.12984 1.18C9.03281 0.846972 8.69903 0.674628 8.22525 0.657128ZM11.9572 2.12947C12.3868 3.91982 10.9827 6.45153 8.39794 8.26188C5.92444 9.99432 3.12606 10.5448 1.43397 9.7755C2.46013 10.8759 3.87834 11.6364 5.51147 11.8303C5.5175 11.831 5.52356 11.8297 5.52959 11.8303V14.2383H4.22047V14.642L0.788501 15.3438H15.3438L14.3619 14.9631H7.89344V14.8576H14.0892L14.0164 14.8301V14.2383H11.6163V13.7934H12.758L11.6163 13.3256V9.26175C12.2698 8.39903 12.7148 7.371 12.8573 6.22994C13.0424 4.7481 12.6907 3.31725 11.9573 2.12944L11.9572 2.12947ZM10.2253 10.6195V14.2383H9.26616V11.1974C9.60509 11.0316 9.92153 10.8384 10.2253 10.6194M7.87972 11.6927V14.2383H6.91606V11.8533C7.24397 11.8241 7.56559 11.7678 7.87972 11.6927Z" fill="white"/>
            </svg>
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-3 px-2 text-sm font-medium transition-premium group ${
                  activeSection === item.id ? 'text-white' : 'text-primary-foreground/90 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-white to-blue-300 transition-all duration-500 ease-premium ${
                    activeSection === item.id ? 'w-full shadow-glow' : 'w-0 group-hover:w-full'
                  }`}
                />
                <span
                  className={`absolute inset-0 bg-white/5 rounded-lg transition-all duration-300 ${
                    activeSection === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}
                />
              </button>
            ))}
            
          </div>

          {/* Language Toggle */}
          <div className="flex items-center space-x-2 pr-6">
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center space-x-0.5 text-white hover:text-blue-200 transition-colors"
              aria-label="Cambiar idioma"
            >
              <Globe className="h-4 w-4" />
              <span className="text-[10px] font-semibold">{language.toUpperCase()}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
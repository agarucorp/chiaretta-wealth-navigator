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
            <img 
              src="/blas-logo.png" 
              alt="Blas Chiaretta Logo" 
              className="h-40 w-auto"
            />
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
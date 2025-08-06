import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, X } from 'lucide-react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      // Scrollspy logic
      const sectionIds = ['hero', 'about', 'advisory', 'portfolio', 'contact'];
      let currentSection = 'hero';
      
      const scrollPosition = window.scrollY + 100; // Offset for navbar height
      
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          // Check if current scroll position is within this section
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = id;
            break; // Use the first matching section
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
    { id: 'about', label: t('nav.about') },
    { id: 'advisory', label: t('nav.advisory') },
    { id: 'portfolio', label: t('nav.portfolio') },
    { id: 'contact', label: t('nav.contact') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${scrolled ? '' : 'bg-transparent'} backdrop-blur-md`}
      style={{ fontFamily: 'Public Sans, sans-serif', backgroundColor: scrolled ? 'rgba(30,35,65,1)' : 'transparent' }}
    >
      <div className="container mx-auto py-3">
        {/* Web Navbar */}
        <div className="hidden md:flex items-center justify-between relative">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center pl-6"
          >
            <img 
              src="/kodama1.svg" 
              alt="Kodama Logo" 
              className="h-8 w-auto"
            />
          </button>

          {/* Navigation Links */}
          <div className="flex items-center space-x-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ fontFamily: 'Public Sans, sans-serif' }}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-3 px-2 text-sm font-medium transition-premium group ${
                  activeSection === item.id ? 'text-white' : 'text-primary-foreground/90 hover:text-white'
                }`}
                style={{ fontFamily: 'Public Sans, sans-serif' }}
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

        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center justify-between relative h-14">
          {/* Logo perfectamente centrado usando posicionamiento absoluto y flex */}
          <div className="flex-1 flex items-center justify-center relative">
            <span className="absolute left-0 flex items-center h-full">
              <span className="w-10" />
            </span>
            <button onClick={() => scrollToSection('hero')} className="flex items-center z-10">
              <img 
                src="/kodama1.svg" 
                alt="Kodama Logo" 
                className="h-8 w-auto"
              />
            </button>
            <span className="absolute right-0 flex items-center h-full">
              <button
                onClick={() => setMenuOpen(true)}
                className="p-2 rounded-full transition-all flex items-center justify-center active:scale-90 focus:outline-none focus:ring-2 focus:ring-[#60aaff]"
                aria-label="Abrir menú"
                style={{}}
              >
                {/* Icono hamburguesa más fino, color depende de scrolled */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="5.5" width="24" height="1.5" rx="0.75" fill={scrolled ? '#60aaff' : '#1a237e'} />
                  <rect y="11.25" width="24" height="1.5" rx="0.75" fill={scrolled ? '#60aaff' : '#1a237e'} />
                  <rect y="17" width="24" height="1.5" rx="0.75" fill={scrolled ? '#60aaff' : '#1a237e'} />
                </svg>
              </button>
            </span>
          </div>

          {/* Menú hamburguesa estándar dropdown */}
          {menuOpen && (
            <div className="fixed inset-0 z-50">
              {/* Fondo oscuro semitransparente */}
              <div className="absolute inset-0 bg-black/40" onClick={() => setMenuOpen(false)}></div>
              {/* Menú dropdown con fondo acorde a la página */}
              <div className="absolute top-0 left-0 w-full flex flex-col animate-slide-in-down bg-[#f3f4f8] shadow-xl">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="absolute top-4 right-4 text-[#1a237e] hover:text-[#60aaff] transition-colors"
                  aria-label="Cerrar menú"
                >
                  <X className="w-7 h-7" />
                </button>
                <nav className="flex flex-col gap-2 py-16 px-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => { setMenuOpen(false); scrollToSection(item.id); }}
                      className={`text-lg font-semibold text-[#1a237e] text-left py-3 px-2 rounded-md transition-colors duration-200 hover:bg-[#e3e8f0] hover:text-[#60aaff] ${activeSection === item.id ? 'text-[#60aaff]' : ''}`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                <div className="flex justify-center mt-8 mb-4">
                  <button
                    onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                    className="flex items-center space-x-1 text-[#1a237e] hover:text-[#60aaff] transition-colors text-base font-semibold"
                    aria-label="Cambiar idioma"
                  >
                    <span>{language === 'en' ? 'ES' : 'EN'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
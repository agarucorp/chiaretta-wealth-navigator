import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { language, setLanguage, t } = useLanguage();

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-light/20 shadow-glow">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-primary-foreground hover:text-white transition-premium transform hover:scale-105"
          >
            Blas Chiaretta
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
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
            
            {/* Contact CTA */}
            <Button
              onClick={() => scrollToSection('contact')}
              variant="secondary"
              size="sm"
              className="ml-4 px-6 py-2 bg-white text-primary font-semibold hover:bg-white/90 hover:shadow-glow transition-premium transform hover:scale-105 border border-white/20"
            >
              {t('nav.contact')}
            </Button>
          </div>

          {/* Language Toggle */}
          <div className="flex items-center space-x-2">
            <Button
              variant={language === 'en' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('en')}
              className={`text-xs transition-premium ${
                language === 'en' 
                  ? 'bg-white text-primary hover:bg-white/90' 
                  : 'text-primary-foreground hover:text-white hover:bg-white/10'
              }`}
            >
              EN
            </Button>
            <Button
              variant={language === 'es' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('es')}
              className={`text-xs transition-premium ${
                language === 'es' 
                  ? 'bg-white text-primary hover:bg-white/90' 
                  : 'text-primary-foreground hover:text-white hover:bg-white/10'
              }`}
            >
              ES
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
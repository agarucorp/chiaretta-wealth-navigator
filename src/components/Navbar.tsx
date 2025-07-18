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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-semibold text-primary hover:text-primary-light transition-colors"
          >
            Blas Chiaretta
          </button>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative py-2 text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-foreground'
                } group`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Language Toggle */}
          <div className="flex items-center space-x-2">
            <Button
              variant={language === 'en' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('en')}
              className="text-xs"
            >
              EN
            </Button>
            <Button
              variant={language === 'es' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setLanguage('es')}
              className="text-xs"
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
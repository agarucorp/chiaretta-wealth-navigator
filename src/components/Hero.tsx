import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            {t('hero.title')}
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-primary-foreground/90">
            {t('hero.subtitle')}
          </h2>
          
          {/* Description */}
          <p className="text-lg md:text-xl mb-12 text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="secondary"
              className="px-8 py-4 text-lg font-medium shadow-elegant hover:shadow-premium transition-all duration-300"
            >
              {t('hero.cta.primary')}
            </Button>
            <Button
              onClick={() => scrollToSection('advisory')}
              size="lg"
              variant="outline"
              className="px-8 py-4 text-lg font-medium border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
            >
              {t('hero.cta.secondary')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
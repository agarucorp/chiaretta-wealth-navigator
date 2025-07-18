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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient mesh */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title with premium animation */}
          <div className="mb-8 space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white leading-tight">
              <span className="inline-block animate-fade-in animation-delay-100">
                {t('hero.title').split(' ')[0]}
              </span>{' '}
              <span className="inline-block animate-fade-in animation-delay-300 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                {t('hero.title').split(' ').slice(1).join(' ')}
              </span>
            </h1>
          </div>
          
          {/* Subtitle with elegant styling */}
          <h2 className="text-2xl md:text-4xl font-light mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed animate-fade-in animation-delay-500">
            {t('hero.subtitle')}
          </h2>
          
          {/* Description with premium spacing */}
          <p className="text-xl md:text-2xl mb-16 text-white/70 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in animation-delay-700">
            {t('hero.description')}
          </p>
          
          {/* Premium CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in animation-delay-900">
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              className="group px-12 py-6 text-xl font-semibold bg-white text-primary hover:bg-white/90 shadow-glow hover:shadow-premium transition-premium transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">{t('hero.cta.primary')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </Button>
            <Button
              onClick={() => scrollToSection('advisory')}
              size="lg"
              variant="outline"
              className="group px-12 py-6 text-xl font-medium border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-premium transform hover:scale-105 backdrop-blur-sm"
            >
              <span className="relative z-10">{t('hero.cta.secondary')}</span>
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            </Button>
          </div>
          
          {/* Subtle scroll indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-1 h-12 bg-white/30 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
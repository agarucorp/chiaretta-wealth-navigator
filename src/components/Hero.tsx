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
      
      {/* Floating Financial Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Chart */}
        <div className="absolute top-20 left-10 w-24 h-16 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 animate-pulse delay-100 transform rotate-12">
          <div className="p-3">
            <div className="flex items-end h-8 space-x-1">
              <div className="w-1 h-3 bg-blue-300 rounded"></div>
              <div className="w-1 h-6 bg-blue-400 rounded"></div>
              <div className="w-1 h-4 bg-blue-300 rounded"></div>
              <div className="w-1 h-8 bg-blue-500 rounded"></div>
            </div>
          </div>
        </div>

        {/* Floating Dollar Sign */}
        <div className="absolute top-1/3 right-16 w-16 h-16 bg-white/5 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center animate-pulse delay-300 transform -rotate-12">
          <span className="text-2xl font-bold text-white/70">$</span>
        </div>

        {/* Floating Calculator */}
        <div className="absolute bottom-32 left-20 w-20 h-24 bg-white/8 backdrop-blur-sm rounded-lg border border-white/20 animate-pulse delay-500 transform rotate-6">
          <div className="p-2">
            <div className="w-full h-3 bg-white/20 rounded mb-1"></div>
            <div className="grid grid-cols-3 gap-1">
              <div className="w-3 h-2 bg-white/15 rounded"></div>
              <div className="w-3 h-2 bg-white/15 rounded"></div>
              <div className="w-3 h-2 bg-white/15 rounded"></div>
              <div className="w-3 h-2 bg-white/15 rounded"></div>
              <div className="w-3 h-2 bg-white/15 rounded"></div>
              <div className="w-3 h-2 bg-white/15 rounded"></div>
            </div>
          </div>
        </div>

        {/* Floating Document */}
        <div className="absolute top-40 right-32 w-16 h-20 bg-white/6 backdrop-blur-sm rounded border border-white/20 animate-pulse delay-700 transform -rotate-6">
          <div className="p-2">
            <div className="w-full h-1 bg-white/30 rounded mb-1"></div>
            <div className="w-3/4 h-1 bg-white/20 rounded mb-1"></div>
            <div className="w-full h-1 bg-white/20 rounded mb-1"></div>
            <div className="w-2/3 h-1 bg-white/20 rounded"></div>
          </div>
        </div>

        {/* Floating Coins */}
        <div className="absolute bottom-40 right-10 flex space-x-2 animate-pulse delay-900">
          <div className="w-8 h-8 bg-yellow-400/20 backdrop-blur-sm rounded-full border border-yellow-300/30 transform rotate-12"></div>
          <div className="w-6 h-6 bg-yellow-400/15 backdrop-blur-sm rounded-full border border-yellow-300/20 transform -rotate-6"></div>
        </div>

        {/* Floating Pie Chart */}
        <div className="absolute top-60 left-1/4 w-20 h-20 bg-white/5 backdrop-blur-sm rounded-full border border-white/20 animate-pulse delay-1100 transform rotate-45">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-blue-300/20 to-transparent transform rotate-90"></div>
          </div>
        </div>

        {/* Floating Growth Arrow */}
        <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-green-400/10 backdrop-blur-sm rounded border border-green-300/30 animate-pulse delay-1300 transform rotate-12 flex items-center justify-center">
          <div className="w-4 h-4 border-t-2 border-r-2 border-green-400/60 transform rotate-45"></div>
        </div>
      </div>
      
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
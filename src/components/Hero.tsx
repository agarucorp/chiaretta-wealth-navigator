import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import seanPollock from '@/assets/sean-pollock-PhYq704ffdA-unsplash.jpg';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <img
        src={seanPollock}
        alt="Financial background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ filter: 'brightness(0.7)' }}
      />
      <div className="relative z-10 flex flex-col items-start text-left w-full px-4 md:px-8">
        <div
          className="mb-2"
          style={{ color: '#60aaff', fontFamily: 'Public Sans, sans-serif', fontWeight: 600, fontSize: 16, letterSpacing: 2 }}
        >
          BLAS CHIARETTA
        </div>
        <h1
          className="font-bold mb-4 w-full"
          style={{ fontFamily: 'Public Sans, sans-serif', fontSize: 36, color: 'white', letterSpacing: 1 }}
        >
          Tailored Asset Management
        </h1>
        <div className="w-24 h-1 bg-blue-300 rounded-full mb-6" />
        <h2 className="text-sm md:text-lg font-light text-white/90 w-full max-w-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
          Personalized financial strategies designed to grow and protect your wealth
        </h2>
      </div>
    </section>
  );
};

export default Hero;
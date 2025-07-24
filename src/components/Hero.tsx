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
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={seanPollock}
        alt="Financial background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ filter: 'brightness(0.7)' }}
      />
    </section>
  );
};

export default Hero;
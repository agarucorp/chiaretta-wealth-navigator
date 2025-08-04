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
    <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center">
      <img
        src={seanPollock}
        alt="Financial background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
        style={{ filter: 'brightness(0.5)' }}
      />
             <div className="relative z-10 flex flex-col items-start text-left w-full container mx-auto">
         <div className="pl-6">
        
                 <h1
           className="font-bold mb-4 w-full georgia-font"
           style={{ 
             fontFamily: 'Georgia, "Times New Roman", Times, serif !important', 
             fontSize: 40, 
             color: 'white', 
             letterSpacing: 1 
           }}
         >
          Tailored Asset Management
        </h1>
        <div className="w-24 h-1 rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #1a237e 0%, #60aaff 100%)' }} />
                 <h2 
           className="text-sm md:text-lg font-medium text-white/90 w-full max-w-2xl public-sans-font"
           style={{ 
             fontFamily: 'Public Sans, sans-serif !important', 
             fontSize: '19px'
           }}
         >
                                           We create a strategic blueprint that guides you toward your life's ambitions. Your goals are our focus, and our expertise is the foundation for your future.
         </h2>
         </div>
       </div>
    </section>
  );
};

export default Hero;
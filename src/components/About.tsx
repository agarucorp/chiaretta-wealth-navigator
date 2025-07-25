import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import blasPortrait from '@/assets/blas-chiaretta-portrait.jpg';
import logoDiTella from '@/assets/logoditella.svg';
import logoPompeu from '@/assets/logopompeu.webp';

const About = () => {
  const { t } = useLanguage();

  const education = [
    t('about.education.1'),
    t('about.education.2'),
  ];

  return (
    <section id="about" className="py-12" style={{ background: '#fff' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-left">
            <h2 className="font-bold text-primary mb-6" style={{ fontSize: '16px', letterSpacing: '2px' }}>
              ABOUT
            </h2>
            <h3 className="mb-2" style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '36px', color: '#1a237e' }}>
              I'm here to manage your<br/>finance with experience
            </h3>
          </div>
          <div className="mb-4" />

          <div className="grid lg:grid-cols-2 gap-12 h-full">
            {/* Content */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Description */}
              <p className="text-foreground/80 leading-relaxed" style={{ fontSize: '16px', color: '#1a237e' }}>
                Drawing on extensive experience within the Banking and Energy sectors, I bring a unique blend of analytical rigor and global adaptability to personal wealth management. 
                My career has involved navigating diverse economic landscapes and cultures, shaping my ability to craft resilient financial strategies tailored to individual circumstances.<br/><br/>
                My core drive is to identify growth opportunities and ensure your financial future is not just secure, but thriving.
              </p>
              {/* 2x2 grid de items con flecha */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-6">
                <div className="flex items-center">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-primary mr-2"><path d="M4 10h12m-4-4 4 4-4 4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm font-medium text-[#1a237e]">Sectoral & Strategic Insight</span>
                </div>
                <div className="flex items-center">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-primary mr-2"><path d="M4 10h12m-4-4 4 4-4 4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm font-medium text-[#1a237e]">Global & Adaptive Perspective</span>
                </div>
                <div className="flex items-center">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-primary mr-2"><path d="M4 10h12m-4-4 4 4-4 4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm font-medium text-[#1a237e]">Truly Personalized Attention</span>
                </div>
                <div className="flex items-center">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-primary mr-2"><path d="M4 10h12m-4-4 4 4-4 4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm font-medium text-[#1a237e]">Performance-Driven Commitment</span>
                </div>
              </div>
            </div>
            {/* Professional Image + Education */}
            <div className="flex flex-col items-center lg:items-end order-1 lg:order-2 h-full mt-[-112px]">
              <div className="relative">
                <img
                  src={blasPortrait}
                  alt="Blas Chiaretta - Financial Advisor"
                  className="w-[32rem] h-[24rem] object-cover object-top rounded-lg self-start"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              {/* Education debajo de la imagen */}
              <div className="mt-4 w-[32rem] flex flex-col items-start lg:items-start">
                <div className="flex items-center mb-3 ml-0">
                  <img src={logoDiTella} alt="Universidad Torcuato Di Tella" className="w-10 h-10 mr-3" />
                  <span className="leading-relaxed inline-block min-w-[220px] ml-6" style={{ fontSize: '15px', color: '#1a237e' }}>
                    Universidad Torcuato Di Tella - Business Economics Degree
                  </span>
                </div>
                <div className="flex items-center">
                  <img src={logoPompeu} alt="UPF Barcelona School of Management" className="w-20 h-auto mr-3" />
                  <span className="leading-relaxed inline-block min-w-[220px]" style={{ fontSize: '15px', color: '#1a237e' }}>
                    UPF - Master in Finance and Banking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
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
            <h2 className="text-sm font-semibold mb-2 uppercase tracking-widest" style={{ color: '#60aaff', fontFamily: 'Public Sans, sans-serif' }}>
              ABOUT
            </h2>
            <h3 className="mb-2" style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '34px', color: '#1a237e' }}>
              I'm here to manage your<br/>finance with experience
            </h3>
            <div className="w-24 h-1 rounded-full mb-4" style={{ background: 'linear-gradient(90deg, #1a237e 0%, #60aaff 100%)' }} />
          </div>
          <div className="mb-4" />

          {/* Desktop/Tablet (lg+) */}
          <div className="hidden lg:grid grid-cols-2 gap-12 h-full">
            {/* Content */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Description */}
              <p className="text-foreground/80 leading-relaxed" style={{ fontSize: '15px', color: '#1a237e', fontFamily: 'Mulish, sans-serif' }}>
                Drawing on extensive experience within the Banking and Energy sectors, I bring a unique blend of analytical rigor and global adaptability to personal wealth management. 
                My career has involved navigating diverse economic landscapes and cultures, shaping my ability to craft resilient financial strategies tailored to individual circumstances.<br/><br/>
                My core drive is to identify growth opportunities and ensure your financial future is not just secure, but thriving.
              </p>
              {/* 2x2 grid de items con flecha */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-6">
                <div className="flex items-center group">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-primary mr-2 transition-transform duration-200 group-hover:scale-110"><path d="M4 10h12m-4-4 4 4-4 4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm font-medium text-[#1a237e] transition-transform duration-200 group-hover:scale-110">Sectoral & Strategic Insight</span>
                </div>
                <div className="flex items-center group">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-primary mr-2 transition-transform duration-200 group-hover:scale-110"><path d="M4 10h12m-4-4 4 4-4 4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm font-medium text-[#1a237e] transition-transform duration-200 group-hover:scale-110">Global & Adaptive Perspective</span>
                </div>
                <div className="flex items-center group">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-primary mr-2 transition-transform duration-200 group-hover:scale-110"><path d="M4 10h12m-4-4 4 4-4 4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm font-medium text-[#1a237e] transition-transform duration-200 group-hover:scale-110">Truly Personalized Attention</span>
                </div>
                <div className="flex items-center group">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-primary mr-2 transition-transform duration-200 group-hover:scale-110"><path d="M4 10h12m-4-4 4 4-4 4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm font-medium text-[#1a237e] transition-transform duration-200 group-hover:scale-110">Performance-Driven Commitment</span>
                </div>
              </div>
              {/* Línea divisoria punteada */}
              <div className="w-full flex justify-center my-6">
                <div className="w-full border-t-2 border-dotted border-[#1a237e]/10"></div>
              </div>
              {/* Idiomas */}
              <div className="w-full flex justify-center">
                <span className="text-[13px] font-light tracking-wide text-[#1a237e]" style={{ fontFamily: 'Public Sans, sans-serif', letterSpacing: 1 }}>
                  English <span className="mx-2 text-[#60aaff]">|</span> Spanish <span className="mx-2 text-[#60aaff]">|</span> Italian <span className="mx-2 text-[#60aaff]">|</span> Portuguese
                </span>
              </div>
            </div>
            {/* Professional Image + Education */}
            <div className="flex flex-col items-center lg:items-end order-1 lg:order-2 h-full mt-[-112px]">
              <div className="relative">
                <img
                  src={blasPortrait}
                  alt="Blas Chiaretta - Financial Advisor"
                  className="w-[28.8rem] h-[21.6rem] object-cover rounded-lg self-start shadow-2xl"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              {/* Education debajo de la imagen */}
              <div className="mt-10 w-[28.8rem] flex flex-col items-start lg:items-start ml-0">
                <div className="flex items-center mb-3 ml-0">
                  <img src={logoDiTella} alt="Universidad Torcuato Di Tella" className="w-12 h-auto mr-3" />
                  <span className="leading-relaxed inline-block min-w-[220px] ml-8" style={{ fontSize: '13px', color: '#1a237e', fontFamily: 'Mulish, sans-serif' }}>
                    Universidad Torcuato Di Tella - Business Economics Degree
                  </span>
                </div>
                <div className="flex items-center">
                  <img src={logoPompeu} alt="UPF Barcelona School of Management" className="w-20 h-auto mr-3" />
                  <span className="leading-relaxed inline-block min-w-[220px]" style={{ fontSize: '13px', color: '#1a237e', fontFamily: 'Mulish, sans-serif' }}>
                    UPF - Master in Finance and Banking
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile (menos de lg) */}
          <div className="block lg:hidden">
            {/* Texto arriba */}
            <div className="space-y-8">
              <p className="text-foreground/80 leading-relaxed text-center" style={{ fontSize: '15px', color: '#1a237e', fontFamily: 'Mulish, sans-serif' }}>
                Drawing on extensive experience within the Banking and Energy sectors, I bring a unique blend of analytical rigor and global adaptability to personal wealth management. 
                My career has involved navigating diverse economic landscapes and cultures, shaping my ability to craft resilient financial strategies tailored to individual circumstances.<br/><br/>
                My core drive is to identify growth opportunities and ensure your financial future is not just secure, but thriving.
              </p>
              {/* 2x2 grid de items con flecha */}
              <div className="grid grid-cols-1 gap-x-8 gap-y-3 mt-6">
                <div className="flex items-center group">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-primary mr-2 transition-transform duration-200 group-hover:scale-110"><path d="M4 10h12m-4-4 4 4-4 4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm font-medium text-[#1a237e] transition-transform duration-200 group-hover:scale-110">Sectoral & Strategic Insight</span>
                </div>
                <div className="flex items-center group">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-primary mr-2 transition-transform duration-200 group-hover:scale-110"><path d="M4 10h12m-4-4 4 4-4 4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm font-medium text-[#1a237e] transition-transform duration-200 group-hover:scale-110">Global & Adaptive Perspective</span>
                </div>
                <div className="flex items-center group">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-primary mr-2 transition-transform duration-200 group-hover:scale-110"><path d="M4 10h12m-4-4 4 4-4 4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm font-medium text-[#1a237e] transition-transform duration-200 group-hover:scale-110">Truly Personalized Attention</span>
                </div>
                <div className="flex items-center group">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20" className="text-primary mr-2 transition-transform duration-200 group-hover:scale-110"><path d="M4 10h12m-4-4 4 4-4 4" stroke="#1a237e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-sm font-medium text-[#1a237e] transition-transform duration-200 group-hover:scale-110">Performance-Driven Commitment</span>
                </div>
              </div>
              {/* Línea divisoria punteada */}
              <div className="w-full flex justify-center my-6">
                <div className="w-full border-t-2 border-dotted border-[#1a237e]/10"></div>
              </div>
              {/* Idiomas */}
              <div className="w-full flex justify-center">
                <span className="text-[13px] font-light tracking-wide text-[#1a237e]" style={{ fontFamily: 'Public Sans, sans-serif', letterSpacing: 1 }}>
                  English <span className="mx-2 text-[#60aaff]">|</span> Spanish <span className="mx-2 text-[#60aaff]">|</span> Italian <span className="mx-2 text-[#60aaff]">|</span> Portuguese
                </span>
              </div>
            </div>
            {/* Imagen y educación abajo */}
            <div className="flex flex-col items-center mt-10">
              <div className="relative w-full flex justify-center">
                <img
                  src={blasPortrait}
                  alt="Blas Chiaretta - Financial Advisor"
                  className="w-full max-w-xs h-auto object-cover rounded-lg shadow-2xl"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>
              {/* Education debajo de la imagen */}
              <div className="mt-6 w-full max-w-xs flex flex-col items-start">
                <div className="flex items-center mb-3">
                  <img src={logoDiTella} alt="Universidad Torcuato Di Tella" className="w-12 h-auto mr-3" />
                  <span className="leading-relaxed inline-block ml-2" style={{ fontSize: '13px', color: '#1a237e', fontFamily: 'Mulish, sans-serif' }}>
                    Universidad Torcuato Di Tella - Business Economics Degree
                  </span>
                </div>
                <div className="flex items-center">
                  <img src={logoPompeu} alt="UPF Barcelona School of Management" className="w-20 h-auto mr-3" />
                  <span className="leading-relaxed inline-block" style={{ fontSize: '13px', color: '#1a237e', fontFamily: 'Mulish, sans-serif' }}>
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
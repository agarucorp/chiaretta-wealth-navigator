import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Advisory = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const insights = [
    {
      title: 'Your Current Financial Standing',
      text: 'A comprehensive analysis of your financial situation to establish a clear starting point for our work together.'
    },
    {
      title: 'Strategic Cash Flow Inquiries',
      text: 'We provide guidance to manage your income and expenses, helping you optimize your day-to-day finances for better long-term savings.'
    },
    {
      title: 'Growing Your Net Worth',
      text: 'Our strategies are designed to help you build, protect, and maximize your net worth, turning your financial goals into reality.'
    },
    {
      title: 'Liquidity & Profitability Risks',
      text: 'We offer detailed analysis on specific investments or holdings, assessing their liquidity and profitability to help you make informed decisions.'
    }
  ];

  const businessCards = [
    {
      title: 'Strategic Financial Planning',
      text: 'We assist you with financial forecasting, budgeting, and long-term planning to ensure your business remains on a path to profitability.'
    },
    {
      title: 'Capital Structuring & Funding',
      text: 'Guidance on capital allocation and funding strategies to support your company\'s growth and operational needs.'
    },
    {
      title: 'Growth & Operational Strategy',
      text: 'Analysis of your business operations to identify opportunities for efficiency and develop strategies for scalable growth.'
    },
    {
      title: 'Mergers & Acquisitions Support',
      text: 'Expert support for due diligence and strategic decision-making in mergers, acquisitions, and divestitures.'
    }
  ];

  // Auto-slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % insights.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [insights.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % insights.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + insights.length) % insights.length);
  };

  return (
    <section id="advisory" className="py-20" style={{ background: '#f3f4f8' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Textos centrados */}
          <div className="text-center space-y-6 mb-16" style={{ color: '#1a237e' }}>
            <h3 className="text-sm font-semibold mb-2 uppercase tracking-widest" style={{ color: '#60aaff' }}>{t('advisory.title')}</h3>
            <h2 className="mb-2 georgia-font" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif !important', fontWeight: 700, fontSize: '34px', color: '#1a237e' }}>We provide the guidance you need to make confident financial decisions</h2>
            <p className="text-base leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'Mulish, sans-serif', fontSize: '16px', color: '#1a237e' }}>
              We offer personalized advisory services that begin with understanding your financial situation and optimizing cash flow. From there, we help build and protect your net worth through strategic, future-focused decisions. Whether assessing investment risks or planning major life events, our expert guidance supports your financial confidence.
            </p>
          </div>

          {/* Carrusel Premium */}
          <div className="relative max-w-5xl mx-auto mb-20">
            {/* Flechas de navegación */}
            <button
              onClick={prevSlide}
              className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronLeft className="w-6 h-6 text-[#1a237e] group-hover:text-[#60aaff] transition-colors" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 flex items-center justify-center group"
            >
              <ChevronRight className="w-6 h-6 text-[#1a237e] group-hover:text-[#60aaff] transition-colors" />
            </button>

            {/* Contenedor del carrusel */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {insights.map((insight, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-gradient-to-br from-[#1a237e] to-[#2c3e50] rounded-2xl p-8 mx-4 h-48 flex flex-col justify-center">
                      <div className="text-center space-y-4">
                        <h3 className="text-xl font-bold georgia-font" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif !important', color: '#ffffff' }}>
                          {insight.title}
                        </h3>
                        <p className="text-base leading-relaxed" style={{ fontFamily: 'Mulish, sans-serif', color: '#e5e7eb' }}>
                          {insight.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center mt-6 space-x-2">
              {insights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[#1a237e] scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Nueva sección Business Consulting */}
          <div className="text-center space-y-6 mb-16" style={{ color: '#1a237e' }}>
            <h2 className="mb-2 georgia-font" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif !important', fontWeight: 700, fontSize: '34px', color: '#1a237e' }}>Business Consulting & Strategy</h2>
            <p className="text-base leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'Mulish, sans-serif', fontSize: '16px', color: '#1a237e' }}>
              We help businesses and startups strengthen their financial health through expert advisory and strategic planning. Our consulting services offer the insights and tools needed to overcome challenges, seize opportunities, and achieve sustainable growth in a competitive market.
            </p>
          </div>

          {/* Premium Cards con efecto vidrioso */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {businessCards.map((card, index) => (
              <div key={index} className="premium-card-3d h-64">
                <div className="premium-card-container cursor-pointer">
                  {/* Frente de la card - Solo título */}
                  <div className="premium-card-front p-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.9) 0%, rgba(44, 62, 80, 0.9) 100%)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                    <h3 className="text-lg font-bold georgia-font text-center" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif !important', color: '#ffffff' }}>
                      {card.title}
                    </h3>
                  </div>
                  
                  {/* Trasera de la card - Solo contenido */}
                  <div className="premium-card-back p-6 flex flex-col justify-center" style={{ background: 'linear-gradient(135deg, rgba(26, 35, 126, 0.9) 0%, rgba(44, 62, 80, 0.9) 100%)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
                    <p className="text-sm leading-relaxed text-center" style={{ fontFamily: 'Mulish, sans-serif', color: '#e5e7eb' }}>
                      {card.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advisory;
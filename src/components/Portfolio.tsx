import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import suit from '@/assets/suit.png';
import { useState } from 'react';

const Portfolio = () => {
  const { t } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const objectives = [
    {
      id: 1,
      title: "Preserve Capital",
      description: "Protect your wealth through strategic risk management",
      icon: "🛡️",
      color: "from-[#1a237e] to-[#2c3e50]"
    },
    {
      id: 2,
      title: "Generate Income",
      description: "Create sustainable cash flow for your lifestyle",
      icon: "💰",
      color: "from-[#1a237e] to-[#2c3e50]"
    },
    {
      id: 3,
      title: "Growth Potential",
      description: "Maximize long-term wealth accumulation",
      icon: "📈",
      color: "from-[#1a237e] to-[#2c3e50]"
    },
    {
      id: 4,
      title: "Tax Efficiency",
      description: "Optimize returns through smart tax strategies",
      icon: "⚖️",
      color: "from-[#1a237e] to-[#2c3e50]"
    },
    {
      id: 5,
      title: "Liquidity Access",
      description: "Maintain flexibility for opportunities",
      icon: "💎",
      color: "from-[#1a237e] to-[#2c3e50]"
    },
    {
      id: 6,
      title: "Legacy Planning",
      description: "Secure your family's financial future",
      icon: "🏛️",
      color: "from-[#1a237e] to-[#2c3e50]"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "How is my portfolio performance measured?",
      answer: "Your portfolio performance is measured through comprehensive tracking of returns, risk-adjusted metrics, and comparison against relevant benchmarks. We provide detailed monthly reports showing your portfolio's growth, volatility, and alignment with your financial objectives."
    },
    {
      id: 2,
      question: "What is the performance fee structure?",
      answer: "Our performance fee is directly tied to your success - we only earn when your portfolio generates gains. This ensures our interests are perfectly aligned with yours, creating a transparent partnership focused on maximizing your returns."
    },
    {
      id: 3,
      question: "How often do we review and adjust my portfolio?",
      answer: "We conduct regular portfolio reviews and adjustments based on market conditions, your changing financial goals, and life circumstances. This includes quarterly comprehensive reviews and immediate adjustments when market conditions require it."
    }
  ];

  return (
    <section id="portfolio" className="py-8" style={{ background: '#fff' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto mt-8">
          {/* Content and Image */}
          {/* Mobile Version - No Image */}
          <div className="block md:hidden">
            <div className="max-w-xl">
              <h2
                className="text-sm font-semibold mb-2 uppercase tracking-widest"
                style={{ color: '#60aaff', fontFamily: 'Public Sans, sans-serif', fontSize: 16 }}
              >
                {t('portfolio.title').toUpperCase()}
              </h2>
              <h3
                className="mb-2 georgia-font"
                style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif !important', fontWeight: 700, fontSize: '34px', color: '#1a237e', textAlign: 'left' }}
              >
                Are you ready for total transparency?
              </h3>
              <div className="w-24 h-1 rounded-full mb-4" style={{ background: 'linear-gradient(90deg, #1a237e 0%, #60aaff 100%)' }} />
              <p
                className="text-lg leading-relaxed"
                style={{ color: '#1a237e', fontFamily: 'Mulish, sans-serif', fontSize: '15px', textAlign: 'left' }}
              >
                Through an in-depth analysis of your financial background, goals, and risk tolerance, I construct a <strong>tailored portfolio</strong> designed to enhance your purchasing power and achieve your specific short-, medium-, and long-term objectives.<br/><br/>
                My compensation is directly tied to your success via a <strong>performance fee</strong> – I earn only when your portfolio generates gains. This commitment ensures our interests are perfectly aligned, fostering a transparent partnership focused on maximizing your returns.
              </p>
            </div>
          </div>

          {/* Web Version - With Image */}
          <div className="hidden md:flex justify-between items-start">
            {/* Content */}
            <div className="max-w-xl">
              <h2
                className="text-sm font-semibold mb-2 uppercase tracking-widest"
                style={{ color: '#60aaff', fontFamily: 'Public Sans, sans-serif', fontSize: 16 }}
              >
                {t('portfolio.title').toUpperCase()}
              </h2>
              <h3
                className="mb-2 georgia-font"
                style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif !important', fontWeight: 700, fontSize: '34px', color: '#1a237e', textAlign: 'left' }}
              >
                Are you ready for total transparency?
              </h3>
              <div className="w-24 h-1 rounded-full mb-4" style={{ background: 'linear-gradient(90deg, #1a237e 0%, #60aaff 100%)' }} />
              <p
                className="text-lg leading-relaxed"
                style={{ color: '#1a237e', fontFamily: 'Mulish, sans-serif', fontSize: '15px', textAlign: 'left' }}
              >
                Through an in-depth analysis of your financial background, goals, and risk tolerance, I construct a <strong>tailored portfolio</strong> designed to enhance your purchasing power and achieve your specific short-, medium-, and long-term objectives.<br/><br/>
                My compensation is directly tied to your success via a <strong>performance fee</strong> – I earn only when your portfolio generates gains. This commitment ensures our interests are perfectly aligned, fostering a transparent partnership focused on maximizing your returns.
              </p>
            </div>

            {/* Image */}
            <img 
              src={suit} 
              alt="Suit - Premium Financial Services"
              className="w-[45%] h-[45%] rounded-lg"
            />
          </div>

          {/* Investment Objectives Section */}
          <div className="text-center mb-12 -mt-8 mt-16">
            <p
              className="text-lg mb-8"
              style={{ color: '#4a5568', fontFamily: 'Mulish, sans-serif' }}
            >
              We align your portfolio with these objectives to ensure comprehensive wealth management
            </p>
          </div>

          {/* Objectives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 mt-16">
            {objectives.map((objective) => (
              <div
                key={objective.id}
                className="group relative"
              >
                {/* Objective Circle */}
                <div className="relative mb-6">
                  <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${objective.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                    <span className="text-3xl">{objective.icon}</span>
                  </div>
                </div>
                
                {/* Objective Content */}
                <div className="text-center">
                  <h4
                    className="text-xl font-bold mb-3 georgia-font"
                    style={{ color: '#1a237e', fontFamily: 'Georgia, "Times New Roman", Times, serif !important' }}
                  >
                    {objective.title}
                  </h4>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: '#4a5568', fontFamily: 'Mulish, sans-serif' }}
                  >
                    {objective.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 georgia-font" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif !important', color: '#1a237e' }}>
              Frequently Asked Questions
            </h3>
            <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
              {faqs.map((faq) => (
                <Card 
                  key={faq.id}
                  className="bg-white border-0 shadow-[0_4px_32px_0_rgba(30,40,80,0.07)] hover:shadow-[0_8px_40px_0_rgba(30,40,80,0.13)] transition-all duration-400 rounded-xl cursor-pointer"
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center">
                      <h4 className="text-xl font-bold text-[#1a237e] mb-0" style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif' }}>
                        {faq.question}
                      </h4>
                      <div className={`transform transition-transform duration-300 ${openFAQ === faq.id ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6 text-[#1a237e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {openFAQ === faq.id && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <p className="text-[#4a5568] leading-relaxed" style={{ fontFamily: 'Mulish, sans-serif' }}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import celestialBlue from '@/assets/Celestial-Blue.png';

const Portfolio = () => {
  const { t } = useLanguage();

  const objectives = [
    {
      id: 1,
      title: "Preserve Capital",
      description: "Protect your wealth through strategic risk management",
      icon: "🛡️",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Generate Income",
      description: "Create sustainable cash flow for your lifestyle",
      icon: "💰",
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      title: "Growth Potential",
      description: "Maximize long-term wealth accumulation",
      icon: "📈",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Tax Efficiency",
      description: "Optimize returns through smart tax strategies",
      icon: "⚖️",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      title: "Liquidity Access",
      description: "Maintain flexibility for opportunities",
      icon: "💎",
      color: "from-teal-500 to-teal-600"
    },
    {
      id: 6,
      title: "Legacy Planning",
      description: "Secure your family's financial future",
      icon: "🏛️",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="portfolio" className="py-8" style={{ background: '#fff' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto -mt-32">
          {/* Header with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 -mt-16">
            {/* Left Column - Content */}
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

            {/* Right Column - Celestial Blue Image */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <img 
                  src={celestialBlue} 
                  alt="Celestial Blue - Premium Financial Services"
                  className="w-[562px] h-[674px] object-contain transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* Investment Objectives Section */}
          <div className="text-center mb-12">
            <h3
              className="mb-4 georgia-font"
              style={{ fontFamily: 'Georgia, "Times New Roman", Times, serif !important', fontWeight: 700, fontSize: '32px', color: '#1a237e' }}
            >
              Your Investment Objectives
            </h3>
            <p
              className="text-lg mb-8"
              style={{ color: '#4a5568', fontFamily: 'Mulish, sans-serif' }}
            >
              We align your portfolio with these six fundamental objectives to ensure comprehensive wealth management
            </p>
          </div>

          {/* Objectives Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                  {/* Connecting Line */}
                  <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-gray-300 to-transparent"></div>
                </div>
                
                {/* Objective Content */}
                <div className="text-center">
                  <h4
                    className="text-xl font-bold mb-3"
                    style={{ color: '#1a237e', fontFamily: 'Poppins, sans-serif' }}
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

          {/* Highlighted Features */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Personalized Service */}
            <Card className="bg-white border-0 shadow-[0_4px_32px_0_rgba(30,40,80,0.07)] hover:shadow-[0_8px_40px_0_rgba(30,40,80,0.13)] transition-all duration-400 rounded-xl p-0"
              style={{ transitionProperty: 'box-shadow, transform', willChange: 'transform' }}>
              <CardContent className="p-10">
                <h4 className="text-2xl font-bold mb-4 text-[#1a237e] font-sans" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('portfolio.personalized.title')}
                </h4>
                <p className="text-lg leading-relaxed text-[#1a237e] font-sans" style={{ fontFamily: 'Mulish, sans-serif' }}>
                  {t('portfolio.personalized.description')}
                </p>
              </CardContent>
            </Card>

            {/* Performance Fee */}
            <Card className="bg-white border-0 shadow-[0_4px_32px_0_rgba(30,40,80,0.07)] hover:shadow-[0_8px_40px_0_rgba(30,40,80,0.13)] transition-all duration-400 rounded-xl p-0"
              style={{ transitionProperty: 'box-shadow, transform', willChange: 'transform' }}>
              <CardContent className="p-10">
                <h4 className="text-2xl font-bold mb-4 text-[#1a237e] font-sans" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {t('portfolio.performance.title')}
                </h4>
                <p className="text-lg leading-relaxed text-[#1a237e] font-sans" style={{ fontFamily: 'Mulish, sans-serif' }}>
                  {t('portfolio.performance.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
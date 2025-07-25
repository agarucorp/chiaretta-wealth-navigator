import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();

  const features = [
    t('portfolio.features.1'),
    t('portfolio.features.2'),
    t('portfolio.features.3'),
    t('portfolio.features.4'),
  ];

  return (
    <section id="portfolio" className="py-20" style={{ background: '#fff' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-left mb-16 max-w-xl mx-0">
            <h2
              className="text-sm font-semibold mb-2 uppercase tracking-widest"
              style={{ color: '#60aaff', fontFamily: 'Public Sans, sans-serif', fontSize: 16 }}
            >
              {t('portfolio.title').toUpperCase()}
            </h2>
            <h3
              className="mb-2"
              style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '34px', color: '#1a237e', textAlign: 'left' }}
            >
              {t('portfolio.subtitle')}
            </h3>
            <div className="w-24 h-1 rounded-full mb-4" style={{ background: 'linear-gradient(90deg, #1a237e 0%, #60aaff 100%)' }} />
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: '#1a237e', fontFamily: 'Mulish, sans-serif', fontSize: '15px', textAlign: 'left' }}
            >
              Through an in-depth analysis of your financial background, goals, and risk tolerance, I construct a <strong>tailored portfolio</strong> designed to enhance your purchasing power and achieve your specific short-, medium-, and long-term objectives.<br/><br/>
              My compensation is directly tied to your success via a <strong>performance fee</strong> – I earn only when your portfolio generates gains. This commitment ensures our interests are perfectly aligned, fostering a transparent partnership focused on maximizing your returns.
            </p>
          </div>

          {/* Key Features Grid (restaurado) */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-[0_4px_32px_0_rgba(30,40,80,0.07)] hover:shadow-[0_8px_40px_0_rgba(30,40,80,0.13)] transition-all duration-400 rounded-xl p-0"
                style={{ transitionProperty: 'box-shadow, transform', willChange: 'transform' }}
              >
                <CardContent className="p-10">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-[#60aaff] rounded-full mt-3 flex-shrink-0" />
                    <p className="text-lg font-medium text-[#1a237e] leading-relaxed font-sans" style={{ fontFamily: 'Mulish, sans-serif' }}>
                      {feature}
                    </p>
                  </div>
                </CardContent>
              </Card>
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
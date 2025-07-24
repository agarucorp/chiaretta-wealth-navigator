import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Advisory = () => {
  const { t } = useLanguage();

  const features = [
    t('advisory.features.1'),
    t('advisory.features.2'),
    t('advisory.features.3'),
    t('advisory.features.4'),
  ];

  // Ejemplo de insights premium
  const insights = [
    {
      title: '98%',
      description: t('advisory.insight.1') || 'Clientes satisfechos',
    },
    {
      title: '+$50M',
      description: t('advisory.insight.2') || 'Portafolios gestionados',
    },
    {
      title: '15 años',
      description: t('advisory.insight.3') || 'Experiencia en el sector',
    },
  ];

  return (
    <section id="advisory" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Textos a la izquierda */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold mb-2 uppercase tracking-widest" style={{ color: '#60aaff' }}>{t('advisory.title')}</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: 'Mulish, sans-serif', fontWeight: 300 }}>{t('advisory.subtitle')}</h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8" style={{ fontFamily: 'sans-serif' }}>{t('advisory.description')}</p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-base text-foreground/90 leading-relaxed">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cards stepper a la derecha */}
          <div className="flex flex-col gap-6 justify-center">
            {[
              {
                title: 'Modular Multi-Currency Cards',
                description: 'We design a tailored investment plan for each client, adapting to their goals and risk profile, with ongoing monitoring and optimization.'
              },
              {
                title: 'Personalized Investment Strategy',
                description: 'We design a tailored investment plan for each client, adapting to their goals and risk profile, with ongoing monitoring and optimization.'
              },
              {
                title: 'Continuous Advisory Support',
                description: 'Our team provides ongoing support and proactive advice, ensuring your portfolio evolves with market changes and your personal needs.'
              }
            ].map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl px-5 py-4 w-full max-w-md ml-auto bg-gradient-to-l from-[#0a1833]/90 to-blue-900/80 shadow-lg flex flex-col gap-2 backdrop-blur-xl transition-all duration-500 hover:backdrop-blur-2xl hover:bg-gradient-to-l hover:from-[#12306b]/95 hover:to-blue-900/90 hover:shadow-2xl hover:scale-105"
                style={{ minHeight: '70px' }}
              >
                <div className="font-semibold text-base mb-1" style={{ fontFamily: 'Inter, sans-serif', color: '#60aaff' }}>
                  {step.title}
                </div>
                <div className="text-xs" style={{ fontFamily: 'Inter, sans-serif', color: '#e5e7eb' }}>
                  {step.description}
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
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
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('portfolio.title')}
            </h2>
            <h3 className="text-xl md:text-2xl text-muted-foreground mb-8">
              {t('portfolio.subtitle')}
            </h3>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: '#1a237e' }}>
              {t('portfolio.description')}
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border border-border/50 shadow-elegant hover:shadow-premium transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                    <p className="text-lg font-medium text-foreground leading-relaxed">
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
            <Card className="bg-gradient-premium text-primary-foreground shadow-premium">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-4">
                  {t('portfolio.personalized.title')}
                </h4>
                <p className="text-lg leading-relaxed text-primary-foreground/90">
                  {t('portfolio.personalized.description')}
                </p>
              </CardContent>
            </Card>

            {/* Performance Fee */}
            <Card className="bg-secondary text-secondary-foreground shadow-premium">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-4">
                  {t('portfolio.performance.title')}
                </h4>
                <p className="text-lg leading-relaxed text-secondary-foreground/90">
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
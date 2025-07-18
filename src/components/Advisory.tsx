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

  return (
    <section id="advisory" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('advisory.title')}
            </h2>
            <h3 className="text-xl md:text-2xl text-muted-foreground mb-8">
              {t('advisory.subtitle')}
            </h3>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto leading-relaxed">
              {t('advisory.description')}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default Advisory;
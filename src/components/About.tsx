import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import blasPortrait from '@/assets/blas-chiaretta-portrait.jpg';

const About = () => {
  const { t } = useLanguage();

  const profilePoints = [
    t('about.profile.1'),
    t('about.profile.2'),
    t('about.profile.3'),
  ];

  const education = [
    t('about.education.1'),
    t('about.education.2'),
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('about.title')}
            </h2>
            <h3 className="text-xl md:text-2xl text-muted-foreground mb-8">
              {t('about.subtitle')}
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Professional Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src={blasPortrait}
                  alt="Blas Chiaretta - Financial Advisor"
                  className="w-80 h-80 object-cover rounded-lg shadow-premium"
                />
                <div className="absolute inset-0 bg-gradient-premium opacity-10 rounded-lg" />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              {/* Description */}
              <p className="text-lg text-foreground/80 leading-relaxed">
                {t('about.description')}
              </p>

              {/* Profile Points */}
              <div className="space-y-4">
                {profilePoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                    <p className="text-lg font-medium text-foreground leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Education */}
              <Card className="border border-border/50 shadow-elegant">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-primary mb-4">
                    {t('about.education.title')}
                  </h4>
                  <div className="space-y-3">
                    {education.map((edu, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-foreground/80 leading-relaxed">
                          {edu}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.advisory': 'Advisory',
    'nav.portfolio': 'Portfolio Management',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Premium Financial Advisory',
    'hero.subtitle': 'Blas Chiaretta',
    'hero.description': 'Senior business consultant with extensive experience in Banking and Energy sectors. Delivering personalized financial strategies for discerning clients worldwide.',
    'hero.cta.primary': 'Schedule Consultation',
    'hero.cta.secondary': 'View Services',
    
    // Advisory Section
    'advisory.title': 'Financial Advisory',
    'advisory.subtitle': 'Expert Consultation Services',
    'advisory.description': 'Targeted financial and business consultancy for specific challenges. Get expert guidance on strategic decisions with personalized advisory sessions.',
    'advisory.features.1': 'Strategic Financial Planning',
    'advisory.features.2': 'Business Decision Support',
    'advisory.features.3': 'Investment Strategy Consultation',
    'advisory.features.4': 'Risk Assessment & Management',
    
    // Portfolio Management Section
    'portfolio.title': 'Portfolio Management',
    'portfolio.subtitle': 'Comprehensive Wealth Management',
    'portfolio.description': 'Complete analysis and study of client goals, creating exclusive personalized strategies. A thorough understanding of your current situation, objectives, and aspirations to maximize asset growth.',
    'portfolio.personalized.title': 'Fully Personalized Service',
    'portfolio.personalized.description': 'Every portfolio strategy is uniquely crafted after comprehensive analysis of your financial situation, risk tolerance, and long-term objectives.',
    'portfolio.performance.title': 'Performance Fee Structure',
    'portfolio.performance.description': 'Aligned interests - I only earn when you earn. This fee structure ensures your portfolio is protected and my focus remains on maximizing your returns.',
    'portfolio.features.1': 'Complete Client Profile Analysis',
    'portfolio.features.2': 'Custom Investment Strategies',
    'portfolio.features.3': 'Ongoing Portfolio Optimization',
    'portfolio.features.4': 'Performance-Based Fee Structure',
    
    // About Section
    'about.title': 'About Blas Chiaretta',
    'about.subtitle': 'Professional Excellence',
    'about.description': 'I am a senior business consultant with extensive experience in Banking as well as the Energy Sectors. A global profile with extensive cross-cultural experience in multiple geographies, adaptable, and capable of effectively adjusting to any situation or challenge.',
    'about.profile.1': 'Flexible and quick learner, focused and committed',
    'about.profile.2': 'Great team player with outstanding interpersonal skills',
    'about.profile.3': 'Thrives under pressure with analytical approach',
    'about.education.title': 'Education',
    'about.education.1': 'Universidad Torcuato Di Tella - Business Economics Degree',
    'about.education.2': 'UPF Barcelona School of Management - Master in Finance and Banking',
    
    // Contact Section
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Schedule Your Consultation',
    'contact.description': 'Ready to take your financial strategy to the next level? Contact me for a personalized consultation.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.location': 'Worldwide Services',
    'contact.email': 'blas.chiaretta@gmail.com',
  },
  es: {
    // Navigation
    'nav.advisory': 'Consultoría',
    'nav.portfolio': 'Gestión de Portafolio',
    'nav.about': 'Acerca De',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Asesoría Financiera Premium',
    'hero.subtitle': 'Blas Chiaretta',
    'hero.description': 'Consultor senior de negocios con amplia experiencia en sectores Bancarios y Energéticos. Brindando estrategias financieras personalizadas para clientes exigentes en todo el mundo.',
    'hero.cta.primary': 'Agendar Consulta',
    'hero.cta.secondary': 'Ver Servicios',
    
    // Advisory Section
    'advisory.title': 'Consultoría Financiera',
    'advisory.subtitle': 'Servicios de Consulta Experta',
    'advisory.description': 'Consultoría financiera y empresarial dirigida para desafíos específicos. Obtén orientación experta en decisiones estratégicas con sesiones de asesoría personalizadas.',
    'advisory.features.1': 'Planificación Financiera Estratégica',
    'advisory.features.2': 'Apoyo en Decisiones Empresariales',
    'advisory.features.3': 'Consultoría en Estrategia de Inversión',
    'advisory.features.4': 'Evaluación y Gestión de Riesgos',
    
    // Portfolio Management Section
    'portfolio.title': 'Gestión de Portafolio',
    'portfolio.subtitle': 'Gestión Integral de Patrimonio',
    'portfolio.description': 'Análisis y estudio completo de los objetivos del cliente, creando estrategias personalizadas exclusivas. Un entendimiento profundo de tu situación actual, objetivos y aspiraciones para maximizar el crecimiento de activos.',
    'portfolio.personalized.title': 'Servicio Completamente Personalizado',
    'portfolio.personalized.description': 'Cada estrategia de portafolio se crea únicamente después de un análisis integral de tu situación financiera, tolerancia al riesgo y objetivos a largo plazo.',
    'portfolio.performance.title': 'Estructura de Comisión por Rendimiento',
    'portfolio.performance.description': 'Intereses alineados - solo gano cuando tú ganas. Esta estructura de comisiones asegura que tu portafolio esté protegido y mi enfoque se mantenga en maximizar tus retornos.',
    'portfolio.features.1': 'Análisis Completo del Perfil del Cliente',
    'portfolio.features.2': 'Estrategias de Inversión Personalizadas',
    'portfolio.features.3': 'Optimización Continua del Portafolio',
    'portfolio.features.4': 'Estructura de Comisiones Basada en Rendimiento',
    
    // About Section
    'about.title': 'Acerca de Blas Chiaretta',
    'about.subtitle': 'Excelencia Profesional',
    'about.description': 'Soy un consultor senior de negocios con amplia experiencia en sectores Bancarios y Energéticos. Un perfil global con extensa experiencia intercultural en múltiples geografías, adaptable y capaz de ajustarme efectivamente a cualquier situación o desafío.',
    'about.profile.1': 'Flexible y de rápido aprendizaje, enfocado y comprometido',
    'about.profile.2': 'Gran jugador de equipo con habilidades interpersonales excepcionales',
    'about.profile.3': 'Prospera bajo presión con enfoque analítico',
    'about.education.title': 'Educación',
    'about.education.1': 'Universidad Torcuato Di Tella - Licenciatura en Economía Empresarial',
    'about.education.2': 'UPF Barcelona School of Management - Máster en Finanzas y Banca',
    
    // Contact Section
    'contact.title': 'Contáctame',
    'contact.subtitle': 'Agenda Tu Consulta',
    'contact.description': '¿Listo para llevar tu estrategia financiera al siguiente nivel? Contáctame para una consulta personalizada.',
    'contact.form.name': 'Nombre Completo',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.subject': 'Asunto',
    'contact.form.message': 'Mensaje',
    'contact.form.submit': 'Enviar Mensaje',
    'contact.location': 'Servicios Mundiales',
    'contact.email': 'blas.chiaretta@gmail.com',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
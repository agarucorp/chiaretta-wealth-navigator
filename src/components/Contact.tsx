import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MessageSquare, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
<<<<<<< HEAD
=======
import whatsappIcon from '@/assets/WhatsApp.png';
import emailjs from '@emailjs/browser';
import { Skeleton } from '@/components/ui/skeleton';
>>>>>>> c6bd19b948b408a0c103e038e9946b518ab8267b

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const validate = (field: string, value: string) => {
    switch (field) {
      case 'name':
        return value.trim() ? '' : 'El nombre es obligatorio.';
      case 'email':
        if (!value.trim()) return 'El email es obligatorio.';
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Email inválido.';
      case 'subject':
        return value ? '' : 'Elija un asunto.';
      case 'message':
        return value.trim() ? '' : 'El mensaje es obligatorio.';
      default:
        return '';
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (touched[name as keyof typeof touched]) {
      setErrors(prev => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      );
      toast({
        title: 'Mensaje enviado',
        description: 'Gracias por tu consulta. Te responderé pronto.',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: 'Error al enviar',
        description: 'Hubo un problema al enviar el mensaje. Intenta nuevamente.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleEmail = () => {
    window.open('mailto:blas.chiaretta@gmail.com', '_blank');
  };

  const handleLinkedIn = () => {
    // You would replace this with the actual LinkedIn profile URL
    window.open('https://linkedin.com/in/blas-chiaretta', '_blank');
  };

  const isFormValid =
    formData.name.trim() &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.subject &&
    formData.message.trim() &&
    !errors.name &&
    !errors.email &&
    !errors.subject &&
    !errors.message;

  return (
    <section id="contact" className="py-20" style={{ background: '#f3f4f8' }}>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              {t('contact.title')}
            </h2>
            <h3 className="text-xl md:text-2xl text-muted-foreground mb-8">
              {t('contact.subtitle')}
            </h3>
            <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: '#4a5568' }}>
              {t('contact.description')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-transparent">
            <div className="relative mb-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className="block w-full bg-transparent border-0 border-b-2 border-[#b0b8c9] focus:border-[#60aaff] text-sm font-light px-0 pt-6 pb-2 transition-all duration-300 focus:outline-none text-[#1a237e]"
                placeholder=" "
                autoComplete="off"
                id="contact-name"
              />
              <label htmlFor="contact-name" className={`absolute left-0 top-4 text-[#7a869a] text-sm font-light pointer-events-none transition-all duration-300 ${formData.name ? 'text-xs -top-1 text-[#60aaff]' : 'text-sm top-4'}`}>{t('contact.form.name')}</label>
              {touched.name && errors.name && (
                <span className="text-xs text-red-500 mt-1 block">{errors.name}</span>
              )}
            </div>
            <div className="relative mb-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className="block w-full bg-transparent border-0 border-b-2 border-[#b0b8c9] focus:border-[#60aaff] text-sm font-light px-0 pt-6 pb-2 transition-all duration-300 focus:outline-none text-[#1a237e]"
                placeholder=" "
                autoComplete="off"
                id="contact-email"
              />
              <label htmlFor="contact-email" className={`absolute left-0 top-4 text-[#7a869a] text-sm font-light pointer-events-none transition-all duration-300 ${formData.email ? 'text-xs -top-1 text-[#60aaff]' : 'text-sm top-4'}`}>{t('contact.form.email')}</label>
              {touched.email && errors.email && (
                <span className="text-xs text-red-500 mt-1 block">{errors.email}</span>
              )}
            </div>
            <div className="relative mb-2">
              <div className="relative">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="block w-full bg-transparent border-0 border-b-2 border-[#b0b8c9] focus:border-[#60aaff] text-sm font-light px-0 pt-6 pb-2 transition-all duration-300 focus:outline-none appearance-none pr-8 text-[#1a237e]"
                  id="contact-subject"
                >
                  <option value="" disabled hidden></option>
                  <option value="Advisory">Advisory</option>
                  <option value="Portfolio Management">Portfolio Management</option>
                </select>
                <svg className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7a869a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                <label htmlFor="contact-subject" className={`absolute left-0 top-4 text-[#7a869a] text-sm font-light pointer-events-none transition-all duration-300 ${formData.subject ? 'text-xs -top-1 text-[#60aaff]' : 'text-sm top-4'}`}>{t('contact.form.subject')}</label>
                {touched.subject && errors.subject && (
                  <span className="text-xs text-red-500 mt-1 block">{errors.subject}</span>
                )}
              </div>
            </div>
            <div className="relative mb-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                className="block w-full bg-transparent border-0 border-b-2 border-[#b0b8c9] focus:border-[#60aaff] text-sm font-light px-0 pt-6 pb-2 transition-all duration-300 focus:outline-none min-h-24 resize-none text-[#1a237e]"
                placeholder=" "
                id="contact-message"
              />
              <label htmlFor="contact-message" className={`absolute left-0 top-4 text-[#7a869a] text-sm font-light pointer-events-none transition-all duration-300 ${formData.message ? 'text-xs -top-1 text-[#60aaff]' : 'text-sm top-4'}`}>{t('contact.form.message')}</label>
              {touched.message && errors.message && (
                <span className="text-xs text-red-500 mt-1 block">{errors.message}</span>
              )}
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full h-10 text-base font-semibold bg-[#1a237e] text-white rounded-lg shadow-none hover:bg-[#223399] transition-all duration-200"
              disabled={loading || !isFormValid}
            >
              {loading ? (
                <svg className="animate-spin h-6 w-6 mx-auto text-[#60aaff]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#60aaff" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="#1a237e" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                </svg>
              ) : (
                t('contact.form.submit')
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
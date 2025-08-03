import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MessageSquare, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. I will get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleEmail = () => {
    window.open('mailto:blas.chiaretta@gmail.com', '_blank');
  };

  const handleLinkedIn = () => {
    // You would replace this with the actual LinkedIn profile URL
    window.open('https://linkedin.com/in/blas-chiaretta', '_blank');
  };

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
                required
                className="block w-full bg-transparent border-0 border-b-2 border-[#b0b8c9] focus:border-[#60aaff] text-sm font-light px-0 pt-6 pb-2 transition-all duration-300 focus:outline-none text-[#1a237e]"
                placeholder=" "
                autoComplete="off"
                id="contact-name"
              />
              <label htmlFor="contact-name" className={`absolute left-0 top-4 text-[#7a869a] text-sm font-light pointer-events-none transition-all duration-300 ${formData.name ? 'text-xs -top-1.5 text-[#60aaff]' : 'text-sm top-4'}`}>{t('contact.form.name')}</label>
            </div>
            <div className="relative mb-2">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full bg-transparent border-0 border-b-2 border-[#b0b8c9] focus:border-[#60aaff] text-sm font-light px-0 pt-6 pb-2 transition-all duration-300 focus:outline-none text-[#1a237e]"
                placeholder=" "
                autoComplete="off"
                id="contact-email"
              />
              <label htmlFor="contact-email" className={`absolute left-0 top-4 text-[#7a869a] text-sm font-light pointer-events-none transition-all duration-300 ${formData.email ? 'text-xs -top-1.5 text-[#60aaff]' : 'text-sm top-4'}`}>{t('contact.form.email')}</label>
            </div>
            <div className="relative mb-2">
              <div className="relative">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="block w-full bg-transparent border-0 border-b-2 border-[#b0b8c9] focus:border-[#60aaff] text-sm font-light px-0 pt-6 pb-2 transition-all duration-300 focus:outline-none appearance-none pr-8 text-[#1a237e]"
                  id="contact-subject"
                >
                  <option value="" disabled hidden></option>
                  <option value="Advisory">Advisory</option>
                  <option value="Portfolio Management">Portfolio Management</option>
                </select>
                <svg className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 text-[#7a869a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>
                <label htmlFor="contact-subject" className={`absolute left-0 top-4 text-[#7a869a] text-sm font-light pointer-events-none transition-all duration-300 ${formData.subject ? 'text-xs -top-1.5 text-[#60aaff]' : 'text-sm top-4'}`}>{t('contact.form.subject')}</label>
              </div>
            </div>
            <div className="relative mb-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="block w-full bg-transparent border-0 border-b-2 border-[#b0b8c9] focus:border-[#60aaff] text-sm font-light px-0 pt-6 pb-2 transition-all duration-300 focus:outline-none min-h-24 resize-none text-[#1a237e]"
                placeholder=" "
                id="contact-message"
              />
              <label htmlFor="contact-message" className={`absolute left-0 top-4 text-[#7a869a] text-sm font-light pointer-events-none transition-all duration-300 ${formData.message ? 'text-xs -top-1.5 text-[#60aaff]' : 'text-sm top-4'}`}>{t('contact.form.message')}</label>
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full h-10 text-base font-semibold bg-[#1a237e] text-white rounded-lg shadow-none hover:bg-[#223399] transition-all duration-200"
            >
              {t('contact.form.submit')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
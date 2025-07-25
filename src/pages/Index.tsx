import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Advisory from '@/components/Advisory';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        {/* Premium Cards Section */}
        <section className="w-full py-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="bg-gradient-to-l from-[#f3f4f8] to-[#fff] rounded-none p-8 flex flex-col items-center text-center min-h-[375px]">
                <span className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#60aaff] to-[#1a237e]">
                  {/* Icono gráfico premium */}
                  <svg width="40" height="40" fill="none" viewBox="0 0 32 32">
                    <rect x="7" y="17" width="3" height="8" rx="1.5" fill="#fff"/>
                    <rect x="14" y="12" width="3" height="13" rx="1.5" fill="#fff"/>
                    <rect x="21" y="7" width="3" height="18" rx="1.5" fill="#fff"/>
                  </svg>
                </span>
                <h3 className="text-xl font-bold mb-2 max-w-[240px] mx-auto" style={{ color: '#1a237e', fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>Financial Consulting & Guidance</h3>
                <p className="max-w-xs mx-auto mt-6" style={{ color: '#1a237e', fontFamily: 'Roboto, sans-serif' }}>Receive expert, focused advice for your specific financial questions and challenges. Get clear, actionable insights to make informed decisions.</p>
              </div>
              {/* Card 2 */}
              <div className="bg-gradient-to-l from-[#f3f4f8] to-[#fff] rounded-none p-8 flex flex-col items-center text-center min-h-[375px]">
                <span className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#60aaff] to-[#1a237e]">
                  {/* Icono portafolio premium */}
                  <svg width="40" height="40" fill="none" viewBox="0 0 32 32">
                    <rect x="6" y="12" width="20" height="12" rx="2" fill="#fff"/>
                    <rect x="12" y="8" width="8" height="4" rx="2" fill="#fff"/>
                    <rect x="10" y="16" width="12" height="2" rx="1" fill="#60aaff"/>
                  </svg>
                </span>
                <h3 className="text-xl font-bold mb-2 max-w-xs mx-auto" style={{ color: '#1a237e', fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>Personalized Wealth Management</h3>
                <p className="max-w-xs mx-auto mt-6" style={{ color: '#1a237e', fontFamily: 'Roboto, sans-serif' }}>Bespoke investment strategies designed around your unique goals, risk tolerance, and long-term financial objectives.</p>
              </div>
              {/* Card 3 */}
              <div className="bg-gradient-to-l from-[#f3f4f8] to-[#fff] rounded-none p-8 flex flex-col items-center text-center min-h-[375px]">
                <span className="mb-6 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#60aaff] to-[#1a237e]">
                  {/* Icono apretón de manos premium */}
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 25c1.5 2 4.5 4 7 2l2-2 2 2c2.5 2 5.5 0 7-2l2-2c1-1 1-3 0-4l-7-7c-1-1-3-1-4 0l-7 7c-1 1-1 3 0 4l2 2z" fill="#fff"/>
                    <path d="M15 20l5 5 5-5" stroke="#60aaff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <h3 className="text-xl font-bold mb-2 max-w-[220px] mx-auto" style={{ color: '#1a237e', fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>Performance-Aligned Partnership</h3>
                <p className="max-w-xs mx-auto mt-6" style={{ color: '#1a237e', fontFamily: 'Roboto, sans-serif' }}>My compensation is tied to your success. With a performance-fee model, our interests are fully aligned to maximize your returns.</p>
              </div>
            </div>
          </div>
        </section>
        <About />
        <div className="w-full bg-[linear-gradient(180deg,_#fff_0%,_#f7f8fa_10%,_#232849_70%,_#15182a_100%)]">
          <Advisory />
          <Portfolio />
        </div>
        <Contact />
        <footer className="w-full pt-12 pb-6" style={{ background: 'rgba(30,35,65,1)', color: '#fff', fontFamily: 'Public Sans, sans-serif' }}>
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 border-b border-white/10 pb-10">
              {/* Logo & Name */}
              <div className="flex-1 mb-8 md:mb-0 flex flex-col items-start">
                <div className="flex items-center mb-4">
                  <img 
                    src="/blas-logo.png" 
                    alt="Blas Chiaretta Logo" 
                    className="h-12 w-auto"
                  />
                </div>
                <p className="text-sm text-white/70 max-w-xs">Premium financial advisory and tailored asset management for discerning clients worldwide.</p>
              </div>
              {/* Navigation */}
              <div className="flex-1 mb-8 md:mb-0">
                <h4 className="text-lg font-semibold mb-4">Navigation</h4>
                <ul className="space-y-2 text-white/90">
                  <li><a href="#advisory" className="hover:underline">Financial Advisory</a></li>
                  <li><a href="#portfolio" className="hover:underline">Portfolio Management</a></li>
                  <li><a href="#about" className="hover:underline">About</a></li>
                  <li><a href="#contact" className="hover:underline">Contact</a></li>
                </ul>
              </div>
              {/* Contact */}
              <div className="flex-1 mb-8 md:mb-0">
                <h4 className="text-lg font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-white/90">
                  <li>Email: <a href="mailto:blas.chiaretta@gmail.com" className="hover:underline">blas.chiaretta@gmail.com</a></li>
                  <li>Location: Worldwide Services</li>
                </ul>
              </div>
              {/* Social */}
              <div className="flex-1 flex flex-col items-start">
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/blas-chiaretta-20474a5a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
                  </a>
                  <a href="mailto:blas.chiaretta@gmail.com" className="hover:text-blue-400 transition-colors">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.985-8.065h23.97l-11.985 8.065zm-12-7.065v14h24v-14l-12 8.065-12-8.065z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-6 text-center text-xs text-white/50">
              <span>&copy; {new Date().getFullYear()} Blas Chiaretta. All rights reserved. Premium Financial Advisory.</span>
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default Index;

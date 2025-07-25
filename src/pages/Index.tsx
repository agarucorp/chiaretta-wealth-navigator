import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Advisory from '@/components/Advisory';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Contact from '@/components/Contact';
import handshakeIcon from '@/assets/handshake.svg';
import linkedinIcon from '@/assets/linkedin.svg';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        {/* Premium Cards Section */}
        <section className="w-full pt-24 pb-12 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto">
              {/* Card 1 */}
              <div className="bg-gradient-to-l from-[#f3f4f8] to-[#fff] rounded-none p-8 pt-24 flex flex-col items-center text-center min-h-[375px] relative group">
                <span className="perspective flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#1428ff] to-[#60aaff] absolute left-1/2 -translate-x-1/2 -top-12 z-10 group">
                  {/* Icono gráfico premium */}
                  <svg width="40" height="40" fill="none" viewBox="0 0 32 32" className="spin-360-hover">
                    <rect x="7" y="17" width="3" height="8" rx="1.5" fill="#fff"/>
                    <rect x="14" y="12" width="3" height="13" rx="1.5" fill="#fff"/>
                    <rect x="21" y="7" width="3" height="18" rx="1.5" fill="#fff"/>
                  </svg>
                </span>
                <h3 className="text-xl font-bold mb-2 max-w-[240px] mx-auto" style={{ color: '#1a237e', fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>Financial Consulting & Guidance</h3>
                <p className="max-w-[240px] mx-auto mt-6" style={{ color: '#1a237e', fontFamily: 'Roboto, sans-serif' }}>Receive expert, focused advice for your specific financial questions and challenges. Get clear, actionable insights to make informed decisions.</p>
              </div>
              {/* Card 2 */}
              <div className="bg-gradient-to-l from-[#f3f4f8] to-[#fff] rounded-none p-8 pt-24 flex flex-col items-center text-center min-h-[375px] relative group">
                <span className="perspective flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#1428ff] to-[#60aaff] absolute left-1/2 -translate-x-1/2 -top-12 z-10 group">
                  {/* Icono portafolio premium */}
                  <svg width="40" height="40" fill="none" viewBox="0 0 32 32" className="spin-360-hover">
                    <rect x="6" y="12" width="20" height="12" rx="2" fill="#fff"/>
                    <rect x="12" y="8" width="8" height="4" rx="2" fill="#fff"/>
                    <rect x="10" y="16" width="12" height="2" rx="1" fill="#60aaff"/>
                  </svg>
                </span>
                <h3 className="text-xl font-bold mb-2 max-w-[240px] mx-auto" style={{ color: '#1a237e', fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>Personalized Wealth Management</h3>
                <p className="max-w-[240px] mx-auto mt-6" style={{ color: '#1a237e', fontFamily: 'Roboto, sans-serif' }}>Bespoke investment strategies designed around your unique goals, risk tolerance, and long-term financial objectives.</p>
              </div>
              {/* Card 3 */}
              <div className="bg-gradient-to-l from-[#f3f4f8] to-[#fff] rounded-none p-8 pt-24 flex flex-col items-center text-center min-h-[375px] relative group">
                <span className="perspective flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#1428ff] to-[#60aaff] absolute left-1/2 -translate-x-1/2 -top-12 z-10 group">
                  <img src={handshakeIcon} alt="Handshake" className="w-7 h-7 object-contain spin-360-hover" />
                </span>
                <h3 className="text-xl font-bold mb-2 max-w-[240px] mx-auto" style={{ color: '#1a237e', fontFamily: 'Poppins, sans-serif', fontWeight: 800 }}>Performance-Aligned Partnership</h3>
                <p className="max-w-[240px] mx-auto mt-6" style={{ color: '#1a237e', fontFamily: 'Roboto, sans-serif' }}>My compensation is tied to your success. With a performance-fee model, our interests are fully aligned to maximize your returns.</p>
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
                  <a href="https://linkedin.com/in/blas-chiaretta" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                    <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 object-contain" />
                  </a>
                  <a href="mailto:blas.chiaretta@gmail.com" className="hover:text-blue-400 transition-colors">
                    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-11.985-8.065h23.97l-11.985 8.065zm-12-7.065v14h24v-14l-12 8.065-12-8.065z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-6 text-center text-xs text-white/50">
              <a href="https://www.agarucorp.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">Powered by AgaruCorp</a>
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default Index;

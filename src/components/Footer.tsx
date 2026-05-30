import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight, Heart } from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', path: '/about' },
    { label: 'Leadership Team', path: '/about#team' },
    { label: 'Careers', path: '/careers' },
    { label: 'Press & Media', path: '/blog' },
    { label: 'Contact Us', path: '/contact' },
  ],
  services: [
    { label: 'Digital Rehabilitation', path: '/services#digital-rehab' },
    { label: 'Physical Therapy', path: '/services#physical-therapy' },
    { label: 'Telehealth Programs', path: '/services#telehealth' },
    { label: 'Patient Monitoring', path: '/services#monitoring' },
    { label: 'Wellness Programs', path: '/services#wellness' },
  ],
  resources: [
    { label: 'Blog & Insights', path: '/blog' },
    { label: 'Healthcare Technology', path: '/technology' },
    { label: 'For Providers', path: '/providers' },
    { label: 'Success Stories', path: '/success-stories' },
    { label: 'Book Appointment', path: '/book-appointment' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white">
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="container-custom py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-3xl font-bold tracking-tight mb-2">Ready to Transform Patient Care?</h3>
              <p className="text-white/60 text-lg">Join 500+ healthcare providers using Reflexion Health.</p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <Link to="/book-appointment">
                <button className="btn-primary">
                  Book a Consultation
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn-secondary">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0F6FFF] to-[#00D1B2] flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M11 2 L11 11 M6 6.5 L16 6.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                  <circle cx="11" cy="16" r="4" stroke="white" strokeWidth="2" fill="none"/>
                  <path d="M4 19 Q7.5 14 11 16 Q14.5 18 18 13" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">Reflexion<span className="text-[#0F6FFF]">Health</span></span>
            </Link>
            <p className="text-white/60 leading-relaxed mb-6 text-sm">
              Transforming rehabilitation through advanced digital healthcare solutions. 
              Helping patients recover faster and live better lives across the United States.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-white/60">
                <MapPin size={16} className="text-[#00D1B2] mt-0.5 flex-shrink-0" />
                <span>225 Broadway, San Diego, CA 92101, United States</span>
              </div>
              <a href="tel:+16195504500" className="flex items-center gap-3 text-white/60 hover:text-[#0F6FFF] transition-colors">
                <Phone size={16} className="text-[#00D1B2] flex-shrink-0" />
                +1 619-550-4500
              </a>
              <a href="mailto:info@reflexionhealth.com" className="flex items-center gap-3 text-white/60 hover:text-[#0F6FFF] transition-colors">
                <Mail size={16} className="text-[#00D1B2] flex-shrink-0" />
                info@reflexionhealth.com
              </a>
            </div>
            <div className="flex gap-3 mt-8">
              {['𝕏', 'in', 'f', '📸'].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#0F6FFF] border border-white/10 hover:border-[#0F6FFF] flex items-center justify-center transition-all duration-300 group text-xs font-bold"
                >
                  <span className="text-white/60 group-hover:text-white transition-colors">{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/50 hover:text-[#0F6FFF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/50 hover:text-[#0F6FFF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-5 tracking-wide uppercase">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-sm text-white/50 hover:text-[#0F6FFF] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Reflexion Health. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-white/40 text-sm">
              Made with <Heart size={12} className="text-red-400 mx-1" fill="currentColor" /> in San Diego, CA
            </div>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a key={item} href="#" className="text-white/40 text-sm hover:text-white/60 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

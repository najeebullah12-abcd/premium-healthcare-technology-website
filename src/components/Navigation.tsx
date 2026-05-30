import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, ArrowRight } from 'lucide-react';

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      { label: 'Digital Rehabilitation', path: '/services#digital-rehab' },
      { label: 'Physical Therapy', path: '/services#physical-therapy' },
      { label: 'Telehealth Programs', path: '/services#telehealth' },
      { label: 'Patient Monitoring', path: '/services#monitoring' },
      { label: 'Wellness Programs', path: '/services#wellness' },
      { label: 'Recovery Management', path: '/services#recovery' },
    ]
  },
  { label: 'Technology', path: '/technology' },
  { label: 'Success Stories', path: '/success-stories' },
  { label: 'For Providers', path: '/providers' },
  { label: 'Blog', path: '/blog' },
  { label: 'Careers', path: '/careers' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navBg = isScrolled
    ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-gray-100'
    : isHomePage
    ? 'bg-transparent'
    : 'bg-white/95 backdrop-blur-xl border-b border-gray-100';

  const linkClass = isScrolled || !isHomePage ? 'nav-link-dark' : 'nav-link';
  const logoColor = isScrolled || !isHomePage ? 'text-[#0B1F3A]' : 'text-white';
  const logoAccent = 'text-[#0F6FFF]';

  return (
    <>
      <nav className={`sticky-nav ${navBg}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#0F6FFF] to-[#00D1B2] opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 2 L11 11 M6 6.5 L16 6.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                    <circle cx="11" cy="16" r="4" stroke="white" strokeWidth="2" fill="none"/>
                    <path d="M4 19 Q7.5 14 11 16 Q14.5 18 18 13" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              <div>
                <span className={`text-lg font-bold tracking-tight ${logoColor} transition-colors`}>
                  Reflexion<span className={logoAccent}>Health</span>
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        className={`${linkClass} flex items-center gap-1 bg-transparent border-none cursor-pointer`}
                      >
                        {item.label}
                        <ChevronDown size={14} className={`transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white rounded-2xl shadow-xl shadow-black/10 border border-gray-100 py-2 z-50"
                          >
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.label}
                                to={sub.path}
                                className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 hover:text-[#0F6FFF] hover:bg-blue-50/50 transition-colors"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#0F6FFF] opacity-60" />
                                {sub.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link to={item.path} className={linkClass}>
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+16195504500" className={`flex items-center gap-2 text-sm font-medium ${isScrolled || !isHomePage ? 'text-gray-600' : 'text-white/80'} hover:text-[#0F6FFF] transition-colors`}>
                <Phone size={14} />
                +1 619-550-4500
              </a>
              <Link to="/book-appointment">
                <button className="btn-primary text-sm py-2.5 px-5">
                  Schedule a Demo
                  <ArrowRight size={14} />
                </button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className={`lg:hidden p-2 rounded-xl ${isScrolled || !isHomePage ? 'text-gray-800' : 'text-white'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-50 bg-white lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <Link to="/" className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0F6FFF] to-[#00D1B2] flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
                      <path d="M11 2 L11 11 M6 6.5 L16 6.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                      <circle cx="11" cy="16" r="4" stroke="white" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <span className="text-lg font-bold text-[#0B1F3A]">Reflexion<span className="text-[#0F6FFF]">Health</span></span>
                </Link>
                <button onClick={() => setMobileOpen(false)} className="p-2 text-gray-500">
                  <X size={22} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto py-6 px-6 space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <Link
                      to={item.path}
                      className="block py-3 px-4 text-gray-700 font-medium rounded-xl hover:bg-blue-50 hover:text-[#0F6FFF] transition-colors"
                    >
                      {item.label}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.label}
                            to={sub.path}
                            className="block py-2 px-4 text-sm text-gray-500 hover:text-[#0F6FFF] transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="p-6 border-t border-gray-100 space-y-3">
                <a href="tel:+16195504500" className="flex items-center gap-2 text-gray-600 font-medium">
                  <Phone size={16} />
                  +1 619-550-4500
                </a>
                <Link to="/book-appointment" className="block">
                  <button className="btn-primary w-full justify-center">
                    Schedule a Demo
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

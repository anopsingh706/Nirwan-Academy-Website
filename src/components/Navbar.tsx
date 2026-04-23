import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Courses', path: '/courses' },
  { name: 'Faculty', path: '/faculty' },
  { name: 'Results', path: '/results' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-[#1E3A8A] text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <i className="fas fa-phone-alt text-[#D97706]"></i>
              <a href="tel:7891387813" className="hover:text-[#D97706] transition-colors">+91 7891387813</a>
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fas fa-envelope text-[#D97706]"></i>
              <a href="mailto:anops706@gmail.com" className="hover:text-[#D97706] transition-colors">anops706@gmail.com</a>
            </span>
            <span className="flex items-center gap-1.5">
              <i className="fas fa-map-marker-alt text-[#D97706]"></i>
              Mundiya Jamalpur, Malakhera, Alwar, Rajasthan
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://wa.me/917891387813" target="_blank" rel="noreferrer" className="hover:text-[#25D366] transition-colors"><i className="fab fa-whatsapp"></i></a>
            <a href="#" className="hover:text-[#1877F2] transition-colors"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="hover:text-[#E1306C] transition-colors"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-[#FF0000] transition-colors"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3">
            <img
              src="/logo.png"
              alt="Nirwan Academy"
              className="h-10 w-10 sm:h-14 sm:w-14 object-contain"
            />
            {/* Name + Tagline — always visible */}
            <div className="flex flex-col justify-center">
              <h1 className="text-[13px] sm:text-xl font-extrabold text-[#1E3A8A] font-['Playfair_Display'] leading-tight tracking-wide">
                NIRWAN ACADEMY
              </h1>
              <p className="text-[8px] sm:text-[10px] text-[#D97706] font-semibold tracking-widest uppercase leading-tight mt-0.5">
                <span className="hidden sm:inline">Educating for Excellence • </span>Since 2007
              </p>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  location.pathname === link.path
                    ? 'text-[#1E3A8A] bg-blue-50'
                    : 'text-gray-700 hover:text-[#1E3A8A] hover:bg-blue-50'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span className="block h-0.5 bg-gradient-to-r from-[#1E3A8A] to-[#D97706] rounded mt-0.5"></span>
                )}
              </Link>
            ))}
          </div>

          {/* ── CTA + Hamburger ── */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Apply Now — smaller on mobile, normal on sm+ */}
            <Link
              to="/admissions"
              className="btn-primary !flex !items-center !justify-center !gap-1 !text-[9px] !py-1.5 !px-2 sm:!text-sm sm:!py-2.5 sm:!px-5"
            >
              <i className="fas fa-graduation-cap !text-[9px] sm:!text-sm"></i>
              <span>Apply Now</span>
            </Link>

            {/* Hamburger — only on mobile/tablet */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg text-[#1E3A8A] hover:bg-blue-50 transition-colors"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Overlay ── */}
      <div
        className={`mobile-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* ── Mobile Menu ── */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-[#1E3A8A]">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Nirwan Academy" className="h-12 w-12 object-contain" />
            <div>
              <h2 className="text-white font-bold text-sm font-['Playfair_Display']">NIRWAN ACADEMY</h2>
              <p className="text-[#D97706] text-[10px] font-semibold">Since 2007</p>
            </div>
          </div>
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white p-2 hover:bg-white/20 rounded-lg"
          >
            <i className="fas fa-times text-lg"></i>
          </button>
        </div>

        <div className="p-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-1 font-medium text-sm transition-all ${
                location.pathname === link.path
                  ? 'bg-[#1E3A8A] text-white'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-[#1E3A8A]'
              }`}
            >
              <i className={`fas fa-chevron-right text-xs ${location.pathname === link.path ? 'text-[#D97706]' : 'text-gray-400'}`}></i>
              {link.name}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <Link to="/admissions" className="btn-gold w-full justify-center text-sm">
              <i className="fas fa-graduation-cap"></i> Apply Now
            </Link>
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <a href="tel:7891387813" className="flex items-center gap-2 hover:text-[#1E3A8A]">
                <i className="fas fa-phone text-[#1E3A8A]"></i> +91 7891387813
              </a>
              <a href="mailto:anops706@gmail.com" className="flex items-center gap-2 hover:text-[#1E3A8A]">
                <i className="fas fa-envelope text-[#1E3A8A]"></i> anops706@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0f1f5c] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="Nirwan Academy" className="h-16 w-16 object-contain" />
              <div>
                <h3 className="font-['Playfair_Display'] font-bold text-xl text-white">NIRWAN ACADEMY</h3>
                <p className="text-[#D97706] text-xs font-semibold tracking-wider">MUNDIYA • SINCE 2007</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Premier coaching center for Jawahar Navodaya Vidyalaya & Sainik School entrance exams. Empowering rural students to achieve excellence since 2007.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/apsnirwan', color: '#1877F2' },
                { icon: 'fab fa-instagram', href: '#', color: '#E1306C' },
                { icon: 'fab fa-youtube', href: '#', color: '#FF0000' },
                { icon: 'fab fa-whatsapp', href: 'https://wa.me/917891387813', color: '#25D366' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: `${social.color}22`, border: `1px solid ${social.color}44` }}
                >
                  <i className={`${social.icon} text-sm`} style={{ color: social.color }}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-5 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#D97706] rounded"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Courses', path: '/courses' },
                { name: 'Our Faculty', path: '/faculty' },
                { name: 'Results & Achievements', path: '/results' },
                { name: 'Photo Gallery', path: '/gallery' },
                { name: 'Admissions 2025-26', path: '/admissions' },
                { name: 'Contact Us', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#D97706] text-sm flex items-center gap-2 transition-colors group"
                  >
                    <i className="fas fa-chevron-right text-[#D97706] text-xs group-hover:translate-x-1 transition-transform"></i>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-lg mb-5 relative inline-block">
              Our Courses
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#D97706] rounded"></span>
            </h4>
            <ul className="space-y-3">
              {[
                'JNV Class 6 Coaching',
                'JNV Class 9 Coaching',
                'Sainik School Prep',
                'Military School Entrance',
                'Higher Primary (Class 1-8)',
                'Physical Education',
                'Hostel Facility',
                'Bus Transport',
              ].map((course, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <i className="fas fa-star text-[#D97706] text-xs mt-1 flex-shrink-0"></i>
                  {course}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-5 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#D97706] rounded"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1E3A8A] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className="fas fa-map-marker-alt text-[#D97706] text-sm"></i>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Mundiya Jamalpur, Malakhera,<br />Alwar, Rajasthan - 301406
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1E3A8A] flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-phone text-[#D97706] text-sm"></i>
                </div>
                <a href="tel:7891387813" className="text-gray-300 hover:text-[#D97706] text-sm transition-colors">
                  +91 7891387813
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1E3A8A] flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-envelope text-[#D97706] text-sm"></i>
                </div>
                <a href="mailto:anops706@gmail.com" className="text-gray-300 hover:text-[#D97706] text-sm transition-colors">
                  anops706@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#1E3A8A] flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-clock text-[#D97706] text-sm"></i>
                </div>
                <div>
                  <p className="text-gray-300 text-sm">Mon – Sat: 6:00 AM – 8:00 PM</p>
                  <p className="text-gray-400 text-xs">Sunday: 8:00 AM – 12:00 PM</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-gray-300 mb-3 font-medium">Get Admission Updates</p>
              <div className="flex gap-2">
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 outline-none focus:border-[#D97706]"
                />
                <button className="bg-[#D97706] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#F59E0B] transition-colors">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} <span className="text-[#D97706] font-semibold">Nirwan Academy</span>. All Rights Reserved. Designed with ❤️ for Excellence.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <span className="hover:text-[#D97706] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-gray-600">|</span>
            <span className="hover:text-[#D97706] cursor-pointer transition-colors">Terms of Use</span>
            <span className="text-gray-600">|</span>
            <span className="hover:text-[#D97706] cursor-pointer transition-colors">Sitemap</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

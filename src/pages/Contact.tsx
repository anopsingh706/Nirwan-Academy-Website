import { useState } from 'react';
import { Link } from 'react-router-dom';
import EnquiryForm from '../components/EnquiryForm'


export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb mb-4">
            <Link to="/">Home</Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-white">Contact</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-['Playfair_Display'] mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            We're here to answer all your questions. Reach out to us and let's begin your child's journey to excellence!
          </p>
        </div>
      </div>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                icon: 'fas fa-map-marker-alt',
                title: 'Visit Us',
                lines: ['Mundiya Jamalpur, Malakhera', 'Alwar, Rajasthan - 301406'],
                color: '#1E3A8A',
                action: null,
              },
              {
                icon: 'fas fa-phone',
                title: 'Call Us',
                lines: ['+91 7891387813', 'Mon-Sat: 6 AM – 8 PM'],
                color: '#D97706',
                action: 'tel:7891387813',
              },
              {
                icon: 'fas fa-envelope',
                title: 'Email Us',
                lines: ['anops706@gmail.com', 'We respond within 24 hrs'],
                color: '#10B981',
                action: 'mailto:anops706@gmail.com',
              },
              {
                icon: 'fab fa-whatsapp',
                title: 'WhatsApp',
                lines: ['+91 7891387813', 'Quick response guaranteed'],
                color: '#25D366',
                action: 'https://wa.me/917891387813',
              },
            ].map((card, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4"
                  style={{ background: `linear-gradient(135deg, ${card.color}, ${card.color}cc)` }}
                >
                  <i className={card.icon}></i>
                </div>
                <h3 className="font-bold text-[#1E3A8A] text-lg mb-2">{card.title}</h3>
                {card.lines.map((line, j) => (
                  <p key={j} className={j === 0 ? 'text-gray-700 font-medium text-sm' : 'text-gray-500 text-xs mt-0.5'}>
                    {line}
                  </p>
                ))}
                {card.action && (
                  <a
                    href={card.action}
                    target={card.action.startsWith('https') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-semibold transition-colors hover:opacity-80"
                    style={{ color: card.color }}
                  >
                    Contact Now →
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Send an Enquiry</h2>
            <p className="text-gray-500 mb-6">Fill the form and we'll get back to you within 24 hours</p>
            <EnquiryForm />
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Form */}
            <div>
              <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">Send Message</p>
              <h2 className="section-title mb-4">Get in Touch</h2>
              <div className="gold-divider mb-6"></div>

              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-green-700 font-bold text-xl mb-2">Message Sent!</h3>
                    <p className="text-gray-600 text-sm">Our team will get back to you within 24 hours.</p>
                    <p className="text-[#1E3A8A] font-semibold mt-2">For urgent queries, call: <a href="tel:7891387813">+91 7891387813</a></p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1.5 block">Full Name *</label>
                        <input type="text" required value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="Your Name" className="form-input" />
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 mb-1.5 block">Phone Number *</label>
                        <input type="tel" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} placeholder="+91 XXXXX XXXXX" className="form-input" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email Address</label>
                      <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" className="form-input" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">Subject *</label>
                      <select required value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} className="form-input">
                        <option value="">Select Subject</option>
                        <option>Admission Inquiry</option>
                        <option>Course Information</option>
                        <option>Fee Structure</option>
                        <option>Hostel Inquiry</option>
                        <option>Career at Nirwan</option>
                        <option>General Query</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1.5 block">Message *</label>
                      <textarea rows={4} required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })} placeholder="Write your message here..." className="form-input resize-none" />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center py-3">
                      <i className="fas fa-paper-plane"></i> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Map + Info */}
            <div>
              <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">Location</p>
              <h2 className="section-title mb-4">Find Us on Map</h2>
              <div className="gold-divider mb-6"></div>

              <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 mb-6" style={{ height: '300px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56755.57!2d76.86!3d27.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db40b6bf65d2f%3A0x7a5f1c3456789abc!2sMalakhera%2C%20Rajasthan%20301406!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nirwan Academy Location"
                />
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-[#f8faff] to-[#eef2ff] rounded-2xl p-5 border border-blue-100">
                <h4 className="font-bold text-[#1E3A8A] mb-3 flex items-center gap-2">
                  <i className="fas fa-clock text-[#D97706]"></i> Office Hours
                </h4>
                <div className="space-y-2 text-sm">
                  {[
                    { day: 'Monday – Friday', time: '6:00 AM – 8:00 PM' },
                    { day: 'Saturday', time: '6:00 AM – 6:00 PM' },
                    { day: 'Sunday', time: '8:00 AM – 12:00 PM' },
                    { day: 'Emergency Contact', time: 'Anytime (WhatsApp)' },
                  ].map((h, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-gray-600">{h.day}</span>
                      <span className={`font-semibold ${i === 3 ? 'text-[#D97706]' : 'text-[#1E3A8A]'}`}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <a href="tel:7891387813" className="btn-primary justify-center text-sm py-3">
                  <i className="fas fa-phone"></i> Call Now
                </a>
                <a href="https://wa.me/917891387813" target="_blank" rel="noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-full font-semibold text-sm hover:bg-green-500 transition-colors">
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gradient-to-br from-[#f8faff] to-[#eef2ff]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="section-title mb-2">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'When does the new batch start?', a: 'New batches for JNV and Sainik School coaching start in April-May and October-November each year. Contact us for exact batch start dates.' },
              { q: 'Is hostel facility available for girls too?', a: 'Yes, we have separate hostel facilities for boys and girls with 24/7 warden supervision, CCTV monitoring, and proper security arrangements.' },
              { q: 'What is included in the hostel fee?', a: 'Hostel fee includes accommodation, 4 meals per day (breakfast, lunch, evening snacks, dinner), study room access, and basic amenities.' },
              { q: 'Is there any scholarship available?', a: 'Yes, we offer merit scholarships for top-performing students. SC/ST/OBC and BPL students also get fee concessions. Contact us for details.' },
              { q: 'How far is the academy from Alwar city?', a: 'Nirwan Academy is located in Mundiya Jamalpur, Malakhera, approximately 25-30 km from Alwar city. Our bus service covers many nearby villages.' },
            ].map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 group">
                <summary className="font-semibold text-[#1E3A8A] cursor-pointer list-none flex justify-between items-center text-sm">
                  {faq.q}
                  <i className="fas fa-chevron-down text-[#D97706] text-xs group-open:rotate-180 transition-transform"></i>
                </summary>
                <p className="text-gray-600 text-sm leading-relaxed mt-3 pt-3 border-t border-gray-100">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

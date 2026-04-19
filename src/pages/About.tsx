import { Link } from 'react-router-dom';

const milestones = [
  { year: '2007', title: 'Foundation', desc: 'Nirwan Academy established by Ajay Pratap with a vision to provide quality education to rural students.' },
  { year: '2010', title: 'First 100 Selections', desc: 'Achieved 100+ JNV selections, establishing reputation as top coaching center in Alwar.' },
  { year: '2013', title: 'Hostel Launch', desc: 'Launched premium hostel facility to accommodate students from distant villages.' },
  { year: '2016', title: 'Sainik School Added', desc: 'Expanded curriculum to include Sainik School and Military School entrance preparation.' },
  { year: '2019', title: 'Transport Facility', desc: 'Introduced bus transport covering 20+ villages for better accessibility.' },
  { year: '2024', title: '1200+ Total Selections', desc: 'Crossed 1200+ cumulative selections with 95% success rate in all categories.' },
];

const facilities = [
  { icon: '🏠', title: 'Premium Hostel', desc: 'Comfortable, safe dormitories with proper ventilation, clean washrooms, and 24/7 warden supervision.' },
  { icon: '🍽️', title: 'Nutritious Meals', desc: 'Fresh, hygienic, and balanced meals served 4 times daily including healthy breakfast, lunch, snacks & dinner.' },
  { icon: '🚌', title: 'Bus Transport', desc: 'Well-maintained bus fleet covering 20+ villages ensuring safe and timely transportation.' },
  { icon: '⚽', title: 'Sports & Games', desc: 'Dedicated sports ground with football, volleyball, kabaddi, and daily physical training exercises.' },
  { icon: '📚', title: 'Smart Classrooms', desc: 'Well-equipped classrooms with projectors, whiteboards, and modern learning materials.' },
  { icon: '📖', title: 'Library', desc: 'Rich library with 2000+ books covering all subjects, competitive exams, and general knowledge.' },
  { icon: '🔬', title: 'Science Lab', desc: 'Fully equipped science laboratory for practical learning and experiments.' },
  { icon: '💻', title: 'Computer Lab', desc: 'Modern computer lab providing basic computer education and digital literacy.' },
];

const values = [
  { icon: '🎯', title: 'Excellence', desc: 'We strive for academic excellence in everything we do.' },
  { icon: '🤝', title: 'Integrity', desc: 'We uphold the highest standards of honesty and transparency.' },
  { icon: '❤️', title: 'Care', desc: 'Every student is treated like family with personalized attention.' },
  { icon: '💪', title: 'Discipline', desc: 'We instill discipline as the foundation of all achievement.' },
];

export default function About() {
  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb mb-4">
            <Link to="/">Home</Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-white">About Us</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-['Playfair_Display'] mb-4">About Nirwan Academy</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            A story of passion, dedication, and transforming thousands of young lives since 2007
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">Our Story</p>
              <h2 className="section-title mb-4">From a Dream to <span className="text-[#D97706]">Excellence</span></h2>
              <div className="gold-divider mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nirwan Academy was born out of a dream – to ensure that talented children from rural Rajasthan get the same quality education as those in urban centers. Founded in 2007 by visionary educator <strong className="text-[#1E3A8A]">Ajay Pratap</strong>, the academy started with a small classroom and a big heart.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Located in Mundiya Jamalpur, Malakhera, Alwar, we have grown from a tiny coaching center to a fully equipped campus with premium hostel, transport, sports facilities, and smart classrooms – all while maintaining our core commitment to affordable, quality education.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Today, Nirwan Academy stands as Rajasthan's premier JNV & Sainik School coaching center with 1200+ selections, an enviable 95% success rate, and a family of 25+ dedicated educators who share the same passion for student success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { n: '17+', l: 'Years of Service' },
                  { n: '1200+', l: 'Total Selections' },
                  { n: '95%', l: 'Success Rate' },
                  { n: '25+', l: 'Expert Faculty' },
                ].map((stat, i) => (
                  <div key={i} className="bg-gradient-to-br from-[#f8faff] to-[#eef2ff] rounded-xl p-4 text-center">
                    <p className="text-2xl font-extrabold text-[#1E3A8A]">{stat.n}</p>
                    <p className="text-gray-500 text-sm">{stat.l}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=85&fit=crop"
                alt="Nirwan Academy Campus"
                className="rounded-3xl w-full shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#1E3A8A] text-white rounded-2xl p-5 shadow-xl">
                <p className="text-3xl font-extrabold">2007</p>
                <p className="text-blue-200 text-sm">Year Founded</p>
                <p className="text-[#D97706] text-xs mt-1">Educating for Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-[#f8faff] to-[#eef2ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Our Mission',
                text: 'To provide world-class coaching and holistic education to students from rural backgrounds, enabling them to compete and succeed at national level examinations like JNV and Sainik Schools.',
                color: '#1E3A8A',
              },
              {
                icon: '🔭',
                title: 'Our Vision',
                text: 'To be Rajasthan\'s most trusted educational institution where every student, regardless of their economic background, gets the opportunity to achieve their dreams and serve the nation.',
                color: '#D97706',
              },
              {
                icon: '⭐',
                title: 'Our Promise',
                text: 'We promise dedicated teaching, personalized attention, safe hostel environment, nutritious food, and a structured daily routine that creates disciplined, confident, and academically excellent students.',
                color: '#10B981',
              },
            ].map((item, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-8 shadow-sm text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5"
                  style={{ background: `${item.color}15`, border: `2px solid ${item.color}30` }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director's Message */}
      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] to-[#1e40af]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">Leadership</p>
            <h2 className="text-3xl font-bold text-white font-['Playfair_Display'] mb-3">Director's Message</h2>
            <div className="w-16 h-1 bg-[#D97706] mx-auto rounded"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Photo */}
                <div className="bg-gradient-to-b from-[#D97706] to-[#F59E0B] p-10 flex flex-col items-center justify-center text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-5">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=85&fit=crop&crop=face"
                      alt="Ajay Pratap - Director"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-white font-bold text-2xl font-['Playfair_Display']">Ajay Pratap</h3>
                  <p className="text-white/80 text-sm mt-1">Director & Founder</p>
                  <p className="text-white/70 text-xs mt-1">Nirwan Academy</p>
                  <div className="mt-4 space-y-2 text-sm text-white/90">
                    <p className="flex items-center gap-2 justify-center">
                      <i className="fas fa-graduation-cap"></i> B.Ed, M.A. Education
                    </p>
                    <p className="flex items-center gap-2 justify-center">
                      <i className="fas fa-calendar"></i> 17+ Years Experience
                    </p>
                    <p className="flex items-center gap-2 justify-center">
                      <i className="fas fa-trophy"></i> 1200+ Students Selected
                    </p>
                  </div>
                </div>

                {/* Message */}
                <div className="md:col-span-2 p-8 md:p-12">
                  <div className="text-[#D97706] text-6xl font-serif leading-none mb-4">"</div>
                  <p className="text-white/90 text-lg leading-relaxed font-['Playfair_Display'] italic mb-6">
                    Every child is a diamond in the rough. At Nirwan Academy, we don't just polish their academic skills – we shape their character, their confidence, and their dreams.
                  </p>
                  <p className="text-blue-200 text-sm leading-relaxed mb-4">
                    When I founded Nirwan Academy in 2007, I had one dream: to bridge the gap between rural talent and national opportunity. I've seen children from small villages crack JNV exams and join prestigious Sainik Schools, going on to serve the nation with distinction.
                  </p>
                  <p className="text-blue-200 text-sm leading-relaxed mb-4">
                    Our approach is simple – love every student like your own child, teach with passion, maintain discipline, and provide the right environment. We focus equally on academics, physical education, and moral values because true success is holistic.
                  </p>
                  <p className="text-blue-200 text-sm leading-relaxed mb-6">
                    I personally oversee every aspect of our academy – from curriculum design to hostel management to student welfare. We are not just a coaching center; we are a family committed to your child's bright future.
                  </p>
                  <div className="border-t border-white/20 pt-5">
                    <p className="text-white font-bold font-['Playfair_Display'] text-lg">Ajay Pratap</p>
                    <p className="text-[#D97706] text-sm">Director & Founder, Nirwan Academy</p>
                    <div className="flex gap-3 mt-4">
                      <a href="tel:7891387813" className="btn-gold text-sm py-2">
                        <i className="fas fa-phone"></i> Call Director
                      </a>
                      <a href="mailto:anops706@gmail.com" className="btn-outline text-sm py-2">
                        <i className="fas fa-envelope"></i> Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">Our Journey</p>
            <h2 className="section-title mb-3">Milestones of Excellence</h2>
            <div className="gold-divider mx-auto"></div>
          </div>
          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1E3A8A] to-[#D97706]"></div>
            <div className="space-y-10">
              {milestones.map((m, i) => (
                <div key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`card-hover bg-white rounded-2xl p-6 shadow-sm border border-gray-100 inline-block max-w-sm ${i % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <span className="text-[#D97706] font-bold text-lg">{m.year}</span>
                      <h3 className="text-[#1E3A8A] font-bold text-lg mt-1">{m.title}</h3>
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-12 h-12 rounded-full bg-gradient-to-br from-[#1E3A8A] to-[#D97706] items-center justify-center text-white font-bold text-sm flex-shrink-0 z-10 shadow-lg">
                    {i + 1}
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 bg-gradient-to-br from-[#f8faff] to-[#eef2ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">Campus</p>
            <h2 className="section-title mb-3">World-Class Facilities</h2>
            <div className="gold-divider mx-auto mb-4"></div>
            <p className="section-subtitle mx-auto text-center">Everything your child needs for academic excellence and personal growth</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((f, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="facility-icon mx-auto">
                  <span className="text-2xl">{f.icon}</span>
                </div>
                <h3 className="font-bold text-[#1E3A8A] text-base mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#1E3A8A]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white font-['Playfair_Display']">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{v.title}</h3>
                <p className="text-blue-200 text-sm">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="section-title mb-4">Ready to Join the Nirwan Family?</h2>
          <p className="text-gray-600 mb-8">Take the first step towards your child's brilliant future. Limited seats available for 2025-26 batch.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admissions" className="btn-primary">
              <i className="fas fa-graduation-cap"></i> Apply for Admission
            </Link>
            <Link to="/contact" className="btn-gold">
              <i className="fas fa-phone"></i> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

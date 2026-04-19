import { Link } from 'react-router-dom';

const faculty = [
  {
    name: 'Ajay Pratap',
    role: 'Director & Founder',
    subject: 'Mathematics & Strategy',
    experience: '17+ Years',
    qualification: 'M.A., B.Ed',
    specialization: 'JNV Entrance Strategy, Competitive Coaching',
    achievements: ['Founded Nirwan Academy in 2007', '1200+ students guided to success', 'Developed unique teaching methodology'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&fit=crop&crop=face',
    tag: 'Founder',
    tagColor: '#D97706',
  },
  {
    name: 'Sunita Devi',
    role: 'Senior Faculty',
    subject: 'Hindi Language & Literature',
    experience: '12 Years',
    qualification: 'M.A. Hindi, B.Ed',
    specialization: 'Hindi Grammar, Language Skills, Essay Writing',
    achievements: ['Expert in JNV Language Paper', 'Published educational worksheets', '300+ students in 5 years'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80&fit=crop&crop=face',
    tag: 'Senior Faculty',
    tagColor: '#10B981',
  },
  {
    name: 'Ramesh Sharma',
    role: 'Mathematics Expert',
    subject: 'Arithmetic & Mental Ability',
    experience: '10 Years',
    qualification: 'M.Sc Mathematics, B.Ed',
    specialization: 'Vedic Math, Mental Ability, Competitive Math',
    achievements: ['Top-rated math teacher', 'Special focus on weak students', 'Success rate 98% in Math'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&fit=crop&crop=face',
    tag: 'Math Expert',
    tagColor: '#1E3A8A',
  },
  {
    name: 'Priya Singh',
    role: 'Science Faculty',
    subject: 'Science & Environmental Studies',
    experience: '8 Years',
    qualification: 'M.Sc Science, B.Ed',
    specialization: 'EVS, Basic Science, Lab Practical',
    achievements: ['Innovative lab experiments', 'Activity-based science teaching', 'Students love her approach'],
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&q=80&fit=crop&crop=face',
    tag: 'Science Expert',
    tagColor: '#7C3AED',
  },
  {
    name: 'Vikram Yadav',
    role: 'Physical Training Instructor',
    subject: 'Physical Education & NCC',
    experience: '8 Years',
    qualification: 'M.P.Ed, Ex-Indian Army',
    specialization: 'Sainik School PT, Drill, Military Training',
    achievements: ['Ex-Army background', 'Trained 200+ Sainik students', 'District sports champion'],
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=400&q=80&fit=crop&crop=face',
    tag: 'Ex-Army',
    tagColor: '#DC2626',
  },
  {
    name: 'Anita Verma',
    role: 'English Faculty',
    subject: 'English Language & Grammar',
    experience: '9 Years',
    qualification: 'M.A. English, B.Ed',
    specialization: 'English Communication, Grammar, Vocabulary',
    achievements: ['Transformed rural kids\' English', 'Special communication workshops', 'Best teacher award 2022'],
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80&fit=crop&crop=face',
    tag: 'English Expert',
    tagColor: '#0891B2',
  },
  {
    name: 'Deepak Kumar',
    role: 'Social Studies Faculty',
    subject: 'History, Geography & GK',
    experience: '7 Years',
    qualification: 'M.A. Social Studies, B.Ed',
    specialization: 'Current Affairs, GK, Social Studies',
    achievements: ['Weekly GK sessions', 'Interactive map learning', 'Best GK coach in Alwar'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&fit=crop&crop=face',
    tag: 'GK Expert',
    tagColor: '#059669',
  },
];

export default function Faculty() {
  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb mb-4">
            <Link to="/">Home</Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-white">Faculty</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-['Playfair_Display'] mb-4">Our Expert Faculty</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Meet the passionate educators and mentors who dedicate their lives to shaping future champions
          </p>
        </div>
      </div>

      {/* Stats Bar */}
      <section className="py-8 bg-[#D97706]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { n: '25+', l: 'Expert Educators' },
              { n: '10+', l: 'Avg Experience (Yrs)' },
              { n: '100%', l: 'Qualified & Trained' },
              { n: '24/7', l: 'Student Support' },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl font-extrabold text-white">{s.n}</p>
                <p className="text-white/80 text-sm">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">Our Team</p>
            <h2 className="section-title mb-3">Meet Our Mentors</h2>
            <div className="gold-divider mx-auto mb-4"></div>
            <p className="section-subtitle mx-auto text-center">Experienced, passionate, and dedicated to your child's success</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {faculty.map((f, i) => (
              <div key={i} className="faculty-card group">
                <div className="relative">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <p className="text-white text-xs font-medium">{f.specialization}</p>
                    </div>
                  </div>
                  <span
                    className="absolute top-4 right-4 text-white text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: f.tagColor }}
                  >
                    {f.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#1E3A8A] text-lg mb-0.5">{f.name}</h3>
                  <p className="text-[#D97706] text-sm font-medium mb-1">{f.role}</p>
                  <p className="text-gray-500 text-xs mb-3">{f.subject}</p>
                  <div className="flex gap-3 mb-3 text-xs text-gray-600">
                    <span className="flex items-center gap-1">
                      <i className="fas fa-clock text-[#1E3A8A]"></i> {f.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <i className="fas fa-graduation-cap text-[#1E3A8A]"></i> {f.qualification.split(',')[0]}
                    </span>
                  </div>
                  <ul className="space-y-1 border-t border-gray-100 pt-3">
                    {f.achievements.slice(0, 2).map((ach, j) => (
                      <li key={j} className="flex items-start gap-1.5 text-xs text-gray-600">
                        <i className="fas fa-star text-[#D97706] text-xs mt-0.5 flex-shrink-0"></i>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-gradient-to-br from-[#f8faff] to-[#eef2ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">Our Approach</p>
            <h2 className="section-title mb-3">Our Teaching Philosophy</h2>
            <div className="gold-divider mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '❤️', title: 'Student-First', desc: 'Every decision we make centers around our students\' wellbeing, growth, and success.' },
              { icon: '🔄', title: 'Continuous Learning', desc: 'Our faculty constantly updates teaching methods and curriculum with latest trends.' },
              { icon: '🎯', title: 'Goal-Oriented', desc: 'Clear goals, structured plans, and consistent tracking of every student\'s progress.' },
              { icon: '🤝', title: 'Collaborative', desc: 'Teachers, parents, and students work as one team towards shared success.' },
            ].map((item, i) => (
              <div key={i} className="card-hover bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-100">
                <div className="facility-icon mx-auto">
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3 className="font-bold text-[#1E3A8A] text-base mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-gradient-to-br from-[#1E3A8A] to-[#1e40af] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="text-5xl mb-5">👩‍🏫</div>
          <h2 className="text-3xl font-bold font-['Playfair_Display'] mb-4">Join Our Faculty Team</h2>
          <p className="text-blue-200 mb-8 leading-relaxed">
            Are you a passionate educator who believes in transforming young lives? We're always looking for dedicated teachers to join our growing family. Apply now!
          </p>
          <a href="mailto:anops706@gmail.com?subject=Faculty Application - Nirwan Academy" className="btn-gold">
            <i className="fas fa-paper-plane"></i> Send Your Application
          </a>
        </div>
      </section>
    </div>
  );
}

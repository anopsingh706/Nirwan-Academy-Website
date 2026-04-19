import { useState, useEffect, useRef } from 'react';
import { sendHomeContactEmail } from '../utils/emailService';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';


const heroSlides = [
  {
    image: 'public/NCC Hero Section 1.webp',
    title: 'Shaping Future Leaders',
    subtitle: 'Expert JNV & Sainik School Coaching',
    tag: '🏆 100+ Selections Every Year',
  },
  {
    image: 'public/Sainic school jaipur.webp',
    title: 'Excellence in Education',
    subtitle: 'From Class 1 to Competitive Success',
    tag: '⭐ Best Faculty in Rajasthan',
  },
  {
    image: 'public/Football boys 2.webp',
    title: 'Holistic Development',
    subtitle: 'Academics + Sports + Good Manners',
    tag: '🎯 95% Success Rate',
  },
  {
    image: 'public/lovekush photo.webp',
    title: 'Dream Big, Achieve More',
    subtitle: 'JNV & Military School Entrance Prep',
    tag: '🏫 Premium Hostel Facility',
  },
  {
    image: 'public/Studying Kids.webp',
    title: 'Empowering Every Child',
    subtitle: 'Quality Education for Rural Students',
    tag: '🚌 Bus Transport Available',
  },
  {
    image: 'public/Achivers.webp',
    title: 'Building Champions',
    subtitle: 'Physical Education + Mental Excellence',
    tag: '💪 Sports & Activities Daily',
  },
];

const marqueeStudents = [
  { name: 'Ravi Kumar', school: 'JNV Alwar', rank: 'Class 6 Selected', year: '2024' },
  { name: 'Priya Sharma', school: 'Sainik School', rank: 'AIR 12', year: '2024' },
  { name: 'Amit Singh', school: 'JNV Jaipur', rank: 'Class 9 Selected', year: '2023' },
  { name: 'Anjali Meena', school: 'Military School', rank: 'Top 5', year: '2024' },
  { name: 'Rohit Yadav', school: 'JNV Bharatpur', rank: 'Class 6 Selected', year: '2023' },
  { name: 'Sunita Devi', school: 'Sainik School', rank: 'AIR 8', year: '2024' },
  { name: 'Vikash Gupta', school: 'JNV Alwar', rank: 'Class 6 Selected', year: '2024' },
  { name: 'Kavita Kumari', school: 'Military School', rank: 'Selected', year: '2023' },
  { name: 'Deepak Verma', school: 'JNV Dausa', rank: 'Class 9 Selected', year: '2024' },
  { name: 'Pooja Rajput', school: 'Sainik School', rank: 'AIR 3', year: '2024' },
];

const features = [
  { icon: '🎓', title: 'JNV Coaching', desc: 'Expert preparation for Class 6 & 9 entrance exams with proven methodology.' },
  { icon: '⚔️', title: 'Sainik School Prep', desc: 'Specialized coaching for military & sainik school entrance examinations.' },
  { icon: '🏠', title: 'Premium Hostel', desc: 'Safe, comfortable hostel with nutritious meals & 24/7 supervision.' },
  { icon: '🚌', title: 'Bus Transport', desc: 'Convenient bus transport facility covering nearby villages & towns.' },
  { icon: '⚽', title: 'Physical Education', desc: 'Daily sports, games & fitness activities for holistic development.' },
  { icon: '📚', title: 'Higher Primary', desc: 'Comprehensive Class 1-8 education with experienced faculty.' },
  { icon: '🍽️', title: 'Best Food', desc: 'Nutritious, hygienic meals prepared fresh daily for hostel students.' },
  { icon: '🏆', title: 'Expert Mentors', desc: 'Highly qualified teachers with years of experience in competitive coaching.' },
];

const testimonials = [
  {
    name: 'Ramesh Kumar',
    role: 'Parent of Aditya Kumar (JNV Selected 2024)',
    text: 'Nirwan Academy transformed my son\'s future. The dedicated faculty and disciplined environment helped him crack JNV in the very first attempt. We are forever grateful!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&fit=crop&crop=face',
  },
  {
    name: 'Sunita Sharma',
    role: 'Parent of Pooja Sharma (Sainik School 2024)',
    text: 'The hostel facility is excellent with great food and 24/7 care. My daughter grew tremendously both academically and personally. Best academy in Rajasthan!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80&fit=crop&crop=face',
  },
  {
    name: 'Mahesh Singh',
    role: 'Parent of Rahul Singh (JNV 2023)',
    text: 'Director Ajay Pratap sir\'s vision and guidance is exceptional. The mock tests, study material, and personal attention given to each student is outstanding.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80&fit=crop&crop=face',
  },
];

const stats = [
  { number: 17, suffix: '+', label: 'Years of Excellence', icon: '📅' },
  { number: 1200, suffix: '+', label: 'Students Selected', icon: '🎓' },
  { number: 95, suffix: '%', label: 'Success Rate', icon: '🏆' },
  { number: 25, suffix: '+', label: 'Expert Mentors', icon: '👨‍🏫' },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const formRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', grade: '', query: '' });
  const [submitted, setSubmitted] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [formError, setFormError] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // ✅ FIXED handleSubmit - sends real email
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setFormError('');

    const result = await sendHomeContactEmail({
      full_name:         formData.name,
      phone:             formData.phone,
      email:             formData.email,
      course_interested: formData.grade,
      message:           formData.query,
    });

    if (result.success) {
      setSubmitted(true);
      setFormStatus('idle');
      setFormData({ name: '', phone: '', email: '', grade: '', query: '' });
    } else {
      setFormStatus('error');
      setFormError(result.message);
    }
  };

  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/85 via-[#1E3A8A]/60 to-transparent"></div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 w-full">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
                <span className="text-yellow-300 text-sm font-medium">{heroSlides[currentSlide].tag}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white font-['Playfair_Display'] leading-tight mb-4 drop-shadow-2xl">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-2 font-medium">
                {heroSlides[currentSlide].subtitle}
              </p>
              <p className="text-blue-200 mb-8 text-base">
                JNV • Sainik School • Higher Primary • Hostel • Transport
              </p>
              <div className="flex flex-wrap gap-4">
                <button onClick={scrollToForm} className="btn-gold text-base shadow-2xl">
                  <i className="fas fa-paper-plane"></i> Enquire Now
                </button>
                <Link to="/results" className="btn-outline text-base">
                  <i className="fas fa-trophy"></i> View Results
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="flex gap-8 mt-10">
                {[{ n: '17+', l: 'Years' }, { n: '1200+', l: 'Selected' }, { n: '95%', l: 'Success' }].map((s, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl font-bold text-[#D97706]">{s.n}</p>
                    <p className="text-xs text-blue-200">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-[#D97706] w-8' : 'bg-white/40 w-2'}`}
            />
          ))}
        </div>

        {/* Scroll Down */}
        <div className="absolute bottom-8 right-8 z-20 hidden md:block">
          <div className="text-white text-center animate-bounce">
            <i className="fas fa-chevron-down text-xl text-[#D97706]"></i>
            <p className="text-xs text-white/60 mt-1">Scroll</p>
          </div>
        </div>
      </section>

      {/* ===== MARQUEE - SELECTED STUDENTS ===== */}
      <section className="bg-[#1E3A8A] py-4 overflow-hidden">
        <div className="flex items-center gap-4 mb-0">
          <div className="bg-[#D97706] text-white text-xs font-bold px-4 py-3 whitespace-nowrap flex-shrink-0 flex items-center gap-2 z-10">
            <i className="fas fa-trophy"></i> SELECTED STUDENTS
          </div>
          <div className="overflow-hidden flex-1">
            <div className="marquee-track">
              {[...marqueeStudents, ...marqueeStudents].map((student, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-6 border-r border-white/20 flex-shrink-0"
                >
                  <div className="w-8 h-8 rounded-full bg-[#D97706] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {student.name.charAt(0)}
                  </div>
                  <div className="text-white">
                    <span className="font-semibold text-sm">{student.name}</span>
                    <span className="text-yellow-300 text-xs mx-2">•</span>
                    <span className="text-blue-200 text-xs">{student.school}</span>
                    <span className="text-[#D97706] text-xs ml-2 font-medium">{student.rank}</span>
                    <span className="text-gray-400 text-xs ml-2">({student.year})</span>
                  </div>
                  <i className="fas fa-medal text-[#D97706] text-xs ml-3"></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section ref={statsRef} className="py-12 bg-gradient-to-br from-[#f8faff] to-[#eef2ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="stat-card rounded-2xl">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-extrabold text-white mb-1">
                  {statsInView ? (
                    <CountUp end={stat.number} duration={2.5} suffix={stat.suffix} />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="text-blue-200 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
            <h2 className="section-title mb-3">Why Choose Nirwan Academy?</h2>
            <div className="gold-divider mx-auto mb-4"></div>
            <p className="section-subtitle mx-auto text-center">
              Comprehensive education and training programs designed to nurture every child's potential
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div
                key={i}
                className="card-hover bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center"
              >
                <div className="facility-icon mx-auto">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="font-bold text-[#1E3A8A] text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="py-20 bg-gradient-to-br from-[#f8faff] to-[#eef2ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">About Us</p>
              <h2 className="section-title mb-4">Nurturing Excellence<br />Since <span className="text-[#D97706]">2007</span></h2>
              <div className="gold-divider mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Nirwan Academy, situated in the heart of Mundiya Jamalpur, Malakhera, Alwar, Rajasthan, has been a beacon of educational excellence since 2007. We specialize in preparing students for the prestigious Jawahar Navodaya Vidyalaya (JNV) and Sainik School entrance examinations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our fully organized campus provides a disciplined, nurturing environment where students develop not just academic skills but also character, physical fitness, and good manners. With our dedicated team of 25+ expert mentors, we've achieved a 95%+ success rate.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: '✅', text: 'Experienced Faculty' },
                  { icon: '✅', text: 'Premium Hostel' },
                  { icon: '✅', text: 'Daily Sports & Games' },
                  { icon: '✅', text: 'Bus Transport' },
                  { icon: '✅', text: 'Best Nutritious Food' },
                  { icon: '✅', text: '24/7 Student Care' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-green-500">{item.icon}</span> {item.text}
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary">
                <i className="fas fa-arrow-right"></i> Learn More About Us
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="public/Boy with Books.webp"
                alt="Students studying"
                className="rounded-2xl w-full h-52 object-cover shadow-lg"
              />
              <img
                src="public/nirwan Academy building.webp"
                alt="Children learning"
                className="rounded-2xl w-full h-52 object-cover shadow-lg mt-6"
              />
              <img
                src="public/result1.webp"
                alt="Kids in sports"
                className="rounded-2xl w-full h-52 object-cover shadow-lg -mt-6"
              />
              <img
                src="public/students group.webp"
                alt="Physical education"
                className="rounded-2xl w-full h-52 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== COURSES PREVIEW ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">Our Programs</p>
            <h2 className="section-title mb-3">Courses We Offer</h2>
            <div className="gold-divider mx-auto mb-4"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '📖',
                title: 'JNV Class 6 Coaching',
                desc: 'Specialized coaching for Jawahar Navodaya Vidyalaya Class 6 entrance exam. Covers Math, Language & Mental Ability.',
                badge: 'Most Popular',
                badgeColor: '#10B981',
                features: ['Math & Reasoning', 'Language Skills', 'Mock Tests', 'Study Material'],
              },
              {
                icon: '⚔️',
                title: 'Sainik School Coaching',
                desc: 'Comprehensive preparation for Sainik School and Military School entrance examinations.',
                badge: 'Premium Course',
                badgeColor: '#1E3A8A',
                features: ['All Subjects', 'Physical Training', 'GK & Current Affairs', 'Interview Prep'],
              },
              {
                icon: '🏫',
                title: 'JNV Class 9 Coaching',
                desc: 'Advanced preparation for Class 9 lateral entry into Navodaya Vidyalayas with focused curriculum.',
                badge: 'New Batch',
                badgeColor: '#D97706',
                features: ['Science & Math', 'English Grammar', 'Social Studies', 'Test Series'],
              },
            ].map((course, i) => (
              <div key={i} className="card-hover rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] p-6 text-white relative">
                  <span className="absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ background: course.badgeColor }}>
                    {course.badge}
                  </span>
                  <div className="text-4xl mb-3">{course.icon}</div>
                  <h3 className="text-xl font-bold">{course.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{course.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {course.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-gray-700">
                        <i className="fas fa-check-circle text-[#10B981] text-xs"></i> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/courses" className="btn-primary w-full justify-center text-sm py-2.5">
                    Know More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/courses" className="btn-outline" style={{ color: '#1E3A8A', borderColor: '#1E3A8A' }}>
              View All Courses <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== RESULTS MARQUEE ===== */}
      <section className="py-14 bg-gradient-to-br from-[#1E3A8A] to-[#1e40af] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-10">
          <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">Our Pride</p>
          <h2 className="text-3xl font-bold text-white font-['Playfair_Display'] mb-3">Our Shining Stars</h2>
          <p className="text-blue-200 text-sm">Students who made us proud with their outstanding selections</p>
        </div>
        <div className="overflow-hidden">
          <div className="marquee-track" style={{ animationDuration: '35s' }}>
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex-shrink-0 mx-3">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 w-48 text-center">
                  <div className="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden border-2 border-[#D97706]">
                    <img
                      src={`https://i.pravatar.cc/150?img=${i + 10}`}
                      alt="Student"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-white font-semibold text-sm">{marqueeStudents[i % marqueeStudents.length].name}</p>
                  <p className="text-[#D97706] text-xs font-medium">{marqueeStudents[i % marqueeStudents.length].rank}</p>
                  <p className="text-blue-200 text-xs mt-1">{marqueeStudents[i % marqueeStudents.length].school}</p>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, j) => (
                      <i key={j} className="fas fa-star text-[#D97706] text-xs"></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-10">
          <Link to="/results" className="btn-gold">
            <i className="fas fa-trophy"></i> View All Results
          </Link>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">Parent Reviews</p>
            <h2 className="section-title mb-3">What Parents Say</h2>
            <div className="gold-divider mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="testimonial-card">
              <div className="flex items-center gap-4 mb-5">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#1E3A8A]"
                />
                <div>
                  <h4 className="font-bold text-[#1E3A8A] text-lg">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[currentTestimonial].role}</p>
                  <div className="stars flex gap-1 mt-1">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, j) => (
                      <i key={j} className="fas fa-star text-sm"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed italic text-base">
                "{testimonials[currentTestimonial].text}"
              </p>
            </div>
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === currentTestimonial ? 'bg-[#1E3A8A] w-8' : 'bg-gray-200 w-2'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== DIRECTOR MESSAGE TAB ===== */}
      <section className="py-20 bg-gradient-to-br from-[#f8faff] to-[#eef2ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="director-card max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Photo Side */}
              <div className="relative bg-gradient-to-b from-[#D97706] to-[#F59E0B] flex flex-col items-center justify-center p-8 text-center">
                <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-2xl mb-4">
                  <img
                    src="public/Ajay Pratap Director.webp"
                    alt="Ajay Pratap Singh Nirwan- Director"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-bold text-xl font-['Playfair_Display']">Ajay Pratap</h3>
                <p className="text-white/80 text-sm mt-1">Director & Founder</p>
                <p className="text-white/70 text-xs mt-1">Nirwan Academy, Since 2007</p>
                <div className="mt-4 flex gap-2 justify-center">
                  <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full">17+ Years Experience</span>
                </div>
              </div>
              {/* Message Side */}
              <div className="md:col-span-2 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#D97706] flex items-center justify-center">
                    <i className="fas fa-quote-left text-white text-sm"></i>
                  </div>
                  <div>
                    <p className="text-[#D97706] font-semibold text-sm uppercase tracking-wider">Director's Message</p>
                    <p className="text-white/60 text-xs">A word from our founder</p>
                  </div>
                </div>
                <blockquote className="text-white/90 text-lg leading-relaxed font-['Playfair_Display'] italic mb-6">
                  "Every child carries infinite potential within them. At Nirwan Academy, our mission is not just to prepare students for entrance examinations, but to shape them into confident, disciplined, and compassionate human beings who can contribute meaningfully to our nation."
                </blockquote>
                <p className="text-blue-200 text-sm leading-relaxed mb-6">
                  Since founding Nirwan Academy in 2007, I have witnessed hundreds of students from humble rural backgrounds transform into national-level achievers. Our holistic approach combining rigorous academics, physical education, and character building creates champions in every sense.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/about" className="btn-gold text-sm py-2.5">
                    <i className="fas fa-user"></i> Read Full Message
                  </Link>
                  <a href="tel:7891387813" className="btn-outline text-sm py-2.5">
                    <i className="fas fa-phone"></i> Speak to Director
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENQUIRY FORM ===== */}
      <section ref={formRef} className="py-20 bg-white" id="enquiry">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left Info */}
            <div>
              <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">
                Get In Touch
              </p>
              <h2 className="section-title mb-4">Request a<br />Callback Today</h2>
              <div className="gold-divider mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-8">
                Interested in admissions at Nirwan Academy? Fill out the form and our
                team will contact you within 24 hours to discuss your child's
                educational journey.
              </p>
              <div className="space-y-5">
                {[
                  { icon: 'fas fa-map-marker-alt', title: 'Our Location',  info: 'Mundiya Jamalpur, Malakhera, Alwar, Rajasthan - 301406' },
                  { icon: 'fas fa-phone',          title: 'Call Us',       info: '+91 7891387813' },
                  { icon: 'fas fa-envelope',       title: 'Email Us',      info: 'anops706@gmail.com' },
                  { icon: 'fas fa-clock',          title: 'Office Hours',  info: 'Mon-Sat: 6 AM – 8 PM | Sun: 8 AM – 12 PM' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] flex items-center justify-center flex-shrink-0">
                      <i className={`${item.icon} text-white text-base`}></i>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                      <p className="text-gray-600 text-sm">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">

              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#D97706] flex items-center justify-center">
                  <i className="fas fa-paper-plane text-white"></i>
                </div>
                <div>
                  <h3 className="font-bold text-[#1E3A8A] text-lg">Enquiry Form</h3>
                  <p className="text-gray-500 text-xs">We respond within 24 hours</p>
                </div>
              </div>

              {/* Success State */}
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-5xl mb-4">🎉</div>
                  <h3 className="text-green-700 font-bold text-xl mb-2">Thank You!</h3>
                  <p className="text-green-600 text-sm mb-5">
                    Your enquiry has been submitted successfully. Our team will call
                    you back within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition text-sm font-medium"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-4">

                  {/* Error Banner */}
                  {formStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
                      <span className="text-red-500">⚠️</span>
                      <div>
                        <p className="text-red-800 font-semibold text-sm">
                          Failed to send enquiry
                        </p>
                        <p className="text-red-600 text-xs mt-0.5">{formError}</p>
                        <p className="text-red-600 text-xs mt-1">
                          Or call us:{' '}
                          <a href="tel:+917891387813" className="font-bold underline">
                            +91 7891387813
                          </a>
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Row: Full Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="home_full_name" className="text-sm font-medium text-gray-700 mb-1.5 block">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="home_full_name"
                        name="home_full_name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Parent/Student Name"
                        autoComplete="name"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="home_phone" className="text-sm font-medium text-gray-700 mb-1.5 block">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="home_phone"
                        name="home_phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        autoComplete="tel"
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="home_email" className="text-sm font-medium text-gray-700 mb-1.5 block">
                      Email Address <span className="text-gray-400 text-xs">(Optional)</span>
                    </label>
                    <input
                      id="home_email"
                      name="home_email"
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      autoComplete="email"
                      className="form-input"
                    />
                  </div>

                  {/* Course */}
                  <div>
                    <label htmlFor="home_course" className="text-sm font-medium text-gray-700 mb-1.5 block">
                      Course Interested In <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="home_course"
                      name="home_course"
                      required
                      value={formData.grade}
                      onChange={e => setFormData({ ...formData, grade: e.target.value })}
                      className="form-input"
                    >
                      <option value="">Select Course</option>
                      <option>JNV Class 6 Coaching</option>
                      <option>JNV Class 9 Coaching</option>
                      <option>Sainik School Coaching</option>
                      <option>Military School Coaching</option>
                      <option>Higher Primary (Class 1-8)</option>
                      <option>Hostel Admission</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="home_message" className="text-sm font-medium text-gray-700 mb-1.5 block">
                      Your Message <span className="text-gray-400 text-xs">(Optional)</span>
                    </label>
                    <textarea
                      id="home_message"
                      name="home_message"
                      rows={3}
                      value={formData.query}
                      onChange={e => setFormData({ ...formData, query: e.target.value })}
                      placeholder="Tell us about your requirements..."
                      className="form-input resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className={`btn-primary w-full justify-center text-base py-3 ${
                      formStatus === 'sending' ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {formStatus === 'sending' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i> Submit Enquiry
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-400">
                    <i className="fas fa-lock mr-1"></i>
                    Your information is safe and secure with us
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ===== GOOGLE MAPS ===== */}
      <section className="py-14 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">Find Us</p>
            <h2 className="section-title mb-2">Our Location</h2>
            <p className="text-gray-500 text-sm">Mundiya Jamalpur, Malakhera, Alwar, Rajasthan - 301406</p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200" style={{ height: '400px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3545.891!2d76.9!3d27.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDMwJzAwLjAiTiA3NsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nirwan Academy Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
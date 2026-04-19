import { useState } from 'react';
import { Link } from 'react-router-dom';

const courses = [
  {
    id: 'jnv6',
    icon: '📖',
    title: 'JNV Class 6 Coaching',
    subtitle: 'Jawahar Navodaya Vidyalaya Entrance',
    badge: 'Most Popular',
    badgeColor: '#10B981',
    duration: '12 Months',
    ageGroup: '10-12 Years',
    batchSize: '30 Students',
    description: 'Our flagship JNV Class 6 coaching program is designed to prepare students for the JNVST (Jawahar Navodaya Vidyalaya Selection Test). We cover all three sections comprehensively with proven teaching methodology.',
    subjects: [
      { name: 'Mental Ability Test', topics: ['Pattern Recognition', 'Odd One Out', 'Figure Completion', 'Problem Solving', 'Analogy'], icon: '🧠' },
      { name: 'Arithmetic', topics: ['Number System', 'Fractions & Decimals', 'Percentage', 'Time & Work', 'Geometry'], icon: '📐' },
      { name: 'Language Test', topics: ['Reading Comprehension', 'Grammar', 'Vocabulary', 'Hindi/Regional Language', 'Writing Skills'], icon: '✍️' },
    ],
    features: ['Daily Mock Tests', 'Weekly Assessments', 'Study Material Provided', 'Individual Attention', 'Parent Updates', 'Doubt Sessions'],
    schedule: 'Mon-Sat: 8 AM – 5 PM',
    fees: '₹3,500/month',
    hostelFees: '₹5,000/month (with food)',
  },
  {
    id: 'jnv9',
    icon: '📚',
    title: 'JNV Class 9 Coaching',
    subtitle: 'Lateral Entry into Navodaya Vidyalayas',
    badge: 'New Batch',
    badgeColor: '#D97706',
    duration: '8 Months',
    ageGroup: '13-14 Years',
    batchSize: '25 Students',
    description: 'Specialized coaching for Class 9 lateral entry into JNV. This advanced program covers higher-level subjects including Science, Social Studies, Mathematics, and English with intensive preparation.',
    subjects: [
      { name: 'Mathematics', topics: ['Algebra', 'Geometry', 'Statistics', 'Number Theory', 'Trigonometry Basics'], icon: '📐' },
      { name: 'Science', topics: ['Physics Basics', 'Chemistry', 'Biology', 'Environmental Science', 'Practical Skills'], icon: '🔬' },
      { name: 'Social Studies', topics: ['History', 'Geography', 'Civics', 'Economics', 'Current Affairs'], icon: '🌍' },
      { name: 'English & Hindi', topics: ['Grammar', 'Essay Writing', 'Comprehension', 'Literature', 'Vocabulary'], icon: '✍️' },
    ],
    features: ['Expert Faculty', 'Previous Year Papers', 'Test Series', 'GK Sessions', 'Counseling', 'Career Guidance'],
    schedule: 'Mon-Sat: 7 AM – 6 PM',
    fees: '₹4,000/month',
    hostelFees: '₹5,000/month (with food)',
  },
  {
    id: 'sainik',
    icon: '⚔️',
    title: 'Sainik School Coaching',
    subtitle: 'All India Sainik School Entrance Exam (AISSEE)',
    badge: 'Premium Course',
    badgeColor: '#1E3A8A',
    duration: '12 Months',
    ageGroup: '10-13 Years',
    batchSize: '20 Students',
    description: 'Comprehensive coaching for AISSEE (All India Sainik School Entrance Examination). Our military-inspired discipline combined with academic excellence creates future leaders ready for Sainik Schools nationwide.',
    subjects: [
      { name: 'Mathematics', topics: ['Arithmetic', 'Algebra', 'Geometry', 'Data Interpretation', 'Mental Calculation'], icon: '📐' },
      { name: 'Intelligence Test', topics: ['Verbal Intelligence', 'Non-Verbal Intelligence', 'Analogy', 'Series', 'Spatial Ability'], icon: '🧠' },
      { name: 'Language', topics: ['English Proficiency', 'Hindi Grammar', 'Reading Skills', 'Writing', 'Vocabulary'], icon: '✍️' },
      { name: 'Physical Training', topics: ['Daily PT', 'Running', 'Push-ups', 'Drill', 'Outdoor Activities'], icon: '💪' },
    ],
    features: ['Physical Training Daily', 'Mock Entrance Tests', 'Interview Preparation', 'Personality Development', 'Military Etiquette', 'Medical Guidance'],
    schedule: 'Mon-Sat: 5:30 AM – 8 PM',
    fees: '₹5,000/month',
    hostelFees: '₹6,000/month (with food)',
  },
  {
    id: 'primary',
    icon: '🏫',
    title: 'Higher Primary (Class 1-8)',
    subtitle: 'CBSE & State Board Foundation',
    badge: 'Day + Hostel',
    badgeColor: '#7C3AED',
    duration: 'Annual',
    ageGroup: '6-14 Years',
    batchSize: '35 Students',
    description: 'Our Higher Primary section follows a comprehensive curriculum covering Class 1-8 with focus on strong foundation in all subjects, co-curricular activities, sports, and character development.',
    subjects: [
      { name: 'Core Subjects', topics: ['Mathematics', 'Science', 'Social Studies', 'Hindi', 'English'], icon: '📚' },
      { name: 'Activity-Based', topics: ['Arts & Crafts', 'Music', 'Dance', 'Drawing', 'Storytelling'], icon: '🎨' },
      { name: 'Physical Education', topics: ['Morning PT', 'Sports', 'Yoga', 'Games', 'Swimming (nearby)'], icon: '⚽' },
      { name: 'Moral Education', topics: ['Good Manners', 'Values', 'Discipline', 'Leadership', 'Social Skills'], icon: '🌟' },
    ],
    features: ['Small Batch Size', 'Activity-Based Learning', 'Monthly Tests', 'Parent-Teacher Meeting', 'Library Access', 'Competitive Exam Prep'],
    schedule: 'Mon-Sat: 7 AM – 4 PM',
    fees: '₹1,800/month',
    hostelFees: '₹4,500/month (with food)',
  },
];

export default function Courses() {
  const [activeTab, setActiveTab] = useState('jnv6');
  const activeCourse = courses.find(c => c.id === activeTab)!;

  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb mb-4">
            <Link to="/">Home</Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-white">Courses</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-['Playfair_Display'] mb-4">Our Courses</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Specialized coaching programs designed by expert educators for JNV, Sainik School, and Higher Primary students
          </p>
        </div>
      </div>

      {/* Course Tabs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Tab Buttons */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => setActiveTab(course.id)}
                className={`tab-btn flex items-center gap-2 ${activeTab === course.id ? 'active' : ''}`}
              >
                <span>{course.icon}</span>
                <span className="hidden sm:inline">{course.title.split(' ').slice(0, 3).join(' ')}</span>
                <span className="sm:hidden">{course.id.toUpperCase()}</span>
              </button>
            ))}
          </div>

          {/* Course Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-br from-[#1E3A8A] to-[#1e40af] rounded-3xl p-8 text-white mb-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-4xl">{activeCourse.icon}</span>
                    <h2 className="text-2xl font-bold font-['Playfair_Display'] mt-2">{activeCourse.title}</h2>
                    <p className="text-blue-200">{activeCourse.subtitle}</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white mt-2"
                    style={{ background: activeCourse.badgeColor }}>
                    {activeCourse.badge}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  {[
                    { icon: 'fas fa-clock', label: activeCourse.duration },
                    { icon: 'fas fa-users', label: activeCourse.batchSize },
                    { icon: 'fas fa-child', label: activeCourse.ageGroup },
                    { icon: 'fas fa-calendar', label: activeCourse.schedule },
                  ].map((info, i) => (
                    <div key={i} className="flex items-center gap-2 bg-white/15 rounded-xl px-4 py-2">
                      <i className={`${info.icon} text-[#D97706] text-sm`}></i>
                      <span className="text-sm text-blue-100">{info.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8 text-base">{activeCourse.description}</p>

              {/* Subjects */}
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-5 font-['Playfair_Display']">Curriculum Overview</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {activeCourse.subjects.map((sub, i) => (
                  <div key={i} className="bg-gradient-to-br from-[#f8faff] to-[#eef2ff] rounded-2xl p-5 border border-blue-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">{sub.icon}</span>
                      <h4 className="font-bold text-[#1E3A8A] text-sm">{sub.name}</h4>
                    </div>
                    <ul className="space-y-1">
                      {sub.topics.map((topic, j) => (
                        <li key={j} className="flex items-center gap-2 text-xs text-gray-600">
                          <i className="fas fa-dot-circle text-[#D97706] text-xs"></i> {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Features */}
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-5 font-['Playfair_Display']">Course Features</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {activeCourse.features.map((f, i) => (
                  <div key={i} className="flex items-center gap-2 bg-green-50 rounded-xl px-4 py-3 text-sm text-gray-700 border border-green-100">
                    <i className="fas fa-check-circle text-[#10B981]"></i> {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Fee Card */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 mb-6 sticky top-24">
                <h3 className="text-lg font-bold text-[#1E3A8A] mb-5 font-['Playfair_Display']">Fee Structure</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Day Scholar</span>
                    <span className="font-bold text-[#1E3A8A] text-lg">{activeCourse.fees}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="text-sm text-gray-600">Hostel + Food</span>
                    <span className="font-bold text-[#D97706] text-lg">{activeCourse.hostelFees}</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-sm text-gray-600">Admission Fee</span>
                    <span className="font-bold text-gray-700">₹1,000 (One-time)</span>
                  </div>
                </div>
                <Link to="/admissions" className="btn-primary w-full justify-center mb-3">
                  <i className="fas fa-graduation-cap"></i> Apply Now
                </Link>
                <a href="tel:7891387813" className="btn-gold w-full justify-center text-sm">
                  <i className="fas fa-phone"></i> Call for Details
                </a>
                <div className="mt-4 bg-blue-50 rounded-xl p-3 text-center">
                  <p className="text-xs text-gray-600">
                    <i className="fas fa-info-circle text-[#1E3A8A] mr-1"></i>
                    Fee concession available for meritorious students
                  </p>
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-gradient-to-br from-[#D97706] to-[#F59E0B] rounded-3xl p-6 text-white text-center">
                <div className="text-4xl mb-3">📞</div>
                <h4 className="font-bold text-lg mb-2">Need Guidance?</h4>
                <p className="text-white/90 text-sm mb-4">Speak directly with our counselors for free admission guidance</p>
                <a href="tel:7891387813" className="bg-white text-[#D97706] px-6 py-2.5 rounded-full font-bold text-sm hover:shadow-lg transition-all block">
                  +91 7891387813
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Courses Grid */}
      <section className="py-16 bg-gradient-to-br from-[#f8faff] to-[#eef2ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-title mb-2">Compare All Programs</h2>
            <div className="gold-divider mx-auto"></div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white">
                  <th className="text-left p-4 font-semibold text-sm">Course</th>
                  <th className="text-center p-4 font-semibold text-sm">Duration</th>
                  <th className="text-center p-4 font-semibold text-sm">Age Group</th>
                  <th className="text-center p-4 font-semibold text-sm">Day Scholar</th>
                  <th className="text-center p-4 font-semibold text-sm">Hostel</th>
                  <th className="text-center p-4 font-semibold text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course, i) => (
                  <tr key={i} className={`border-b border-gray-50 hover:bg-blue-50/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}`}>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{course.icon}</span>
                        <div>
                          <p className="font-semibold text-[#1E3A8A] text-sm">{course.title}</p>
                          <p className="text-gray-500 text-xs">{course.subtitle}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-center text-sm text-gray-600">{course.duration}</td>
                    <td className="p-4 text-center text-sm text-gray-600">{course.ageGroup}</td>
                    <td className="p-4 text-center font-semibold text-[#1E3A8A]">{course.fees}</td>
                    <td className="p-4 text-center font-semibold text-[#D97706]">{course.hostelFees}</td>
                    <td className="p-4 text-center">
                      <Link to="/admissions" className="bg-[#1E3A8A] text-white text-xs px-4 py-2 rounded-full hover:bg-[#2563EB] transition-colors">
                        Apply
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

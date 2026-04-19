import { Link } from 'react-router-dom';

const toppers = [
  { name: 'Ananya Sharma', school: 'JNV Alwar', rank: 'AIR 3 – Class 6', year: '2024', subject: 'Score: 98/100', img: 'https://i.pravatar.cc/150?img=47' },
  { name: 'Ravi Kumar', school: 'Sainik School Ajmer', rank: 'AIR 8', year: '2024', subject: 'AISSEE 2024', img: 'https://i.pravatar.cc/150?img=12' },
  { name: 'Priya Meena', school: 'JNV Jaipur', rank: 'AIR 5 – Class 6', year: '2024', subject: 'Score: 96/100', img: 'https://i.pravatar.cc/150?img=48' },
  { name: 'Amit Singh', school: 'Military School Ajmer', rank: 'Selected', year: '2023', subject: 'Entrance 2023', img: 'https://i.pravatar.cc/150?img=15' },
  { name: 'Sunita Yadav', school: 'JNV Bharatpur', rank: 'AIR 12', year: '2024', subject: 'Score: 94/100', img: 'https://i.pravatar.cc/150?img=49' },
  { name: 'Deepak Verma', school: 'Sainik School Bijapur', rank: 'AIR 4', year: '2023', subject: 'AISSEE 2023', img: 'https://i.pravatar.cc/150?img=18' },
  { name: 'Kavita Rajput', school: 'JNV Dausa', rank: 'Class 9 Selected', year: '2024', subject: 'Lateral Entry', img: 'https://i.pravatar.cc/150?img=50' },
  { name: 'Mohan Gurjar', school: 'JNV Alwar', rank: 'AIR 7 – Class 6', year: '2023', subject: 'Score: 97/100', img: 'https://i.pravatar.cc/150?img=22' },
  { name: 'Pooja Kumari', school: 'Sainik School Lucknow', rank: 'AIR 15', year: '2024', subject: 'AISSEE 2024', img: 'https://i.pravatar.cc/150?img=51' },
  { name: 'Rahul Bairwa', school: 'JNV Sawai Madhopur', rank: 'Class 6 Selected', year: '2024', subject: 'Score: 93/100', img: 'https://i.pravatar.cc/150?img=25' },
  { name: 'Seema Nagar', school: 'JNV Sikar', rank: 'AIR 19', year: '2023', subject: 'Score: 91/100', img: 'https://i.pravatar.cc/150?img=52' },
  { name: 'Vikas Saini', school: 'Sainik School Kapurthala', rank: 'AIR 6', year: '2024', subject: 'AISSEE 2024', img: 'https://i.pravatar.cc/150?img=29' },
];

const yearlyStats = [
  { year: '2024', jnv: 48, sainik: 22, military: 8, total: 78 },
  { year: '2023', jnv: 52, sainik: 18, military: 10, total: 80 },
  { year: '2022', jnv: 45, sainik: 15, military: 7, total: 67 },
  { year: '2021', jnv: 38, sainik: 12, military: 5, total: 55 },
  { year: '2020', jnv: 35, sainik: 10, military: 4, total: 49 },
];

export default function Results() {
  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb mb-4">
            <Link to="/">Home</Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-white">Results</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-['Playfair_Display'] mb-4">Results & Achievements</h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            Celebrating excellence — over 1200 students selected in JNV, Sainik Schools, and Military Schools since 2007
          </p>
        </div>
      </div>

      {/* Achievement Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { n: '1200+', l: 'Total Selections', icon: '🏆', color: '#1E3A8A' },
              { n: '700+', l: 'JNV Selections', icon: '📖', color: '#D97706' },
              { n: '350+', l: 'Sainik School', icon: '⚔️', color: '#10B981' },
              { n: '150+', l: 'Military School', icon: '🎖️', color: '#7C3AED' },
            ].map((stat, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 text-center text-white shadow-lg"
                style={{ background: `linear-gradient(135deg, ${stat.color}, ${stat.color}cc)` }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <p className="text-4xl font-extrabold mb-1">{stat.n}</p>
                <p className="text-white/80 text-sm">{stat.l}</p>
              </div>
            ))}
          </div>

          {/* Success Rate Banner */}
          <div className="bg-gradient-to-r from-[#D97706] to-[#F59E0B] rounded-3xl p-8 text-white text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-2">95%</h2>
            <p className="text-xl font-semibold mb-2">Success Rate</p>
            <p className="text-white/90 text-sm">Out of every 100 students who complete our coaching, 95 get selected in their target school</p>
          </div>
        </div>
      </section>

      {/* Top Performers */}
      <section className="py-16 bg-gradient-to-br from-[#f8faff] to-[#eef2ff]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">Hall of Fame</p>
            <h2 className="section-title mb-3">Our Star Performers</h2>
            <div className="gold-divider mx-auto mb-4"></div>
            <p className="section-subtitle mx-auto text-center">Students who made Nirwan Academy proud with exceptional results</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {toppers.map((student, i) => (
              <div key={i} className="result-card group">
                <div className="relative">
                  <img
                    src={student.img}
                    alt={student.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/40 to-transparent p-3">
                    <span className="bg-[#D97706] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                      {student.year}
                    </span>
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1E3A8A]/90 to-transparent p-3">
                    <p className="text-[#D97706] font-bold text-sm">{student.rank}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[#1E3A8A] text-base mb-0.5">{student.name}</h3>
                  <p className="text-gray-600 text-xs mb-1">{student.school}</p>
                  <p className="text-[#10B981] text-xs font-semibold flex items-center gap-1">
                    <i className="fas fa-trophy"></i> {student.subject}
                  </p>
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
      </section>

      {/* Year-wise Results */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#D97706] font-semibold text-sm uppercase tracking-widest mb-2">Track Record</p>
            <h2 className="section-title mb-3">Year-wise Selection Data</h2>
            <div className="gold-divider mx-auto"></div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden max-w-3xl mx-auto">
              <thead>
                <tr className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white">
                  <th className="p-4 text-left font-semibold">Year</th>
                  <th className="p-4 text-center font-semibold">JNV</th>
                  <th className="p-4 text-center font-semibold">Sainik School</th>
                  <th className="p-4 text-center font-semibold">Military School</th>
                  <th className="p-4 text-center font-semibold text-[#D97706]">Total</th>
                </tr>
              </thead>
              <tbody>
                {yearlyStats.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-50 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="p-4 font-bold text-[#1E3A8A]">{row.year}</td>
                    <td className="p-4 text-center">
                      <span className="bg-blue-50 text-[#1E3A8A] font-semibold text-sm px-3 py-1 rounded-full">{row.jnv}</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="bg-green-50 text-[#10B981] font-semibold text-sm px-3 py-1 rounded-full">{row.sainik}</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="bg-purple-50 text-purple-600 font-semibold text-sm px-3 py-1 rounded-full">{row.military}</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="bg-[#D97706] text-white font-bold text-sm px-4 py-1 rounded-full">{row.total}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white">
                  <td className="p-4 font-bold">Total (5 Yrs)</td>
                  <td className="p-4 text-center font-bold">218</td>
                  <td className="p-4 text-center font-bold">77</td>
                  <td className="p-4 text-center font-bold">34</td>
                  <td className="p-4 text-center font-bold text-[#D97706]">329</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials from Students */}
      <section className="py-16 bg-gradient-to-br from-[#1E3A8A] to-[#1e40af]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white font-['Playfair_Display'] mb-2">Student Success Stories</h2>
            <p className="text-blue-200 text-sm">Words from our selected students</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Ananya Sharma',
                result: 'JNV Alwar – AIR 3',
                quote: 'Nirwan Academy gave me the confidence and knowledge to crack JNV. The mock tests and personal attention from teachers made all the difference!',
                img: 'https://i.pravatar.cc/150?img=47',
              },
              {
                name: 'Ravi Kumar',
                result: 'Sainik School Ajmer – AIR 8',
                quote: 'The physical training along with academics at Nirwan prepared me perfectly for Sainik School. Director Ajay sir\'s guidance was invaluable!',
                img: 'https://i.pravatar.cc/150?img=12',
              },
              {
                name: 'Priya Meena',
                result: 'JNV Jaipur – AIR 5',
                quote: 'I came from a small village with big dreams. Nirwan Academy turned my dream into reality. The hostel facility and dedicated teachers changed my life!',
                img: 'https://i.pravatar.cc/150?img=48',
              },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img src={s.img} alt={s.name} className="w-14 h-14 rounded-full border-2 border-[#D97706] object-cover" />
                  <div>
                    <p className="text-white font-bold">{s.name}</p>
                    <p className="text-[#D97706] text-xs font-medium">{s.result}</p>
                  </div>
                </div>
                <p className="text-blue-100 text-sm italic leading-relaxed">"{s.quote}"</p>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, j) => (
                    <i key={j} className="fas fa-star text-[#D97706] text-xs"></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="section-title mb-4">Be the Next Success Story!</h2>
          <p className="text-gray-600 mb-8">Join Nirwan Academy and start your journey towards JNV or Sainik School selection. Limited seats available!</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admissions" className="btn-primary">
              <i className="fas fa-graduation-cap"></i> Apply for Admission
            </Link>
            <Link to="/contact" className="btn-gold">
              <i className="fas fa-phone"></i> Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

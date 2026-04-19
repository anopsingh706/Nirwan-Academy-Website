import { useState } from 'react';

export default function FloatingWidgets() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMsg, setChatMsg] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { from: 'bot', text: 'Hello! Welcome to Nirwan Academy 🎓 How can I help you today?' },
  ]);

  const quickReplies = [
    'Admission Process',
    'Fee Structure',
    'Hostel Details',
    'Course Information',
  ];

  const botReply = (msg: string): string => {
    const m = msg.toLowerCase();
    if (m.includes('fee') || m.includes('cost')) return 'Our fee structure: JNV Class 6: ₹3,500/month, Sainik School: ₹5,000/month. Hostel with food is ₹5,000-6,000/month. Call us at +91 7891387813 for details!';
    if (m.includes('hostel') || m.includes('accommodation')) return 'We have premium hostel facilities for both boys and girls with 24/7 supervision, nutritious meals, CCTV security, and study rooms. Contact us for availability!';
    if (m.includes('admission') || m.includes('apply')) return 'Admissions are open for 2025-26 batch! Visit our Admissions page or call +91 7891387813. You can also apply online through our website!';
    if (m.includes('course') || m.includes('class')) return 'We offer: JNV Class 6 & 9 Coaching, Sainik School Coaching, Military School Coaching, and Higher Primary (Class 1-8). Visit our Courses page for details!';
    if (m.includes('result') || m.includes('success')) return 'We have a 95% success rate with 1200+ total selections since 2007! Check our Results page for detailed information.';
    if (m.includes('transport') || m.includes('bus')) return 'Yes, we provide bus transport covering 20+ villages in Alwar district. Contact us to check if your area is covered!';
    return 'Thank you for your question! Please call us at +91 7891387813 or WhatsApp us for immediate assistance. Our team is available Mon-Sat 6AM-8PM.';
  };

  const sendMessage = (msg: string) => {
    if (!msg.trim()) return;
    const newHistory = [...chatHistory, { from: 'user', text: msg }];
    setChatHistory(newHistory);
    setChatMsg('');
    setTimeout(() => {
      setChatHistory(prev => [...prev, { from: 'bot', text: botReply(msg) }]);
    }, 800);
  };

  return (
    <>
      {/* WhatsApp Float */}
      <a
        href="https://wa.me/917891387813?text=Hello%20Nirwan%20Academy%2C%20I%20want%20to%20know%20about%20admissions."
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        title="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-white text-2xl"></i>
      </a>

      {/* Chatbot */}
      <div className="chatbot-widget">
        {/* Chat Window */}
        {chatOpen && (
          <div className="mb-3 bg-white rounded-2xl shadow-2xl border border-gray-100 w-80 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <img src="/logo.png" alt="Nirwan" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Nirwan Academy</p>
                  <p className="text-blue-200 text-xs flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-400 rounded-full inline-block"></span> Online • Responds instantly
                  </p>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-white/70 hover:text-white">
                <i className="fas fa-times"></i>
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 h-60 overflow-y-auto space-y-3 bg-gray-50">
              {chatHistory.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.from === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-[#1E3A8A] flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                      <i className="fas fa-robot text-white text-xs"></i>
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                      msg.from === 'user'
                        ? 'bg-[#1E3A8A] text-white rounded-br-sm'
                        : 'bg-white text-gray-700 shadow-sm rounded-bl-sm'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Replies */}
            <div className="px-4 py-2 flex gap-1.5 flex-wrap border-t border-gray-100 bg-white">
              {quickReplies.map((qr, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(qr)}
                  className="text-xs bg-blue-50 text-[#1E3A8A] px-2.5 py-1 rounded-full border border-blue-200 hover:bg-[#1E3A8A] hover:text-white transition-colors"
                >
                  {qr}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-100 flex gap-2 bg-white">
              <input
                type="text"
                value={chatMsg}
                onChange={e => setChatMsg(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage(chatMsg)}
                placeholder="Type a message..."
                className="flex-1 bg-gray-100 rounded-full px-3 py-2 text-xs outline-none focus:ring-2 focus:ring-[#1E3A8A]/30"
              />
              <button
                onClick={() => sendMessage(chatMsg)}
                className="w-8 h-8 bg-[#1E3A8A] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#2563EB] transition-colors"
              >
                <i className="fas fa-paper-plane text-white text-xs"></i>
              </button>
            </div>
          </div>
        )}

        {/* Chat Toggle Button */}
        <div className="flex justify-end">
          <button
            onClick={() => setChatOpen(!chatOpen)}
            className="w-14 h-14 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all relative"
          >
            {!chatOpen ? (
              <>
                <i className="fas fa-comment-dots text-white text-xl"></i>
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#D97706] rounded-full flex items-center justify-center text-white text-xs font-bold">1</span>
              </>
            ) : (
              <i className="fas fa-times text-white text-lg"></i>
            )}
          </button>
        </div>
      </div>

      {/* Call Float */}
      <div className="fixed bottom-[165px] right-[30px] z-50">
        <a
          href="tel:7891387813"
          className="w-12 h-12 bg-gradient-to-br from-[#D97706] to-[#F59E0B] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all"
          title="Call Us"
        >
          <i className="fas fa-phone text-white text-base"></i>
        </a>
      </div>
    </>
  );
}

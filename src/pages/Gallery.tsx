// src/pages/Gallery.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Achievements', 'Sports & Games', 'Campus Life', 'Hostel', 'Classrooms', 'Events'];

const galleryImages = [
  { id: 1, src: '/sainic_school_jaipur.webp', title: 'Sainik School Jaipur', category: 'Achievements' },
  { id: 2, src: '/result2.webp', title: 'Result Announcement', category: 'Achievements' },
  { id: 3, src: '/lovekush_photo.webp', title: 'Sainik School', category: 'Achievements' },
  { id: 4, src: '/Gallery photos/achivements3.webp', title: 'JNV + Sainic School salected', category: 'Achievements' },
  { id: 5, src: '/Gallery photos/hostel2.webp', title: 'Prayer Session', category: 'Campus Life' },
  { id: 6, src: '/Gallery photos/scout.webp', title: 'Scout', category: 'Achievements' },
  { id: 7, src: '/Gallery photos/scout2.webp', title: 'Scouts', category: 'Achievements' },
  { id: 8, src: '/Gallery photos/samman.webp', title: 'JNV Selection', category: 'Achievements' },
  { id: 9, src: '/Gallery photos/samman (3).webp', title: 'JNV Salected', category: 'Achievements' },
  { id: 10, src: '/Gallery photos/samman (2).webp', title: 'JNV Selection', category: 'Achievements' },
  { id: 11, src: '/Gallery photos/sainik.webp', title: 'Sainik School Gold madelist', category: 'Achievements' },
  { id: 12, src: '/Gallery photos/samman (1).webp', title: 'JNV Salection', category: 'Achievements' },
  { id: 13, src: '/Gallery photos/samman (4).webp', title: 'JNV salection', category: 'Achievements' },
  { id: 14, src: '/Gallery photos/trofi.webp', title: 'JNV salected', category: 'Achievements' },
  { id: 15, src: '/achivers.webp', title: 'Sanik School Salected', category: 'Achievements' },
  { id: 16, src: '/Gallery photos/Admins.webp', title: 'Admins', category: 'Campus Life' },
  { id: 17, src: '/Gallery photos/group7.webp', title: 'Ambedkar jayanti', category: 'Events' },
  { id: 18, src: '/Gallery photos/group10.webp', title: 'Navratri Utsav', category: 'Events' },
  { id: 19, src: '/Gallery photos/hostel.webp', title: 'Hostel Life', category: 'Hostel' },
  { id: 20, src: '/Gallery photos/hostel2.webp', title: 'Prayer Session', category: 'Hostel' },
  { id: 21, src: '/Gallery photos/pooja.webp', title: 'Pooja', category: 'Campus Life' },
  { id: 22, src: '/Gallery photos/activities.webp', title: 'stage drama', category: 'Campus Life' },
  { id: 23, src: '/Gallery photos/function3.webp', title: 'Attanded An Event with all', category: 'Sports & Games' },
  { id: 24, src: '/Gallery photos/traval.webp', title: 'Travel', category: 'Events' },
  { id: 25, src: '/Gallery photos/RSS.webp', title: 'Sangh shatabdi', category: 'Campus Life' },
  { id: 26, src: '/Gallery photos/RSS2.webp', title: 'RSS speech', category: 'Campus Life' },
  { id: 27, src: '/Gallery photos/RSS3.webp', title: 'RSS Sashtra pujan', category: 'Campus Life' },
  { id: 28, src: '/Gallery photos/RSS4.webp', title: 'RSS Meeting', category: 'Campus Life' },
  { id: 29, src: '/Gallery photos/traval2.webp', title: 'Yatra', category: 'Campus Life' },
  { id: 30, src: '/Gallery photos/achivements2.webp', title: 'JNV + Sainik school salection', category: 'Achievements' },
  { id: 31, src: '/Gallery photos/activities2.webp', title: 'EVents ', category: 'Events' },
  { id: 32, src: '/Gallery photos/function.webp', title: 'attended a Function with children', category: 'Events' },
  { id: 33, src: '/Gallery photos/group6.webp', title: 'Attended a function with children', category: 'Events' },
  { id: 34, src: '/Gallery photos/group8.webp', title: 'Movie Time', category: 'Events' },
  { id: 35, src: '/Gallery photos/holi.webp', title: 'Holi function', category: 'Campus Life' },
  { id: 36, src: '/Gallery photos/safari.webp', title: 'water safari', category: 'Events' },
  
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxImg, setLightboxImg] = useState<{ src: string; title: string } | null>(null);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div>
      {/* Page Hero */}
      <div className="page-hero text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="breadcrumb mb-4">
            <Link to="/">Home</Link>
            <i className="fas fa-chevron-right text-xs"></i>
            <span className="text-white">Gallery</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold font-['Playfair_Display'] mb-4">
            Photo Gallery
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl">
            A visual journey through life at Nirwan Academy — achievements, activities, and cherished moments
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`tab-btn text-sm ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((img) => (
              <div
                key={img.id}
                className="gallery-item cursor-pointer rounded-xl overflow-hidden relative group aspect-square shadow-sm"
                onClick={() => setLightboxImg({ src: img.src, title: img.title })}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A8A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="text-white text-xs font-medium">{img.title}</p>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                    <i className="fas fa-expand text-[#1E3A8A] text-xs"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ──────────────────────────────────────────
              Upload CTA block REMOVED from here
          ────────────────────────────────────────── */}

        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative max-w-4xl w-full mx-4"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#D97706] transition-colors text-xl"
            >
              <i className="fas fa-times"></i> Close
            </button>
            <img
              src={lightboxImg.src}
              alt={lightboxImg.title}
              className="w-full rounded-2xl max-h-[80vh] object-contain"
            />
            <p className="text-white text-center mt-3 text-sm">
              {lightboxImg.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
// ...existing code...
import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Jane Mwangi',
    review: 'Tomic Security provided us with top-notch service. Their guards are professional and always on time!',
    company: 'Mwangi Holdings',
  },
  {
    name: 'Samuel Otieno',
    review: 'Very responsive and reliable. I feel much safer knowing Tomic is protecting my business.',
    company: 'Otieno Supermarket',
  },
  {
    name: 'Amina Yusuf',
    review: 'Excellent customer support and quick response. Highly recommended for anyone needing security solutions.',
    company: 'Yusuf Properties',
  },
  {
    name: 'Peter Kimani',
    review: 'Professional team and great technology. Tomic Security is the best provider we have worked with.',
    company: 'Kimani Logistics',
  },
];

const carouselVariants = {
  animate: {
    x: [0, -100 * (reviews.length - 1)],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: reviews.length * 4,
        ease: 'linear',
      },
    },
  },
};

import React, { useState } from 'react';
// ...existing code...

const TestimonialsCarousel = () => {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <section className="py-10 bg-gradient-to-br from-yellow-100 via-white to-red-50">
      <div className="container-custom max-w-4xl mx-auto relative">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center text-black">Client Reviews</h2>
        <button
          className="absolute top-2 right-2 z-10 bg-gradient-to-br from-red-200 via-yellow-200 to-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-lg hover:bg-red-400 transition-colors"
          onClick={() => setVisible(false)}
          aria-label="Close reviews carousel"
        >
          ×
        </button>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-white w-full">
          <div className="flex space-x-6 md:space-x-8 py-2" style={{ minWidth: '320px' }}>
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className="min-w-[260px] max-w-xs md:min-w-[320px] md:max-w-sm bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-yellow-200/40 flex flex-col items-center mx-2"
                style={{ flex: '0 0 auto' }}
              >
                <div className="text-base md:text-lg text-black mb-4 italic">“{r.review}”</div>
                <div className="font-bold text-yellow-700 text-lg md:text-xl mb-1">{r.name}</div>
                <div className="text-xs md:text-sm text-gray-500">{r.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

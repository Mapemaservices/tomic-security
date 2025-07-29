import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
const testimonials = [
  {
    name: 'Zenifar Mwangi',
    role: 'Business Owner',
    location: 'Nairobi, Kenya',
    rating: 5,
    text: 'Tomic Security provided customized training for our team and conducted a thorough risk assessment. Their professionalism and attention to detail exceeded our expectations. Our facility has never been more secure.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b5c0?w=80&h=80&fit=crop&crop=face'
  },
  {
    name: 'Mike Muteti',
    role: 'Business Owner',
    location: 'Mombasa, Kenya',
    rating: 5,
    text: 'The safety improvements implemented by Tomic Security have been remarkable. Their 24/7 monitoring service and quick response times give us peace of mind. Highly recommended for any business.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face'
  },
  {
    name: 'Sarah Kimani',
    role: 'Factory Manager',
    location: 'Kisumu, Kenya',
    rating: 5,
    text: 'Their industrial security solutions are top-notch. The CCTV system they installed covers every corner of our facility, and the access control system has streamlined our operations significantly.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % testimonials.length;
      setShowModal(true);
      return next;
    });
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => {
      const prevIdx = (prev - 1 + testimonials.length) % testimonials.length;
      setShowModal(true);
      return prevIdx;
    });
  };

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);


  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-gradient-to-br from-orange via-gold/30 to-white">
      {/* Animated glassmorphism background */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.18 }} className="absolute inset-0 pointer-events-none">
        <motion.div initial={{ scale: 0.7 }} animate={{ scale: 1 }} transition={{ duration: 2, ease: 'easeOut' }} className="absolute top-16 left-16 w-40 h-40 border-4 border-gold/40 rounded-full shadow-2xl blur-xl"></motion.div>
        <motion.div initial={{ scale: 0.7 }} animate={{ scale: 1 }} transition={{ duration: 2, delay: 0.2, ease: 'easeOut' }} className="absolute bottom-16 right-16 w-56 h-56 border-4 border-orange/40 rounded-full shadow-2xl blur-xl"></motion.div>
        <motion.div initial={{ scale: 0.7 }} animate={{ scale: 1 }} transition={{ duration: 2, delay: 0.4, ease: 'easeOut' }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-4 border-gray/20 rounded-full shadow-2xl blur-xl"></motion.div>
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.4,0,0.2,1] }} className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 text-orange drop-shadow-xl tracking-tight">What They Say</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed font-medium">
            Hear from our satisfied clients about their experience with Tomic Security.
          </p>
        </motion.div>

        <div className="flex flex-col items-center justify-center">
          <div className="relative w-full max-w-2xl">
            {/* Navigation buttons */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2">
              <motion.button whileHover={{ scale: 1.15, boxShadow: '0 0 16px #FFD700' }} onClick={prevTestimonial} className="bg-orange text-white rounded-full p-3 shadow-xl hover:bg-gold transition-colors border-2 border-gold/40">
                <ChevronLeft className="w-7 h-7" />
              </motion.button>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2">
              <motion.button whileHover={{ scale: 1.15, boxShadow: '0 0 16px #FFD700' }} onClick={nextTestimonial} className="bg-orange text-white rounded-full p-3 shadow-xl hover:bg-gold transition-colors border-2 border-gold/40">
                <ChevronRight className="w-7 h-7" />
              </motion.button>
            </div>

            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.4,0,0.2,1] }} className="px-8">
              <motion.div
                whileHover={{ scale: 1.03, boxShadow: '0 12px 48px rgba(255,140,0,0.18)' }}
                className="card-elegant bg-white/70 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gold/40 py-10 px-8 text-center relative"
                onClick={() => openModal(currentIndex)}
                style={{ cursor: 'pointer' }}
              >
                {/* Floating glowing border */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.5, scale: 1 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="absolute -top-4 -left-4 w-20 h-20 border-4 border-orange/40 rounded-full blur-xl"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.5, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                  className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-gold/40 rounded-full blur-xl"
                />
                <div className="flex items-center justify-center mb-4">
                  <Quote className="w-10 h-10 text-gold drop-shadow-lg" />
                </div>
                <p className="text-xl text-black mb-8 font-semibold leading-relaxed">{testimonials[currentIndex].text}</p>
                <div className="flex items-center justify-center space-x-2 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-orange drop-shadow" />
                  ))}
                </div>
                <div className="flex items-center justify-center space-x-5">
                  <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-14 h-14 rounded-full border-2 border-gold shadow-xl" />
                  <div className="text-left">
                    <div className="font-extrabold text-gold text-xl">{testimonials[currentIndex].name}</div>
                    <div className="text-base text-gray-700 font-medium">{testimonials[currentIndex].role} • {testimonials[currentIndex].location}</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Modern dot indicators */}
        <div className="flex justify-center space-x-3 mt-6">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => openModal(index)}
              whileHover={{ scale: 1.2, boxShadow: '0 0 8px #FFD700' }}
              className={`w-4 h-4 rounded-full border-2 border-gold/40 transition-all duration-300 ${
                index === currentIndex ? 'bg-orange shadow-lg' : 'bg-gold/30'
              }`}
            />
          ))}
        </div>

        {/* Pop-up Modal */}
        {showModal && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="relative bg-white/90 rounded-3xl shadow-2xl border-2 border-gold/40 p-10 max-w-md w-full text-center"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-black bg-orange/80 hover:bg-red/80 rounded-full p-2 shadow-lg transition-colors"
                aria-label="Close"
              >
                <span className="text-xl font-bold">×</span>
              </button>
              <div className="flex items-center justify-center mb-4">
                <Quote className="w-10 h-10 text-gold drop-shadow-lg" />
              </div>
              <p className="text-xl text-black mb-8 font-semibold leading-relaxed">{testimonials[currentIndex].text}</p>
              <div className="flex items-center justify-center space-x-2 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-orange drop-shadow" />
                ))}
              </div>
              <div className="flex items-center justify-center space-x-5">
                <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-14 h-14 rounded-full border-2 border-gold shadow-xl" />
                <div className="text-left">
                  <div className="font-extrabold text-gold text-xl">{testimonials[currentIndex].name}</div>
                  <div className="text-base text-gray-700 font-medium">{testimonials[currentIndex].role} • {testimonials[currentIndex].location}</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Testimonials;

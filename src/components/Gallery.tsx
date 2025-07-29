import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { motion } from 'framer-motion';
import gallery1 from '@/assets/WhatsApp Image 2025-07-26 at 17.36.00 (2).jpeg';
import gallery2 from '@/assets/WhatsApp Image 2025-07-26 at 17.36.00 (3).jpeg';
import gallery3 from '@/assets/WhatsApp Image 2025-07-26 at 17.36.01.jpeg';
import gallery4 from '@/assets/WhatsApp Image 2025-07-26 at 17.36.02.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: gallery1,
      title: 'Professional Security Personnel',
  
    },
    {
      src: gallery2,
      title: 'CCTV Installation',
      
    },
    {
      src: gallery3,
      title: 'Biometric Access Control',
 
    },
    {
      src: gallery4,
      title: 'Security Planning',
    
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-orange/10 via-gold/10 to-gray/10">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.4,0,0.2,1] }} className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gold drop-shadow-lg">
            See Our Experience
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Explore our portfolio of successful security implementations and witness 
            the quality of our work across various sectors.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(255,140,0,0.12)', filter: 'brightness(1.08)' }}
              transition={{ duration: 0.6, ease: [0.4,0,0.2,1] }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-xl backdrop-blur-lg bg-white/40 border border-gold/30 hover:bg-orange/10 transition-all duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={image.src}
                  alt={image.title}
                  initial={{ scale: 0.98, opacity: 0.8 }}
                  animate={{ scale: 1, opacity: 1 }}
                  whileHover={{ scale: 1.08, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
                {/* Overlay - moved inside card */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                  </div>
                </div>
              </div>
              <motion.div initial={{ opacity: 0, y: 20 }} whileHover={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="absolute bottom-4 left-4 right-4 bg-black/60 text-white rounded-lg px-4 py-2 flex items-center justify-between backdrop-blur-md">
                <span className="font-semibold text-lg text-gold drop-shadow-lg">{image.title}</span>
                <ZoomIn className="w-5 h-5 text-orange" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal for selected image */}
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg">
            <div className="relative max-w-3xl w-full mx-4">
              <img src={selectedImage} alt="Selected" className="w-full h-auto rounded-2xl shadow-2xl border-4 border-gold" />
              <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 bg-orange text-white rounded-full p-2 shadow-lg hover:bg-gold transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;

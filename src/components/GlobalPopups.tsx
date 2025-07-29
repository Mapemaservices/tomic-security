import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const popupMessages = [

  'Our guards are trained for rapid response 24/7.',
  
  'Priority Support means you get help instantly.',
  'Incident Reporting is available in all packages.',
  'Your safety is our top priority!',
  'Ask us about biometric access solutions!',
  'We offer daily site assessments for all clients.',
  'Executive protection available on request.'
];

const GlobalPopups = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');

  useEffect(() => {
    let timer;
    const showRandomPopup = () => {
      setPopupContent(popupMessages[Math.floor(Math.random() * popupMessages.length)]);
      setShowPopup(true);
      timer = setTimeout(() => setShowPopup(false), 3500);
    };
    const interval = setInterval(showRandomPopup, 12000);
    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const closePopup = () => setShowPopup(false);

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-2xl"
          style={{ pointerEvents: 'auto' }}
        >
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 60, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative bg-gradient-to-br from-orange via-gold to-red rounded-3xl shadow-2xl border-2 border-gold/40 p-10 max-w-lg w-full text-center text-white font-bold text-xl backdrop-blur-2xl"
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-white bg-red/80 hover:bg-orange/80 rounded-full p-2 shadow-lg transition-colors"
              aria-label="Close"
              style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
            >
              ×
            </button>
            <div className="mb-6">
              <span className="drop-shadow-lg">{popupContent}</span>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <span className="bg-white/20 px-4 py-2 rounded-xl text-orange font-semibold shadow">Tomic Secure</span>
              <span className="bg-white/20 px-4 py-2 rounded-xl text-gold font-semibold shadow">Modern Security</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobalPopups;

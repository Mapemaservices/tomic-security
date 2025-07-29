import React from 'react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  const phoneNumber = '254724630001';
  const message = 'Hello! I would like to know more about your security solutions as a provider.';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.button
        aria-label="Chat on WhatsApp"
        className="bg-gradient-to-br from-yellow-400 via-red-500 to-black hover:from-yellow-500 hover:to-red-600 text-white p-3 rounded-full shadow-2xl animate-float-glow transition-all duration-300 group border-2 border-yellow-400/60"
        onClick={handleWhatsAppClick}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Official WhatsApp SVG icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="currentColor" className="w-7 h-7">
          <path d="M16 3C9.373 3 4 8.373 4 15c0 2.385.832 4.624 2.348 6.484L4 29l7.684-2.348A12.94 12.94 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.97 0-3.89-.512-5.56-1.48l-.397-.23-4.56 1.393 1.393-4.56-.23-.397A9.93 9.93 0 016 15c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10zm5.07-7.43c-.276-.138-1.63-.805-1.882-.897-.252-.092-.435-.138-.618.138-.184.276-.71.897-.87 1.083-.161.184-.322.207-.598.069-.276-.138-1.165-.429-2.22-1.366-.82-.731-1.375-1.634-1.537-1.91-.161-.276-.017-.425.121-.563.124-.123.276-.322.414-.483.138-.161.184-.276.276-.46.092-.184.046-.345-.023-.483-.069-.138-.618-1.492-.847-2.043-.223-.536-.45-.463-.618-.472l-.527-.009c-.184 0-.483.069-.737.345-.253.276-.966.945-.966 2.304s.99 2.677 1.128 2.864c.138.184 1.948 2.98 4.727 4.057.661.285 1.176.455 1.579.583.663.211 1.267.181 1.743.11.532-.079 1.63-.666 1.862-1.309.23-.643.23-1.194.161-1.309-.069-.115-.253-.184-.529-.322z" />
        </svg>
      <style>{`
        @keyframes float-glow {
          0%, 100% { transform: translateY(0) scale(1); box-shadow: 0 4px 32px 0 rgba(255,221,51,0.25), 0 1.5px 8px 0 rgba(255,0,0,0.18); }
          50% { transform: translateY(-10px) scale(1.08); box-shadow: 0 8px 48px 8px rgba(255,0,0,0.32), 0 2px 12px 0 rgba(255,221,51,0.22); }
        }
        .animate-float-glow {
          animation: float-glow 2.8s ease-in-out infinite;
        }
      `}</style>
        <span className="absolute -top-2 -left-2 bg-red text-white text-xs rounded-full w-6 h-6 flex items-center justify-center pulse-gentle border-2 border-gold">
          1
        </span>
      </motion.button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-black text-gold text-sm px-2 py-1 rounded-lg whitespace-nowrap border border-gold">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppButton;
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '254724630001';
  const message = 'Hello! I would like to know more about your security services.';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-orange hover:bg-gold text-white p-2 rounded-full shadow-float pulse-gentle transition-all duration-300 group border-2 border-gold"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-2 -left-2 bg-red text-white text-xs rounded-full w-6 h-6 flex items-center justify-center pulse-gentle border-2 border-gold">
          1
        </span>
      </button>
      
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
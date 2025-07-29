import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '254724630001';
  const message = 'Hello! I would like to know more about your security solutions as a provider.';
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-gradient-to-br from-green-400 via-green-600 to-green-800 hover:from-green-500 hover:to-green-700 text-white p-3 rounded-full shadow-2xl animate-float-glow transition-all duration-300 group border-2 border-green-400/60"
        title="Chat with us on WhatsApp"
        style={{ boxShadow: '0 4px 32px 0 rgba(34,197,94,0.25), 0 1.5px 8px 0 rgba(34,197,94,0.18)' }}
      >
        <MessageCircle className="w-7 h-7" />
      <style>{`
        @keyframes float-glow {
          0%, 100% { transform: translateY(0) scale(1); box-shadow: 0 4px 32px 0 rgba(34,197,94,0.25), 0 1.5px 8px 0 rgba(34,197,94,0.18); }
          50% { transform: translateY(-10px) scale(1.08); box-shadow: 0 8px 48px 8px rgba(34,197,94,0.32), 0 2px 12px 0 rgba(34,197,94,0.22); }
        }
        .animate-float-glow {
          animation: float-glow 2.8s ease-in-out infinite;
        }
      `}</style>
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
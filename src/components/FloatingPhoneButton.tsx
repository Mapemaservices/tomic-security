import React from 'react';

const FloatingPhoneButton = () => {
  return (
    <a
      href="tel:0724630001"
      aria-label="Call Tomic Security"
      className="fixed bottom-24 right-6 z-50 bg-red-600 hover:bg-yellow-400 text-white hover:text-black rounded-full w-14 h-14 flex items-center justify-center shadow-2xl border-4 border-yellow-300 transition-colors duration-300 group"
      style={{ boxShadow: '0 4px 32px 0 rgba(255,0,0,0.18), 0 1.5px 8px 0 rgba(255,221,51,0.18)' }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="32" height="32" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5.75A2.75 2.75 0 015.75 3h.5A2.75 2.75 0 019 5.75v.5A2.75 2.75 0 016.25 9h-.5A2.75 2.75 0 013 6.25v-.5zm0 12.5A2.75 2.75 0 015.75 21h.5A2.75 2.75 0 019 18.25v-.5A2.75 2.75 0 016.25 15h-.5A2.75 2.75 0 013 17.75v.5zm12.5-12.5A2.75 2.75 0 0118.25 3h.5A2.75 2.75 0 0121 5.75v.5A2.75 2.75 0 0118.25 9h-.5A2.75 2.75 0 0115 6.25v-.5zm0 12.5A2.75 2.75 0 0118.25 21h.5A2.75 2.75 0 0121 18.25v-.5A2.75 2.75 0 0118.25 15h-.5A2.75 2.75 0 0115 17.75v.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8" />
      </svg>
      <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full px-2 py-0.5 font-bold border-2 border-white shadow">Call</span>
    </a>
  );
};

export default FloatingPhoneButton;

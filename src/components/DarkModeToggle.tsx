import React, { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setDark(d => !d)}
      className="fixed top-4 left-4 z-[9999] w-10 h-10 rounded-full bg-black/80 text-yellow-300 flex items-center justify-center shadow-lg border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors text-xl"
      style={{ transition: 'background 0.2s' }}
    >
      {dark ? <span aria-hidden="true">☀️</span> : <span aria-hidden="true">🌙</span>}
    </button>
  );
};

export default DarkModeToggle;

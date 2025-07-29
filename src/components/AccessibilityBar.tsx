import React, { useState, useEffect } from 'react';

const defaultFontSize = 16;

const AccessibilityBar = () => {
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(defaultFontSize);

  useEffect(() => {
    document.body.style.fontSize = fontSize + 'px';
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast, fontSize]);

  const [open, setOpen] = useState(false);
  return (
    <div className="fixed top-4 right-4 z-[9999]">
      {/* Floating accessibility icon */}
      <button
        aria-label={open ? 'Close accessibility options' : 'Open accessibility options'}
        onClick={() => setOpen(o => !o)}
        className="w-10 h-10 rounded-full bg-yellow-300 shadow-lg flex items-center justify-center text-black text-2xl font-bold border-2 border-yellow-400 hover:bg-yellow-400 focus:outline-none"
        style={{ transition: 'background 0.2s' }}
      >
        {open ? '×' : <span aria-hidden="true">♿</span>}
      </button>
      {/* Accessibility controls popover */}
      {open && (
        <nav aria-label="Accessibility options" className="mt-2 bg-white/95 border border-yellow-200 rounded-xl shadow-xl px-4 py-3 text-sm flex flex-col gap-2 items-start min-w-[180px]">
          <button
            aria-label={highContrast ? 'Disable high contrast mode' : 'Enable high contrast mode'}
            onClick={() => setHighContrast(h => !h)}
            className={`w-full px-2 py-1 rounded font-bold border ${highContrast ? 'bg-black text-yellow-300 border-yellow-300' : 'bg-yellow-100 text-black border-yellow-300'} transition-colors`}
          >
            {highContrast ? 'Normal Contrast' : 'High Contrast'}
          </button>
          <div className="flex gap-2 w-full">
            <button
              aria-label="Increase font size"
              onClick={() => setFontSize(f => Math.min(f + 2, 28))}
              className="flex-1 px-2 py-1 rounded bg-yellow-100 border border-yellow-300 text-black font-bold"
            >A+</button>
            <button
              aria-label="Decrease font size"
              onClick={() => setFontSize(f => Math.max(f - 2, 12))}
              className="flex-1 px-2 py-1 rounded bg-yellow-100 border border-yellow-300 text-black font-bold"
            >A-</button>
            <button
              aria-label="Reset font size"
              onClick={() => setFontSize(defaultFontSize)}
              className="flex-1 px-2 py-1 rounded bg-yellow-100 border border-yellow-300 text-black font-bold"
            >A</button>
          </div>
          <a href="#main-content" className="underline text-blue-700 focus:outline-none" tabIndex={0} aria-label="Skip to main content">Skip to Content</a>
        </nav>
      )}
    </div>
  );
};

export default AccessibilityBar;

import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import '@/styles/colors.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Gallery', id: 'gallery' },
    { name: 'Career', id: 'career' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.4,0,0.2,1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gradient-to-r from-orange/60 via-gold/40 to-black/80 backdrop-blur-2xl shadow-elegant border-b border-gold/30' : 'bg-gradient-to-r from-orange/40 via-gold/20 to-black/60 backdrop-blur-lg'
      }`}
      style={{
        boxShadow: isScrolled ? '0 8px 32px rgba(255,140,0,0.18)' : '0 2px 8px rgba(255,140,0,0.08)',
        background: isScrolled ? 'linear-gradient(90deg, #FFA500 0%, #FFD700 50%, #000 100%)' : 'linear-gradient(90deg, #FFA500 0%, #FFD700 50%, #000 100%)',
        borderRadius: '0 0 32px 32px',
      }}
    >
      {/* Marquee headline */}
      <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} transition={{ duration: 2, ease: 'easeOut' }} className="w-full overflow-hidden bg-black/30 py-1">
        <div className="marquee-move text-black font-bold text-lg tracking-wide whitespace-nowrap animate-marquee-move">
          Welcome to Tomic Security — Experience the Future of Protection & Service! Welcome to Tomic Security — Experience the Future of Protection & Service!
        </div>
        <style>{`
          @keyframes marquee-move {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-marquee-move {
            animation: marquee-move 40s linear infinite;
          }
        `}</style>
      </motion.div>
      {/* Main navigation */}
      <nav className="py-4">
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex items-center space-x-3"
          >
            <motion.div whileHover={{ scale: 1.15, boxShadow: '0 0 24px #FFD700', rotate: 12 }} className="header-accent p-2 rounded-lg bg-gradient-to-br from-orange/80 via-gold/60 to-black/80 shadow-lg">
              <Shield className="w-8 h-8 animate-spin-slow" />
            </motion.div>
            <div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-xl font-bold header-text drop-shadow-lg text-orange">
                <span className="text-black">Tomic Security</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="text-xs header-text text-black">Passion for Service..</motion.p>
            </div>
          </motion.div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, idx) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.18, color: '#FFA500', boxShadow: '0 0 24px #FFD700', rotate: idx % 2 === 0 ? 6 : -6 }}
                whileTap={{ scale: 0.95, color: '#000000' }}
                onClick={() => scrollToSection(item.id)}
                className="header-text font-medium transition-colors relative group px-3 py-2 rounded-xl hover:bg-orange/10 hover:text-orange shadow-md"
                style={{
                  background: 'linear-gradient(90deg, #FFA500 0%, #FFD700 50%, #000 100%)',
                  boxShadow: '0 2px 8px rgba(255,140,0,0.08)',
                  color: '#000000',
                }}
              >
                <span className="font-bold tracking-wide text-lg text-black">{item.name}</span>
                <motion.span layoutId="nav-underline" className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange transition-all duration-300 group-hover:w-full"></motion.span>
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            whileHover={{ scale: 1.18, backgroundColor: '#FFA500', rotate: 12 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 header-text header-accent rounded-full bg-gradient-to-br from-orange/80 via-gold/60 to-black/80 shadow-lg"
          >
            {isMenuOpen ? <X className="w-6 h-6 animate-bounce" /> : <Menu className="w-6 h-6 animate-pulse" />}
          </motion.button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="lg:hidden bg-gradient-to-br from-orange/80 via-gold/60 to-black/80 border-t text-accent mt-4 shadow-2xl backdrop-blur-xl rounded-b-3xl"
          >
            <div className="container-custom py-4">
              {menuItems.map((item, idx) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.12, color: '#FFA500', backgroundColor: '#FFF8E1', rotate: idx % 2 === 0 ? 6 : -6 }}
                  whileTap={{ scale: 0.95, color: '#000000' }}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 header-text font-bold text-lg transition-colors hover:bg-orange/10 hover:text-orange rounded-xl shadow-md mb-2"
                  style={{
                    background: 'linear-gradient(90deg, #FFA500 0%, #FFD700 50%, #000 100%)',
                    color: '#000000',
                  }}
                >
                  <span className="text-black">{item.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}

export default Header;

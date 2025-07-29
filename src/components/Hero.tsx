import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [showEntranceCards, setShowEntranceCards] = useState(true);
  const [activeCard, setActiveCard] = useState(0);
  useEffect(() => {
    if (!showEntranceCards) return;
    const interval = setInterval(() => {
      setActiveCard(prev => (prev + 1) % entranceCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [showEntranceCards]);
  useEffect(() => {
    const timer = setTimeout(() => setShowEntranceCards(false), 12000);
    return () => clearTimeout(timer);
  }, []);

  const entranceCards = [
    {
      title: 'Welcome to Tomic Security Service Limited.',
      description: 'We are a strong trusted Security brand driven by dedicated Security Passionate teams, Keen to make a difference in the security sector. Explore our site to interact with our products offering.',
      color: 'bg-gradient-to-br from-orange/80 via-gold/80 to-gray/80',
      icon: <span className="text-4xl">🔒</span>
    },
    {
      title: '24/7 Protection',
      description: 'We offer round-the-clock monitoring and rapid response.',
      color: 'bg-gradient-to-br from-gold/80 via-orange/80 to-red/80',
      icon: <span className="text-4xl">🛡️</span>
    },
    {
      title: 'Expert Team',
      description: 'Highly trained professionals dedicated to your security.',
      color: 'bg-gradient-to-br from-gray/80 via-black/80 to-gold/80',
      icon: <span className="text-4xl">👮‍♂️</span>
    },
    {
      title: 'Super Modern Solutions',
      description: 'Experience the future of security with our advanced technology and trusted staff.',
      color: 'bg-gradient-to-br from-red/80 via-gold/80 to-orange/80',
      icon: <span className="text-4xl">🚀</span>
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange/10 via-gold/10 to-gray/10 pt-32 md:pt-40">
      {/* Entrance Cards Modal */}
      {showEntranceCards && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg">
          {/* Close X button */}
          <button
            className="absolute top-8 right-8 z-50 bg-white/30 hover:bg-red/80 text-black hover:text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all duration-300 text-2xl font-bold"
            onClick={() => setShowEntranceCards(false)}
            aria-label="Close entrance cards"
          >
            ×
          </button>
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, scale: 0.7, rotateY: 30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.7, rotateY: -30 }}
            transition={{ duration: 0.7, ease: [0.4,0,0.2,1] }}
            className="min-w-[260px] max-w-xs p-8 rounded-2xl shadow-2xl text-white text-center cursor-pointer flex flex-col items-center justify-center gap-2"
            style={{ perspective: 800 }}
            onClick={() => setShowEntranceCards(false)}
          >
            <div className="mb-4">{entranceCards[activeCard].icon}</div>
            <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Welcome to Tomic Security Services Limited.</h3>
            <p className="text-lg mb-2 drop-shadow">We are a strong trusted Security brand driven by dedicated Security Passionate teams, Keen to make a difference in the security sector. Explore our site to interact with our products offering.</p>
            <p className="text-base text-yellow-300 font-semibold mt-2">Response time: 1 minute to &lt; 10 minutes</p>
            <span className="text-sm opacity-70">Click card to continue</span>
          </motion.div>
        </div>
      )}
      {/* ...existing code... */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-lg"></div>
      </div>

      {/* Parallax/Slow Move Content */}
      <div className="relative z-10 container-custom text-center text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gold drop-shadow-xl">
            Premium Security Services
            <span className="block text-orange animate-pulse">Trusted by Millions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-light max-w-3xl mx-auto leading-relaxed bg-white/20 backdrop-blur-lg rounded-xl p-4 shadow-lg">
            Comprehensive surveillance and protection systems for homes and offices of any scale.
            <span className="text-red font-bold"> Your safety is our priority.</span>
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button 
              onClick={() => scrollToSection('about')}
              className="bg-orange hover:bg-gold text-white flex items-center space-x-2 text-lg px-8 py-4 rounded-xl shadow-xl transition-colors font-bold border-2 border-orange/30"
            >
              <span>Get started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-gold hover:bg-orange text-white flex items-center space-x-2 text-lg px-8 py-4 rounded-xl shadow-xl transition-colors font-bold border-2 border-gold/30"
            >
              <span>See Services</span>
            </button>
          </motion.div>
          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1, ease: [0.4, 0, 0.2, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center bg-white/30 backdrop-blur-lg rounded-xl p-6 shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-orange mb-2 drop-shadow-lg">24/7</div>
              <div className="text-sm text-gray">Security Monitoring</div>
            </div>
            <div className="text-center bg-white/30 backdrop-blur-lg rounded-xl p-6 shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-orange mb-2 drop-shadow-lg">2800+</div>
              <div className="text-sm text-gray">Projects Completed</div>
            </div>
            <div className="text-center bg-white/30 backdrop-blur-lg rounded-xl p-6 shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-orange mb-2 drop-shadow-lg">1200+</div>
              <div className="text-sm text-gray">Security Experts</div>
            </div>
            <div className="text-center bg-white/30 backdrop-blur-lg rounded-xl p-6 shadow-md">
              <div className="text-3xl md:text-4xl font-bold text-orange mb-2 drop-shadow-lg">99.9%</div>
              <div className="text-sm text-gold">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.5, ease: [0.4, 0, 0.2, 1] }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <div className="w-8 h-14 border-2 border-gold rounded-full flex justify-center items-start bg-black/60 shadow-lg">
          <div className="w-2 h-4 bg-orange rounded-full mt-3 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

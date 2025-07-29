import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Users, CheckCircle, Heart } from 'lucide-react';
import '@/styles/colors.css';

const WhyChooseUs = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);
  const closePopup = () => setShowPopup(false);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    employees: 0,
    deals: 0,
    clients: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const targetCounts = {
    projects: 2800,
    employees: 1200,
    deals: 3100,
    clients: 2700
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    Object.keys(targetCounts).forEach((key) => {
      const target = targetCounts[key as keyof typeof targetCounts];
      const increment = target / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    });
  };

  return (
    <section id="why-choose-us" className="section-padding bg-gradient-to-br from-yellow/10 via-red/10 to-black/10">
      {/* Pop-up card after 3 seconds */}
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
            className="relative bg-gradient-to-br from-yellow via-red to-black rounded-3xl shadow-2xl border-2 border-yellow/40 p-10 max-w-lg w-full text-center text-white font-bold text-xl backdrop-blur-2xl"
            >
              <button
                onClick={closePopup}
                className="absolute top-4 right-4 text-white bg-red/80 hover:bg-yellow/80 rounded-full p-2 shadow-lg transition-colors"
                aria-label="Close"
                style={{ fontSize: '1.5rem', fontWeight: 'bold' }}
              >
                ×
              </button>
              <div className="mb-6">
                <span className="drop-shadow-lg">Welcome to Tomic Security!<br/>We are Kenya's most trusted security solution provider, offering modern solutions, expert staff, and advanced technology to keep you safe. Explore our site to discover premium services and real client success stories.</span>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <span className="bg-white/20 px-4 py-2 rounded-xl text-yellow font-semibold shadow">Super Modern</span>
                <span className="bg-white/20 px-4 py-2 rounded-xl text-red font-semibold shadow">Trusted & Secure</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="container-custom">
        <div ref={sectionRef} className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.4,0,0.2,1] }} className="text-3xl md:text-5xl font-bold mb-4 text-gold drop-shadow-lg">
            The Most Successful Security Solution Provider
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.4,0,0.2,1] }} className="text-base text-gray max-w-3xl mx-auto leading-relaxed">
            We combine affordability with expertise, leveraging cutting-edge technology and building 
            lasting trust with our clients. Our proven track record speaks for itself.
          </motion.p>
        </div>




        {/* Modern ping-pong marquee for stats */}
        <div className="overflow-hidden mb-12 w-full">
            <div className="flex gap-8 animate-marquee-pingpong w-max">
              {/* Green floating icon */}
              <div className="text-center card-main group bg-white/40 backdrop-blur-lg border border-green-400/40 rounded-2xl p-8 shadow-lg min-w-[220px]">
                <div className="bg-gradient-to-br from-green-300 via-green-500 to-green-700 text-white p-2 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:shadow-green-400/60 transition-all duration-300 animate-pulse-glow">
                  <CheckCircle className="w-8 h-8 drop-shadow-lg" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2 drop-shadow-lg">2,800+</div>
                <div className="text-black font-medium">Projects Done</div>
              </div>
              {/* Blue floating icon */}
              <div className="text-center card-main group bg-white/40 backdrop-blur-lg border border-blue-400/40 rounded-2xl p-8 shadow-lg min-w-[220px]">
                <div className="bg-gradient-to-br from-blue-300 via-blue-500 to-blue-700 text-white p-2 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:shadow-blue-400/60 transition-all duration-300 animate-pulse-glow">
                  <Users className="w-8 h-8 drop-shadow-lg" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2 drop-shadow-lg">1,200+</div>
                <div className="text-black font-medium">Qualified Employees</div>
              </div>
              {/* Modern styled red icon */}
              <div className="text-center card-main group bg-white/40 backdrop-blur-lg border border-red-400/40 rounded-2xl p-8 shadow-lg min-w-[220px]">
                <div className="bg-gradient-to-br from-red-300 via-red-500 to-red-700 text-white p-2 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:shadow-red-400/60 transition-all duration-300 animate-pulse-glow">
                  <Shield className="w-8 h-8 drop-shadow-lg" />
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2 drop-shadow-lg">3,100+</div>
                <div className="text-black font-medium">Deals Assigned</div>
              </div>
              {/* Modern styled black icon */}
              <div className="text-center card-main group bg-white/40 backdrop-blur-lg border border-black/30 rounded-2xl p-8 shadow-lg min-w-[220px]">
                <div className="bg-gradient-to-br from-gray-300 via-black to-gray-700 text-white p-2 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 shadow-xl group-hover:scale-110 group-hover:shadow-black/60 transition-all duration-300 animate-pulse-glow">
                  <Heart className="w-8 h-8 drop-shadow-lg" />
                </div>
                <div className="text-3xl font-bold text-black mb-2 drop-shadow-lg">2,700+</div>
                <div className="text-black font-medium">Satisfied Clients</div>
              </div>
            </div>
        <style>{`
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(0,255,128,0.3), 0 0 0 0 rgba(0,128,255,0.3); }
            50% { box-shadow: 0 0 24px 8px rgba(0,255,128,0.18), 0 0 24px 8px rgba(0,128,255,0.18); }
          }
          .animate-pulse-glow {
            animation: pulse-glow 2.5s infinite;
          }
        `}</style>
        </div>

        {/* Add ping-pong marquee animation CSS */}
        <style>{`
          @keyframes marquee-pingpong {
            0% { transform: translateX(-100%); }
            50% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee-pingpong {
            animation: marquee-pingpong 120s linear infinite;
          }
        `}</style>

        {/* Additional features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="text-center bg-white/30 backdrop-blur-lg border border-yellow/20 rounded-xl p-6 shadow-md">
            <h3 className="text-base font-semibold text-yellow mb-2">Affordable Excellence</h3>
            <p className="text-black">Competitive pricing without compromising on quality or service standards.</p>
          </div>
          <div className="text-center bg-white/30 backdrop-blur-lg border border-red/20 rounded-xl p-6 shadow-md">
            <h3 className="text-base font-semibold text-red mb-2">Expert Team</h3>
            <p className="text-black">Highly trained professionals with years of experience in security services.</p>
          </div>
          <div className="text-center bg-white/30 backdrop-blur-lg border border-black/20 rounded-xl p-6 shadow-md">
            <h3 className="text-base font-semibold text-black mb-2">Advanced Technology</h3>
            <p className="text-black">Latest security technology and systems for maximum protection and efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
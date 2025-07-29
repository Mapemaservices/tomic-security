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
    <section id="why-choose-us" className="section-padding bg-gradient-to-br from-orange/10 via-gold/10 to-gray/10">
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
                <span className="drop-shadow-lg">Welcome to Tomic Security!<br/>We are Kenya's most trusted security agency, offering modern solutions, expert staff, and advanced technology to keep you safe. Explore our site to discover premium services and real client success stories.</span>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <span className="bg-white/20 px-4 py-2 rounded-xl text-orange font-semibold shadow">Super Modern</span>
                <span className="bg-white/20 px-4 py-2 rounded-xl text-gold font-semibold shadow">Trusted & Secure</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="container-custom">
        <div ref={sectionRef} className="text-center mb-12">
          <motion.h2 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.4,0,0.2,1] }} className="text-3xl md:text-5xl font-bold mb-4 text-gold drop-shadow-lg">
            The Most Successful Security Agency
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.4,0,0.2,1] }} className="text-base text-gray max-w-3xl mx-auto leading-relaxed">
            We combine affordability with expertise, leveraging cutting-edge technology and building 
            lasting trust with our clients. Our proven track record speaks for itself.
          </motion.p>
        </div>




        {/* Modern ping-pong marquee for stats */}
        <div className="overflow-hidden mb-12 w-full">
          <div className="flex gap-8 animate-marquee-pingpong w-max">
            <div className="text-center card-main group bg-white/40 backdrop-blur-lg border border-gold/30 rounded-2xl p-8 shadow-lg min-w-[220px]">
              <div className="bg-orange/10 text-orange p-2 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange group-hover:text-white transition-all duration-300 shadow-md">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-orange mb-2 drop-shadow-lg">2,800+</div>
              <div className="text-gray font-medium">Projects Done</div>
            </div>
            <div className="text-center card-main group bg-white/40 backdrop-blur-lg border border-gold/30 rounded-2xl p-8 shadow-lg min-w-[220px]">
              <div className="bg-gold/10 text-gold p-2 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold group-hover:text-white transition-all duration-300 shadow-md">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gold mb-2 drop-shadow-lg">1,200+</div>
              <div className="text-gray font-medium">Qualified Employees</div>
            </div>
            <div className="text-center card-main group bg-white/40 backdrop-blur-lg border border-gold/30 rounded-2xl p-8 shadow-lg min-w-[220px]">
              <div className="bg-red/10 text-red p-2 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 group-hover:bg-red group-hover:text-white transition-all duration-300 shadow-md">
                <Shield className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-red mb-2 drop-shadow-lg">3,100+</div>
              <div className="text-gray font-medium">Deals Assigned</div>
            </div>
            <div className="text-center card-main group bg-white/40 backdrop-blur-lg border border-gold/30 rounded-2xl p-8 shadow-lg min-w-[220px]">
              <div className="bg-gray/10 text-gray-dark p-2 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-dark group-hover:text-white transition-all duration-300 shadow-md">
                <Heart className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-dark mb-2 drop-shadow-lg">2,700+</div>
              <div className="text-gray font-medium">Satisfied Clients</div>
            </div>
          </div>
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
          <div className="text-center bg-white/30 backdrop-blur-lg border border-orange/20 rounded-xl p-6 shadow-md">
            <h3 className="text-base font-semibold text-orange mb-2">Affordable Excellence</h3>
            <p className="text-gray">Competitive pricing without compromising on quality or service standards.</p>
          </div>
          <div className="text-center bg-white/30 backdrop-blur-lg border border-gold/20 rounded-xl p-6 shadow-md">
            <h3 className="text-base font-semibold text-gold mb-2">Expert Team</h3>
            <p className="text-gray">Highly trained professionals with years of experience in security services.</p>
          </div>
          <div className="text-center bg-white/30 backdrop-blur-lg border border-red/20 rounded-xl p-6 shadow-md">
            <h3 className="text-base font-semibold text-red mb-2">Advanced Technology</h3>
            <p className="text-gray">Latest security technology and systems for maximum protection and efficiency.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
import React from 'react';
import { motion } from 'framer-motion';
import { Home, Camera, Building2, Shield, UserCheck, Fingerprint } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Home Security',
      description: 'Comprehensive residential security solutions including alarm systems, smart locks, and 24/7 monitoring for your peace of mind.',
      features: ['Smart alarm systems', '24/7 monitoring', 'Mobile app control']
    },
    {
      icon: Camera,
      title: 'CCTV Systems',
      description: 'High-definition surveillance systems with remote monitoring capabilities and advanced analytics for maximum security coverage.',
      features: ['HD cameras', 'Remote monitoring', 'Cloud storage']
    },
    {
      icon: Building2,
      title: 'Factory Security',
      description: 'Industrial-grade security solutions designed for manufacturing facilities and warehouses with specialized equipment protection.',
      features: ['Perimeter security', 'Access control', 'Asset protection']
    },
    {
      icon: UserCheck,
      title: 'Bodyguard Services',
      description: 'Professional personal protection services with trained security personnel for executives, VIPs, and high-risk individuals.',
      features: ['Trained professionals', 'Risk assessment', 'Discrete protection']
    },
    {
      icon: Fingerprint,
      title: 'Biometric Access Control',
      description: 'State-of-the-art biometric systems including fingerprint, facial recognition, and card access control solutions.',
      features: ['Multiple biometrics', 'Integration ready', 'Audit trails']
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-white via-yellow-100 to-black/80">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-black drop-shadow-2xl animate-pulse-glow">Our Services</h2>
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.4,0,0.2,1] }} className="text-base text-black max-w-3xl mx-auto leading-relaxed bg-white/60 rounded-xl px-4 py-2 shadow-lg backdrop-blur-md">
            Discover our range of security solutions tailored for every need.
          </motion.p>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            // Assign palette colors based on service type
            let cardColor = "bg-gradient-to-br from-white via-yellow-100 to-black/80 text-black group-hover:from-yellow-200 group-hover:to-black group-hover:text-yellow-700";
            if (service.title.includes("CCTV")) cardColor = "bg-gradient-to-br from-black via-red-700 to-yellow-400 text-white group-hover:from-red-600 group-hover:to-yellow-300 group-hover:text-black";
            if (service.title.includes("Factory")) cardColor = "bg-gradient-to-br from-yellow-200 via-yellow-400 to-black text-black group-hover:from-black group-hover:to-yellow-200 group-hover:text-yellow-400";
            if (service.title.includes("Bodyguard")) cardColor = "bg-gradient-to-br from-white via-red-100 to-black text-black group-hover:from-red-200 group-hover:to-black group-hover:text-red-700";
            if (service.title.includes("Biometric")) cardColor = "bg-gradient-to-br from-yellow-100 via-white to-black/80 text-yellow-700 group-hover:from-black group-hover:to-yellow-200 group-hover:text-black";
            return (
              <motion.div key={index} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.12, boxShadow: '0 8px 32px rgba(255,0,0,0.18), 0 2px 12px 0 rgba(255,221,51,0.18)', filter: 'brightness(1.08)' }} transition={{ duration: 0.6, ease: [0.4,0,0.2,1] }} className={`card-float group cursor-pointer border-2 border-yellow-200/40 rounded-2xl p-8 shadow-2xl backdrop-blur-xl ${cardColor} hover:shadow-yellow-300/40 hover:-translate-y-2 transition-all duration-500`}> 
                <div className="p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 transition-all duration-300 shadow-xl bg-white/80 group-hover:bg-yellow-100">
                  <IconComponent className="w-8 h-8 text-red-500 group-hover:text-yellow-500 drop-shadow-lg" />
                </div>
                <h3 className="text-xl font-extrabold mb-2 drop-shadow-lg text-black group-hover:text-yellow-700">
                  {service.title}
                </h3>
                <p className="text-base mb-4 leading-relaxed text-black group-hover:text-yellow-900">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-black group-hover:text-yellow-700">
                      <div className="w-2 h-2 bg-gradient-to-br from-red-400 to-yellow-400 rounded-full mr-2 animate-pulse"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
        <style>{`
          @keyframes pulse-glow {
            0%, 100% { box-shadow: 0 0 0 0 rgba(255,0,0,0.18), 0 0 0 0 rgba(255,221,51,0.18); }
            50% { box-shadow: 0 0 24px 8px rgba(255,0,0,0.18), 0 0 24px 8px rgba(255,221,51,0.18); }
          }
          .animate-pulse-glow {
            animation: pulse-glow 2.5s infinite;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Services;

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
    <section id="services" className="section-padding bg-gradient-to-br from-orange/10 via-gold/10 to-gray/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-gold drop-shadow-lg">
            <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.4,0,0.2,1] }}>Our Services</motion.span>
          </h2>
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.4,0,0.2,1] }} className="text-base text-gray max-w-3xl mx-auto leading-relaxed">
            Discover our range of security solutions tailored for every need.
          </motion.p>
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } } }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            // Assign palette colors based on service type
            let cardColor = "bg-orange/10 text-orange group-hover:bg-orange group-hover:text-white";
            if (service.title.includes("CCTV")) cardColor = "bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white";
            if (service.title.includes("Factory")) cardColor = "bg-gray/10 text-gray-dark group-hover:bg-gray-dark group-hover:text-white";
            if (service.title.includes("Bodyguard")) cardColor = "bg-black/80 text-white group-hover:bg-orange group-hover:text-black";
            if (service.title.includes("Biometric")) cardColor = "bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white";
            return (
              <motion.div key={index} variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }} whileHover={{ scale: 1.08, boxShadow: '0 8px 32px rgba(255,140,0,0.12)', filter: 'brightness(1.08)' }} transition={{ duration: 0.6, ease: [0.4,0,0.2,1] }} className="card-float group cursor-pointer bg-white/40 backdrop-blur-lg border border-gold/30 rounded-2xl p-8 shadow-xl">
                <div className={`p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 transition-all duration-300 shadow-md ${cardColor}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gold mb-2 drop-shadow-lg">
                  {service.title}
                </h3>
                <p className="text-gray mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray">
                      <div className="w-2 h-2 bg-orange rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

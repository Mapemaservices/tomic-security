import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Star, Shield, Users, Clock } from 'lucide-react';

const ServiceComparison = () => {
  const [selectedPackages, setSelectedPackages] = useState<string[]>(['basic', 'standard']);

  const packages = {
    basic: {
      name: 'Basic Security',
      price: 20000,
      duration: 'per 12hrs',
      description: 'Essential security coverage for small businesses and homes',
      icon: Shield,
      color: 'text-black',
      bgColor: 'bg-gray-light',
      features: {
        'CCTV Monitoring': 'Basic (2 cameras)',
        'Response Time': '15-20 minutes',
        'Incident Reports': 'Weekly reports',
        'Emergency Contact': 'Business hours only',
        'Site Assessment': 'daily',
        'Training': 'Basic security training',
        'Equipment': 'Standard radio communication',
        'Insurance Coverage': 'Basic liability',
        'Support': 'Email & phone',
        '24/7 Monitoring': false,
        'Mobile App Access': false,
        'Biometric Access': false,
        'Cybersecurity': false,
        'Executive Protection': false
      }
    },
    standard: {
      name: 'Standard',
      price: 35000,
      duration: 'per 12hrs',
      description: 'Comprehensive security solution for medium businesses',
      icon: Users,
      color: 'text-black',
      bgColor: 'bg-orange-light',
      features: {
        'CCTV Monitoring': 'Advanced (6 cameras)',
        'Response Time': '10-15 minutes',
        'Incident Reports': 'Daily reports',
        'Emergency Contact': '24/7 hotline',
        'Site Assessment': 'daily',
        'Training': 'Professional security training',
        'Equipment': 'Advanced communication system',
        'Insurance Coverage': 'Comprehensive coverage',
        'Support': 'Priority support',
        '24/7 Monitoring': true,
        'Mobile App Access': true,
        'Biometric Access': 'Basic fingerprint',
        'Cybersecurity': 'Basic firewall',
        'Executive Protection': false
      }
    },
  };

  const handlePackageSelect = (packageId: string) => {
    if (selectedPackages.includes(packageId)) {
      if (selectedPackages.length > 1) {
        setSelectedPackages(selectedPackages.filter(id => id !== packageId));
      }
    } else {
      if (selectedPackages.length < 3) {
        setSelectedPackages([...selectedPackages, packageId]);
      } else {
        setSelectedPackages([selectedPackages[1], selectedPackages[2], packageId]);
      }
    }
  };

  const allFeatures = Array.from(
    new Set(Object.values(packages).flatMap(pkg => Object.keys(pkg.features)))
  );

  return (
    <section className="section-padding bg-gradient-to-br from-red/20 via-orange/20 to-white relative overflow-hidden">
      {/* Sleek slow horizontal motion background */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 30, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(120deg, #FFA500 0%, #FFD700 40%, #fff 70%, #222 100%)',
          opacity: 0.10,
          pointerEvents: 'none',
        }}
      />
      {/* Sleek slow moving card */}
      <motion.div
        initial={{ x: -120 }}
        animate={{ x: '100vw' }}
        transition={{ duration: 38, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
        className="absolute top-6 left-0 z-20"
        style={{ pointerEvents: 'none' }}
      >
        <motion.div
          initial={{ opacity: 0.7, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          className="bg-gradient-to-r from-orange via-gold to-red text-white rounded-xl shadow-lg px-6 py-2 text-sm font-bold border border-gold/40 backdrop-blur-lg"
        >
          <span>We're here to protect you and keep you safe!</span>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        className="container-custom"
      >
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-orange drop-shadow-lg">
            Compare Security Packages
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto mb-8 bg-gradient-to-br from-orange/20 via-white/60 to-red/20 backdrop-blur-lg rounded-xl p-4 shadow-lg">
            Choose the perfect security solution for your needs. Compare features and find the right level of protection.
          </p>

          {/* Package Selection */}
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(packages).map(([packageId, packageData]) => {
              const IconComponent = packageData.icon;
              return (
                <motion.button
                  key={packageId}
                  whileHover={{ scale: 1.08, boxShadow: '0 8px 32px rgba(255,140,0,0.18)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePackageSelect(packageId)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full border-2 font-bold transition-all text-lg shadow-lg ${
                    selectedPackages.includes(packageId)
                      ? `border-orange bg-gradient-to-br from-orange/80 via-red/80 to-white text-white`
                      : 'border-orange/40 hover:border-red/60 bg-white/30 text-black'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span>{packageData.name}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <div className="min-w-full bg-gradient-to-br from-orange/10 via-white/60 to-red/10 backdrop-blur-lg border border-orange/30 rounded-2xl overflow-hidden shadow-xl">
            {/* Header Row */}
            <div className={`grid grid-cols-${selectedPackages.length + 1} divide-x divide-orange bg-gradient-to-r from-orange/10 via-white/60 to-red/10`}> 
              <div className="p-6">
                <h3 className="font-semibold text-orange">Features</h3>
              </div>
              {selectedPackages.map(packageId => {
                const packageData = packages[packageId as keyof typeof packages];
                const IconComponent = packageData.icon;
                return (
                  <div key={packageId} className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-orange/80 via-red/80 to-white mb-3 shadow-md`}>
                      <IconComponent className={`w-6 h-6 text-white`} />
                    </div>
                    <h3 className="font-bold text-lg text-orange mb-1 drop-shadow-lg">{packageData.name}</h3>
                    <div className="text-2xl font-bold text-red mb-1 drop-shadow-lg">
                      KSh {packageData.price.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray mb-3">{packageData.duration}</div>
                    <p className="text-sm text-gray">{packageData.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Feature Rows */}
            <div className="divide-y divide-orange/20">
              {allFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`grid grid-cols-${selectedPackages.length + 1} divide-x divide-orange/20 hover:bg-gradient-to-r hover:from-orange/10 hover:via-white/60 hover:to-red/10 transition-colors`}
                >
                  <div className="p-4 font-medium text-orange">
                    {feature}
                  </div>
                  {selectedPackages.map(packageId => {
                    const packageData = packages[packageId as keyof typeof packages];
                    const featureValue = packageData.features[feature as keyof typeof packageData.features];
                    return (
                      <div key={`${packageId}-${feature}`} className="p-4 text-center">
                        {typeof featureValue === 'boolean' ? (
                          featureValue ? (
                            <Check className="w-5 h-5 text-orange mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray mx-auto" />
                          )
                        ) : (
                          <span className="text-sm text-orange font-semibold">{featureValue}</span>
                        )}
                      </div>
                    );
                  })}
                </motion.div>
              ))}
            </div>

            {/* CTA Row */}
            <div className={`grid grid-cols-${selectedPackages.length + 1} divide-x divide-orange bg-gradient-to-r from-orange/10 via-white/60 to-red/10`}>
              <div className="p-6"></div>
              {selectedPackages.map(packageId => {
                const packageData = packages[packageId as keyof typeof packages];
                const message = `Hello, I'm interested in the "${packageData.name}" package. Please provide more details.`;
                const whatsappLink = `https://wa.me/254724630001?text=${encodeURIComponent(message)}`;

                return (
                  <div key={packageId} className="p-6 text-center">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <motion.button
                        whileHover={{ scale: 1.08, boxShadow: '0 8px 32px rgba(255,140,0,0.18)' }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-gradient-to-br from-orange/80 via-red/80 to-white text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-orange transition-colors border-2 border-orange/30"
                      >
                        Choose {packageData.name}
                      </motion.button>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Custom Quote CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-orange mb-4 text-lg font-semibold">
            Need a custom solution? We can create a tailored security package for your specific requirements.
          </p>
          <a
            href="https://wa.me/254724630001?text=Hello, I’d like to request a custom security quote."
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: '0 8px 32px rgba(255,140,0,0.18)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-br from-orange/80 via-red/80 to-white text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-orange transition-colors border-2 border-orange/30"
            >
              Request Custom Quote
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServiceComparison;

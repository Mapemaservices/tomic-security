import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Search, Shield, Eye } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: 'Book Consultation',
      description: 'Schedule a free security assessment with our experts to understand your specific needs and requirements.',
      delay: 0.1
    },
    {
      icon: Search,
      title: 'Site Assessment',
      description: 'Our certified professionals conduct a comprehensive on-site evaluation to identify vulnerabilities and security gaps.',
      delay: 0.2
    },
    {
      icon: Shield,
      title: 'Deployment',
      description: 'We implement customized security solutions including personnel, technology, and protocols tailored to your needs.',
      delay: 0.3
    },
    {
      icon: Eye,
      title: 'Ongoing Monitoring',
      description: '24/7 monitoring and regular reviews ensure continuous protection and optimization of your security measures.',
      delay: 0.4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-orange/10 via-gold/10 to-gray/10">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gold drop-shadow-lg"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray max-w-3xl mx-auto"
          >
            Our proven 4-step process ensures comprehensive security solutions tailored to your needs
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.06, boxShadow: '0 8px 32px rgba(255,140,0,0.12)', filter: 'brightness(1.08)' }}
                transition={{ duration: 0.6, delay: step.delay, ease: [0.4,0,0.2,1] }}
                className="relative"
              >
                {/* Connection line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-gold to-orange/30 z-0"></div>
                )}

                <div className="card-elegant text-center group hover:shadow-2xl transition-all duration-300 relative z-10 bg-white/40 backdrop-blur-lg border border-gold/30 rounded-2xl p-8">
                  <motion.div
                    whileHover={{ scale: 1.12, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    className="bg-orange/10 text-orange p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-orange group-hover:text-white transition-all duration-300 shadow-lg"
                  >
                    <IconComponent className="w-10 h-10" />
                  </motion.div>

                  <div className="bg-gold text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4 shadow-md">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-semibold text-gold mb-4 group-hover:text-orange transition-colors drop-shadow-lg">
                    {step.title}
                  </h3>

                  <p className="text-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          {/* Call to action button */}
          <motion.button
            whileHover={{ scale: 1.08, backgroundColor: '#FFD700', color: '#fff' }}
            transition={{ duration: 0.3 }}
            className="bg-orange text-white font-bold px-8 py-4 rounded-xl shadow-lg text-lg hover:bg-gold hover:text-black transition-colors"
            onClick={() => window.open('https://wa.me/254724630001?text=Hello%20Tomic%20Security%2C%20I%20want%20to%20get%20started%20with%20your%20services!', '_blank')}
          >
            Get Started
          </motion.button>
        {/* WhatsApp click handler */}
        <script>{`
          function openWhatsApp() {
            window.open('https://wa.me/254724630001?text=Hello%20Tomic%20Security%2C%20I%20want%20to%20get%20started%20with%20your%20services!', '_blank');
          }
        `}</script>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;

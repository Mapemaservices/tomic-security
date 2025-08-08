import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Users, MapPin, Shield, TrendingUp } from 'lucide-react';

const CompanyTimeline = () => {
  const milestones = [
    {
      year: '2008',
      title: 'Company Founded',
      description: 'Tomic Security was established with a vision to provide reliable security services in Kenya.',
      icon: Calendar,
      stats: { clients: '5', guards: '15', projects: '10' },
      achievements: ['First security contract', 'Initial team formation']
    },
    {
      year: '2012',
      title: 'First Major Expansion',
      description: 'Expanded operations beyond Nairobi, opening offices in Mombasa and Kisumu.',
      icon: MapPin,
      stats: { clients: '150', guards: '300', projects: '200' },
      achievements: ['Regional expansion', 'Staff training program', 'Community partnerships']
    },
    {
      year: '2016',
      title: 'Service Diversification',
      description: 'Introduced new services including event security and patrol response for estates and businesses.',
      icon: Shield,
      stats: { clients: '500', guards: '750', projects: '800' },
      achievements: ['Event security launch', 'Patrol response', 'Staff welfare initiatives']
    },
    {
      year: '2019',
      title: 'Industry Recognition',
      description: 'Received local security excellence award and secured key government and private contracts.',
      icon: Award,
      stats: { clients: '1200', guards: '1000', projects: '1500' },
      achievements: ['Security award', 'Government contracts', 'Trusted by corporates']
    },
    {
      year: '2022',
      title: 'Community Impact',
      description: 'Launched community safety programs and expanded to more counties across Kenya.',
      icon: TrendingUp,
      stats: { clients: '2000', guards: '1200', projects: '2500' },
      achievements: ['Community safety', 'County expansion', 'Women in security']
    },
    {
      year: '2024',
      title: 'Current Leadership',
      description: 'Today, we are among Kenya\'s most trusted security providers, known for reliability and professionalism.',
      icon: Users,
      stats: { clients: '2700', guards: '1200', projects: '2800' },
      achievements: ['Market leadership', 'Staff development', 'Client satisfaction']
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-orange via-gold/20 to-white">
      {/* Animated glassmorphism background */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.15 }} className="absolute inset-0 pointer-events-none z-0">
        <motion.div initial={{ scale: 0.7 }} animate={{ scale: 1 }} transition={{ duration: 2, ease: 'easeOut' }} className="absolute top-16 left-16 w-40 h-40 border-4 border-gold/40 rounded-full shadow-2xl blur-xl"></motion.div>
        <motion.div initial={{ scale: 0.7 }} animate={{ scale: 1 }} transition={{ duration: 2, delay: 0.2, ease: 'easeOut' }} className="absolute bottom-16 right-16 w-56 h-56 border-4 border-orange/40 rounded-full shadow-2xl blur-xl"></motion.div>
        <motion.div initial={{ scale: 0.7 }} animate={{ scale: 1 }} transition={{ duration: 2, delay: 0.4, ease: 'easeOut' }} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-4 border-gray/20 rounded-full shadow-2xl blur-xl"></motion.div>
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 text-orange drop-shadow-xl tracking-tight">
            Our Journey of Excellence
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto font-medium">
            From humble beginnings to industry leadership - discover how we've grown to become Kenya's most trusted security provider
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          {/* Glowing Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-orange via-gold to-red rounded-full shadow-2xl blur-md"></div>
          <div className="space-y-20">
            {milestones.map((milestone, index) => {
              const IconComponent = milestone.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -120 : 120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.18 }}
                  className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${isEven ? 'text-right pr-10' : 'text-left pl-10'}`}>
                    <motion.div
                      whileHover={{ scale: 1.04, boxShadow: '0 12px 48px rgba(255,140,0,0.18)' }}
                      className="card-elegant bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-yellow-200/40 py-10 px-8 text-left relative overflow-hidden"
                    >
                      <div className={`flex items-center space-x-3 mb-4 ${isEven ? 'justify-end' : 'justify-start'}`}>
                        <div className={`bg-orange/10 text-orange p-3 rounded-xl group-hover:bg-orange group-hover:text-white transition-all ${!isEven ? 'order-first' : 'order-last'}`}> 
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="text-2xl font-extrabold text-gold drop-shadow">{milestone.year}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-orange mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-base text-gray-700 mb-4 leading-relaxed font-medium">
                        {milestone.description}
                      </p>
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gradient-to-r from-orange/10 via-gold/10 to-white/40 rounded-xl shadow">
                        <div className="text-center">
                          <div className="text-lg font-bold text-orange">{milestone.stats.clients}+</div>
                          <div className="text-xs text-gray-500">Clients</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-gold">{milestone.stats.guards}+</div>
                          <div className="text-xs text-gray-500">Guards</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-red-500">{milestone.stats.projects}+</div>
                          <div className="text-xs text-gray-500">Projects</div>
                        </div>
                      </div>
                      {/* Achievements */}
                      <div className="space-y-2">
                        {milestone.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                            {achievement}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  {/* Center Point */}
                  <div className="relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                      className="w-8 h-8 bg-gradient-to-br from-yellow-300 via-red-200 to-black border-4 border-white rounded-full shadow-2xl animate-pulse-glow"
                    ></motion.div>
                  </div>
                  {/* Spacer */}
                  <div className="w-5/12"></div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-10">
          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative pl-10"
              >
                {/* Timeline line for mobile */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-4 top-12 w-1 h-16 bg-gradient-to-b from-orange via-gold to-red rounded-full blur-sm"></div>
                )}
                {/* Timeline point */}
                <div className="absolute left-0 top-6 w-8 h-8 bg-gradient-to-br from-orange via-gold to-red border-4 border-white rounded-full shadow-2xl"></div>
                <motion.div
                  whileHover={{ scale: 1.04, boxShadow: '0 12px 48px rgba(255,140,0,0.18)' }}
                  className="card-elegant bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border-2 border-yellow-200/40 py-10 px-8 text-left relative overflow-hidden"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="bg-orange/10 text-orange p-3 rounded-xl group-hover:bg-orange group-hover:text-white transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-extrabold text-gold drop-shadow">{milestone.year}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-orange mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-base text-gray-700 mb-4 leading-relaxed font-medium">
                    {milestone.description}
                  </p>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gradient-to-r from-orange/10 via-gold/10 to-white/40 rounded-xl shadow">
                    <div className="text-center">
                      <div className="text-lg font-bold text-orange">{milestone.stats.clients}+</div>
                      <div className="text-xs text-gray-500">Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gold">{milestone.stats.guards}+</div>
                      <div className="text-xs text-gray-500">Guards</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-red-500">{milestone.stats.projects}+</div>
                      <div className="text-xs text-gray-500">Projects</div>
                    </div>
                  </div>
                  {/* Achievements */}
                  <div className="space-y-2">
                    {milestone.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3 flex-shrink-0"></div>
                        {achievement}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="card-elegant bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gold/40 max-w-2xl mx-auto py-10 px-8">
            <h3 className="text-3xl font-extrabold text-orange mb-4">The Future Continues</h3>
            <p className="text-lg text-gray-700 mb-6 font-medium">
              As we look ahead, we're committed to innovation, excellence, and expanding our reach to serve more communities across Kenya and beyond.
            </p>
            <a
              href="https://wa.me/254724630001"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.07, boxShadow: '0 0 16px #FFD700' }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary bg-gradient-to-r from-red-500 via-yellow-400 to-black text-white font-bold py-3 px-8 rounded-xl shadow-lg text-lg animate-pulse-glow hover:from-yellow-500 hover:to-red-600 hover:text-black"
              >
                Join Our Story
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
      <style>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,0,0,0.18), 0 0 0 0 rgba(255,221,51,0.18); }
          50% { box-shadow: 0 0 24px 8px rgba(255,0,0,0.18), 0 0 24px 8px rgba(255,221,51,0.18); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2.5s infinite;
        }
      `}</style>
    </section>
  );
};

export default CompanyTimeline;

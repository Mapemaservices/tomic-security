import React from 'react';
import { Shield, Facebook, Instagram, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
 

  const recentPosts = [
    'Security System Of Any Building',
    'Don\'t Worry Your Data is Safe'
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.4,0,0.2,1] }}
      className="bg-black text-gold-light"
    >
      {/* Main Footer */}
      <div className="section-padding border-b border-gold-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="lg:col-span-1"
            >
              <motion.div whileHover={{ scale: 1.12, boxShadow: '0 0 16px #FFD700' }} className="flex items-center space-x-3 mb-6">
                <motion.div whileHover={{ scale: 1.2, backgroundColor: '#FFA500' }} className="bg-orange-dark text-white p-2 rounded-lg border-2 border-gold">
                  <Shield className="w-6 h-6" />
                </motion.div>
                <div>
                  <motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-lg font-bold text-gold">Tomic Security</motion.h3>
                  <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="text-xs text-gray">Trusted Protection</motion.p>
                </div>
              </motion.div>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6 }} className="text-gray-light mb-6 leading-relaxed">
                Kenya's leading security services provider, delivering comprehensive protection 
                solutions with cutting-edge technology and professional expertise since 2009.
              </motion.p>
              <div className="flex space-x-3">
                <motion.a whileHover={{ scale: 1.15, backgroundColor: '#FFA500' }} href="#" className="bg-gold-dark hover:bg-orange p-2 rounded-lg transition-colors">
                  <Facebook className="w-5 h-5 text-black" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, backgroundColor: '#FFA500' }} href="#" className="bg-gold-dark hover:bg-orange p-2 rounded-lg transition-colors">
                  <Instagram className="w-5 h-5 text-black" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.15, backgroundColor: '#FFA500' }} href="#" className="bg-gold-dark hover:bg-orange p-2 rounded-lg transition-colors">
                  <Linkedin className="w-5 h-5 text-black" />
                </motion.a>
              </div>
            </motion.div>

            {/* Recent Posts */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6 text-orange">Recent Posts</h4>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="group cursor-pointer">
                    <h5 className="text-sm font-medium text-gold group-hover:text-orange transition-colors mb-1">
                      {post}
                    </h5>
                    <p className="text-xs text-gray">March 2024 • Admin</p>
                  </div>
                ))}
              </div>
              
              <a 
                href="#blog" 
                className="inline-flex items-center space-x-1 text-orange hover:text-gold transition-colors text-sm mt-4"
              >
                <span>View all posts</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-gold">Stay Updated</h4>
              <p className="text-gray-light text-sm mb-4">
                Subscribe to our newsletter for security tips and company updates.
              </p>
              
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-gray-light border border-gold-dark rounded-lg text-black placeholder-gray focus:outline-none focus:ring-2 focus:ring-orange text-sm"
                />
                <button
                  type="submit"
                  className="w-full bg-orange hover:bg-gold text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm flex items-center justify-center space-x-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Subscribe</span>
                </button>
              </form>

              <p className="text-xs text-gray mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-6 bg-black">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray">
              © 2024 Tomic Security. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray">
              <span>Powered by Mapema Softwares</span>
              <span>•</span>
              <a href="tel:+254724630001" className="hover:text-orange transition-colors">
                Emergency: (+254) 724630001
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

import React from 'react';
import { Shield, Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-yellow-100/60 via-white/80 to-black/80">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-black drop-shadow-2xl animate-pulse-glow">
              Welcome to Tomic Security
            </h2>
            <p className="text-xl text-black mb-8 leading-relaxed bg-white/70 rounded-xl px-4 py-2 shadow-lg backdrop-blur-md">
              We provide expert guarding & protection solutions customized to your specific needs. 
              With years of experience and cutting-edge technology, we ensure your safety is never compromised.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-yellow-300 via-red-200 to-white text-black p-4 rounded-xl flex-shrink-0 shadow-lg animate-pulse-glow">
                  <Shield className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-extrabold text-yellow-700 mb-2">Comprehensive Protection</h3>
                  <p className="text-black/80">From residential homes to large industrial facilities, we offer complete security solutions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-red-200 via-yellow-300 to-white text-black p-4 rounded-xl flex-shrink-0 shadow-lg animate-pulse-glow">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-extrabold text-red-600 mb-2">Certified Excellence</h3>
                  <p className="text-black/80">Our team consists of certified security professionals with extensive training and experience.</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/254724630001?text=Hello%2C%20I%20hope%20this%20message%20finds%20you%20well.%20I%20would%20like%20to%20know%20more%20about%20Tomic%20Security%20and%20the%20services%20you%20offer."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-r from-red-500 via-yellow-400 to-black text-white font-bold py-3 px-6 rounded-lg shadow-xl hover:from-yellow-500 hover:to-red-600 hover:text-black transition-colors border-2 border-yellow-200/40 animate-pulse-glow">
                Learn More About Us
              </button>
            </a>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-2xl border-2 border-yellow-200/40 rounded-2xl p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-200 via-red-200 to-white opacity-30 rounded-full blur-2xl z-0"></div>
              <div className="flex items-center space-x-4 mb-4 relative z-10">
                <div className="bg-gradient-to-br from-yellow-300 via-red-200 to-white text-black p-4 rounded-xl">
                  <Target className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-yellow-700">Our Mission</h3>
              </div>
              <p className="text-black/80 leading-relaxed relative z-10">
                To provide comprehensive, reliable, and innovative security solutions that protect our clients' 
                assets, ensure their safety, and give them peace of mind through professional service and 
                advanced technology.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-2xl border-2 border-red-200/40 rounded-2xl p-10 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-200 via-yellow-200 to-white opacity-30 rounded-full blur-2xl z-0"></div>
              <div className="flex items-center space-x-4 mb-4 relative z-10">
                <div className="bg-gradient-to-br from-red-200 via-yellow-300 to-white text-black p-4 rounded-xl">
                  <Eye className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-extrabold text-red-600">Our Vision</h3>
              </div>
              <p className="text-black/80 leading-relaxed relative z-10">
                To be the leading security services provider in Kenya and beyond, recognized for our 
                commitment to excellence, innovation, and customer satisfaction while setting new 
                standards in the security industry.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-6 bg-gradient-to-br from-yellow-100 via-white to-red-100 rounded-2xl shadow-lg border-2 border-yellow-200/40 animate-pulse-glow">
                <div className="text-3xl font-extrabold text-yellow-700 mb-1">15+</div>
                <div className="text-base text-black/70 font-bold">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-red-100 via-white to-yellow-100 rounded-2xl shadow-lg border-2 border-red-200/40 animate-pulse-glow">
                <div className="text-3xl font-extrabold text-red-600 mb-1">24/7</div>
                <div className="text-base text-black/70 font-bold">Support Available</div>
              </div>
            </div>
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
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { Shield, Target, Eye, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-orange/10 via-red/10 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-orange drop-shadow-lg">
              Welcome to Tomic Security
            </h2>
            <p className="text-xl text-gray mb-8 leading-relaxed bg-gradient-to-br from-orange/20 via-white/60 to-red/20 backdrop-blur-lg rounded-xl p-4 shadow-lg">
              We provide expert guarding & protection solutions customized to your specific needs. 
              With years of experience and cutting-edge technology, we ensure your safety is never compromised.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-orange/80 via-red/80 to-white text-white p-3 rounded-lg flex-shrink-0 shadow-md">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-orange mb-2">Comprehensive Protection</h3>
                  <p className="text-gray">From residential homes to large industrial facilities, we offer complete security solutions.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-red/80 via-orange/80 to-white text-white p-3 rounded-lg flex-shrink-0 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-red mb-2">Certified Excellence</h3>
                  <p className="text-gray">Our team consists of certified security professionals with extensive training and experience.</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/254724630001?text=Hello%2C%20I%20hope%20this%20message%20finds%20you%20well.%20I%20would%20like%20to%20know%20more%20about%20Tomic%20Security%20and%20the%20services%20you%20offer."
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-gradient-to-br from-orange/80 via-red/80 to-white text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-orange transition-colors border-2 border-orange/30">
                Learn More About Us
              </button>
            </a>
          </div>

          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-orange/10 via-white/60 to-red/10 backdrop-blur-lg border border-orange/30 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gradient-to-br from-orange/80 via-red/80 to-white text-white p-3 rounded-lg">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-orange">Our Mission</h3>
              </div>
              <p className="text-gray leading-relaxed">
                To provide comprehensive, reliable, and innovative security solutions that protect our clients' 
                assets, ensure their safety, and give them peace of mind through professional service and 
                advanced technology.
              </p>
            </div>

            <div className="bg-gradient-to-br from-red/10 via-white/60 to-orange/10 backdrop-blur-lg border border-red/30 rounded-2xl p-8 shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-gradient-to-br from-red/80 via-orange/80 to-white text-white p-3 rounded-lg">
                  <Eye className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-red">Our Vision</h3>
              </div>
              <p className="text-gray leading-relaxed">
                To be the leading security services provider in Kenya and beyond, recognized for our 
                commitment to excellence, innovation, and customer satisfaction while setting new 
                standards in the security industry.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-orange/10 via-white/60 to-red/10 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-orange mb-1">15+</div>
                <div className="text-sm text-gray">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-red/10 via-white/60 to-orange/10 rounded-lg shadow-md">
                <div className="text-2xl font-bold text-red mb-1">24/7</div>
                <div className="text-sm text-gray">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

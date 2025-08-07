import React, { useState } from 'react';
import { Shield, Target, Eye, Award } from 'lucide-react';

const About = () => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationRole, setApplicationRole] = useState<'guard' | 'marketer'>('guard');
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, #fef3c7 0%, #fff 60%, #fee2e2 100%)',
        }}
      >
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2"
          style={{
            width: '120vw',
            height: '60vh',
            background: 'radial-gradient(circle at 50% 30%, #fde68a 0%, #fca5a5 60%, transparent 100%)',
            opacity: 0.25,
            filter: 'blur(32px)',
            willChange: 'transform',
            zIndex: 1,
          }}
        ></div>
        <div
          className="absolute bottom-0 right-0"
          style={{
            width: '60vw',
            height: '40vh',
            background: 'radial-gradient(circle at 80% 80%, #fca5a5 0%, #fde68a 60%, transparent 100%)',
            opacity: 0.18,
            filter: 'blur(24px)',
            willChange: 'transform',
            zIndex: 1,
          }}
        ></div>
      </div>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-black drop-shadow-2xl animate-pulse-glow">
              Welcome to Tomic Security
            </h2>
            <p className="text-xl text-black mb-8 leading-relaxed bg-white/70 rounded-xl px-4 py-2 shadow-lg backdrop-blur-md">
              Tomic Security is a Security Solution Provider—not a security agency. We deliver expert guarding & protection solutions tailored to your specific needs.
              With years of experience and cutting-edge technology, we ensure your safety is never compromised. Our focus is on providing innovative, reliable, and comprehensive security services, not traditional agency operations.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-yellow-300 via-red-200 to-white text-black p-4 rounded-xl flex-shrink-0 shadow-lg animate-pulse-glow">
                  <Shield className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-extrabold text-yellow-700 mb-2">Comprehensive Protection</h3>
                  <p className="text-black/80">From residential homes to large industrial facilities, we offer complete security solutions as a trusted provider, not an agency.</p>
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

          {/* Call for TOMIC Security Section */}
          <div className="mt-8 mb-8 bg-gradient-to-r from-yellow-200 via-red-100 to-white rounded-2xl shadow-xl p-6 border-2 border-yellow-200/40 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-red-600 mb-2">Call for TOMIC Security</h2>
            <p className="text-lg text-black mb-2">For immediate assistance or inquiries, call us:</p>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <a href="tel:0724630001" className="text-xl font-bold text-yellow-700 bg-white rounded-lg px-4 py-2 shadow hover:bg-yellow-100 transition-colors">0724 630 001</a>
              <a href="tel:0739630001" className="text-xl font-bold text-yellow-700 bg-white rounded-lg px-4 py-2 shadow hover:bg-yellow-100 transition-colors">0739 630 001</a>
            </div>
          </div>
          <div className="mt-12 bg-white/80 rounded-2xl shadow-xl p-8 border-2 border-yellow-200/40">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Current Openings</h2>
            <p className="text-lg text-black mb-4">We are hiring! Apply for the following positions:</p>
            <ul className="list-disc pl-6 mb-6 text-black">
              <li className="mb-2 font-semibold">Security Guards and Guardettes</li>
              <ul className="list-disc pl-6 mb-4 text-black/80">
                <li>Age: Over 25 years</li>
                <li>Form Four certificate</li>
                <li>Police clearance</li>
                <li>Previous security experience (added advantage)</li>
                <li>Background check mandatory</li>
                <li>Statutory documents a must</li>
              </ul>
              <li className="mb-2 font-semibold">Marketer</li>
              <ul className="list-disc pl-6 mb-4 text-black/80">
                <li>Diploma in sales and Marketing</li>
                <li>Previous experience in a security firm</li>
                <li>Among other requirements</li>
              </ul>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                className="bg-gradient-to-r from-red-500 via-yellow-400 to-black text-white font-bold py-3 px-6 rounded-lg shadow-xl hover:from-yellow-500 hover:to-red-600 hover:text-black transition-colors border-2 border-yellow-200/40 animate-pulse-glow"
                onClick={() => { setApplicationRole('guard'); setShowApplicationForm(true); }}
              >
                Apply as Security Guard/Guardette
              </button>
              <button
                className="bg-gradient-to-r from-yellow-400 via-red-500 to-black text-white font-bold py-3 px-6 rounded-lg shadow-xl hover:from-red-600 hover:to-yellow-500 hover:text-black transition-colors border-2 border-red-200/40 animate-pulse-glow"
                onClick={() => { setApplicationRole('marketer'); setShowApplicationForm(true); }}
              >
                Apply as Marketer
              </button>
            </div>
            {showApplicationForm && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-lg px-2">
                <div
                  className="bg-gradient-to-br from-yellow-50 via-white to-red-50 rounded-3xl shadow-2xl border-2 border-yellow-200/40 relative flex flex-col"
                  style={{
                    width: '100%',
                    maxWidth: '480px',
                    minWidth: '320px',
                    maxHeight: '90vh',
                    minHeight: '400px',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    className="absolute top-4 right-4 text-black bg-gradient-to-br from-red-200 via-yellow-200 to-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-lg hover:bg-red-400 transition-colors"
                    onClick={() => setShowApplicationForm(false)}
                    aria-label="Close application form"
                  >
                    ×
                  </button>
                  <div
                    className="flex-1 overflow-y-auto px-4 sm:px-6 py-6"
                    style={{
                      scrollbarWidth: 'thin',
                      scrollbarColor: '#facc15 #fff',
                      maxHeight: 'calc(90vh - 48px)',
                    }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-extrabold mb-6 text-yellow-700 text-center drop-shadow-lg">
                      {applicationRole === 'guard' ? 'Apply for Security Guard/Guardette' : 'Apply for Marketer'}
                    </h3>
                    <form className="grid grid-cols-1 gap-4 w-full">
                      <input type="text" placeholder="Full Name" className="p-3 border-2 border-yellow-200/40 rounded-xl bg-white/80 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200" required />
                      <input type="email" placeholder="Email Address" className="p-3 border-2 border-yellow-200/40 rounded-xl bg-white/80 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200" required />
                      <input type="tel" placeholder="Phone Number" className="p-3 border-2 border-yellow-200/40 rounded-xl bg-white/80 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200" required />
                      {applicationRole === 'guard' ? (
                        <>
                          <input type="number" placeholder="Age" className="p-3 border-2 border-yellow-200/40 rounded-xl bg-white/80 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200" required min="25" />
                          <label className="block text-sm font-semibold text-black mt-2">Form Four Certificate (upload)</label>
                          <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="p-2 border-2 border-yellow-200/40 rounded-xl bg-white/80 shadow" required />
                          <label className="block text-sm font-semibold text-black mt-2">Police Clearance (upload)</label>
                          <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="p-2 border-2 border-yellow-200/40 rounded-xl bg-white/80 shadow" required />
                          <input type="text" placeholder="Previous Security Experience (if any)" className="p-3 border-2 border-yellow-200/40 rounded-xl bg-white/80 shadow" />
                          <label className="block text-sm font-semibold text-black mt-2">Statutory Documents (upload)</label>
                          <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="p-2 border-2 border-yellow-200/40 rounded-xl bg-white/80 shadow" required />
                        </>
                      ) : (
                        <>
                          <label className="block text-sm font-semibold text-black mt-2">Diploma in Sales and Marketing (upload)</label>
                          <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="p-2 border-2 border-yellow-200/40 rounded-xl bg-white/80 shadow" required />
                          <label className="block text-sm font-semibold text-black mt-2">Previous experience in a security firm (upload)</label>
                          <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="p-2 border-2 border-yellow-200/40 rounded-xl bg-white/80 shadow" required />
                          <label className="block text-sm font-semibold text-black mt-2">Other requirements (upload)</label>
                          <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="p-2 border-2 border-yellow-200/40 rounded-xl bg-white/80 shadow" />
                        </>
                      )}
                      <textarea placeholder="Additional Information" className="p-3 border-2 border-yellow-200/40 rounded-xl bg-white/80 shadow focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-200" rows={3}></textarea>
                      <button type="submit" className="bg-gradient-to-r from-red-600 via-yellow-400 to-black text-white font-bold py-3 px-4 rounded-xl shadow-lg hover:from-yellow-500 hover:to-red-600 hover:text-black transition-colors mt-2">Submit Application</button>
                    </form>
                  </div>
                </div>
              </div>
            )}
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
      {/* Memberships & Affiliations */}
      <div className="mt-16 mb-8 bg-gradient-to-r from-yellow-100 via-red-50 to-white rounded-3xl shadow-2xl p-10 border-4 border-yellow-200/60">
        <h2 className="text-3xl font-extrabold text-yellow-700 mb-8 flex items-center gap-3 drop-shadow-lg">
          <Award className="w-9 h-9 text-yellow-500 animate-pulse-glow" />
          Memberships & Affiliations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* KSIA */}
          <div className="group flex flex-col items-center text-center bg-white/90 rounded-2xl shadow-xl border-2 border-yellow-200/60 p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-yellow-400 relative overflow-hidden">
            <span className="absolute top-4 right-4 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow animate-pulse-glow">KSIA</span>
            <div className="bg-yellow-200 p-5 rounded-full mb-4 shadow-lg animate-pulse-glow group-hover:scale-110 transition-transform">
              <Shield className="w-10 h-10 text-red-600" />
            </div>
            <h3 className="font-bold text-lg text-yellow-700 mb-2">Kenya Security Industry Association</h3>
            <p className="text-black/80 text-base">Proud member of KSIA, upholding the highest standards in Kenya’s security sector.</p>
          </div>
          {/* PROSAK */}
          <div className="group flex flex-col items-center text-center bg-white/90 rounded-2xl shadow-xl border-2 border-red-200/60 p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-red-400 relative overflow-hidden">
            <span className="absolute top-4 right-4 bg-red-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow animate-pulse-glow">PROSAK</span>
            <div className="bg-red-100 p-5 rounded-full mb-4 shadow-lg animate-pulse-glow group-hover:scale-110 transition-transform">
              <Target className="w-10 h-10 text-yellow-600" />
            </div>
            <h3 className="font-bold text-lg text-red-600 mb-2">Protective Safety Association of Kenya</h3>
            <p className="text-black/80 text-base">Active member of PROSAK, committed to professional safety and protection practices.</p>
          </div>
          {/* AGPO */}
          <div className="group flex flex-col items-center text-center bg-white/90 rounded-2xl shadow-xl border-2 border-black/20 p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-black/40 relative overflow-hidden">
            <span className="absolute top-4 right-4 bg-black text-white text-xs font-bold px-3 py-1 rounded-full shadow animate-pulse-glow">AGPO</span>
            <div className="bg-yellow-100 p-5 rounded-full mb-4 shadow-lg animate-pulse-glow group-hover:scale-110 transition-transform">
              <Eye className="w-10 h-10 text-black" />
            </div>
            <h3 className="font-bold text-lg text-black mb-2">AGPO Certified</h3>
            <p className="text-black/80 text-base">Registered under the Access to Government Procurement Opportunities (AGPO) program.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

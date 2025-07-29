import React, { useState } from 'react';
import { Phone, Mail, MapPin, Download, Send, Clock, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleWhatsApp = () => {
    const message = 'Hello! I would like to know more about your security services.';
    window.open(`https://wa.me/254724630001?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+254724630001', '_self');
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-yellow-100/60 via-white/80 to-black/80">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-black drop-shadow-2xl animate-pulse-glow">
            Get in Touch
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto bg-white/70 rounded-xl px-4 py-2 shadow-lg backdrop-blur-md">
            Ready to secure your property? Contact us today for a free consultation 
            and customized security solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="bg-white/80 backdrop-blur-2xl border-2 border-yellow-200/40 rounded-2xl p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-200 via-red-200 to-white opacity-30 rounded-full blur-2xl z-0"></div>
            <h3 className="text-2xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-black drop-shadow animate-pulse-glow relative z-10">
              Contact Information
            </h3>

            <div className="space-y-8 mb-8 relative z-10">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 text-red-600 p-3 rounded-lg flex-shrink-0 shadow-md animate-pulse-glow">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Phone</h4>
                  <p className="text-gray">(+254) 724630001</p>
                  <p className="text-sm text-gray">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg flex-shrink-0 shadow-md animate-pulse-glow">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Email</h4>
                  <p className="text-gray">info@tomicsecurity.com</p>
                  <p className="text-sm text-gray">We respond within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-black/10 text-black p-3 rounded-lg flex-shrink-0 shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Headquarters</h4>
                  <p className="text-muted-foreground">
                    Nairobi Business District<br />
                    Kenya
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-yellow-200 text-yellow-700 p-3 rounded-lg flex-shrink-0 shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Mon - Fri: 8:00 AM - 6:00 PM<br />
                    Sat: 9:00 AM - 4:00 PM<br />
                    Emergency: 24/7
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 relative z-10">
              <button
                onClick={handleCall}
                className="w-full bg-gradient-to-r from-red-500 via-yellow-400 to-black text-white font-bold py-3 px-6 rounded-lg shadow-xl hover:from-yellow-500 hover:to-red-600 hover:text-black transition-colors flex items-center justify-center space-x-2 border-2 border-yellow-200/40 animate-pulse-glow"
              >
                <Phone className="w-5 h-5 text-yellow-400" />
                <span>Call Now</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-gradient-to-r from-yellow-400 via-red-500 to-black text-white font-bold py-3 px-6 rounded-lg shadow-xl hover:from-red-600 hover:to-yellow-500 hover:text-black transition-colors flex items-center justify-center space-x-2 border-2 border-yellow-200/40 animate-pulse-glow"
              >
                <Globe className="w-5 h-5 text-red-500" />
                <span>WhatsApp Us</span>
              </button>

              <button className="w-full bg-white/60 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-yellow-100 transition-colors flex items-center justify-center space-x-2 border-2 border-yellow-200/40">
                <Download className="w-5 h-5 text-yellow-500" />
                <span>Download Corporate Brochure</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-2xl border-2 border-yellow-200/40 rounded-2xl p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-yellow-200 via-red-200 to-white opacity-30 rounded-full blur-2xl z-0"></div>
            <h3 className="text-2xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-black drop-shadow animate-pulse-glow relative z-10">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-black mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-yellow-200/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white/60 text-black placeholder-black/60"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-black mb-2">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-yellow-200/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white/60 text-black placeholder-black/60"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-black mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-yellow-200/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white/60 text-black placeholder-black/60"
                  placeholder="+254 xxx xxx xxx"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-black mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-yellow-200/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white/60 text-black placeholder-black/60 resize-none"
                  placeholder="Tell us about your security requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-500 via-yellow-400 to-black text-white font-bold py-3 px-6 rounded-lg shadow-xl hover:from-yellow-500 hover:to-red-600 hover:text-black transition-colors flex items-center justify-center space-x-2 border-2 border-yellow-200/40 animate-pulse-glow"
              >
                <Send className="w-5 h-5 text-yellow-400" />
                <span>Send Message</span>
              </button>
            </form>

            {/* Map */}
            <div className="mt-8 relative z-10">
              <h4 className="text-lg font-bold mb-4 text-black">Find Us</h4>
              <div className="bg-white/60 rounded-lg h-48 flex items-center justify-center shadow-md border border-yellow-200/20">
                <div className="text-center text-black/70">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-yellow-500" />
                  <p>Interactive Map Coming Soon</p>
                  <p className="text-sm">Nairobi Business District, Kenya</p>
                </div>
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

export default Contact;
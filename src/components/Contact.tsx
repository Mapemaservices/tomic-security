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
    <section id="contact" className="section-padding bg-gradient-to-br from-orange/10 via-gold/10 to-gray/10">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gold drop-shadow-lg">
            Get in Touch
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto bg-white/30 backdrop-blur-lg rounded-xl p-4 shadow-lg">
            Ready to secure your property? Contact us today for a free consultation 
            and customized security solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="bg-white/40 backdrop-blur-lg border border-gold/30 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-8 text-orange">
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-orange/10 text-orange p-3 rounded-lg flex-shrink-0 shadow-md">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Phone</h4>
                  <p className="text-gray">(+254) 724630001</p>
                  <p className="text-sm text-gray">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gold/10 text-gold p-3 rounded-lg flex-shrink-0 shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-black mb-1">Email</h4>
                  <p className="text-gray">info@tomicsecurity.com</p>
                  <p className="text-sm text-gray">We respond within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray/10 text-gray-dark p-3 rounded-lg flex-shrink-0 shadow-md">
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
                <div className="bg-orange-100 text-orange-600 p-3 rounded-lg flex-shrink-0 shadow-md">
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
            <div className="space-y-4">
              <button
                onClick={handleCall}
                className="w-full bg-orange text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gold transition-colors flex items-center justify-center space-x-2 border-2 border-orange/30"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </button>

              <button
                onClick={handleWhatsApp}
                className="w-full bg-orange hover:bg-orange-dark text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors flex items-center justify-center space-x-2 border-2 border-orange/30"
              >
                <Globe className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </button>

              <button className="w-full bg-white/30 text-black font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gold/30 transition-colors flex items-center justify-center space-x-2 border-2 border-gold/30">
                <Download className="w-5 h-5" />
                <span>Download Corporate Brochure</span>
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/40 backdrop-blur-lg border border-gold/30 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-8 text-gold">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-white/30 backdrop-blur-lg"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-white/30 backdrop-blur-lg"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gold mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-white/30 backdrop-blur-lg"
                  placeholder="+254 xxx xxx xxx"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gold/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold bg-white/30 backdrop-blur-lg resize-none"
                  placeholder="Tell us about your security requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-orange transition-colors flex items-center justify-center space-x-2 border-2 border-gold/30"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>

            {/* Map */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-gold">Find Us</h4>
              <div className="bg-white/30 backdrop-blur-lg rounded-lg h-48 flex items-center justify-center shadow-md border border-gold/20">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-gold" />
                  <p>Interactive Map Coming Soon</p>
                  <p className="text-sm">Nairobi Business District, Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
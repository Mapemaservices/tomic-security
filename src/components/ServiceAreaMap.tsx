import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, CheckCircle, XCircle, Search } from 'lucide-react';

const ServiceAreaMap = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchResult, setSearchResult] = useState<{
    available: boolean;
    message: string;
  } | null>(null);

  const serviceAreas = [
    { name: 'Nairobi', available: true, coordinates: { x: 50, y: 45 } },
    { name: 'Mombasa', available: true, coordinates: { x: 85, y: 75 } },
    { name: 'Kisumu', available: true, coordinates: { x: 25, y: 55 } },
    { name: 'Nakuru', available: true, coordinates: { x: 40, y: 40 } },
    { name: 'Eldoret', available: true, coordinates: { x: 35, y: 25 } },
    { name: 'Thika', available: true, coordinates: { x: 55, y: 35 } },
    { name: 'Machakos', available: true, coordinates: { x: 60, y: 55 } },
    { name: 'Nyeri', available: true, coordinates: { x: 45, y: 30 } }
  ];

  const handleLocationCheck = () => {
    if (!selectedLocation.trim()) return;

    const area = serviceAreas.find(area => 
      area.name.toLowerCase().includes(selectedLocation.toLowerCase())
    );

    if (area) {
      setSearchResult({
        available: area.available,
        message: `Great! We provide comprehensive security services in ${area.name}. Contact us to discuss your specific needs.`
      });
    } else {
      setSearchResult({
        available: false,
        message: `We don't currently have a physical presence in ${selectedLocation}, but we can arrange special coverage for your area. Please contact us to discuss custom solutions.`
      });
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Our Service Coverage
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Check if we provide security services in your area across Kenya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-light border border-gray-dark rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-orange mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Kenya Service Map
              </h3>
              {/* Real Google Map for Lunga Lunga Plaza */}
              <div className="w-full h-80 rounded-lg overflow-hidden border border-orange/30 shadow-lg">
                <iframe
                  title="Lunga Lunga Plaza Map"
                  src="https://www.google.com/maps?q=Lunga+Lunga+Plaza,+Nairobi,+Kenya&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
              {/* Legend */}
              <div className="flex items-center justify-center space-x-6 mt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange rounded-full"></div>
                  <span className="text-sm text-gray">Service Available</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red rounded-full"></div>
                  <span className="text-sm text-gray">Custom Coverage</span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* Location Checker */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gray-light rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-orange mb-6">
                Check Service Availability
              </h3>
              <div className="space-y-4">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    placeholder="Enter your location (e.g., Nairobi, Mombasa)"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="flex-1 p-3 border border-gray-dark rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange"
                    onKeyPress={(e) => e.key === 'Enter' && handleLocationCheck()}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleLocationCheck}
                    className="bg-orange text-white p-3 rounded-lg hover:bg-orange-dark transition-colors"
                  >
                    <Search className="w-5 h-5" />
                  </motion.button>
                </div>
                {searchResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg border ${
                      searchResult.available
                        ? 'border-orange/20 bg-orange-light'
                        : 'border-red/20 bg-red-light'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      {searchResult.available ? (
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                      )}
                      <p className="text-sm text-foreground">{searchResult.message}</p>
                    </div>
                  </motion.div>
                )}
                {/* Quick Location Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  {serviceAreas.slice(0, 4).map((area) => (
                    <motion.button
                      key={area.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        setSelectedLocation(area.name);
                        setSearchResult({
                          available: area.available,
                          message: `Great! We provide comprehensive security services in ${area.name}. Contact us to discuss your specific needs.`
                        });
                      }}
                      className="p-3 border border-border rounded-lg text-left hover:border-primary/50 transition-colors"
                    >
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-medium">{area.name}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Don't see your location? We can arrange custom coverage anywhere in Kenya.
                  </p>
                  <a
                    href="https://wa.me/254724630001"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full btn-outline"
                    >
                      Contact for Custom Coverage
                    </motion.button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;

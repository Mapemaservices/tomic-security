import React, { useState } from 'react';
import { Upload, Users, FileText, Send } from 'lucide-react';

const Career = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, resume: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const jobPositions = [
    {
      title: 'Security Guard',
      type: 'Full-time',
      location: 'Multiple Locations',
      description: 'Experienced security personnel for various client locations'
    },
    {
      title: 'Control Room Operator',
      type: 'Shift-based',
      location: 'Nairobi',
      description: 'Monitor CCTV systems and coordinate security responses'
    },
    {
      title: 'IT Security Specialist',
      type: 'Full-time',
      location: 'Nairobi',
      description: 'Cybersecurity expert for digital protection services'
    }
  ];

  return (
    <section id="career" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Join the Best in Security
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Build your career with Kenya's leading security company. We offer competitive 
            packages, professional development, and growth opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Job Positions */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center text-orange">
              <Users className="w-6 h-6 mr-3 text-orange" />
              Current Openings
            </h3>
            
            <div className="space-y-6">
              {jobPositions.map((job, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-semibold text-black">{job.title}</h4>
                    <span className="bg-gold-light text-gold px-3 py-1 rounded-full text-sm">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-gray mb-2">{job.location}</p>
                  <p className="text-gray">{job.description}</p>
                
                </div>
              ))}
            </div>

            {/* Removed 'Why Join Tomic Security?' section as requested */}
          </div>

          {/* Application Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-accent" />
              Apply Now
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium mb-2">
                  Upload Resume *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="resume"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white/80 cursor-pointer hover:bg-white/15 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Upload className="w-5 h-5" />
                    <span>
                      {formData.resume ? formData.resume.name : 'Choose file (PDF, DOC, DOCX)'}
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Submit Application</span>
              </button>
            </form>

            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-sm text-primary-foreground/70">
                <strong>Note:</strong> We review all applications carefully and will contact 
                qualified candidates within 2-3 business days. All personal information 
                is handled confidentially.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;

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
    <section id="career" className="section-padding bg-gradient-to-br from-white via-yellow-100 to-black/80">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-black drop-shadow-2xl animate-pulse-glow">
            Join the Best in Security
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto bg-white/60 rounded-xl px-4 py-2 shadow-lg backdrop-blur-md">
            Build your career with Kenya's leading security company. We offer competitive 
            packages, professional development, and growth opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Job Positions */}
          <div>
          <h3 className="text-2xl font-extrabold mb-8 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-black drop-shadow animate-pulse-glow">
            <Users className="w-6 h-6 mr-3 text-red-600" />
            Current Openings
          </h3>
          <div className="space-y-8">
            {jobPositions.map((job, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-xl border-2 border-yellow-200/40 rounded-2xl p-8 shadow-2xl group hover:scale-[1.03] hover:shadow-yellow-300/40 transition-all duration-500 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-200 via-red-200 to-white opacity-30 rounded-full blur-2xl z-0"></div>
                <div className="flex justify-between items-start mb-3 relative z-10">
                  <h4 className="text-xl font-extrabold text-black group-hover:text-yellow-700 drop-shadow-lg">{job.title}</h4>
                  <span className="bg-gradient-to-r from-yellow-300 via-red-200 to-white text-black px-3 py-1 rounded-full text-sm font-bold shadow group-hover:bg-yellow-400/80">
                    {job.type}
                  </span>
                </div>
                <p className="text-black mb-2 font-medium">{job.location}</p>
                <p className="text-black/80">{job.description}</p>
              </div>
            ))}
          </div>

            {/* Removed 'Why Join Tomic Security?' section as requested */}
          </div>

          {/* Application Form */}
          <div>
          <h3 className="text-2xl font-extrabold mb-8 flex items-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-black drop-shadow animate-pulse-glow">
            <FileText className="w-6 h-6 mr-3 text-yellow-500" />
            Apply Now
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/70 backdrop-blur-xl border-2 border-yellow-200/40 rounded-2xl p-8 shadow-2xl">
            <div>
              <label htmlFor="name" className="block text-sm font-bold mb-2 text-black">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-yellow-200/40 rounded-lg text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold mb-2 text-black">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-white/10 border border-yellow-200/40 rounded-lg text-black placeholder-black/60 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="Enter your email address"
              />
            </div>

            <div>
              <label htmlFor="resume" className="block text-sm font-bold mb-2 text-black">Upload Resume *</label>
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
                  className="w-full px-4 py-3 bg-white/10 border border-yellow-200/40 rounded-lg text-black/80 cursor-pointer hover:bg-yellow-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <Upload className="w-5 h-5 text-yellow-500" />
                  <span>
                    {formData.resume ? formData.resume.name : 'Choose file (PDF, DOC, DOCX)'}
                  </span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 via-yellow-400 to-black text-white font-bold py-3 px-6 rounded-lg shadow-xl transition-colors flex items-center justify-center space-x-2 animate-pulse-glow hover:from-yellow-500 hover:to-red-600 hover:text-black"
            >
              <Send className="w-5 h-5 text-yellow-500" />
              <span>Submit Application</span>
            </button>
          </form>

          <div className="mt-6 p-4 bg-white/60 rounded-lg shadow">
            <p className="text-sm text-black/70">
              <strong>Note:</strong> We review all applications carefully and will contact 
              qualified candidates within 2-3 business days. All personal information 
              is handled confidentially.
            </p>
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
      </div>
    </section>
  );
};

export default Career;

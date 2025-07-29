import React from 'react';
import { Calendar, User, Heart, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Security System Of Any Building',
      excerpt: 'Learn about the latest security systems and how they can protect your building from various threats and unauthorized access.',
      date: 'March 15, 2024',
      author: 'Admin',
      likes: 24,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      category: 'Building Security'
    },
    {
      title: "Don't Worry Your Data is Safe",
      excerpt: 'Discover our comprehensive cybersecurity measures and data protection protocols that keep your sensitive information secure.',
      date: 'March 12, 2024',
      author: 'Admin',
      likes: 18,
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop',
      category: 'Cybersecurity'
    },
    {
      title: 'Go Next – We Are Always With You',
      excerpt: 'Our commitment to 24/7 support and continuous monitoring ensures your security needs are always our priority.',
      date: 'March 10, 2024',
      author: 'Admin',
      likes: 32,
      image: 'https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=300&fit=crop',
      category: 'Support'
    }
  ];

  return (
    <section id="blog" className="section-padding bg-gradient-to-br from-yellow-100/60 via-white/80 to-black/80">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-black drop-shadow-2xl animate-pulse-glow">
            Security News & Updates
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto bg-white/70 rounded-xl px-4 py-2 shadow-lg backdrop-blur-md">
            Stay informed with the latest security trends, tips, and insights from our experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer bg-white/80 backdrop-blur-2xl border-2 border-yellow-200/40 rounded-2xl p-6 shadow-2xl hover:scale-[1.03] hover:shadow-yellow-300/40 transition-all duration-500 relative overflow-hidden">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-200 via-red-200 to-white opacity-30 rounded-full blur-2xl z-0"></div>
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6 relative z-10">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:brightness-110"
                />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-gradient-to-r from-yellow-300 via-red-200 to-white text-black px-3 py-1 rounded-full text-xs font-bold shadow group-hover:bg-yellow-400/80">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 text-red-600">
                    <Heart className="w-4 h-4 animate-pulse-glow" />
                    <span>{post.likes}</span>
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-black group-hover:text-yellow-700 transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-black/80 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-yellow-200/40">
                  <div className="flex items-center space-x-4 text-sm text-black/60">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 text-yellow-500" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4 text-red-600" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
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
    </section>
  );
};

export default Blog;

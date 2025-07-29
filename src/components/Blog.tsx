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
    <section id="blog" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-black">
            Security News & Updates
          </h2>
          <p className="text-xl text-gray max-w-3xl mx-auto">
            Stay informed with the latest security trends, tips, and insights from our experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="card-elegant group cursor-pointer hover:shadow-xl border border-gray-light">
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="bg-orange-light text-orange px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-1 text-red">
                    <Heart className="w-4 h-4" />
                    <span>{post.likes}</span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
                  <span className="text-black group-hover:text-orange transition-colors leading-tight">{post.title}</span>
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  <span className="text-gray leading-relaxed">{post.excerpt}</span>
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-4 text-sm text-gray">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>

                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blog;

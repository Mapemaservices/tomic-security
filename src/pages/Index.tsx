import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
// ...existing code...
import ServiceComparison from '@/components/ServiceComparison';
import Gallery from '@/components/Gallery';
import ServiceAreaMap from '@/components/ServiceAreaMap';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';
import About from '@/components/About';
import CompanyTimeline from '@/components/CompanyTimeline';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LiveChat from '@/components/LiveChat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <HowItWorks />
        {/* QuoteCalculator removed */}
        <ServiceComparison />
        <Gallery />
        <ServiceAreaMap />
        <About />
        <CompanyTimeline />
        <Testimonials />
        <Blog />
      
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <LiveChat />
    </div>
  );
};

export default Index;

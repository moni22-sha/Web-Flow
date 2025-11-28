import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import PortfolioPlaceholder from '../components/PortfolioPlaceholder';
import Testimonial from '@/components/Testimonial';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <PortfolioPlaceholder />
      <FAQ />
      <Testimonial />
      <ContactForm />
    </div>
  );
};

export default LandingPage;
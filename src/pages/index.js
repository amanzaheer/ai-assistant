import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import HowItWorks from '../../components/HowItWorks';
import UseCases from '../../components/UseCases';
import Stats from '../../components/Stats';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Stats />
      <Footer />
    </div>
  );
}
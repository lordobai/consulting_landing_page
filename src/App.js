import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import ConsultantBio from './components/ConsultantBio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Services />
      <CaseStudies />
      <ConsultantBio />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 
import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Features } from './components/sections/Features';
import { Apartments } from './components/sections/Apartments';
import { Gallery } from './components/sections/Gallery';
import { Location } from './components/sections/Location';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Apartments />
        <Features />
        <Gallery />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
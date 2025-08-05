import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import WellnessSection from './components/WellnessSection';
import CommitmentSection from './components/CommitmentSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <WellnessSection />
        <CommitmentSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

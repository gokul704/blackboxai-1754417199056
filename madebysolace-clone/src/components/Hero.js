import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-media">
        <div className="hero-bg"></div>
      </div>
      <div className="hero-content container">
        <h1>Find Your <em>Solace</em></h1>
        <p>
          Rooted in the transformative power of mindful movement, our Lagree studio is more than 
          a place to work out — it's a sanctuary for the mind, body, and soul. Designed to help you 
          reconnect and recharge, we offer high-intensity, low-impact workouts that sculpt, strengthen, 
          and sustain your well-being. Every class is an invitation to slow down, tune in, and find 
          your solace through intentional movement and recovery.
        </p>
        <a href="/register" className="cta-button">JOIN NOW</a>
      </div>
    </section>
  );
};

export default Hero;

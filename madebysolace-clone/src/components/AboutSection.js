import React from 'react';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="section-content">
          <div className="text-content">
            <h2>A Sanctuary for Mindful <em>Living</em></h2>
            <p>
              Our philosophy is rooted in the idea that wellness should feel effortless yet profound. 
              Through expert-led Lagree fitness and emphasis on rest and recovery, we curate experiences 
              that restore, and elevate. Whether you're stepping onto the Mega Pro for the first time or 
              deepening your wellness journey, our space invites you to <em>Feed Your Soul and Find Your Solace.</em>
            </p>
            <a href="/pricing" className="cta-button">Explore Our Offerings</a>
          </div>
          <div className="image-content">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/67b106b541bd986142bd71a4/6c8d7eaf-af6f-4140-9c9a-7963880174d8/MadeBySolace_entrance_1.jpg"
              alt="Studio Entrance" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

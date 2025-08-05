import React from 'react';

const WellnessSection = () => {
  return (
    <section className="wellness-section">
      <div className="container">
        <div className="section-content">
          <div className="image-content">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/67b106b541bd986142bd71a4/9e13c6cf-0d09-41f2-848e-f89aaeb7ee01/MadeBySolace_instructor_2.jpg"
              alt="Instructor at Work" 
            />
          </div>
          <div className="text-content">
            <h2>Redefining <em>Wellness</em></h2>
            <p>
              Join us at <em>Made by Solace</em> and discover the power of intentional movement. 
              Your transformation starts here
            </p>
            <a href="/register" className="cta-button">Join the Community</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellnessSection;

import React from 'react';

const CommitmentSection = () => {
  return (
    <section className="commitment-section">
      <div className="container">
        <div className="section-content">
          <div className="text-content">
            <h2>Our Commitment.</h2>
            <p>
              We are more than a studio, we are a movement toward mindful living. Grounded in 
              authenticity and excellence, we guide our community toward holistic well-being, 
              ensuring every experience is infused with care, expertise, and a sense of belonging.
            </p>
            <a href="/book-now" className="cta-button">Start Your Journey with Solace</a>
          </div>
          <div className="image-content">
            <img 
              src="https://images.squarespace-cdn.com/content/v1/67b106b541bd986142bd71a4/7ab27cfd-9bbc-475d-bea7-15c9c8b2f342/%40raygenio+-+%40madebysolace-85.jpg"
              alt="Community and Movement" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;

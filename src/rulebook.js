// Rulebook.js

import React from 'react';
import './Rulebook.css'; // Import your CSS file

const Rulebook = () => {
  return (
    <div className="rulebook-container">
      <h1>Stock Market Game Rulebook</h1>

      <section className="rule-section">
        <h2>1. Objective</h2>
        <p>Learn how to navigate the stock market and maximize your profits.</p>
      </section>

      <section className="rule-section">
        <h2>2. Buying and Selling</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent
          libero. Sed cursus ante dapibus diam.
        </p>
        <p>
          Vivamus tortor nisl, lobortis in, faucibus et, tempus at, dui. Nunc risus. Proin
          scelerisque augue.
        </p>
      </section>

      <section className="rule-section">
        <h2>3. Stock Research</h2>
        <p>
          Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
        </p>
      </section>

      {/* Add more sections as needed for different rules and guidelines */}
    </div>
  );
};

export default Rulebook;

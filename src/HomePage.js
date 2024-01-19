// src/HomePage.js
import React from 'react';
import stockMarketImage from './stock-market-today-070220.jpg';
import { useNavigate } from 'react-router-dom';
import './index.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin');
  };
  const handleSignUpClick = () => {
    navigate('/signup');
  };
  const handleYourPortfolioClick = () => {
    navigate('/portfolio'); // Redirect to the portfolio page
  };

  return (
    <div>
      <section className="hero" style={{ background: '#333', color: '#fff' }}>
        <div className="hero-body">
          <h1 className="text-4xl font-bold">Welcome to the Stock Market Game!</h1>
          <p className="text-lg">Learn, invest, and compete in the stock market.</p>
        </div>
      </section>

      <section className="mt-8">
        <div className="flex">
          {/* Buttons on the left */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button
              onClick={handleYourPortfolioClick}
              className="card p-4 text-left border-2 border-blue-500 mb-4 w-full custom-button"
            >
              <h2 className="text-xl font-bold mb-2">Your Portfolio</h2>
              {/* Display user's portfolio information */}
            </button>

            {/* ... (other buttons) */}
            <button className="card p-4 text-left border-2 border-blue-500 mb-4 w-full">
              <h2 className="text-xl font-bold mb-2">Stock Market News</h2>
              {/* Display latest stock market news */}
            </button>

            {/* ... (other buttons) */}
            <button className="card p-4 text-left border-2 border-blue-500 mb-4 w-full">
              <h2 className="text-xl font-bold mb-2">Play Game</h2>
              {/* Display a leaderboard of top performers */}
            </button>

            <button
              onClick={handleSignInClick}
              className="card p-4 text-left border-2 border-blue-500 mb-4 w-full custom-button"
            >
              <h2 className="text-xl font-bold mb-2">Sign In</h2>
              {/* Display user's portfolio information */}
            </button>

            {/* ... (other buttons) */}
            <button
              onClick={handleSignUpClick}
              className="card p-4 text-left border-2 border-blue-500 mb-4 w-full custom-button"
            >
              <h2 className="text-xl font-bold mb-2">Sign Up</h2>
            </button>
          </div>
          <br />
          <br />
          <br />

          {/* Image centered and larger */}
          <div className="flex items-center justify-center">
            <img src={stockMarketImage} alt="Stock Market" style={{ width: '50%', height: 'auto', marginLeft: '0%', marginBottom: '100%' }} />
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <nav className="footer-nav">
        <div className="footer-nav-column">
          <header className="footer-title">Services</header>
          <a className="link link-hover footer-nav-row">Branding</a>
          <a className="link link-hover footer-nav-row">Design</a>
          <a className="link link-hover footer-nav-row">Marketing</a>
          <a className="link link-hover footer-nav-row">Advertisement</a>
        </div>
        <div className="footer-nav-column">
          <header className="footer-title">Company</header>
          <a className="link link-hover footer-nav-row">About us</a>
          <a className="link link-hover footer-nav-row">Contact</a>
          <a className="link link-hover footer-nav-row">Jobs</a>
          <a className="link link-hover footer-nav-row">Press kit</a>
        </div>
        <div className="footer-nav-column">
          <header className="footer-title">Legal</header>
          <a className="link link-hover footer-nav-row">Terms of use</a>
          <a className="link link-hover footer-nav-row">Privacy policy</a>
          <a className="link link-hover footer-nav-row">Cookie policy</a>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;

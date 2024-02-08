// Portfolio.js
import React from 'react';

function PortfolioFooter() {
  return (
    <div className="container mx-auto my-8">
      <footer className="footer p-10 bg-neutral text-neutral-content">
        <div className="center-title mb-4">
          <header className="footer-title text-3xl font-bold">PORTFOLIO </header>
        </div>
        <nav className="columns-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="column">
            <header className="footer-title">Net Worth</header>
            <a className="link link-hover">4500</a>
            <a className="link link-hover">xyz</a>
            <a className="link link-hover"></a>
            <a className="link link-hover"></a>
          </div>
          <div className="column">
            <header className="footer-title">Stocks Record</header>
            <a className="link link-hover">Tata</a>
            <a className="link link-hover">Ambuja</a>
            <a className="link link-hover"></a>
            <a className="link link-hover"></a>
          </div>
          <div className="column">
            <header className="footer-title">Past Game Record</header>
            <a className="link link-hover">Profit:1000</a>
            <a className="link link-hover">Stocks:xyz</a>
            <a className="link link-hover"></a>
          </div>
          <div className="column">
            <header className="footer-title">Daily Streaks</header>
            <input type="range" min={0} max="100" value="25" className="range" step="25" />
            <div className="w-full flex justify-between text-xs px-2">
              <div className="line" style={{ width: '20%' }}></div>
              <div className="line" style={{ width: '20%' }}></div>
              <div className="line" style={{ width: '20%' }}></div>
              <div className="line" style={{ width: '20%' }}></div>
              <div className="line" style={{ width: '20%' }}></div>
            </div>
            <a className="link link-hover">3 days</a>
            <a className="link link-hover">Bronze</a>
            <a className="link link-hover"></a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

export default PortfolioFooter;

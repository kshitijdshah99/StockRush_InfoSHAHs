// LearnPage.js

import React from "react";
import "./LearnPage.css"; // Import your CSS file

const LearnPage = () => {
  return (
    <div className="learn-page-container">
      <h1>Welcome to the StockRush Learning Page</h1>

      <div className="learn-section">
        <h2>Introduction</h2>
        <p>
          The Stock Market Game is a simulation game where players can
          experience the excitement and challenges of investing in the stock
          market without risking real money.
        </p>
      </div>

      <div className="learn-section">
        <h2>How to Play</h2>
        <p>
          Players start with a virtual cash balance and can buy and sell stocks
          based on real market data. The goal is to build a diversified
          portfolio and maximize returns.
        </p>
      </div>

      <div className="learn-section">
        <h2>Strategies</h2>
        <p>
          Successful players often employ various strategies, including
          fundamental analysis, technical analysis, and risk management, to make
          informed investment decisions.
        </p>
      </div>

      <div className="learn-section">
        <h2>Tips</h2>
        <p>
          Always do thorough research before investing. Diversify your portfolio
          to reduce risk. Stay updated with market news and trends.
        </p>
      </div>
    </div>
  );
};

export default LearnPage;

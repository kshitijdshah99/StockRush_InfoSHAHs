// Round1.js
import React from "react";
import { Link } from "react-router-dom";
import "./round1.css";

const Round1 = () => {
    const sectors = [
        "Banking",
        "Telecommunication",
        "Natural Gas and Petroleum",
        "Steel",
        "IT",
        "Investment Banking",
        "Automobile",
        "Power and Energy",
        "Tyres Manufacturing Companies",
        "Healthcare & Pharma Based"
    ];

    return (
        <div className="app-container">
            <div className="top-bar">
                <div className="news-box">
                    <h2>News</h2>
                    <p>Latest updates and headlines</p>
                </div>
                <div className="buttons-container">
                    <Link to="/portfolio" className="button">Portfolio</Link>
                </div>
            </div>
            <div className="sector-table">
                <table>
                    <tbody>
                        {sectors.map((sector, index) => (
                            <tr key={index}>
                                <td><Link to={`/sector/${sector}`} className="sector-link">{sector}</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Round1;

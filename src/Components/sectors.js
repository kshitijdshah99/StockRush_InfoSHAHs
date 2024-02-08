// sectors.js
import React from "react";
import { Link } from "react-router-dom";
import "./sectors.css";

const CommonPage = () => {
  // Content of the common page
  return (
    <div>
      <h1>This is the Common Page</h1>
      {/* Add content specific to the common page */}
    </div>
  );
}

const Sectors = () => {
  const commonPagePath = "/commonpage"; // Set the path for the common page

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Banking</th>
            <th>Telecommunication</th>
            <th>Oil And Energy</th>
            <th>Steel</th>
            <th>IT</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>1</th>
            <td><Link to={commonPagePath} className="table-button">ICICI Bank</Link></td>
            <td><Link to={commonPagePath} className="table-button">Airtel</Link></td>
            <td><Link to={commonPagePath} className="table-button">Indian Oil</Link></td>
            <td><Link to={commonPagePath} className="table-button">Tata Steel</Link></td>
            <td><Link to={commonPagePath} className="table-button">Infosys</Link></td>
          </tr>
          <tr>
            <th>2</th>
            <td><Link to={commonPagePath} className="table-button">State Bank of India</Link></td>
            <td><Link to={commonPagePath} className="table-button">Jio</Link></td>
            <td><Link to={commonPagePath} className="table-button">ONGC</Link></td>
            <td><Link to={commonPagePath} className="table-button">ESSAR Steel</Link></td>
            <td><Link to={commonPagePath} className="table-button">Wipro</Link></td>
          </tr>
          <tr>
            <th>3</th>
            <td><Link to={commonPagePath} className="table-button">Kotak Mahindra Bank</Link></td>
            <td><Link to={commonPagePath} className="table-button">Vodafone</Link></td>
            <td><Link to={commonPagePath} className="table-button">Oil India Limited</Link></td>
            <td><Link to={commonPagePath} className="table-button">Jindal Steel</Link></td>
            <td><Link to={commonPagePath} className="table-button">Oracle</Link></td>
          </tr>
          <tr>
            <th>4</th>
            <td><Link to={commonPagePath} className="table-button">Union Bank Of India</Link></td>
            <td><Link to={commonPagePath} className="table-button">Idea</Link></td>
            <td><Link to={commonPagePath} className="table-button">Bharat Petroleum</Link></td>
            <td><Link to={commonPagePath} className="table-button">Visa Steel</Link></td>
            <td><Link to={commonPagePath} className="table-button">Microsoft</Link></td>
          </tr>
          <tr>
            <th>5</th>
            <td><Link to={commonPagePath} className="table-button">HDFC Bank</Link></td>
            <td><Link to={commonPagePath} className="table-button">BSNL</Link></td>
            <td><Link to={commonPagePath} className="table-button">Hindustan Petroleum</Link></td>
            <td><Link to={commonPagePath} className="table-button">JSW Steel Limited</Link></td>
            <td><Link to={commonPagePath} className="table-button">TechMahindra</Link></td>
          </tr>
          {/* Add similar structure for other rows */}
        </tbody>
      </table>
    </div>
  );
}

export default Sectors;

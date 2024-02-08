// Table.js
import React from "react";
import "./sectors.css";

const Table = () => {
  return (
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th style={{ backgroundColor: "black", color: "#ddd" }}>Name</th>
          <th style={{ backgroundColor: "black", color: "#ddd" }}>Job</th>
          <th style={{ backgroundColor: "black", color: "#ddd" }}>Favorite Color</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr className="bg-base-200">
          <th></th>
          <td style={{ backgroundColor: "black", color: "#ddd" }}>Cy Ganderton</td>
          <td style={{ backgroundColor: "black", color: "#ddd" }}>Quality Control Specialist</td>
          <td style={{ backgroundColor: "black", color: "#ddd" }}>Blue</td>
        </tr>
        {/* row 2 */}
        <tr>
          <th></th>
          <td style={{ backgroundColor: "black", color: "#ddd" }}>Hart Hagerty</td>
          <td style={{ backgroundColor: "black", color: "#ddd" }}>Desktop Support Technician</td>
          <td style={{ backgroundColor: "black", color: "#ddd" }}>Purple</td>
        </tr>
        {/* row 3 */}
        <tr>
          <th></th>
          <td style={{ backgroundColor: "black", color: "#ddd" }}>Brice Swyre</td>
          <td style={{ backgroundColor: "black", color: "#ddd" }}>Tax Accountant</td>
          <td style={{ backgroundColor: "black", color: "#ddd" }}>Red</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;

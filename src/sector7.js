import React, { useState, useEffect } from "react";
import "./sector1.css";
import axios from "axios";

const SectorPage7 = () => {
    const [companies, setCompanies] = useState([]);
    const [buyQuantities, setBuyQuantities] = useState([]);
    const [sellQuantities, setSellQuantities] = useState([]);
    const [loading, setLoading] = useState(true);
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMyN2QxMDEyNzdiNDA1ODZjMzJkMjYiLCJpYXQiOjE3MDcyNDQ4MTYsImV4cCI6MTcwNzUwNDAxNn0.6JQqJyrFrvAEdrTT-nRIcvZ2fUB9v0rAK-FN3WugRZE';
    const userId = localStorage.getItem('userID');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/ser/get/Automobile', {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                });
                console.log('Response from backend:', response.data);
                setCompanies(response.data);
                setBuyQuantities(Array(response.data.length).fill(0));
                setSellQuantities(Array(response.data.length).fill(0));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    // Array of objects containing stock names and corresponding IDs
    const stockList = [
        { name: "TATA Motors", id: "65b131656122e8ced9b66121" },
        { name: "Honda", id: "65b1316d6122e8ced9b66123" },
        { name: "Mercedes", id: "65b131896122e8ced9b66125" },
        { name: "Volkswagen", id: "65b1318f6122e8ced9b66127" },
        { name: "Maruti Suzuki", id: "65b131a86122e8ced9b66129" }
    ];

    const handleBuy = async (companyId, index) => {
        try {
            const quantity = buyQuantities[index];
            const response = await axios.post(
                `http://localhost:4000/api/os/buy/${userId}`,
                { quantity: quantity, stock_id: companyId },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    }
                }
            );
            console.log('Buy request response:', response.data);
        } catch (error) {
            console.error('Error buying stock:', error);
        }
    };

  const handleSell = async (companyId, index) => {
    try {
        const quantity = sellQuantities[index];
        const response = await axios.patch(
            `http://localhost:4000/api/os/sell/${userId}`,
            { profile_id: userId, stock_id: companyId, quantity: quantity }, // Include required data in the request body
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            }
        );
        console.log('Sell request response:', response.data);
    } catch (error) {
        console.error('Error selling stock:', error);
    }
};


    const handleBuyQuantityChange = (index, event) => {
        const newBuyQuantities = [...buyQuantities];
        newBuyQuantities[index] = parseInt(event.target.value);
        setBuyQuantities(newBuyQuantities);
    };

    const handleSellQuantityChange = (index, event) => {
        const newSellQuantities = [...sellQuantities];
        newSellQuantities[index] = parseInt(event.target.value);
        setSellQuantities(newSellQuantities);
    };

    return (
        <div className="sector-page-container">
            <h2>Automobile</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <table className="sector-table">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Buy</th>
                            <th>Quantity</th>
                            <th>Buy Price</th>
                            <th>Total Price</th>
                            <th>Sell</th>
                            <th>Quantity</th>
                            <th>Sell Price</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stockList.map((stock, index) => (
                            <tr key={index}>
                                <td>{stock.name}</td>
                                <td><button onClick={() => handleBuy(stock.id, index)}>Buy</button></td>
                                <td><input type="number" value={buyQuantities[index]} min="0" onChange={(event) => handleBuyQuantityChange(index, event)} /></td>
                                <td>{companies[index].current_price * 1.05}</td>
                                <td>{buyQuantities[index] * companies[index].current_price * 1.05}</td>
                                <td><button onClick={() => handleSell(stock.id, index)}>Sell</button></td>
                                <td><input type="number" value={sellQuantities[index]} min="0" onChange={(event) => handleSellQuantityChange(index, event)} /></td>
                                <td>{companies[index].current_price}</td>
                                <td>{sellQuantities[index] * companies[index].current_price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default SectorPage7;

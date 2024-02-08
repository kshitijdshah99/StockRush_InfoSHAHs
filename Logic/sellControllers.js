const Owned_Stock = require('../Models/4.owned_stocks');
const Stock_Exchange = require('../Models/1.stock_exchange');
const User_Profile = require('../Models/8.USER_PROF');

const sell = async (req, res) => {
    const { profile_id, stock_id, quantity } = req.body;

    try {
        // Find the owned stock for the given user and stock
        const ownedStock = await Owned_Stock.findOne({ profile_id, stock_id });

        if (!ownedStock) {
            return res.status(404).json({ error: 'Owned stock not found' });
        } 

        // Fetch the current stock details from Stock_Exchange
        const stockDetails = await Stock_Exchange.findById(stock_id);

        if (!stockDetails) {
            return res.status(404).json({ error: 'Stock details not found' });
        }

        // Calculate the selling amount based on the current stock price
        const sellingAmount = quantity * stockDetails.current_price;

        // Check if the user has enough quantity to sell
        if (ownedStock.quantity < quantity) {
            return res.status(400).json({ error: 'Insufficient quantity to sell' });
        }

        // Update the user's net worth by adding the selling amount
        const userProfile = await User_Profile.findOneAndUpdate(
            { _id: profile_id },
            { $inc: { net_worth: sellingAmount } },
            { new: true }
        );

        // Update the owned stock quantity
        await Owned_Stock.findOneAndUpdate(
            { profile_id, stock_id },
            { $inc: { quantity: -quantity } },
            { new: true }
        );

        res.status(200).json({ message: 'Shares sold successfully', sellingAmount, userProfile });
    } catch (error) {
        console.error('Error selling shares:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { sell };

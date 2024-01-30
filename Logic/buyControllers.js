const Owned_Stock = require('../Models/4.owned_stocks');
const User_Profile = require('../Models/8.USER_PROF');
const Stock_Exchange = require('../Models/1.stock_exchange');

const buy = async (req, res) => {
    const { profile_id } = req.params;
    const { stock_id, quantity } = req.body;

    try {
        // Fetch the user's profile and the stock details
        const userProfile = await User_Profile.findById(profile_id);
        const stockDetails = await Stock_Exchange.findById(stock_id);

        if (!userProfile || !stockDetails) {
            return res.status(404).json({ error: 'User profile or stock not found' });
        }

        // Calculate the total cost of buying the stocks
        const totalCost = quantity * stockDetails.current_price *1.05;

        // Check if the user has enough net worth to buy
        if (userProfile.net_worth < totalCost) {
            return res.status(400).json({ error: 'Insufficient funds to buy stocks' });
        }

        // Check if the user already owns some of these stocks
        let ownedStock = await Owned_Stock.findOne({ profile_id, stock_id });

        // If not, create a new entry in the owned stocks collection
        if (!ownedStock) {
            // Check if the user is exceeding the limit_stocks for this stock
            const stocksOwnedByUser = await Owned_Stock.find({ profile_id, stock_id });
            const totalStocksOwned = stocksOwnedByUser.reduce((total, stock) => total + stock.quantity, 0);
            if (totalStocksOwned + quantity <= 20)
            {
                stockDetails.current_price=((stockDetails.current_price*1.05*quantity)+(stockDetails.current_price*(200-quantity)))/200;
                await Stock_Exchange.findByIdAndUpdate(stock_id, { current_price: stockDetails.current_price });
                ownedStock.quantity += quantity;
                await Stock_Exchange.findByIdAndUpdate(stock_id, { valuation: stockDetails.current_price*200 });
                await ownedStock.save();
            }
            else {
                return res.status(400).json({ error: 'Exceeded maximum limit_stocks for this stock' });
            }


            ownedStock = await Owned_Stock.create({ profile_id, stock_id, quantity });
        } else {
            // If yes, update the quantity of owned stocks
            // Check if the user is exceeding the limit_stocks for this stock
            const stocksOwnedByUser = await Owned_Stock.find({ profile_id, stock_id });
            const totalStocksOwned = stocksOwnedByUser.reduce((total, stock) => total + stock.quantity, 0);
            if (totalStocksOwned + quantity <= 20)
            {
                stockDetails.current_price=((stockDetails.current_price*1.05*quantity)+(stockDetails.current_price*(200-quantity)))/200;
                await Stock_Exchange.findByIdAndUpdate(stock_id, { current_price: stockDetails.current_price });
                ownedStock.quantity += quantity;
                await Stock_Exchange.findByIdAndUpdate(stock_id, { valuation: stockDetails.current_price*200 });
                await ownedStock.save();
            }
            else {
                return res.status(400).json({ error: 'Exceeded maximum limit_stocks for this stock' });
            }    
        }

        // Deduct the total cost from the user's net worth
        userProfile.net_worth -= totalCost;

        // Save the updated user profile
        await userProfile.save();

        // Respond with the updated user profile and owned stocks details
        res.status(200).json({ userProfile, ownedStock });
    } catch (error) {
        console.error('Error buying stocks:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { buy };

const Owned_Stock = require('../Models/4.owned_stocks');

const post_owned_stock = async (req, res) => {
    const { stock_id, profile_id, quantity } = req.body;

    try {
        const ownedStockdetail = await Owned_Stock.create({ stock_id, profile_id, quantity });
        res.status(200).json(ownedStockdetail);
    } catch (error) {
        console.error('Error storing data:', error);
        res.status(400).json({ error: error.message });
    }
};

const get_owned_stock = async (req, res) => {
    const { profile_id } = req.params;

    try {
        const owned_stock_data = await Owned_Stock.find({ profile_id }).populate('stock_id');
        res.status(200).json(owned_stock_data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const patch_owned_stock = async (req, res) => {
    
    const { profile_id, stock_id } = req.params;
    const { quantity } = req.body;

    try {
        const updated_owned_stock = await Owned_Stock.findOneAndUpdate(
            { profile_id, stock_id },
            { $set: { quantity } },
            { new: true }
        );

        if (!updated_owned_stock) {
            return res.status(404).json({ error: 'Owned stock not found' });
        }

        res.status(200).json(updated_owned_stock);
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const delete_owned_stock = async (req, res) => {
    const { profile_id, stock_id } = req.params;

    try {
        // Assuming you have a unique combination of profile_id and stock_id to identify the entry
        const deletedStock = await Owned_Stock.findOneAndRemove({ profile_id, stock_id });

        if (!deletedStock) {
            return res.status(404).json({ error: 'Owned stock not found' });
        }

        res.status(200).json({ message: 'Owned stock deleted successfully', deletedStock });
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
module.exports = { post_owned_stock,get_owned_stock, patch_owned_stock, delete_owned_stock};

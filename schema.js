const mongoose = require('mongoose');

// Define schemas for Game, Round, and Stock
const gameSchema = new mongoose.Schema({
    duration: Number,
    start_time: Date,
});

const roundSchema = new mongoose.Schema({
    game_id: mongoose.Schema.Types.ObjectId,
    round_no: Number,
    duration: Number,
    start_time: Date,
});

const stockSchema = new mongoose.Schema({
    stock_name: String,
    current_price: Number,
    quantity: Number,
    game_id: mongoose.Schema.Types.ObjectId,
});

// Create models based on the schemas
const Game = mongoose.model('Game', gameSchema);
const Round = mongoose.model('Round', roundSchema);
const Stock = mongoose.model('Stock', stockSchema);

// Function to initialize and manipulate data
async function initializeData() {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb://localhost:27017/your_database_name', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        // Example: Create a new game
        const newGame = await Game.create({
            duration: 60, // Example duration in minutes
            start_time: new Date(),
        });

        // Example: Create a new round for the game
        const newRound = await Round.create({
            game_id: newGame._id,
            round_no: 1,
            duration: 15, // Example duration in minutes for the round
            start_time: new Date(),
        });

        // Example: Create a new stock for the game
        const newStock = await Stock.create({
            stock_name: 'AAPL', // Example stock name
            current_price: 150, // Example current price
            quantity: 100, // Example quantity
            game_id: newGame._id,
        });

        // Example: Update stock price
        await Stock.updateOne({ _id: newStock._id }, { $set: { current_price: 160 } });

        // Example: Find all stocks for a specific game
        const stocksInGame = await Stock.find({ game_id: newGame._id });

        console.log('Game:', newGame);
        console.log('Round:', newRound);
        console.log('Stock:', newStock);
        console.log('Stocks in Game:', stocksInGame);
    } catch (error) {
        console.error('Error:', error.message);
    } finally {
        // Disconnect from MongoDB
        await mongoose.disconnect();
    }
}

// Call the function to initialize and manipulate data
initializeData();

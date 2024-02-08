const Game = require('../Models/3.game');


const post_Game = async (req, res) => {
    const { duration, start_time } = req.body;

    try {
        const newGame = await Game.create({ duration, start_time });
        res.status(200).json(newGame);
    } catch (error) {
        console.error('Error creating game:', error);
        res.status(400).json({ error: error.message });
    }
};

const get_Game = async (req, res) => {
    const { game_id } = req.params;

    try {
        const game = await Game.findById(game_id);

        if (!game) {
            return res.status(404).json({ error: 'Game not found' });
        }

        res.status(200).json(game);
    } catch (error) {
        console.error('Error fetching game:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const patch_Game = async (req, res) => {
    const { game_id } = req.params;
    const { duration, start_time } = req.body;

    try {
        const updatedGame = await Game.findByIdAndUpdate(
            game_id,
            { $set: { duration, start_time } },
            { new: true }
        );

        if (!updatedGame) {
            return res.status(404).json({ error: 'Game not found' });
        }

        res.status(200).json(updatedGame);
    } catch (error) {
        console.error('Error updating game:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const delete_Game = async (req, res) => {
    const { game_id } = req.params;

    try {
        const deletedGame = await Game.findByIdAndDelete(game_id);

        if (!deletedGame) {
            return res.status(404).json({ error: 'Game not found' });
        }

        res.status(200).json(deletedGame);
    } catch (error) {
        console.error('Error deleting game:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { get_Game, post_Game, patch_Game, delete_Game };

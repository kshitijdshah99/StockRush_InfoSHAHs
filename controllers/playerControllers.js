const Player = require('../Models/7.player');

const post_Player = async (req, res) => {
    const { profile_id, game_id } = req.body;

    try {
        const newPlayer = await Player.create({ profile_id, game_id });
        res.status(200).json(newPlayer);
    } catch (error) {
        console.error('Error creating player:', error);
        res.status(400).json({ error: error.message });
    } 
};

const get_Player = async (req, res) => {
    try {
        const players = await Player.find().populate('profile_id game_id');
        res.status(200).json(players);
    } catch (error) {
        console.error('Error fetching players:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const patch_Player = async (req, res) => {
    const { game_id } = req.params;
    const { profile_id, new_game_id } = req.body;

    try {
        const updatedPlayer = await Player.findOneAndUpdate(
            { game_id },
            { profile_id, game_id: new_game_id },
            { new: true }
        );

        if (!updatedPlayer) {
            return res.status(404).json({ error: 'Player not found' });
        }

        res.status(200).json(updatedPlayer);
    } catch (error) {
        console.error('Error updating player:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const delete_Player = async (req, res) => {
    const { game_id } = req.params;

    try {
        const deletedPlayer = await Player.findOneAndDelete({ game_id });

        if (!deletedPlayer) {
            return res.status(404).json({ error: 'Player not found' });
        }

        res.status(200).json(deletedPlayer);
    } catch (error) {
        console.error('Error deleting player:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { post_Player, get_Player, patch_Player, delete_Player };

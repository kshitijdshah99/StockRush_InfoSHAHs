const Round = require('../Models/2.round'); 

const post_Round = async (req, res) => {
    const { round_no, start_time, duration, game_id } = req.body;

    try {
        const newRound = await Round.create({ round_no, start_time, duration, game_id });
        res.status(200).json(newRound);
    } catch (error) {
        console.error('Error creating round:', error);
        res.status(400).json({ error: error.message });
    }
};

const get_Round = async (req, res) => {
    const { round_id } = req.params;

    try {
        const round = await Round.findById(round_id).populate('game_id');

        if (!round) {
            return res.status(404).json({ error: 'Round not found' });
        }

        res.status(200).json(round);
    } catch (error) {
        console.error('Error fetching round:', error);
        res.status(400).json({ error: 'Internal Server Error' });
    }
};

const patch_Round = async (req, res) => {
    const { round_id } = req.params;
    const { round_no, start_time, duration, game_id } = req.body;

    try {
        const updatedRound = await Round.findByIdAndUpdate(
            round_id,
            { $set: { round_no, start_time, duration, game_id } },
            { new: true }
        );

        if (!updatedRound) {
            return res.status(404).json({ error: 'Round not found' });
        }

        res.status(200).json(updatedRound);
    } catch (error) {
        console.error('Error updating round:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const delete_Round = async (req, res) => {
    const { round_id } = req.params;

    try {
        const deletedRound = await Round.findByIdAndDelete(round_id);

        if (!deletedRound) {
            return res.status(404).json({ error: 'Round not found' });
        }

        res.status(200).json(deletedRound);
    } catch (error) {
        console.error('Error deleting round:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { get_Round, post_Round, patch_Round, delete_Round };

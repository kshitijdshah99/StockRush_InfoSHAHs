const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
    profile_id: {
        type: Schema.Types.ObjectId,
        ref: 'User_Profile', // Reference to the User_Profile collection
        required: true,
    },
    game_id: {
        type: Schema.Types.ObjectId,
        ref: 'Game', // Reference to the Game collection (assuming you have a Game model)
        required: true,
    },
}, { collection: 'Player', versionKey: false });

module.exports = mongoose.model('Player', playerSchema);

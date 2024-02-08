const User_Profile = require('../Models/8.USER_PROF');
const jwt = require('jsonwebtoken')
// const refreshToken=require('./refreshTokenController');

const handleLogout = async (req, res) => {
    try {
        
        const userId = req.user._id;
        
        const user = await User_Profile.findById(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

    
        user.refreshToken = null; 

        await user.save();

        // Send success response
        res.status(204).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error logging out:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = handleLogout;
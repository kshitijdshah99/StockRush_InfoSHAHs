const User_Profile = require('../Models/8.USER_PROF.js');

const post_user_profile = async (req, res) => {
    const { email_id, password, username, net_worth } = req.body;
    console.log('Received data:', req.body);
    try {
        const user_detail = await User_Profile.create({ email_id, password, username, net_worth });
        console.log('Stored data:', user_detail);
        res.status(200).json(user_detail);
    } catch (error) {
        console.error('Error storing data:', error);
        res.status(400).json({ error: 'Failed to create user profile' });
    }
};

const get_user_profile = async (req, res) => {

    const{profile_id}=req.params;
    try {
        const user_profiles = await User_Profile.findById(profile_id);
        res.status(200).json(user_profiles);
    } catch (error) {
        console.error('Error fetching user profiles:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const patch_user_profile = async (req, res) => {
    const { profile_id } = req.params;
    const updateFields = req.body;

    try {
        const updatedUserProfile = await User_Profile.findByIdAndUpdate(
            profile_id,
            { $set: updateFields },
            { new: true }
        );

        if (!updatedUserProfile) {
            return res.status(404).json({ error: 'User profile not found' });
        }

        res.status(200).json(updatedUserProfile);
    } catch (error) {
        console.error('Error updating user profile:', error);
        res.status(500).json({ error: 'Failed to update user profile' });
    }
};

module.exports = { post_user_profile, get_user_profile ,patch_user_profile};

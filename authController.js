const User_Profile = require('../Models/8.USER_PROF');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, "helllo", { expiresIn: '3d' })
  }
  
  // login a user
  const handleLogin = async (req, res) => {
    const {email_id, password} = req.body;

    try {
        const user = await User_Profile.login(email_id, password);
        console.log(user);
        if (!user) {
            return res.status(400).json({ error: 'Invalid email or password' });
        }
        const match = await bcrypt.compare(password, user.password);

        if (match) {
            // create JWT
            const accessToken = createToken(user._id);
            res.status(200).json({ userType: user.username, email_id, token: accessToken });
        } else {
            res.status(401).json({ error: 'Email-id or password is incorrect' });
        }

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { handleLogin };
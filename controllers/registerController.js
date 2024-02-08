const User_Profile = require('../Models/8.USER_PROF');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const createToken = (_id) => {
    return jwt.sign({_id},"helllo", { expiresIn: '3d' })
  }
const handleNewUser = async (req, res) => {
    const { username, password, email_id } = req.body;
    
    if (!username || !password || !email_id) {
        res.status(400).send('Missing username, password, or email_id');
        return;
    }

    // Check for duplicate username or email_id in DB
    const duplicateUsername = await User_Profile.findOne({ username }).exec();
    const duplicateEmail = await User_Profile.findOne({ email_id }).exec();

    if (duplicateUsername || duplicateEmail) {
        res.status(409).send('Username or email_id already exists');
        return;
    }

    try {
        // Hash password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        // Add new user to DB
        const result = await User_Profile.create({
            username,
            password: hashedPassword,
            email_id,
            net_worth:20000,
        });
        const token = createToken(result._id)
        console.log(result);
        res.status(201).send(`New user ${username} created! with ${token}`);
    } catch (err) {
        res.status(500).send(`Error: ${err.message}`);
    }
};

module.exports = {handleNewUser};

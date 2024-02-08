const User_Profile = require('../Models/8.USER_PROF');
const jwt = require('jsonwebtoken');

const handleRefreshToken = async (req, res) => {
    
    const cookies = req.cookies;
    if(!cookies?.jwt) return res.sendStatus(401);
    
    const refreshToken = cookies.jwt;
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None' });

    // Check for username, email, and password in DB
    const foundUser = await User_Profile.findOne({ refreshToken }).exec();
    if (!foundUser || foundUser.email_id !== req.body.email_id || foundUser.password !== req.body.password) {
        return res.sendStatus(401); // Unauthorized
    }

    try {
        // Compare refresh token
        const newRefreshTokenArray = foundUser.refreshToken.filter(token => token !== refreshToken);

        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            async (err, decoded) => {
                if(err) {
                    // Delete wrong refreshToken from DB if user found
                    foundUser.refreshToken = newRefreshTokenArray;
                    const result = await foundUser.save();
                    console.log(result);
                    return res.sendStatus(403); // Forbidden
                }

                if (err || foundUser.username !== decoded.userInfo.username) return res.sendStatus(403);

                const roles = Object.values(foundUser.roles);
                const accessToken = jwt.sign(
                    {
                        "userInfo": {
                            "username": foundUser.username,
                            // "roles": roles
                        }
                    },
                    process.env.SECRET,
                    { expiresIn: '3d' }
                );
                const newRefreshToken = jwt.sign(
                    {
                        "userInfo": {
                            "username": foundUser.username,
                            // "roles": roles
                        }
                    },
                    process.env.REFRESH_TOKEN_SECRET,
                    { expiresIn: '15d' }
                );
                // Save refresh token to the current user
                foundUser.refreshToken = [...newRefreshTokenArray, newRefreshToken];
                const result = await foundUser.save();
                console.log(result);
                res.cookie('jwt', newRefreshToken, { httpOnly: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });

                res.status(200).json({ roles, accessToken });
            }
        );
    }
    catch (err) {
        res.status(500).send(`error: ${err.message}`);
    }
}

module.exports = handleRefreshToken;

const User_Profile = require('../Models/8.USER_PROF');
const jwt = require('jsonwebtoken')

const verifyJWT = async (req, res, next) => {
    // verify user is authenticated
    const { authorization } = req.headers
  
    if (!authorization) {
      return res.status(401).json({error: 'Authorization token required'})
    }
    
    const token = authorization.split(' ')[1]
  
    try {
      const { _id } = jwt.verify(token,"helllo")           //helllo is secret string which combines with object_id of User to give token
  
      req.user = await User_Profile.findOne({ _id }).select('_id')
      next()
  
    } catch (error) {
      console.log(error)
      res.status(401).json({error: 'Request is not authorized'})
    }
  }
  
  module.exports = {verifyJWT};
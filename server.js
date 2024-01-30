const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
// const cors = require('cors');
const {logger} = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const credentials = require('./middleware/credentials');

// const corsOptions = require('./config/corsOptions');
const cookieParser = require('cookie-parser');


const connectDB = require('./config/dbConnection');
// const PORT = process.env.PORT || 3500;
// require('dotenv').config();
// Connect to DB
connectDB();
//custom middleware logger
// app.use(logger);

//Handles options credentials check - before CORS
//fetch cookies credentials requirement
// app.use(credentials);

//cors
// app.use(cors(corsOptions));

//middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use('/',express.static(path.join(__dirname, 'public')));
// app.use(cookieParser());

//routes
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
// app.use(verifyJWT) 
// app.use('/api/employees', require('./routes/api/employees'));
   app.use('/api',require('./routes/stock_exchangeRoutes'))
   app.use('/api',require('./routes/owned_stockRoutes'))
   app.use('/api/user',require('./routes/user_profileRoutes'))
   app.use('/api/player',require('./routes/playerRoutes'))
   app.use('/api',require('./routes/gameRoutes'))
   app.use('/api/round',require('./routes/roundRoutes'))
   
// Nothing found
// app.all('*', (req, res) => {
//     res.status(404);
//     if(req.accepts('html')) {
//         res.sendFile(path.join(__dirname, 'views', '404.html'));
//     } else if(req.accepts('json')) {
//         res.json({error: 'Not found'});
//     } else {
//         res.type('txt').send('Not found');
//     }
// })
app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).send('Something went wrong!');
});
// app.use(errorHandler);

// mongoose.connection.once('open', () => {
//     console.log('MongoDB connection ready');
   //  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// });
PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

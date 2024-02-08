const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const {logger} = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const {verifyJWT} = require('./middleware/verifyJWT');
const credentials = require('./middleware/credentials');
const { createServer } = require("http");
const { Server } = require("socket.io");



//Connecting to MongoDB
const connectDB = require('./config/dbConnection');
connectDB();


app.use(credentials);


// middelware routes
app.use(express.json());
app.use(cors({origin:true}));
const cookieParser = require('cookie-parser');
app.use(errorHandler);
app.use(logger);
app.use('/', require('./routes/root'));
app.use('/register', require('./routes/register'));
app.use('/auth', require('./routes/auth'));
app.use('/refresh', require('./routes/refresh'));
app.use('/logout', require('./routes/logout'));
app.use(verifyJWT)

//controller routes
app.use('/api/ser',require('./routes/stock_exchangeRoutes'))
app.use('/api/os',require('./routes/owned_stockRoutes'))
app.use('/api/user',require('./routes/user_profileRoutes'))
app.use('/api/player',require('./routes/playerRoutes'))
app.use('/api/gr',require('./routes/gameRoutes'))
app.use('/api/round',require('./routes/roundRoutes'))
app.use('/api/ML',require('./routes/newsRoutes'))


app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).send('Something went wrong!');
});


// Websocket implementation
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
   console.log("Connection established ", socket.id);
 
   socket.on("join-room", (roomId, id, name) => {
     console.log(`A new user ${id} has joined the room ${roomId}`);
     socket.join(roomId);
     socket.broadcast.to(roomId).emit("user-connected", id, name);
   });
});

// connecting our server to PORT
PORT = 4000;
httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

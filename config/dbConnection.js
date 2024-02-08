const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const express= require('express');
const app = express();

//Database Connection
const mongoUrl="mongodb+srv://Kshitij_Shah:kds123@cluster0.hegzraf.mongodb.net/Stock_Market_Game"

const connectDB = async () => {
    mongoose.connect(mongoUrl,
    {
        useNewUrlParser:true,
        dbName: "Stock_Market_Game"
    })
    .then(()=>{console.log("connected to database");})
    .catch(e=>console.log(e));
    }
    // app.listen(PORT, () => {
    //     console.log(`Server is running on port ${PORT}`);
    //   });
    
    module.exports = connectDB;


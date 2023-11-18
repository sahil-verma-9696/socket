const mongoose = require("mongoose");

async function connectDB(database) {
    try {
        const url = `mongodb://127.0.0.1:27017/${database}`;
        const response = await mongoose.connect(url);
        console.log("Database connected successfully ");
        // console.log(response);
    } catch (error) {
        console.log("Error : connectDB");
        console.log(error);
    }
}

module.exports = { connectDB };
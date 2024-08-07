const mongoose = require ("mongoose");
require('dotenv').config();

const uri ="mongodb+srv://ammu:ammu@cluster.lub2uzd.mongodb.net/hotelmanagementsystem-db?retryWrites=true&w=majority&appName=Cluster"
const connectDB = async () => {
 try {
    const con = await mongoose.connect(uri);
    console.log(`MongoDB connected: ${con. connection.host}`);
 } catch  (error) {
    console.log(error);
 }
};
module.exports = connectDB;
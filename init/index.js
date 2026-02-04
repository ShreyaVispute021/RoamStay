const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

const mongoURL = "mongodb://127.0.0.1:27017/RoamStay";

async function main() {
    await mongoose.connect(mongoURL);
    console.log("Connected to db");

    await Listing.deleteMany({});
    await Listing.insertMany(initdata);   
    console.log("Data was initialized");

    mongoose.connection.close();
}

main().catch(err => console.log(err));

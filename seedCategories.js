const mongoose = require("mongoose");
const Listing = require("./models/listing");

mongoose.connect("mongodb://127.0.0.1:27017/RoamStay");

const categories = [
  "Trending",
  "Rooms",
  "Iconic Cities",
  "Mountains",
  "Castles",
  "Swimming Pools",
  "Camping",
  "Farms",
  "Arctic"
];

const assignCategories = async () => {
  const listings = await Listing.find({});

  for (let listing of listings) {
    listing.category = categories[Math.floor(Math.random() * categories.length)];
    await listing.save();
  }

  console.log("Categories assigned!");
  mongoose.connection.close();
};

assignCategories();
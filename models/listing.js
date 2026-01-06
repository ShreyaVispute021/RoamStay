const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,

  image: {
    filename: String,
    url: {
      type: String,
      default:
        "https://www.fabhotels.com/blog/wp-content/uploads/2018/06/600x400-7.jpg"
    }
  },

  price: Number,
  location: String,
  country: String
});

module.exports = mongoose.model("Listing", listingSchema);

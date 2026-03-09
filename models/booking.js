const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({

  listing:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Listing"
  },

  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },

  checkIn:Date,
  checkOut:Date,

  guests:Number,

  totalPrice:Number,

  paymentStatus:{
    type:String,
    default:"pending"
  }

},{timestamps:true});

module.exports = mongoose.model("Booking",bookingSchema);
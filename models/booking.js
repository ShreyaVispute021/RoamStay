const { required } = require("joi");
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

  checkIn: {
    type: Date,
    required: true
  },
  checkOut: {
    type: Date,
    required: true
  },

  guests: {
    type: Number,
    required: true,
    min: 1
  },

  totalPrice:Number,

  paymentStatus:{
    type:String,
    default:"pending"
  }

},{timestamps:true});

module.exports = mongoose.model("Booking",bookingSchema);
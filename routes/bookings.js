const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");

router.post("/create", async(req,res)=>{

    try{

        const booking = new Booking(req.body);

        await booking.save();

        req.flash("success","Booking successful!");

        res.redirect("/listings");

    }catch(err){
        console.log(err);
    }

});

module.exports = router;
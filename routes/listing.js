const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing} = require("../middleware.js");

//Index Route
router.get("/", wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
}));

//New Route
router.get("/new", isLoggedIn, (req, res) => {
    res.render("listings/new.ejs");
});

//Show Route
router.get("/:id", wrapAsync(async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("owner");
    if(!listing) {
        req.flash("error", "Listing you search for does not exist :(");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", {listing});
}));

//Create Route
router.post("/", isLoggedIn, validateListing, wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    console.log(req.user);
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "Successfully created new Listing!!");
    res.redirect("/listings");
}));

//Edit Route
router.get("/:id/edit", isLoggedIn, wrapAsync(async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "Listing you search for does not exist :(");
        res.redirect("/listings");
    }
    res.render("listings/edit.ejs", {listing});
}));

//Update Route
router.put("/:id", isLoggedIn, isOwner, validateListing, wrapAsync(async (req, res) => {
    const { id } = req.params;
    const oldListing = await Listing.findById(id);
    // preserve image if empty
    if (
        !req.body.listing.image ||
        !req.body.listing.image.url ||
        req.body.listing.image.url.trim() === ""
    ) {
        req.body.listing.image = oldListing.image;
    }
    // let listing = await Listing.findById(id);
    // if(!currUser && listing.owner._id.equals(res.locals.currUser._id)) {
    //     req.flash("error", "You don't have permission to Edit");
    //     res.redirect(`/listings/${id}`);
    // }
    await Listing.findByIdAndUpdate(id, req.body.listing);
    req.flash("success", "Successfully updated Listing!!");
    res.redirect(`/listings/${id}`);
}));

//Delete Route
router.delete("/:id", isLoggedIn, wrapAsync(async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!!");
    res.redirect("/listings");
}));

module.exports = router;
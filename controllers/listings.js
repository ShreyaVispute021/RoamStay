const Listing = require("../models/listing");

//Index Route
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", {allListings});
};

//New Route
module.exports.renderNewForm = (req, res) => {
    res.render("listings/new.ejs");
};

//Show Route
module.exports.show = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate({path: "reviews", populate: {path: "author"}}).populate("owner");
    if(!listing) {
        req.flash("error", "Listing you search for does not exist :(");
        res.redirect("/listings");
    }
    console.log(listing);
    res.render("listings/show.ejs", {listing});
};

//create
module.exports.create = async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    console.log(req.user);
    if(req.file) {
        newListing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
    }
    newListing.owner = req.user._id;
    await newListing.save();
    req.flash("success", "Successfully created new Listing!!");
    res.redirect("/listings");
};

//edit
module.exports.edit = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing) {
        req.flash("error", "Listing you search for does not exist :(");
        res.redirect("/listings");
    }
    res.render("listings/edit.ejs", {listing});
};

//update
module.exports.update = async (req, res) => {
    const { id } = req.params;
    // const oldListing = await Listing.findById(id);
    // if (
    //     !req.body.listing.image ||
    //     !req.body.listing.image.url ||
    //     req.body.listing.image.url.trim() === ""
    // ) {
    //     req.body.listing.image = oldListing.image;
    // }
    // await Listing.findByIdAndUpdate(id, req.body.listing);
    let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });
    if(req.file) {
        listing.image = {
            url: req.file.path,
            filename: req.file.filename
        };
        await listing.save();
    }
    req.flash("success", "Successfully updated Listing!!");
    res.redirect(`/listings/${id}`);
};

//delete
module.exports.delete = async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!!");
    res.redirect("/listings");
};
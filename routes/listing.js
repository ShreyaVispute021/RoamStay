const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, isListingOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/")
//Index Route
.get(wrapAsync(listingController.index))
//Create Route
.post(isLoggedIn, isOwner, upload.single("image"), validateListing, wrapAsync(listingController.create));

//New Route
router.get("/new", isLoggedIn, isOwner, listingController.renderNewForm);

router.route("/:id")
//Show Route
.get(wrapAsync(listingController.show))
//Update Route
.put(isLoggedIn, isListingOwner, upload.single("image"), validateListing, wrapAsync(listingController.update))
//Delete Route
.delete(isLoggedIn, isListingOwner, wrapAsync(listingController.delete));

//Edit Route
router.get("/:id/edit", isLoggedIn, isListingOwner, wrapAsync(listingController.edit));

module.exports = router;
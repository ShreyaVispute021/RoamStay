const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer = require("multer");
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage });

router.route("/")
//Index Route
.get(wrapAsync(listingController.index))
//Create Route
.post(isLoggedIn, validateListing, wrapAsync(listingController.create));

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

router.route("/:id")
//Show Route
.get(wrapAsync(listingController.show))
//Update Route
.put(isLoggedIn, isOwner, validateListing, wrapAsync(listingController.update))
//Delete Route
.delete(isLoggedIn, wrapAsync(listingController.delete));

//Edit Route
router.get("/:id/edit", isLoggedIn, wrapAsync(listingController.edit));

module.exports = router;
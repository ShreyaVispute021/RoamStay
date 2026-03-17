const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isBookingOwner } = require("../middleware");
const bookingController = require("../controllers/bookings");

// Show booking form
router.get("/:id/new", isLoggedIn, wrapAsync(bookingController.renderForm));

// Create booking
router.post("/:id", isLoggedIn, wrapAsync(bookingController.createBooking));

// My bookings
router.get("/", isLoggedIn, wrapAsync(bookingController.myBookings));

// Delete booking
router.delete("/:bookingId", isLoggedIn, isBookingOwner, wrapAsync(bookingController.deleteBooking));

module.exports = router;
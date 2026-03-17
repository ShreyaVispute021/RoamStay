const Booking = require("../models/booking");
const Listing = require("../models/listing");

module.exports.renderForm = async (req, res) => {
    const listing = await Listing.findById(req.params.id);
    const bookings = await Booking.find({ listing: req.params.id });
    res.render("bookings/new", { listing });
};

module.exports.createBooking = async (req, res) => {
    const { checkIn, checkOut, guests } = req.body;

    const listing = await Listing.findById(req.params.id);

    const start = new Date(checkIn);
    const end = new Date(checkOut);

    const days = (end - start) / (1000 * 60 * 60 * 24);

    if (days <= 0) {
        req.flash("error", "Invalid dates!");
        return res.redirect(`/bookings/${req.params.id}/new`);
    }

    const existing = await Booking.findOne({
        listing: req.params.id,
        $or: [
            { checkIn: { $lt: end }, checkOut: { $gt: start } }
        ]
    });

    if (existing) {
        req.flash("error", "Dates already booked!");
        return res.redirect(`/listings/${req.params.id}`);
    }

    const totalPrice = days * listing.price;

    const booking = new Booking({
        listing: listing._id,
        user: req.user._id,
        checkIn: start,
        checkOut: end,
        guests,
        totalPrice
    });

    await booking.save();

    req.flash("success", `Booking confirmed! ₹${totalPrice}`);
    res.redirect("/bookings");
};

module.exports.myBookings = async (req, res) => {
    const bookings = await Booking.find({ user: req.user._id })
        .populate("listing");

    res.render("bookings/index", { bookings });
};

module.exports.deleteBooking = async (req, res) => {
    await Booking.findByIdAndDelete(req.params.bookingId);

    req.flash("success", "Booking cancelled!");
    res.redirect("/bookings");
};
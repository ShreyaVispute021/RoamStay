const Listing = require("../routes/listing");
const Review = require("../routes/review");

//post review
module.exports.post = async(req, res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    newReview.author = req.user._id;
    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success", "Successfully added new Review!!");
    res.redirect(`/listings/${listing._id}`);
};

//delet review
module.exports.delete = async (req, res) => {
    let {id, reviewId} = req.params;
    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash("success", "Successfully deleted Review!!");
    res.redirect(`/listings/${id}`);
};
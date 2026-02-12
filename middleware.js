module.exports.isLoggedIn = (req, res, next) => {
    console.log(req.user);
    if(!req.isAuthenticated()) {
        req.flash("error", "You must login to create a new listing!");
        return res.redirect("/login");
    }
    next();
};
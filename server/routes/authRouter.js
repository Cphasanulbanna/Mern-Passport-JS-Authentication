const router = require("express").Router();
const passport = require("passport");

router.get("/login/success", (req, res) => {
    if (req.user) {
        res.status(200).json({ success: true, message: "success", user: req.user });
    }
});

router.get("/login/failed", (req, res) => {
    res.status(401).json({ success: false, message: "failed" });
});

router.get("/logout", (req, res) => {
    req.logOut();
    res.redirect("http://127.0.0.1:5173/");
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));
router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: "http://127.0.0.1:5173/",
        failureRedirect: "/login/failed",
    })
);

module.exports = router;

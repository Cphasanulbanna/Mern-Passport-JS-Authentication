const express = require("express");
const dotenv = require("dotenv");
const cookieSession = require("cookie-session");
const cors = require("cors");
const passport = require("passport");
dotenv.config();

const passportSetup = require("./passport");
const authRoute = require("./routes/authRouter");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(
    cookieSession({
        name: "session",
        keys: ["banna"], // Provide an array of keys for signing and verifying session cookies
        maxAge: 24 * 60 * 60 * 1000, // Adjust the maxAge value as needed
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoute); // Adjust the base route for authentication routes if necessary

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

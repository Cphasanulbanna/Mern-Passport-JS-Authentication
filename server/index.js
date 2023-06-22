//modules
const express = require("express");
require("dotenv").config();
const cookieSession = require("cookie-session");
const cors = require("cors");
const passport = require("passport");

const passportSetup = require("./utils/passport");
const authRoute = require("./routes/authRouter");

const app = express();
const PORT = process.env.PORT;

//midddlewares

app.use(cookieSession(), {
    name: "session",
    keys: ["banna"],
    maxAge: 24 * 60 * 60 * 100,
});
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.json());

app.use("/auth/", authRoute);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

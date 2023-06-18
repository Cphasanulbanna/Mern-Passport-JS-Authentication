const express = require("express");
require("dotenv").config();
const cors = require("cors");

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

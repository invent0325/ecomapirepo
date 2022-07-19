const express = require("express")
const app = express()
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("database connected"))
    .catch((err) => {
    console.log(err);
});

app.listen(4500, () => {
    console.log("listening on http://localhost:4500")
});
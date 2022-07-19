const express = require("express")
const router = express.Router()

router.get("/usertest", (req, res) => {
    res.send("user test is successful...working");
});

module.exports = router;
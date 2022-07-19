const express = require("express")
const router = express.Router()

router.get("/usertest", (req, res) => {
    res.send("user test is successful...working");
});

router.get("/user-products", (req, res) => {
    res.send("Products list derived");
})

router.post("/userposttest", (req, res) => {
   const username = req.body.username;
   console.log(username);
});

module.exports = router;
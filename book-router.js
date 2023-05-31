const app = require("express");
const router = app.Router();

router.get("/", function(req, res) {
    res.send("Hello from the book-router");
})

module.exports = router

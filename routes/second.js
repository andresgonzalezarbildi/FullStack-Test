const express = require("express");
const router = express.Router();

//  @desc   Second page
//  @route  Get /second
router.get("/", (req, res) => {
  try {
    res.render("second");
  } catch (error) {
    console.error(err);
    res.render("error/500");
  }
});

//Middleware
module.exports = router;

const express = require("express");
const router = express.Router();

//  @desc   Landing page
//  @route  Get /
router.get("/", (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    console.error(err);
    res.render("error/500");
  }
});

//Middleware
module.exports = router;

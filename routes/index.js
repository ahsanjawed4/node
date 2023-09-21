const express = require("express");
const mid = require("../middlewares/auth");
const router = express.Router();
router.route("/").get((req, res, next) => {
  res.send("<h1>Good to See You.</h1>");
});
router.route("/about").get(mid.auth, (req, res) => {
  res.send("good to see you");
});
module.exports = {
  router,
};

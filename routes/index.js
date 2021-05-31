const express = require("express");
const userRoutes = require("../routes/user-routes");
const bankifyRoutes = require("../routes/bankify-routes");
const router = express.Router();
router.use("/users", userRoutes);
router.use("/bankify", bankifyRoutes);

module.exports = router;

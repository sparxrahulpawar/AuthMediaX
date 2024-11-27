const express = require("express");
const authRoutes = require("./authRoutes");
const oauthRoutes = require("./oauthRoutes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/o-auth", oauthRoutes);

module.exports = router;

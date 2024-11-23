const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev")); // Set up Morgan for logging HTTP requests

app.get("/", (req, res) => {
  res.send("Welcome to the Advanced User Management Platform!");
});

// Sync Sequelize models with the database
sequelize.sync().then(() => {
  console.log("Database connected and synced");
});

module.exports = app;

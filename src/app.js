const express = require("express");
const cors = require("cors");
const { sequelize } = require("./models/index");
const helmet = require("helmet");
const morgan = require("morgan");
const routes = require("./routes/index");
const errorHandler = require("./middlewares/errorHandler");
const passport = require("passport");
require("./config/passport")

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(passport.initialize());

app.get("/", (req, res) => {
  res.send("Welcome to the Advanced User Management Platform!");
});

app.use("/api", routes);

//global error handling
app.use(errorHandler);

// Sync Sequelize models with the database
sequelize.sync().then(() => {
  console.log("Database connected and synced");
});

module.exports = app;

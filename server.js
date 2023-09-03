const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// Dotenv configure

dotenv.config();

// Mongo Connection

connectDB();

// rest object :

const app = express();
const port = process.env.PORT || 8080;

// middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes

app.use("/api/v1/user", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(
    `Server running on ${process.env.NODE_MODE} Mode on port ${process.env.port}`
      .bgGreen.white
  );
});

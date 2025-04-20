const express = require("express");
const mongoose = require("mongoose");
const PORT = require("./config.js");
const Book = require("./models/bookModels.js");
const bookRoutes = require("./routes/bookRoutes.js");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Welcome to Book Store");
});

//routes
app.use("/book", bookRoutes);
mongoose
  .connect(
    "",
    {}
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Port is listening to port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const express = require("express");
const Book = require("../models/bookModels");
const routes = express.Router();

//create Book
routes.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send("Please Fill All the required Filed");
    } else {
      const newBook = await Book.create(req.body);
      res.status(200).send("successfully new Book Added");
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//find book
routes.get("/", async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).send(book);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

//find book by id
routes.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send("No Book Found");
    }
    res.status(200).send(book);
  } catch (error) {
    response.status(500).send({ message: error.message });
  }
});

//delete book by id
routes.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const book = await Book.findByIdAndDelete(id);
  if (!book) {
    res.status(404).send("No Book Found");
  }
  res.status(200).send("Book Sucessfully Deleted");
});

module.exports = routes;

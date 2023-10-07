const { text } = require("body-parser")
const mongoose = require("mongoose")
const multer = require("multer")

const carsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    price: {
      type: Number,
    },
    category: {
      type: String,
    },
    imageUrl: {
      type: String,
      defaultValue:
        "https://tse2.mm.bing.net/th?id=OIP.U2iQ7wNK6ZzTW_traW_-PQHaHa&pid=Api&P=0&h=180",
    },
  },
  {
    timestamps: true,
  }
)

const Car = mongoose.model("Car", carsSchema)

module.exports = Car

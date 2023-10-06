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
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

const Car = mongoose.model("Car", carsSchema)

module.exports = Car

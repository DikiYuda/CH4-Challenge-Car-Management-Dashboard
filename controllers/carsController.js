const fs = require("fs")
const Car = require(".././model/carModel")

const createCar = async (req, res) => {
  try {
    const newCar = await Car.create(req.body)
    res.status(201).json({
      status: "success",
      data: {
        car: newCar,
      },
    })
  } catch (err) {
    console.log(err)
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

const getAllTours = async (req, res) => {
  try {
    const { price, name, category } = req.query

    const condition = {}
    if (price)
      condition.price = { $gt: req.query.price }
    if (name)
      condition.name = {
        $regex: ".*" + name + ".*",
        $options: "i",
      }
    if (category)
      condition.category = {
        $gt: req.query.category,
      }

    const cars = await Car.find().where(condition)

    res.status(200).json({
      status: "success",
      requestTime: req.requestTime,
      length: tours.length,
      data: {
        cars,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id)

    res.status(200).json({
      status: "success",
      data: {
        car,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: "success",
      message: err.message,
    })
  }
}

const editCar = async (req, res) => {
  try {
    const id = req.params.id

    const car = await Car.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
      }
    )

    res.status(201).json({
      status: "success",
      data: {
        tour: tour,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

const removeCar = async (req, res) => {
  try {
    const id = req.params.id

    const car = await Car.findByIdAndRemove(id)

    // validator
    if (!car) {
      return res.status(400).json({
        status: "failed",
        message:
          "data with this id is not defined",
      })
    }

    res.status(201).json({
      status: "success",
      message: "data with this id is deleted",
    })
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

module.exports = {
  getAllCars,
  getCarById,
  createCar,
  editCar,
  removeCar,
}

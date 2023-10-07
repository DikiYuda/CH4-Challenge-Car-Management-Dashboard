const Car = require("../model/carModel")
const imagekit = require("../lib/imagekit")

const carsPage = async (req, res) => {
  try {
    const { name, category, price } = req.query
    const condition = {}

    if (name)
      condition.name = {
        $regex: ".*" + name + ".*",
        $options: "i",
      }

    if (category)
      condition.category = {
        $regex: category,
        $options: "i",
      }

    if (price)
      condition.price = {
        $regex: price,
        $options: "i",
      }

    const cars = await Car.find(condition)

    res.render("index.ejs", {
      cars,
      message: req.flash("message", ""),
    })
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

const createPage = async (req, res) => {
  try {
    res.render("create.ejs")
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

const createCar = async (req, res) => {
  const { name, price, category } = req.body
  const file = req.file

  try {
    // dapatkan extension file nya
    const split = file.originalname.split(".")
    const extension = split[split.length - 1]

    //upload file ke imagekit
    const img = await imagekit.upload({
      file: file.buffer,
      fileName: `IMG-${Date.now()}.${extension}`,
    })
    console.log(img.url)

    await Car.create({
      name,
      price,
      category,
      imageUrl: img.url,
    })

    res.redirect(200, "/dashboard")
    req.flash("message", "Ditambah")
  } catch (err) {
    console.log(err)
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

const editPage = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id)
    res.render("edit.ejs", {
      car,
    })
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

const editCar = async (req, res) => {
  const { name, price, category } = req.body
  const file = req.file
  try {
    const id = req.params.id
    if (file) {
      const split = file.originalname.split(".")
      const extension = split[split.length - 1]
      // upload file ke imagekit
      const img = await imagekit.upload({
        file: file.buffer,
        fileName: `IMG-${Date.now()}.${extension}`,
      })
      await Car.findByIdAndUpdate(
        id,
        {
          name,
          price,
          category,
          imageUrl: img.url,
        },
        {
          new: true,
        }
      )
      req.flash("message", "Diupdate")
      res.redirect("/dashboard")
      return
    }
    await Car.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    req.flash("message", "Diupdate")
    res.redirect("/dashboard")
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
    await Car.findByIdAndRemove(id)
    req.flash("message", "Dihapus")
    res.redirect("/dashboard")
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    })
  }
}

module.exports = {
  carsPage,
  createPage,
  createCar,
  editPage,
  editCar,
  removeCar,
}

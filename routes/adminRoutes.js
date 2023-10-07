const express = require("express")
const adminController = require("../controllers/adminController")
const router = express.Router()

const upload = require("../middlewares/upload")

router
  .route("/dashboard")
  .get(adminController.carsPage)

router
  .route("/dashboard/create")
  .get(adminController.createPage)

router
  .route("/dashboard/edit/:id")
  .get(adminController.editPage)

// api function for action
router
  .route("/cars/add")
  .post(
    upload.single("image"),
    adminController.createCar
  )

router
  .route("/cars/delete/:id")
  .get(adminController.removeCar)

router
  .route("/cars/update/:id")
  .post(
    upload.single("image"),
    adminController.editCar
  )

module.exports = router

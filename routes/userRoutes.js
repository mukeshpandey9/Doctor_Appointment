const express = require("express");
const {
  registerController,
  authController,
  applyDoctorController,
  loginController,
} = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

// Router Object

const router = express.Router();

// Routes
// Login
router.post("/login", loginController);

// Register
router.post("/register", registerController);

// Auth
router.post("/getUserData", authMiddleware, authController);

// Apply doctor
router.post("/apply-doctor", authMiddleware, applyDoctorController);

module.exports = router;

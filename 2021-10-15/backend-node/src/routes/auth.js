const router = require("express").Router()
const authController = require("../controllers/auth")
const validationMiddleware = require("../middleware/validationMiddleware")
const { check } = require("express-validator")

router.post("/login", [
  check("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("must be correctly formatted"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("must be at least 6 characters long"),
], validationMiddleware, authController.login)

router.post("/signup", [
  check("firstName")
    .isLength({ min: 3 })
    .withMessage("must be at least 3 characters long")
    .trim()
    .exists()
    .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
    .withMessage("must be alphabetic"),
  check("lastName")
    .isLength({ min: 3 })
    .withMessage("must be at least 3 characters long")
    .trim()
    .exists()
    .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
    .withMessage("must be alphabetic"),
  check("email")
    .isEmail()
    .normalizeEmail()
    .withMessage("must be correctly formatted"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("must be at least 6 characters long"),
], validationMiddleware, authController.signup)

module.exports = router

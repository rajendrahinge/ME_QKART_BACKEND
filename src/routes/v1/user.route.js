const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");

const router = express.Router();
const auth = require("../../middlewares/auth");

router.get("/:userId",auth,validate(userValidation.getUser),userController.getUser)

router.put("/:userId",auth,validate(userValidation.setAddress),userController.setAddress)


module.exports = router;


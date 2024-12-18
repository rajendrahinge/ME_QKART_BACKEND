const express = require("express");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");
const cartValidation = require("../../validations/cart.validation");
const cartController = require("../../controllers/cart.controller");

const router = express.Router();

router.post(
  "/",
  auth,
  validate(cartValidation.addProductToCart),
  cartController.addProductToCart
);

router.put(
  "/",
  auth,
  validate(cartValidation.addProductToCart),
  cartController.updateProductInCart
);

router.put(
  "/checkout",
  auth,
  cartController.checkout
);

router.get("/", auth, cartController.getCart);


module.exports = router;


const express = require('express');
const { getproduct, addProduct, deleteProduct } = require('../Controllers/productController');
const router = express.Router()

router.route("/getProduct").get(getproduct)
router.route("/addProduct").post(addProduct)
router.route("/deleteProduct/:id").delete(deleteProduct);


module.exports = router;
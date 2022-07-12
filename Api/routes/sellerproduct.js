const SellerProduct = require('../models/SellerProduct');
const { verifyTokenSeller, verifyTokenAndAuthorizationSeller, verifyTokenAndAdminSeller } = require('./verifyToken');
const router = require('express').Router();


//Create 
router.post("/", async (req, res) => {
    const newSellerProduct = new SellerProduct(req.body)
    try {
        const savedSellerProduct = await newSellerProduct.save();
        res.status(200).json(savedSellerProduct);
      } catch (err) {
        res.status(500).json(err);
      }
})



//UPDATE
router.put("/:id", verifyTokenAndAuthorizationSeller, async (req, res) => {
    try {
      const updatedSellerProduct = await SellerProduct.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedSellerProduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //DELETE
  router.delete("/:id", verifyTokenAndAuthorizationSeller, async (req, res) => {
    try {
      await SellerProduct.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET PRODUCT
  router.get("/find/:id",verifyTokenAndAuthorizationSeller, async (req, res) => {
    try {
      const Sellerproduct = await SellerProduct.findById(req.params.id);
      res.status(200).json(Sellerproduct);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  //GET ALL PRODUCTS
  router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    const qShopName = req.query.shop_name;
    try {
      let products;
  
      if (qNew) {
        products = await SellerProduct.find().sort({ createdAt: -1 }).limit(1);
      } else if (qCategory) {
        products = await SellerProduct.find({
          categories: {
            $in: [qCategory],
          },
        });
      } else if (qShopName) {
        products = await SellerProduct.find({
          shop_name: {
            $in: [qShopName],
          },
        });
      }else {
        products = await SellerProduct.find();
      }
  
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;
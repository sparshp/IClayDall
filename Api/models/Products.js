const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true,},
    desc: { type: String, required: true },
    shop_name: { type: String, required: true, },
    img1: { type: String, required: true , unique: true},
    img2: { type: String, required: true , unique: true},
    img3: { type: String, required: true, unique: true },
    img4: { type: String, required: true, unique: true },
    img5: { type: String, required: true, unique: true },
    categories: { type: Array },
    material: { type: String, required: true },
    item_weight: { type: String, required: true},
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    quantity: { type: Array },
    product_dimentions: { type: String, required: true },
    Stock: { type: String, required: true },
    address: { type: String, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
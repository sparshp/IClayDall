const mongoose = require("mongoose");

const SellerSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
        mobile_no: { type: Number, required: true},
        address: { type: Object, required: true },
        store_name: { type: String, required: true,},
        category: { type: Array, required: true },
    shipping_type: { type: String, required: true },
    image: { type: String, required: true },
    desc: { type: String, required: true}
    },
    
  { timestamps: true } 
);

module.exports = mongoose.model("Seller", SellerSchema);
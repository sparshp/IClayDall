const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT || "8000";
const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")
const sellerRoute = require("./routes/seller")
const productRoute = require("./routes/product")
const sellerproductRoute=require("./routes/sellerproduct")
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");

var cors = require('cors');
app.use(cors({ origin: true, credentials: true }));


dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connection successfully"))
    .catch((err) => console.log(err));
  
app.use(express.json());
app.use("/api/auth", authRoute)
app.use("/api/seller", sellerRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/sellerproducts", sellerproductRoute)
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(port, () => {
  console.log("listening on Backend!");
});

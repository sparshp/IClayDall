const router = require("express").Router();
const CryptoJS = require("crypto-js");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const Seller = require("../models/Seller");
// const _ = require("lodash");
// const axios = require("axios");
// const otpGenerator = require("otp-generator")
// const Otp = require("../models/otp")

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    });
  
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  //Login
  router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Wrong credentials!");
    
        const hashedPassword = CryptoJS.AES.decrypt(
          user.password,
          process.env.PASS_SEC
        );
      const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      Originalpassword !== req.body.password &&
        res.status(404).json("wrong Credentials!");
      
        const accessToken = jwt.sign({
            id: user._id, isAdmin: user.isAdmin,
        },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );
        const { password, ...others } = user._doc;

      res.status(200).json({...others,accessToken});
    } catch (err) {
      res.status(500).json(err);
    }
  });


  // Seller Register
  router.post("/selleraccount/registration", async (req, res) => {
    const newSeller = new Seller({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
        ).toString(),
      
        mobile_no: req.body.mobile_no,
        address: req.body.address,
        store_name: req.body.store_name,
        category: req.body.category,
      shipping_type: req.body.shipping_type,
      image: req.body.image,
      desc: req.body.desc,
    });
    // if (newSeller.mobile_no)
    //   return res.status(400).send("user already registered!");
    //   const OTP = otpGenerator.generate(6, {
    //     digits: true, alphabets: false, upperCase: flase, specialChars: false
    //   });
    //   const number = req.body.mobile_no;
    //   console.log(OTP)
    //   const otp = new Otp({ number: number, otp: OTP });
    // const salt = await bcrypt.genSalt(10)
    // otp.otp = await bcrypt.hash(otp.otp, salt);
    // const result= await otp.save()
    try {
      const savedUser = await newSeller.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Seller Login
  router.post("/selleraccount/login", async (req, res) => {
    try {
        const seller = await Seller.findOne({ username: req.body.username });
        !seller && res.status(401).json("Wrong credentials!");
    
        const hashedPassword = CryptoJS.AES.decrypt(
            seller.password,
          process.env.PASS_SEC
        );
      const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8);
      Originalpassword !== req.body.password &&
        res.status(404).json("wrong Credentials!");
      
        const accessToken = jwt.sign({
            id: seller._id, isAdmin: seller.isAdmin,
        },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );
        const { password, ...others } = seller._doc;

      res.status(200).json({...others,accessToken});
    } catch (err) {
      res.status(500).json(err);
    }
  });



module.exports = router;

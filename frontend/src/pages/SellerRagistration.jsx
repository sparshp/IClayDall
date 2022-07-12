import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import MailSection from "../components/MailSection";
import NavBar from "../components/navbar/NavBar";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";
import axios from "axios";

const url = "localhost:8000/api/auth/selleraccount/registration";

const SellerRagistration = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    mobile_no: "",
    address: "",
    store_name: "",
    category: "",
    image: "",
    desc: "",
    shipping_type: "",
  });
  const handle = (e) => {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  };

  const submit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        username: data.username,
        email: data.email,
        password: data.password,
        mobile_no: data.mobile_no,
        address: data.address,
        store_name: data.store_name,
        image: data.image,
        desc: data.desc,
        category: data.category,
        shipping_type:data.shipping_type,
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div>
      <NavBar />
      <div className="col-start-2 flex flex-col items-center space-x-2">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <p className="text-xl font-bold tracking-wider">Ragistration</p>
      </div>
      <form
        onSubmit={(e) => submit(e)}
        type="submit"
        className="w-full space-y-6 py-8 bg-gray-100"
      >
        <div className="grid grid-cols-2 place-items-center">
          <div className="space-y-2">
            <p>Image</p>
            <input
              onChange={(e) => handle(e)}
              id="image"
              value={data.image}
              type="url"
              className="form-control border w-96 p-2 rounded-full outline-none"
              placeholder="image.."
            />
          </div>
          <div className="space-y-2">
            <p>Username</p>
            <input
              onChange={(e) => handle(e)}
              id="username"
              value={data.username}
              type="username"
              className="form-control border w-96 p-2 rounded-full outline-none"
              placeholder="Username.."
            />
          </div>
          <div className="space-y-2">
            <p>Email</p>
            <input
              type="email"
              onChange={(e) => handle(e)}
              id="email"
              value={data.email}
              className="form-control border w-96 p-2 rounded-full outline-none"
              placeholder="email.."
            />
          </div>
          <div className=" space-y-2">
            <p>Password</p>
            <input
              onChange={(e) => handle(e)}
              id="password"
              value={data.password}
              type="password"
              className="form-control border w-96 p-2 rounded-full outline-none"
              placeholder="Password..."
            />
          </div>
          <div className="space-y-2">
            <p>Shop Name</p>
            <input
              onChange={(e) => handle(e)}
              id="store_name"
              value={data.store_name}
              type="text"
              className="form-control border w-96 p-2 rounded-full outline-none"
              placeholder="Shop Name.."
            />
          </div>
          <div className="space-y-2">
            <p>Shop Description</p>
            <input
              onChange={(e) => handle(e)}
              id="desc"
              value={data.desc}
              type="text"
              className="form-control border w-96 p-2 rounded-full outline-none"
              placeholder="shop description.."
            />
          </div>
          <div className=" space-y-2">
            <p>Shop Address</p>
            <input
              onChange={(e) => handle(e)}
              id="address"
              value={data.address}
              type="address"
              className="form-control border w-96 p-2 rounded-full outline-none"
              placeholder="Shop Address..."
            />
          </div>
          <div className=" space-y-2">
            <p>Mobile Number</p>
            <input
              onChange={(e) => handle(e)}
              id="mobile_no"
              value={data.mobile_no}
              type="tel"
              className="form-control border w-96 p-2 rounded-full outline-none"
              placeholder="Mobile number..."
            />
          </div>
          <div className=" space-y-2">
            <p>Category</p>
            <input
              onChange={(e) => handle(e)}
              id="category"
              value={data.category}
              type="category"
              className="form-control border w-96 p-2 rounded-full outline-none"
              placeholder="Category..."
            />
          </div>
          <div className=" space-y-2">
            <p>shipping_type</p>
            <input
              onChange={(e) => handle(e)}
              id="shipping_type"
              value={data.shipping_type}
              type="text"
              className="form-control border w-96 p-2 rounded-full outline-none"
              placeholder="shipping_type..."
            />
          </div>
        </div>
        <div className="form-group grid grid-cols-3 place-items-center">
          <button className="bg-green-500 w-full text-white" type="submit">
            Upload
          </button>
        </div>
      </form>
      <MailSection />
      <Footer />
    </div>
  );
};

export default SellerRagistration;

// <div className="col-start-2 flex items-center justify-between w-96 text-blue-500">
//             <Link to="/loginwithmobile">
//               <p>Ragister with mobile ?</p>
//             </Link>
//             <Link to="/login">
//               <p>Already have an account.</p>
//             </Link>
//           </div>
//           <div className="col-start-2 flex items-center justify-between text-blue-500">
//             <LockIcon />
//             <a href="">
//               <p>Secourity & policy</p>
//             </a>
//           </div>

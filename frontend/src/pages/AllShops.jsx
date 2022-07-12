import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import MailSection from "../components/MailSection";
import NavBar from "../components/navbar/NavBar";
import { Link } from "react-router-dom";

const AllShops = () => {
  const [product, setProduct] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/seller");
      setProduct(res.data);
      console.log(product);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(product);

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <NavBar />
      <div className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mx-auto gap-y-8 place-items-center my-4 z-10">
        {product.map((item) => {
            return (
              <Link to={`/shopproducts/${item.store_name}`}>
            <div className="flex flex-col p-2 bg-white w-60 h-80 items-start shadow-lg justify-between rounded-md border-t transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ">
              <img
                className="w-full h-52 object-contain flex items-center justify center"
                src="https://rukminim1.flixcart.com/image/416/416/kcjexe80/cup-saucer/f/k/g/kulhad01-divya-original-imaftmwzsfues5p6.jpeg?q=70"
                alt=""
              />
              <p className="text-left text-xm font-bold">{item.store_name}...</p>
              <p className="text-left text-sm">{item.username}</p>
              <p>{item.address}</p>
                </div>
                </Link>
          );
        })}
      </div>

      <MailSection />
      <Footer />
    </>
  );
};

export default AllShops;

import React, { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import Product from "../components/products/Product";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import MailSection from "../components/MailSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Rating from "@mui/material/Rating";
import StateSection from "../components/states/StateSection";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import { data, data1 } from "../data/data";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
};

const breakpointColumnsObj = {
  default: 5,
  3000: 6,
  2000: 5,
  1200: 3,
  1000: 2,
  500: 1,
};

const labels = {
  0.5: "0.5",
  1: "1",
  1.5: "1.5",
  2: "2",
  2.5: "2.5",
  3: "3",
  3.5: "3.5",
  4: "4",
  4.5: "4.5",
  5: "5",
};

const ProductsList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];

  const [filter, setFilter] = useState({});

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [rating, setRating] = React.useState();
  const [sort, setSort] = React.useState("Show all");
  const [product, setProduct] = React.useState(data);

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:8000/api/products?category=${cat}`
            : "http://localhost:8000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filter]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      [e.target.name]: value,
    });
  };

  const filterItem = (catItem) => {
    const updatedItems = data.filter((currentItem) => {
      return currentItem.category === catItem;
    });
    setProduct(updatedItems);
  };

  return (
    <div className="bg-gray-100">
      <NavBar />
      <p>{cat}</p>
      <Slider {...settings} className="text-white w-full my-6">
        {data1.map((item) => {
          return (
            <div key={uuidv4()} className="w-full h-[350px]">
              <img src={item.img} alt="" className="w-full h-[350px]" />
            </div>
          );
        })}
      </Slider>

      <StateSection />

      <div className="p-4 my-8 bg-white">
        <div className=" ">
          <form className="flex flex-col md:flex-row items-center px-4 justify-between">
            <div className="flex items-center space-x-2 md:space-x-6">
              <div className=" ">
                <p className="text-sm absolute mx-1 bg-white px-2">Price</p>
                <select
                  name="Price"
                  onChange={handleFilters}
                  className="border-2 py-1 px-4 outline-none my-3 rounded-md"
                >
                  <option value="Low to high"> Low to high</option>
                  <option value=" high to low"> high to low</option>
                  <option value="lowest"> lowest</option>
                  <option value="highest"> highest</option>
                </select>
              </div>

              <div className=" ">
                <p className="text-sm absolute mx-1 bg-white px-2">Size</p>
                <select
                  name="Size"
                  onChange={handleFilters}
                  className="border-2 py-1 px-4 outline-none my-3 rounded-md"
                >
                  <option value="Mixed"> Mixed</option>
                  <option value="Small"> Small</option>
                  <option value="Medium"> Medium</option>
                  <option value="Larg"> Larg</option>
                </select>
              </div>

              <div className=" ">
                <p className="text-sm absolute mx-1 bg-white px-2">Rating</p>
                <div className="border-2 py-1 px-4 outline-none my-3 rounded-md flex">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Rating
                      name="hover-feedback"
                      value={value}
                      precision={0.5}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                        setRating({ [event.target.name]: event.target.value });
                      }}
                      onChangeActive={(event, newHover) => {
                        setHover(newHover);
                      }}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                    {value !== null && (
                      <Box sx={{ ml: 2 }}>
                        {labels[hover !== -1 ? hover : value]}
                      </Box>
                    )}
                  </Box>
                </div>
              </div>
            </div>
            <div className=" ">
              <select
                onChange={(e) => setSort(e.target.value)}
                className="border-2 outline-none rounded-md space-x-1 bg-blue-100 flex items-center justify-center"
              >
                <option
                  value="Show all"
                  className="py-1 w-20 rounded-md shadow-md bg-white text-center cursor-pointer"
                >
                  Show all
                </option>
                <option
                  value=" Latest"
                  className="py-1 w-20 rounded-md text-center hover:shadow-md hover:bg-white focus:bg-white cursor-pointer"
                >
                  Latest
                </option>
                <option
                  value="Best"
                  className="py-1 w-20 rounded-md text-center hover:shadow-md hover:bg-white focus:bg-white cursor-pointer"
                >
                  Best
                </option>
              </select>
            </div>
          </form>

          <div className="px-4 py-4 flex items-center justify-between">
            <div className="flex space-x-3">
              <p>Related:</p>
              <p
                className="bg-gray-100 rounded-full px-2 cursor-pointer "
                onClick={() => filterItem("Designer diya")}
              >
                Designer diya
              </p>
              <p
                className="bg-gray-100 rounded-full px-2 cursor-pointer"
                onClick={() => filterItem("Decoration items")}
              >
                Decoration items
              </p>
              <p
                className="bg-gray-100 rounded-full px-2 cursor-pointer "
                onClick={() => filterItem("Ganpati idol")}
              >
                Ganpati idol
              </p>
              <p
                className="bg-gray-100 rounded-full px-2 cursor-pointer "
                onClick={() => filterItem("Adil Nagar")}
              >
                Designer diya
              </p>
              <p
                className="bg-gray-100 rounded-full px-2 cursor-pointer "
                onClick={() => filterItem("Adil Nagar")}
              >
                Designer diya
              </p>
            </div>
            <ColorLensOutlinedIcon />
          </div>
        </div>
        <Masonry
          className="flex animate-slide-fwd"
          breakpointCols={breakpointColumnsObj}
        >
          {cat
            ? filteredProducts.map((item) => (
                <Link key={uuidv4()} to={`/product/${item._id}`}>
                  <Product
                  key={item.id}
                    title={item.title}
                    image={item.img1}
                    desc={item.desc}
                  className="w-full"
                  address={item.address}
                  />
                </Link>
              ))
            : products.map((item) => (
                <Link key={uuidv4()} to={`/product/${item._id}`}>
                  {" "}
                  <Product
                  key={item.id}
                  title={item.title}
                  image={item.img1}
                  desc={item.desc}
                  className="w-full"
                  address={item.address}
                  />
                </Link>
              ))}
        </Masonry>
      </div>

      <MailSection />
      <Footer />
    </div>
  );
};

export default ProductsList;

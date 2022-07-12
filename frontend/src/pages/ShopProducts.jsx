import React, { useEffect ,useState} from 'react'
import Masonry from 'react-masonry-css';
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Product from './Product';
import ShopProduct from '../components/shopproduct/ShopProduct';
import NavBar from '../components/navbar/NavBar';
import MailSection from '../components/MailSection';
import Footer from '../components/footer/Footer';


// const getProducts = async () => {
//   try {
//     const res = await axios.get(
//       shop_name
//         ? `localhost:8000/api/sellerproducts?shop_name=${shop_name}`
//         : "localhost:8000/api/sellerproducts"
//     );
//     setProducts(res.data);
//     console.log(res)
//   } catch (err) {
//     console.log(err)
//   }
// };
// getProducts();



const ShopProducts = () => {
  const location = useLocation();
  const shop_name = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  
  
  const breakpointColumnsObj = {
    default: 5,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
  };


  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          shop_name
            ? `http://localhost:8000/api/products?shop_name=${shop_name}`
            : "http://localhost:8000/api/products"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [shop_name]);

  useEffect(() => {
    shop_name &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, shop_name, filter]);
  return (
    <div>
      <NavBar />
      <Masonry
    className="flex animate-slide-fwd"
    breakpointCols={breakpointColumnsObj}
  >
      {shop_name
        ? filteredProducts.map((item) => (
            <Link key={uuidv4()} to={`/product/${item._id}`}>
              <ShopProduct
              key={item.id}
              title={item.title}
              shop_name={item.shop_name}
                image={item.img1}
                desc={item.desc}
                className="w-full"
              />
            </Link>
          ))
        : products.map((item) => (
            <Link key={uuidv4()} to={`/product/${item._id}`}>
              {" "}
              <ShopProduct
              key={item.id}
              title={item.title}
              shop_name={item.shop_name}
                image={item.img1}
                desc={item.desc}
                className="w-full"
              />
            </Link>
          ))}
      </Masonry>
      <MailSection />
      <Footer />
    </div>
  )
}

export default ShopProducts
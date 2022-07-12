import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import BrowserHistory from '../components/BrowserHistory';
import Footer from '../components/footer/Footer';
import MailSection from '../components/MailSection';
import NavBar from '../components/navbar/NavBar';
import OffersSection from '../components/OffersSection';
import { publicRequest } from '../components/requestMethods';
import AddIcon from '@mui/icons-material/Add';
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';
import { addProduct } from '../redux/cartRedux';
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';


const Product = () => {

  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(0)
  const [size, setSize] = useState("");
  const dispatch = useDispatch();



  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 10);
    }
  };


  const handleClick = () => {
    dispatch(addProduct({ ...product, quantity,size }));
  }

  const user = true;

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
        console.log(product)
      } catch {}
    };
    getProduct();
  }, [id]);




  return (
    <>
      <NavBar />
      <div className="grid grid-cols-2 my-8">
        <div className="w-full h-full  px-3">
          <div className="grid grid-cols-7 md:grid-cols-8 place-items-center">
          <div className='hidden md:flex flex-row md:flex-col items-center justify-between'>
              <img src={product.img1} alt="" className='w-16 h-16 object-fill p-1 border' />
              <img src={product.img2} alt="" className='w-16 h-16 object-fill p-1 border' />
              <img src={product.img3} alt="" className='w-16 h-16 object-fill p-1 border' />
              <img src={product.img4} alt="" className='w-16 h-16 object-fill p-1 border' />
          
          </div>
            <img src={product.img1} alt="" className="w-full h-full object-contain col-span-7 " />
            
          </div>
          <div className="">
            <button onClick={handleClick} className="bg-black text-white rounded-full w-full py-4 text-center shadow-md mt-4">Add to Cart</button>
            
          </div>
          
        </div>
        <div>
          <p>{product.shop_name }</p>
          <p>{product.title}</p>
          <p className="font-bold text-green-500">Spacial Price</p>
          <div className="flex items-end space-x-6">
            <p className="text-3xl font-bold">₹{product.price}</p> 
            <p>₹500</p>
            <p className="font-bold text-green-500">68% off</p>
          </div>
          <div>
          <Rating name="read-only" value={4} readOnly size="small" />
          <p>1200 ratings</p>
          </div>

          <div>
            <p>Size:</p>
            <div className="bg-gray-100 rounded-full w-32 flex flex-col items-center">
              <p className="text-lg font-bold">{product.size}</p>
              <p className="text-sm">{ product.product_dimentions}</p>
            </div>
          </div>
          <div className="w-fit first-line:border my-4 bg-gray-200 flex items-center justify-between">
           <Button onClick={() => handleQuantity("dec")} > <RemoveIcon /></Button>
            <p className="px-4">{ quantity}</p>
           <Button  onClick={() => handleQuantity("inc")}> <AddIcon/></Button>
          </div>
        </div>
      </div>
      <MailSection />
      <Footer/>
    </>
    
  )
}

export default Product
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Footer from "../components/footer/Footer";
import MailSection from "../components/MailSection";
import NavBar from "../components/navbar/NavBar";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';



// onClick={() => handleQuantity("dec")}
//onClick={() => handleQuantity("inc")}
const Cart = () => {
  const cart = useSelector((state)=>state.cart)
  return (
    <div>
      <NavBar />
      <p>Cart</p>
      <div className="grid grid-cols-2 md:grid-cols-3 ">
        <div className=" col-span-2">
        {cart.products.map((product) => {
          return (
            <div>
              <div className="flex flex-col md:flex-row border items-center ">
                <img src={product.img1} alt="" className="img-responsive w-32 h-32 object-contain p-2" />
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                  <div className="px-10">
                    <ul>
                      <l className="text-lg font-bold">Product Name:</l>
                      <l> {product.title}</l>
                    </ul>
                    <ul>
                    <l className="text-lg font-bold">ID:</l>
                      <l> {product._id}</l>
                    </ul>
                    <ul>
                    <l className="text-lg font-bold">Size:</l>
                      <l>{product.size} {product.product_dimentions}</l>
                    </ul>
                    <ul>
                    <l className="text-lg font-bold">Shop Name: </l>
                      <l>
                        {product.shop_name}
                      </l>
                    </ul>
                </div>
                  <div className="flex flex-col px-10 items-center justify-between ">
                    <div className="flex items-center">
                  <Button > <RemoveIcon /></Button>
                  <p className="px-4">{product.quantity}</p>
                 <Button > <AddIcon/></Button>
                 </div>
                  <p className="text-xl font-bold">₹ {product.price * product.quantity}</p>
                </div>
                </div>
               
              </div>
              
            </div>
          )
        })}
        </div>
        <div>
          <p>Payment</p>
          
        </div>
      </div>
     
      <MailSection />
      <Footer/>
    </div>
  )
}

export default Cart
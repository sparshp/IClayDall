// import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom';
// import BrowserHistory from '../components/BrowserHistory';
// import Footer from '../components/footer/Footer';
// import MailSection from '../components/MailSection';
// import NavBar from '../components/navbar/NavBar';
// import OffersSection from '../components/OffersSection';
// import { publicRequest } from '../components/requestMethods';
// import Rating from '@mui/material/Rating';

// const ShopProduct = () => {
//     const location = useLocation();
//     const id = location.pathname.split("/")[2];
//     const [product, setProduct] = useState({});
  
  
//     useEffect(() => {
//       const getProduct = async () => {
//         try {
//           const res = await publicRequest.get("/sellerproducts/find/" + id);
//           setProduct(res.data);
//           console.log(product)
//         } catch {}
//       };
//       getProduct();
//     }, [id]);
//   return (
//       <div>
//           <NavBar />
//           <p>{ product.title}</p>
//     <div className="grid grid-cols-2">
//       <div>
//         <img src={product.img1} alt="" />
//       </div>
//       <div>
//         <p>{product.shop_name }</p>
//         <p>{product.title}</p>
//         <p className="font-bold text-green-500">Spacial Price</p>
//         <div className="flex items-end space-x-6">
//           <p className="text-3xl font-bold">₹{product.price}</p> 
//           <p>₹500</p>
//           <p className="font-bold text-green-500">68% off</p>
//         </div>
//         <div>
//         <Rating name="read-only" value={4} readOnly size="small" />
//         <p>1200 ratings</p>
//         </div>

//         <div>
//           <p>Size:</p>
//           <div className="bg-gray-100 rounded-full w-32 flex flex-col items-center">
//             <p className="text-lg font-bold">{product.size}</p>
//             <p className="text-sm">{ product.product_dimentions}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//     <MailSection />
//     <Footer/></div>
//   )
// }

// export default ShopProduct
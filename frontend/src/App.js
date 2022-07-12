import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import LoginWithMobile from './pages/LoginWithMobile';
import ProductsList from './pages/ProductsList';
import Ragistartion from './pages/Ragistartion';
import SellerPage from './pages/SellerPage';
import {
  BrowserRouter,
  Routes,
  Route, Navigate 
} from "react-router-dom";
import Product from './pages/Product';
import ShopProducts from './pages/ShopProducts';
import ShopProduct from './pages/ShopProduct';
import AllShops from './pages/AllShops';
import Cart from './pages/Cart';
import SellerRagistration from './pages/SellerRagistration';


function App() {

  const user = true;
  const seller = false;
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <HomePage/>}/>
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/cart" element={ <Cart/>}/>
        <Route path="/products/:category" element={<ProductsList />} />
        <Route path="/products" element={ <ProductsList/>}/>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/shopproducts" element={<ShopProducts />} />
        <Route path="/shopproducts/:shop_name" element={<ShopProducts />} />
        <Route path="/shopproduct/:id" element={<ShopProduct />} />
        <Route path="/allshops/" element={<AllShops/>} />
        

    <Route path="/login" element={user ? <Navigate to="/" replace/> : <LoginPage/>}/>
        <Route path="/ragister" element={user ? <Navigate to="/" replace /> : <Ragistartion />} />
         <Route path="/loginwithmobile" element={ user ? <Navigate to="/" replace/> : <LoginWithMobile />} />
        <Route path="*" element={<h1>Error 404 Page not found</h1>} />
        <Route path="/sellerragistration" element={seller ? <Navigate to="/" replace /> : <SellerRagistration />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;

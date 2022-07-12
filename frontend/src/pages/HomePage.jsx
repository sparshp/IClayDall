import React ,{ useEffect, useState } from 'react'
import NavBar from '../components/navbar/NavBar'
import Hero from '../components/Hero/Hero'
import BannerSection from '../components/BannerSection'
import NewItemsSection from '../components/categourySection/NewItemsSection';
import WeeklyDeals from '../components/WeeklyDeals';
import StateSection from '../components/states/StateSection';
import TopStores from '../components/stores/TopStores';
import Idols from '../components/idolsection/Idols';
import Products from '../components/products/Products';
import MailSection from '../components/MailSection';
import Footer from '../components/footer/Footer';
import OffersSection from '../components/OffersSection';
import BrowserHistory from '../components/BrowserHistory';
import axios from 'axios';
import Box from '../components/Box'

//'https://fakestoreapi.com/products'

// try{
//   const res = await fetch('https://fakestoreapi.com/products');
//   setProduct(await res.json());
//   console.log(product)
// } catch (err) {
//   console.log(err);
// }

//"http://localhost:8000/api/products" }

const HomePage = () => {
  const [product, setProduct] = useState([]);
  const [offer, setOffer] = useState([]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/seller" 
      );
      setProduct(res.data);
      console.log(product);
    } catch (err) {
      console.log(err);
    }
  };
  const getOfferData = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8000/api/products" 
      );
      setOffer(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
    getOfferData();
  }, []);

  const user = true;

console.log(product)
  return (
    /* Nav Bar*/
    <div className="bg-gray-100">
    <NavBar />
      <Hero />
      {/* test */}

      <Box />
      
      {/* test */}
      <BannerSection />
      <NewItemsSection product={product} />
      <WeeklyDeals />
      {/*<StateSection />*/}
      <TopStores product={product} title={"Top Indian Stores"} />
      <Idols />
      <Products />
      <NewItemsSection product={product} />
     {user && <OffersSection title={"Your Interest"} product={offer} />}
      {user && <BrowserHistory title={"Your Browsing History"} product={product} />}
      <MailSection />
      <Footer/>
    </div>
  )
}

export default HomePage;
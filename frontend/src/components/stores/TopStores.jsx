import React, { useEffect, useState } from 'react'
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Store from './Store';
import { v4 as uuidv4 } from 'uuid';
import { shop } from '../../data/data'
import { useGetAllSellersQuery } from '../../services/Post';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TopStores = ({  title }) => {
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
    <div className="bg-white p-4 my-8">
      <p className="text-xl font-bold text-center">{title} </p>
          <div className='grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mx-auto gap-y-8 place-items-center my-4 z-10'>
          {product.slice(0,10).map((item,key) => {
              return (
                <div key={uuidv4()}><p>{item.title}</p>
                <Link key={uuidv4()} to={`/shopproducts/${item.store_name}`}>
                 
                  <Store key={item.id} image={item.image} desc={item.desc} username={item.title} store_name={ item.store_name} address={ item.address} />
                  </Link>
                </div>
                )
            })}

          </div>
      <div className="hidden sm:flex item-center justify-between px-4 py-4">
        <Button variant="outlined" size="small">
          <ChevronLeftIcon /> Prev Deals{" "}
          </Button>
            <div>
              <a href="#" aria-current="page" className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              1
            </a>
            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              2
            </a>
            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
              ...
            </span>
            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
              8
            </a>
            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              9
            </a>
            <a href="#" className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              10
            </a>
            </div>
         <Link to="/allshops">
          <Button variant="outlined" size="small">
              Next Deals <ChevronRightIcon />
        </Button>
        </Link>
      </div>
    </div>
  )
}

export default TopStores
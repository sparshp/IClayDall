import React from "react";
import Store from "./stores/Store";
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";

const BrowserHistory = ({ title, product, image }) => {
  return (
    <div className="relative py-8  mt-8">
      <div className="bg-white">
        <div className="flex items-center p-4">
          <p className="flex-1 text-xl font-bold">{title}</p>
          <p className="text-sm text-blue-400">See all offers</p>
        </div>
        <div className="offer__img flex items-center justify-between bg-white overflow-x-scroll overflow-y-hidden p-4">
          {product.map((item, key) => {
            return (
              <Link  key={uuidv4()}  to={`/shopproducts/${item.store_name}`}>
              <div key={uuidv4()} className="px-2"> <Store image={item.image} store_name={item.store_name} desc={ item.desc} address={ item.address}/></div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrowserHistory;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const OffersSection = ({ title,product }) => {

   

  return (
    <div className="relative py-8  mt-8">
      <div className="bg-white">
        <div className="flex items-center p-4">
          <p className="flex-1 text-xl font-bold">{title}</p>
          <p className="text-sm text-blue-400">See all offers</p>
        </div>
              <div className="offer__img flex items-center justify-between bg-white overflow-x-scroll overflow-y-hidden p-4">
                  {product.map((item,key) => {
                    return (
                      <Link key={uuidv4()} to={`/product/${item._id}`}>
                          <img key={uuidv4()} className="inline-block object-fit cursor-pointer w-40 h-40" src={item.img1} alt="" />
                          </Link>
                      )
                   
                  })}
        </div>
      </div>
    </div>
  );
};

export default OffersSection;

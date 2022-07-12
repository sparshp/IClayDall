import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


const NewItem = ({product,title,}) => {
  return (
    <div className="w-80 flex flex-col items-start justify-between bg-white p-4 border h-[426px] col-span-3">
          <p className="font-bold px-2">{title}</p>
          
          <div className="grid grid-cols-2 gap-4 py-2">
              {product.map((item)=>{
                return (
                  <Link key={uuidv4()} to={`/products/${item.cat}`}>
                    <div key={uuidv4()} className="flex flex-col items-start p-2 bg-white">
                         <img className="w-40 h-28 object-cover" src={item.img} alt="" />
                         <p className="text-sm p-1 lowercase">{item.title}</p>
                  </div>
                  </Link>

                  )
              })}
       
          </div>
         <Link to="/products/all"> <p className="text-blue-400 px-2">See all Products</p></Link>
    </div>
  );
};

export default NewItem;

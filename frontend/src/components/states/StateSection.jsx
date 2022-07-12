import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const data = [
    {
      id: "1",
      img: "/images/p.png",
      title: "Adil Nagar",
      decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
      button: "Read More",
    },
    {
      id: "2",
      img: "/images/p.png",
      title: "Vikas Nagar",
      decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
      button: "Read More",
    },
    {
      id: "3",
      img: "/images/p.png",
      title: "Alligang",
      decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
      button: "Read More",
    },
    {
      id: "4",
      img: "/images/p.png",
      title: "MOTORBUDDY",
      decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
      button: "Read More",
    },
    {
      id: "5",
      img: "/images/p.png",
      title: "MOTORBUDDY",
      decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
      button: "Read More",
  },
  {
    id: "1",
    img: "/images/p.png",
    title: "MOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "2",
    img: "/images/p.png",
    title: "fffMOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "3",
    img: "/images/p.png",
    title: "ddMOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },{
    id: "2",
    img: "/images/p.png",
    title: "Vikas Nagar",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "3",
    img: "/images/p.png",
    title: "Alligang",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "4",
    img: "/images/p.png",
    title: "MOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "5",
    img: "/images/p.png",
    title: "MOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
},
{
  id: "1",
  img: "/images/p.png",
  title: "MOTORBUDDY",
  decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
  button: "Read More",
},
{
  id: "2",
  img: "/images/p.png",
  title: "fffMOTORBUDDY",
  decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
  button: "Read More",
},
{
  id: "3",
  img: "/images/p.png",
  title: "ddMOTORBUDDY",
  decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
  button: "Read More",
},
];

   
const StateSection = () => {

    
const [product, setProduct] = useState([]);

const getData = async () => {
  try {
    const res = await axios.get("http://localhost:8000/api/products");
    setProduct(res.data);
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  getData();
}, []);


  return (
    <div className="states_scroll bg-white flex items-center justify-between py-4 overflow-x-scroll space-x-6 scrollbar-hide">
      {product.map((item) => {
        return (
          <Link key={uuidv4()} to={`/products/${item.address}`}>
          <div key={uuidv4()} className="flex flex-col items-center justify-center ">
          <img src="/images/p.png" alt="" className="w-20 h-10" />
          <div className="bg-gray-200 rounded-full my-2">
              <p className="text-xs px-2 w-32 text-center py-1">{ item.address}</p>
          </div>
            </div>
            </Link>
        ) })}
      
    </div>
  )
}

export default StateSection
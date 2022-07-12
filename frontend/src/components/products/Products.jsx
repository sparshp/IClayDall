import React from 'react'
import Masonry from 'react-masonry-css';
import { Link } from 'react-router-dom';
import Product from './Product';
import { v4 as uuidv4 } from 'uuid';


const data = [
    {
      id: "1",
      img: "/images/ganesh.png",
      title: "Adil Nagar",
      decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
      button: "Read More",
    },
    {
      id: "2",
      img: "https://m.media-amazon.com/images/I/81oC2yu2xaL._SL1500_.jpg",
      title: "Vikas Nagar",
      decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
      button: "Read More",
    },
    {
      id: "3",
      img: "https://m.media-amazon.com/images/I/61zbjyRPI5L._SL1080_.jpg",
      title: "Alligang",
      decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
      button: "Read More",
    },
    {
      id: "4",
      img: "/images/ganesh.png",
      title: "MOTORBUDDY",
      decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
      button: "Read More",
    },
    {
      id: "5",
      img: "https://m.media-amazon.com/images/I/61EMLeYvUjL._SL1500_.jpg",
      title: "MOTORBUDDY",
      decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
      button: "Read More",
  },
  {
    id: "1",
    img: "https://m.media-amazon.com/images/I/61zbjyRPI5L._SL1080_.jpg",
    title: "MOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "2",
    img: "/images/ganesh.png",
    title: "fffMOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "3",
    img: "https://n4.sdlcdn.com/imgs/i/e/p/KrishClay-Durga-Terracotta-Idol-SDL280484871-1-b5bbc.jpg",
    title: "ddMOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },{
    id: "2",
    img: "/images/ganesh.png",
    title: "Vikas Nagar",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "3",
    img: "https://m.media-amazon.com/images/I/61EMLeYvUjL._SL1500_.jpg",
    title: "Alligang",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "4",
    img: "/images/ganesh.png",
    title: "MOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "5",
    img: "https://thumbs.dreamstime.com/z/idols-mahishasur-mardani-laxmi-saraswati-terracotta-idols-hindu-goddesses-mahishasura-mardani-laxmi-saraswati-india-133191518.jpg",
    title: "MOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
},
{
  id: "1",
  img: "/images/ganesh.png",
  title: "MOTORBUDDY",
  decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
  button: "Read More",
  },
  {
    id: "4",
    img: "/images/ganesh.png",
    title: "MOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "5",
    img: "https://thumbs.dreamstime.com/z/idols-mahishasur-mardani-laxmi-saraswati-terracotta-idols-hindu-goddesses-mahishasura-mardani-laxmi-saraswati-india-133191518.jpg",
    title: "MOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
},
{
  id: "1",
  img: "https://thumbs.dreamstime.com/z/idols-mahishasur-mardani-laxmi-saraswati-terracotta-idols-hindu-goddesses-mahishasura-mardani-laxmi-saraswati-india-133191518.jpg",
  title: "MOTORBUDDY",
  decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
  button: "Read More",
  },
  {
    id: "4",
    img: "/images/ganesh.png",
    title: "MOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "1",
    img: "https://thumbs.dreamstime.com/z/idols-mahishasur-mardani-laxmi-saraswati-terracotta-idols-hindu-goddesses-mahishasura-mardani-laxmi-saraswati-india-133191518.jpg",
    title: "MOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "1",
   
    title: "MOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "4",
    img: "/images/ganesh.png",
    title: "MOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  
];

const breakpointColumnsObj = {
    default: 5,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
  };
  
const Products = () => {
  return (
    <div className="p-4 my-8 bg-white">
      <p className='text-xl font-bold text-center'>New Products</p>
    <Masonry className="flex animate-slide-fwd" breakpointCols={breakpointColumnsObj}>
    {data.map((item) =><Link key={uuidv4()} to="/products"> <Product key={uuidv4()} title={item.title} image={item.img} desc={item.decs} className="w-full" /></Link>)}
  </Masonry>
  </div>
  )
}

export default Products
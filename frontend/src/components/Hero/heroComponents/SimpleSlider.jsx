import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from 'uuid';

const data = [
  {
    id: "1",
    img: "./images/banner1.png",
    title: "MOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "2",
    img: "./images/bannerr2.png",
    title: "fffMOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "3",
    img: "./images/banner1.png",
    title: "ddMOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "4",
    img: "./images/banner1.png",
    title: "MOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "5",
    img: "./images/bannerr2.png",
    title: "MOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
];

const SimpleSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <Slider {...settings} className="text-white w-full md:w-9/12">
      {data.map((item) => {
        return (
          <div key={uuidv4()} className="h-[550px] w-full bg-cover bg-center">
           <img src={item.img} alt="" className='h-[550px] w-full' />
          </div>
        );
      })}
    </Slider>
  );
};

export default SimpleSlider;

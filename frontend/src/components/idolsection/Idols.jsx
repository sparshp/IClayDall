import React from 'react'
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
      img: "/images/ganesh.png",
      title: "Vikas Nagar",
      decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
      button: "Read More",
    },
    {
      id: "3",
      img: "/images/ganesh.png",
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
      img: "/images/ganesh.png",
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
    id: "2",
    img: "/images/ganesh.png",
    title: "fffMOTORBUDDY",
    decs: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book",
    button: "Read More",
  },
  {
    id: "3",
    img: "/images/ganesh.png",
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
    img: "/images/ganesh.png",
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
    img: "/images/ganesh.png",
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
];


const Idols = () => {
  return (
    <div className="bg-white flex items-center justify-between py-4 space-x-10 overflow-x-scroll my-4">
    {data.map((item) => {
      return (
        <div key={uuidv4()} className="flex flex-col items-center justify-center">
        <img src={item.img} alt="" className="w-20 h-20 object-contain" /> 
      </div>
      ) })}
    
  </div>
  )
}

export default Idols
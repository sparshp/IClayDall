import React from "react";
import Footer from "../components/footer/Footer";
import MailSection from "../components/MailSection";
import NavBar from "../components/navbar/NavBar";
import Cards from "../components/sellerComponent/Cards";
import Rating from "@mui/material/Rating";

const SellerPage = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div className="flex items-center justify-between h-20 px-8 shadow-md">
          <p className="text-3xl font-bold">Sell On iClaydol</p>
          <button className="bg-black text-white rounded-full w-44 py-2 text-center shadow-md ">
            Start Selling
          </button>
        </div>

        <div className="flex items-center w-full bg-blue-100  justify-between px-8 rounded-br-full h-[450px] my-8 ">
          <div>
            <p className="text-5xl font-bold">
              Become A Seller On iClaydol With <br /> 8% Referral Fees Only*
            </p>
            <button className="bg-black text-white rounded-full w-56 py-3 text-center shadow-lg mt-8 text-lg">
              Start Selling
            </button>
          </div>

          <img
            src="./images/ganesh.png"
            alt=""
            className="w-96 h-96 object-contain hidden md:flex"
          />
        </div>
        <div className=" mx-8 grid grid-cols-1 md:grid-cols-2 h-full shadow-md place-items-center my-16">
          <div className="p-2">
            <p className="text-xl font-bold pb-2">
              Start Selling on iClaydol with only 8% Referral Fees*
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              typeand scrambled it to make a type specimen book
            </p>
            <button className="bg-black text-white rounded-full w-44 py-2 text-center shadow-md mt-4">
              Start Selling
            </button>
          </div>
          <img
            src="./images/hero1.jpg"
            alt=""
            className="h-44 w-full object-fit"
          />
        </div>

        <div className="my-8">
          <p className="text-4xl font-bold text-center py-4 tracking-wide">
            Why Sell on iClaydol
          </p>
          <div className="py-4 grid grid-cols-1 md:grid-cols-3 place-items-center gap-6">
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
        <div className="flex flex-col items-center justify-evenly my-8">
          <p className="text-4xl font-bold py-8">
            Learn About iClaydol Selling
          </p>
          <div className="border-8 border-stone-900 w-9/12 h-4/5">
            <video src="./images/Video.mp4" controls
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop></video>
          </div>
          <button className="bg-black text-white rounded-full w-44 py-2 text-center shadow-md mt-4">
            Start Selling
          </button>
        </div>

        <div className="flex flex-col items-center justify-evenly my-8">
          <p className="text-4xl font-bold py-4">iClaydol Seller</p>
          <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-6 py-4">
            <div className=" flex flex-col items-center w-9/12 h-96 border-4 border-orange-400 justify-evenly rounded-3xl p-4">
              <img
                src="./images/hero1.jpg"
                alt=""
                className="w-32 h-32 rounded-full"
              />
              <p className="text-lg font-bold">Sparsh Prajapati</p>
              <Rating name="size-large" defaultValue={2} size="large" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className=" flex flex-col items-center w-9/12 h-96 border-4 border-orange-400 justify-evenly rounded-3xl p-4">
              <img
                src="./images/hero1.jpg"
                alt=""
                className="w-32 h-32 rounded-full"
              />
              <p className="text-lg font-bold">Sparsh Prajapati</p>
              <Rating name="size-large" defaultValue={2} size="large" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
            <div className=" flex flex-col items-center w-9/12 h-96 border-4 border-orange-400 justify-evenly rounded-3xl p-4">
              <img
                src="./images/hero1.jpg"
                alt=""
                className="w-32 h-32 rounded-full"
              />
              <p className="text-lg font-bold">Sparsh Prajapati</p>
              <Rating name="size-large" defaultValue={4} size="large" readOnly  />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <MailSection />
      <Footer />
    </div> 
  );
};

export default SellerPage;

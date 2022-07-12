import React from 'react';

const BannerSection = () => {
    return (
        <div className="flex bg-white items-center border-y justify-between ">
            <a href="">
                <img className="Banner_img hidden md:flex" src="./images/Banner.png" alt="" />
            </a>
            <a href="">
                <img className="Banner_img hidden sm:flex" src="./images/Banner2.png" alt="" />
            </a>
            <a href="">
                <img className="Banner_img" src="./images/Banner3.png" alt="" />
            </a>
       </div>
   );
};

export default BannerSection;

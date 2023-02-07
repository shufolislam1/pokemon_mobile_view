import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useSwiper } from 'swiper/react';

// **************This component is to show the loaded data in card*****************

const InfoCards = ({ oneData }) => {
  const swiper = useSwiper();
  return (
    <div>
      <div className="relative bg-no-repeat bg-cover ">
        <div className="flex justify-center my-6">
          <BsFillArrowLeftCircleFill className="lg:hidden mt-24 mr-3" onClick={() => swiper.slidePrev()}></BsFillArrowLeftCircleFill>
          <div className="card bg-base-100 hover:bg-blue-400 shadow-xl max-w-xs hover:scale-110 transition duration-300 ease-in-out">
            <figure className="px-10 pt-10">
              <img src={oneData?.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{oneData?.name}</h2>
            </div>
          </div>
          <BsFillArrowRightCircleFill className="lg:hidden mt-24 ml-3" onClick={() => swiper.slideNext()}></BsFillArrowRightCircleFill>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;

import React, { useState, useEffect } from "react";
import InfoCards from "./InfoCards";
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';


// ******In this component, data loaded via Graphql API and passed them through props to InfoCards compoennts. Beside, design part of Hero/top is in this component*********

const Hero = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  const [data, setData] = useState([]);
  const gqlQuery = `query pokemons($limit: Int) {
        pokemons(limit: $limit) {
          results {
            name
            image
          } 
        }
      }
      `;
  const gqlVariables = {
    limit: 10,
  };

  fetch("https://graphql-pokeapi.graphcdn.app/", {
    credentials: "omit",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: gqlQuery,
      variables: gqlVariables,
    }),
    method: "POST",
  })
    .then((res) => res.json())
    .then((res) => setData(res?.data?.pokemons?.results));



  return (
    <div className="w-full bg-[url('https://i.ibb.co/fQBhJSb/Background.png')]"
    style={
      {
        backgroundImage: 'container',
        backgroundRepeat: 'no-repeat'
      }
    }
    >
      <div className="flex justify-center">
        <img
          className="mt-4"
          src="https://i.ibb.co/sqX7Qc2/Logo.png"
          alt="pokemon"
          srcSet=""
        />
      </div>
      {
        isLargeScreen && <Swiper>
      <div className="grid grid-cols-5 gap-10 mt-10 max-w-screen-2xl lg:mx-auto">
        {data?.map((oneData, index) => (
          <InfoCards key={index} oneData={oneData}></InfoCards>
        ))}
      </div>
        </Swiper>
      }
      {
        !isLargeScreen && <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 }, 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }
          }
          }
        >
          {data?.map((oneData, index) => (
            <SwiperSlide><InfoCards key={index} oneData={oneData}></InfoCards></SwiperSlide>
          ))}
        </Swiper>
      }
    </div>
  );
};

export default Hero;

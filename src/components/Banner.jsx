import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";
import { Pagination } from "swiper/modules";

const Banner = () => {
  const slides = [
    "https://i.ibb.co.com/kmzS6m5/01.jpg",
    "https://i.ibb.co.com/mB65bx5/02.jpg",
    "https://i.ibb.co.com/qp2MqNZ/03.jpg",
  ];
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `
            <span className="${className}">
              <img src="${slides[index]}" alt="Thumbnail" className="swiper-thumbnail" />
            </span>
          `;
    },
  };
  return (
    <div className="banner">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className={`w-full h-svh py-24 bg-[url(https://i.ibb.co.com/kmzS6m5/01.jpg)] bg-cover bg-center bg-no-repeat `}
          >
            <div
              className={`grid grid-cols-3 h-full w-10/12 mx-auto !items-center`}
            >
              <div className="space-y-4 col-span-2">
                <h3 className="font-bold text-7xl text-white">
                  Super Delicious Menu
                </h3>
                <button
                  type="button"
                  className="bg-amber-400 rounded-full px-6 py-3"
                >
                  Order Now
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`w-full h-svh py-24 bg-[url(https://i.ibb.co.com/mB65bx5/02.jpg)] bg-cover bg-center bg-no-repeat `}
          >
            <div
              className={`grid grid-cols-3 h-full w-10/12 mx-auto !items-center`}
            >
              <div className="space-y-4 col-span-2">
                <h3 className="font-bold text-7xl text-white">
                  Super Delicious Menu
                </h3>
                <button
                  type="button"
                  className="bg-amber-400 rounded-full px-6 py-3"
                >
                  Order Now
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`w-full h-svh py-24 bg-[url(https://i.ibb.co.com/qp2MqNZ/03.jpg)] bg-cover bg-center bg-no-repeat `}
          >
            <div
              className={`grid grid-cols-3 h-full w-10/12 mx-auto !items-center`}
            >
              <div className="space-y-4 col-span-2">
                <h3 className="font-bold text-7xl text-white">
                  Super Delicious Menu
                </h3>
                <button
                  type="button"
                  className="bg-amber-400 rounded-full px-6 py-3"
                >
                  Order Now
                </button>
              </div>
              <div></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

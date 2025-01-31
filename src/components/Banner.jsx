import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Banner.css";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  const slides = [
    "https://i.ibb.co.com/pjW0hzs1/Rice-Spice-House-02-01-2025-12-21-AM.png",
    "https://i.ibb.co.com/wFL2GzHn/Rice-Spice-House-02-01-2025-12-21-AM-1.png",
    "https://i.ibb.co.com/9mbQssDK/Rice-Spice-House-02-01-2025-12-21-AM-2.png",
  ];
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `
            <span class="${className}">
              <img src="${slides[index]}" alt="Thumbnail" class="swiper-thumbnail" />
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
                <p className="text-white border-b border-b-amber-400 inline-block">
                  A Taste of Asia in Every Bowl.
                </p>
                <h3 className="font-bold text-7xl text-white">
                  Signature Tonkotsu Ramen
                </h3>
                <p className="text-white text-lg">
                  A rich, creamy pork broth with perfectly cooked noodles,
                  tender chashu pork, and a soft-boiled egg—experience the
                  essence of authentic Japanese comfort food.
                </p>
                <Link to="/our-menu">
                  <button
                    type="button"
                    className="bg-amber-400 rounded-full px-6 py-3 mt-5"
                  >
                    Order Now
                  </button>
                </Link>
              </div>
              <div>
                <img
                  src="https://i.ibb.co.com/PG1VY0fM/pngwing-com-2.png"
                  alt=""
                  srcset=""
                />
              </div>
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
                <p className="text-white border-b border-b-amber-400 inline-block">
                  A Taste of Asia in Every Bowl.
                </p>
                <h3 className="font-bold text-7xl text-white">
                  Classic Chicken Pad Thai
                </h3>
                <p className="text-white text-lg mb-10">
                  A perfect balance of sweet, savory, and tangy flavors with
                  stir-fried rice noodles, tender chicken, crisp veggies, and
                  crunchy peanuts.
                </p>
                <Link to="/our-menu">
                  <button
                    type="button"
                    className="bg-amber-400 rounded-full px-6 py-3 mt-5"
                  >
                    Order Now
                  </button>
                </Link>
              </div>
              <div>
                <img
                  src="https://i.ibb.co.com/2LHsLsM/pngwing-com-7.png"
                  alt=""
                  srcset=""
                />
              </div>
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
                <p className="text-white border-b border-b-amber-400 inline-block">
                  A Taste of Asia in Every Bowl.
                </p>
                <h3 className="font-bold text-7xl text-white">
                  Crispy Chicken Gyoza
                </h3>
                <p className="text-white text-lg">
                  Golden, pan-fried dumplings with a juicy chicken filling,
                  served with a savory dipping sauce—crispy outside, tender
                  inside!
                </p>
                <Link to="/our-menu">
                  <button
                    type="button"
                    className="bg-amber-400 rounded-full px-6 py-3 mt-5"
                  >
                    Order Now
                  </button>
                </Link>
              </div>
              <div>
                <img
                  src="https://i.ibb.co.com/ymJ5dVjQ/pngwing-com-5.png"
                  alt=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

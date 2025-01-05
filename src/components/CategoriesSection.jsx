import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const CategoriesSection = () => {
  return (
    <div className="w-10/12 mx-auto my-20">
        <div className="text-center my-10 flex flex-col items-center space-y-2">
            <p className="text-zinc-400">11.00 AM - 11.00 PM</p>
            <h2 className="font-semibold text-3xl text-zinc-900 uppercase border-t border-b tracking-wider border-amber-400">Order Line</h2>
        </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="rounded-lg overflow-hidden relative">
            <img
              src="https://i.ibb.co.com/4F4s9cf/Chinese-Cuisine.jpg"
              alt=""
              srcSet=""
            />
            <div className="absolute bottom-0 left-1/2 w-full transform -translate-x-1/2 bg-gradient-to-t from-zinc-950 to-transparent text-white py-8 text-center">
                <h3 className="text-2xl font-bold">Chinese Cuisine</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg overflow-hidden relative">
            <img
              src="https://i.ibb.co.com/DCXHdPQ/Indian-Cuisine.jpg"
              alt=""
              srcSet=""
            />
            <div className="absolute bottom-0 left-1/2 w-full transform -translate-x-1/2 bg-gradient-to-t from-zinc-950 to-transparent text-white py-8 text-center">
                <h3 className="text-2xl font-bold">Indian Cuisine</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg overflow-hidden relative">
            <img
              src="https://i.ibb.co.com/4jVc16K/Japanese-Cuisine.jpg"
              alt=""
              srcSet=""
            />
            <div className="absolute bottom-0 left-1/2 w-full transform -translate-x-1/2 bg-gradient-to-t from-zinc-950 to-transparent text-white py-8 text-center">
                <h3 className="text-2xl font-bold">Japanese Cuisine</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg overflow-hidden relative">
            <img
              src="https://i.ibb.co.com/tZBY366/Korean-Cuisine.jpg"
              alt=""
              srcSet=""
            />
            <div className="absolute bottom-0 left-1/2 w-full transform -translate-x-1/2 bg-gradient-to-t from-zinc-950 to-transparent text-white py-8 text-center">
                <h3 className="text-2xl font-bold">Korean Cuisine</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg overflow-hidden relative">
            <img
              src="https://i.ibb.co.com/X8kT9dx/Pan-Asian-Cuisine.jpg"
              alt=""
              srcSet=""
            />
            <div className="absolute bottom-0 left-1/2 w-full transform -translate-x-1/2 bg-gradient-to-t from-zinc-950 to-transparent text-white py-8 text-center">
                <h3 className="text-2xl font-bold">Pan-Asian Cuisine</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="rounded-lg overflow-hidden relative">
            <img
              src="https://i.ibb.co.com/gW26JJc/Southeast-Asian-Cuisine.jpg"
              alt=""
              srcSet=""
            />
            <div className="absolute bottom-0 left-1/2 w-full transform -translate-x-1/2 bg-gradient-to-t from-zinc-950 to-transparent text-white py-8 text-center">
                <h3 className="text-2xl font-bold">Southeast Asian Cuisine</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategoriesSection;

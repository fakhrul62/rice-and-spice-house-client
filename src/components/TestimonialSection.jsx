import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { LuMessageSquareQuote } from "react-icons/lu";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "./TestimonialSection.css";

const TestimonialSection = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios.get("https://rice-and-spice-house-server.vercel.app/reviews").then((res) => setReviews(res.data));
  }, []);
  return (
    <div className="w-10/12 mx-auto my-20">
      <div className="text-center my-10 flex flex-col items-center space-y-2">
        <p className="text-zinc-400">What our Customers say</p>
        <h2 className="font-semibold text-3xl text-zinc-900 uppercase border-t border-b tracking-wider border-amber-400">
          Testimonial
        </h2>
      </div>
      <div className="mt-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col gap-5 items-center justify-center w-10/12 mx-auto">
                <div className="">
                  {" "}
                  <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                </div>
                <span className="text-7xl text-zinc-950">
                  <LuMessageSquareQuote />
                </span>
                <p className="text-zinc-700 text-center">{review.details}</p>
                <h3 className="logo-1 text-zinc-950 text-lg font-semibold">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialSection;

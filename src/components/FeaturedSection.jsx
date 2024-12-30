import React from "react";

const FeaturedSection = () => {
  return (
    <div className="my-32 bg-[url(https://i.ibb.co.com/QPLF9SW/featured.jpg)] bg-cover bg-center bg-no-repeat bg-fixed py-20">
      <div className="w-8/12 mx-auto">
        <div className="text-center mb-10 flex flex-col items-center space-y-2">
          <p className="text-white">Featured</p>
          <h2 className="font-semibold text-3xl text-white uppercase border-t border-b tracking-wider border-amber-400">
            From Our Menu
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-10 mt-20">
          <img
            src="https://i.ibb.co.com/xDR4VvB/featured-0.jpg"
            className="rounded-xl"
          />
          <div className="space-y-3">
            <h3 className="text-white text-2xl font-bold">Zesty Grilled Beef Salad</h3>
            <p className="text-white ">
              Experience the perfect fusion of flavors with our signature Zesty
              Grilled Beef Salad. Tender, perfectly seasoned slices of grilled
              beef rest atop a vibrant bed of fresh greens, julienned
              vegetables, and delicate glass noodles. Topped with tangy pomelo,
              chili slices, and sesame seeds, this dish offers a delightful
              balance of bold spices and refreshing zest. A must-try for those
              seeking a light yet indulgent culinary masterpiece.
            </p>
            <button className="px-7 py-2 bg-transparent border border-whit text-white rounded-xl">Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;

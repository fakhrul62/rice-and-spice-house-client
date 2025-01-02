import React from "react";
import { Helmet } from "react-helmet";
import { Parallax } from "react-parallax";

const OurMenu = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Menu</title>
        <link rel="canonical" href="" />
      </Helmet>
      <div className="bg-[url(https://i.ibb.co.com/xq69rjc/our-menu-cover.jpg)] bg-cover bg-center bg-no-repeat py-32">
        <h2 className="text-center font-bold text-6xl text-white">Our Menu</h2>
      </div>
      <div className="my-10 w-10/12 mx-auto">
        <div className="flex justify-center">
          <h3 className="text-center text-zinc-900 text-3xl font-bold my-16 py-5 font-3 border-t border-b  border-amber-400">
            Explore our various types of category
          </h3>
        </div>
        <Parallax
          bgImage="https://i.ibb.co.com/wRgKxLz/pizza.jpg"
          className="rounded-xl"
          strength={100}
        >
          <div className="w-10/12 mx-auto py-32 my-32 border border-zinc-900 rounded-xl backdrop-blur-sm">
            <div>
              <h2 className="text-center font-bold text-5xl text-white">
                Pizza
              </h2>
            </div>
          </div>
        </Parallax>
      </div>
    </div>
  );
};

export default OurMenu;

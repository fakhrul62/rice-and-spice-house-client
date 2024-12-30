import React from "react";

const AboutSection = () => {
  return (
    <div className="w-10/12 mx-auto my-32 rounded-lg overflow-hidden">
      <div className="bg-[url(https://i.ibb.co.com/zhV77MK/popular-items.jpg)] bg-cover bg-center p-20">
        <div className="bg-white p-16 space-y-3 rounded-lg">
          <h2 className="logo-1 text-2xl text-zinc-900 text-center">
            Rice & Spice House
          </h2>
          <p className="text-center text-zinc-600">
            Welcome to Rice & Spice House, where the essence of Asian culinary
            traditions meets modern elegance. Our high-end menu celebrates the
            rich flavors of the East, crafted with premium ingredients and a
            touch of artistry. From delicate sushi to bold curries, each dish is
            a harmonious blend of taste and sophistication. Step into a world of
            fine dining that’s as vibrant as it is unforgettable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

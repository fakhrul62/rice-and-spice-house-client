import React from "react";
import { Helmet } from "react-helmet";
import { Parallax } from "react-parallax";
import useMenu from "../hooks/useMenu";
import MenuItemCard from "../components/MenuItemCard";

const OurMenu = () => {
  const [menus] = useMenu();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Menus</title>
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
        {/* Pizza */}
        <div className="mt-10">
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
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 mt-10">
            {menus
              .filter((SingleMenu) => SingleMenu.category === "pizza")
              .map((menu) => (
                <MenuItemCard key={menu.id} menu={menu} />
              ))}
          </div>
        </div>
        {/* Soup */}
        <div className="mt-10">
          <Parallax
            bgImage="https://i.ibb.co.com/0n09rbL/soup.jpg"
            className="rounded-xl"
            strength={100}
          >
            <div className="w-10/12 mx-auto py-32 my-32 border border-zinc-900 rounded-xl backdrop-blur-sm">
              <div>
                <h2 className="text-center font-bold text-5xl text-white">
                  Soup
                </h2>
              </div>
            </div>
          </Parallax>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 mt-10">
            {menus
              .filter((SingleMenu) => SingleMenu.category === "soup")
              .map((menu) => (
                <MenuItemCard key={menu.id} menu={menu} />
              ))}
          </div>
        </div>
        {/* Offered */}
        <div className="mt-10">
          <Parallax
            bgImage="https://i.ibb.co.com/3NR7dVS/offered.jpg"
            className="rounded-xl"
            strength={100}
          >
            <div className="w-10/12 mx-auto py-32 my-32 border border-zinc-900 rounded-xl backdrop-blur-sm">
              <div>
                <h2 className="text-center font-bold text-5xl text-white">
                  Offered
                </h2>
              </div>
            </div>
          </Parallax>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 mt-10">
            {menus
              .filter((SingleMenu) => SingleMenu.category === "offered")
              .map((menu) => (
                <MenuItemCard key={menu.id} menu={menu} />
              ))}
          </div>
        </div>
        {/* Salad */}
        <div className="mt-10">
          <Parallax
            bgImage="https://i.ibb.co.com/MGnm4ZZ/salad.jpg"
            className="rounded-xl"
            strength={100}
          >
            <div className="w-10/12 mx-auto py-32 my-32 border border-zinc-900 rounded-xl backdrop-blur-sm">
              <div>
                <h2 className="text-center font-bold text-5xl text-white">
                  Salad
                </h2>
              </div>
            </div>
          </Parallax>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 mt-10">
            {menus
              .filter((SingleMenu) => SingleMenu.category === "salad")
              .map((menu) => (
                <MenuItemCard key={menu.id} menu={menu} />
              ))}
          </div>
        </div>
        {/* Drinks */}
        <div className="mt-10">
          <Parallax
            bgImage="https://i.ibb.co.com/vQfnXvL/drinks.jpg"
            className="rounded-xl"
            strength={100}
          >
            <div className="w-10/12 mx-auto py-32 my-32 border border-zinc-900 rounded-xl backdrop-blur-sm">
              <div>
                <h2 className="text-center font-bold text-5xl text-white">
                  Drinks
                </h2>
              </div>
            </div>
          </Parallax>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 mt-10">
            {menus
              .filter((SingleMenu) => SingleMenu.category === "drinks")
              .map((menu) => (
                <MenuItemCard key={menu.id} menu={menu} />
              ))}
          </div>
        </div>
        {/* Dessert */}
        <div className="mt-10">
          <Parallax
            bgImage="https://i.ibb.co.com/wst6hyb/desserts.jpg"
            className="rounded-xl"
            strength={100}
          >
            <div className="w-10/12 mx-auto py-32 my-32 border border-zinc-900 rounded-xl backdrop-blur-sm">
              <div>
                <h2 className="text-center font-bold text-5xl text-white">
                  Dessert
                </h2>
              </div>
            </div>
          </Parallax>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 mt-10">
            {menus
              .filter((SingleMenu) => SingleMenu.category === "dessert")
              .map((menu) => (
                <MenuItemCard key={menu.id} menu={menu} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;

import React from "react";

const OrderItemCard = ({ menu }) => {
  const { name, recipe, image, price } = menu;
  return (
    <div className="border border-zinc-200 shadow-lg rounded-lg overflow-hidden">
      <img src={image} className="w-full h-56 object-cover" />
      <div className="p-5 space-y-3">
        <h2 className="font-3 font-extrabold text-xl text-zinc-950">{name}</h2>
        <p className="text-zinc-600">{recipe}</p>
        <button className="px-7 duration-300 py-3 capitalize bg-zinc-900 text-white hover:bg-amber-400 hover:text-zinc-900 rounded-lg">
          add to cart
        </button>
      </div>
    </div>
  );
};

export default OrderItemCard;

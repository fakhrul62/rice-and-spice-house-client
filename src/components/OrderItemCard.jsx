import React from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";


const OrderItemCard = ({ menu }) => {
  const { name, recipe, image, category, price, _id } = menu;
  const { user } = useAuth();
  const [, refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        menuId : _id,
        email: user.email,
        name, image, price, category
      };
      axiosSecure.post("/carts", cartItem)
      .then(res=> {
        if(res.data.insertedId){
          Swal.fire({
            title: "Added",
            text: "Successfully added to cart",
            icon: "success",
            iconColor: "#f4ec11",
            confirmButtonText: "Okay",
            customClass: {
              confirmButton: "bg-amber-400 text-zinc-800 font-body px-32",
              title: "font-head font-bold text-2xls",
            },
          });
          //refetch
          refetch();
        }
      })
    } else {
      Swal.fire({
        title: "Login First",
        text: "You must logged in to add a product to cart",
        icon: "error",
        iconColor: "#f4ec11",
        confirmButtonText: "Okay",
        customClass: {
          confirmButton: "bg-amber-400 text-zinc-800 font-body px-32",
          title: "font-head font-bold text-2xls",
        },
      });
    }
  };
  return (
    <div className="border border-zinc-200 shadow-lg rounded-lg overflow-hidden">
      <img src={image} className="w-full h-56 object-cover" />
      <div className="p-5 space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="font-3 font-extrabold text-xl text-zinc-950">
            {name}
          </h2>
          <h2 className="fon-body text-xl text-zinc-950">
            <span className="text-orange-600">$</span>
            {price}
          </h2>
        </div>
        <p className="text-zinc-600">{recipe}</p>
        <button
          onClick={handleAddToCart}
          className="px-7 duration-300 py-3 capitalize bg-zinc-900 text-white hover:bg-amber-400 hover:text-zinc-900 rounded-lg"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default OrderItemCard;

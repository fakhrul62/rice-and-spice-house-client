import React from "react";
import useCart from "../../hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Cart = () => {
  const axiosSecure = useAxiosSecure();
  const [cart,refetch] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const handleDelete = (item) => {
    axiosSecure.delete(`/carts/${item}`).then((res) => {
      if(res.data.deletedCount > 0){
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            iconColor: "#f4ec11",
            showCancelButton: true,
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!",
            customClass: {
              confirmButton: "bg-amber-400 text-zinc-800 font-body px-32",
              title: "font-head font-bold text-2xls",
            },
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                iconColor: "#f4ec11",
                text: "Item has been removed from the cart.",
                icon: "success",
                customClass: {
                  confirmButton: "bg-amber-400 text-zinc-800 font-body px-32",
                  title: "font-head font-bold text-2xls",
                },
              });
              refetch();
            }
          });
      }
      
    });
  };
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold logo-1 tracking-widest text-zinc-900 inline-block border-b-4 border-amber-400 pb-1">
          My Cart
        </h2>
      </div>
      <div className="my-5 flex justify-between items-center text-zinc-900 text-xl font-bold">
        <div>
          <h4 className="font-3">
            Total Orders: <span className="font-body">{cart.length}</span>
          </h4>
        </div>
        <div>
          <h4 className="font-3">
            Total Price:{" "}
            <span className="font-body">
              <span className="text-amber-400">$</span>
              {totalPrice}
            </span>
          </h4>
        </div>
        <div>
          <button
            type="button"
            className="bg-amber-400 rounded-full text-lg px-6 py-3 "
          >
            Pay Now
          </button>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="bg-amber-200 text-zinc-800 *:!font-normal">
                <th>No.</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, idx) => (
                <tr key={item._id} className="hover">
                  <td>{idx + 1}</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  </td>
                  <td className="font-semibold">{item.name}</td>
                  <td>${item.price}</td>
                  <td className="text-center">
                    <button
                      onClick={() => handleDelete(item._id)}
                      type="button"
                      className="text-red-700 bg-red-200 p-3 rounded-lg"
                    >
                      <RiDeleteBin6Line />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;

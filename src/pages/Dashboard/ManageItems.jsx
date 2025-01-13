import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import useMenu from "../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menus/${item._id}`);
        refetch();
        Swal.fire({
          title: "Deleted!",
          iconColor: "#f4ec11",
          text: "Item has been removed from the database.",
          icon: "success",
          customClass: {
            confirmButton: "bg-amber-400 text-zinc-800 font-body px-32",
            title: "font-head font-bold text-2xls",
          },
        });
      }
    });
  };

  return (
    <div>
      <div className="text-center my-10">
        <h2 className="text-2xl font-bold logo-1 tracking-widest text-zinc-900 inline-block border-b-4 border-amber-400 pb-1">
          MANAGE ITEM
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-amber-200 text-zinc-800 *:!font-normal">
              <th>No.</th>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Update</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, idx) => (
              <tr key={item._id} className="hover">
                <td>{idx + 1}</td>
                <td className="font-semibold">{item.name}</td>
                <td>${item.price}</td>
                <td>{item.category}</td>
                <td>
                  <Link to={`/dashboard/update-item/${item._id}`}>
                    <button
                      type="button"
                      className="text-green-700 bg-green-200 p-3 rounded-lg"
                    >
                      <FaRegEdit />
                    </button>
                  </Link>
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleDeleteItem(item)}
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
  );
};

export default ManageItems;

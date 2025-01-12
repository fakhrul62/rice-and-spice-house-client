import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { RiDeleteBin6Line, RiUser2Line } from "react-icons/ri";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDelete = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              iconColor: "#f4ec11",
              text: "User has been removed from the database.",
              icon: "success",
              customClass: {
                confirmButton: "bg-amber-400 text-zinc-800 font-body px-32",
                title: "font-head font-bold text-2xls",
              },
            });
          }
        });
      }
    });
  };
  const handleRole = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          title: "Role Changed!",
          iconColor: "#f4ec11",
          text: "User role has been changed to Admin.",
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
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-amber-200 text-zinc-800 *:!font-normal">
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.email} className="hover">
                <td>{idx + 1}</td>
                <td className="font-semibold">{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleRole(user)}
                      type="button"
                      className="text-red-700 bg-red-200 p-3 rounded-lg"
                    >
                      <RiUser2Line />
                    </button>
                  )}
                </td>
                <td className="text-center">
                  <button
                    onClick={() => handleDelete(user)}
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

export default AllUsers;

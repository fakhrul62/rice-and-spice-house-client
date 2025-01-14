import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {data: stats = []} = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async ()=>{
        const res = await axiosSecure.get("/admin-stats");
        return res.data;
    }
  })
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold logo-1 tracking-widest text-zinc-900 inline-block ">
          Welcome <span className="border-b-4 border-amber-400 pb-1">{user?.displayName}</span>
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-10">
        <div className="bg-amber-300 border border-amber-400 shadow-lg p-5 text-zinc-900 text-center rounded-lg">
          <h4 className="text-2xl font-medium">Total Orders</h4>
          <p className="text-4xl font-bold">{stats.payments}</p>
        </div>
        <div className="bg-amber-300 border border-amber-400 shadow-lg p-5 text-zinc-900 text-center rounded-lg">
          <h4 className="text-2xl font-medium">Total Revenue</h4>
          <p className="text-4xl font-bold">${stats.revenue}</p>
        </div>
        <div className="bg-amber-300 border border-amber-400 shadow-lg p-5 text-zinc-900 text-center rounded-lg">
          <h4 className="text-2xl font-medium">Total Users</h4>
          <p className="text-4xl font-bold">{stats.users}</p>
        </div>
        <div className="bg-amber-300 border border-amber-400 shadow-lg p-5 text-zinc-900 text-center rounded-lg">
          <h4 className="text-2xl font-medium">Total Items</h4>
          <p className="text-4xl font-bold">{stats.menus}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;

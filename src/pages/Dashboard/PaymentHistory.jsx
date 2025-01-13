import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { RiDeleteBin6Line } from "react-icons/ri";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user.email}`);
      return res.data;
    },
  });
//   const totalSpent = payments
//     ?.reduce((sum, item) => sum + parseInt(item.amount), 0)
//     .toFixed(2);
  return (
    <div>
      <div className="text-center my-10">
        <h2 className="text-2xl font-bold logo-1 tracking-widest text-zinc-900 inline-block border-b-4 border-amber-400 pb-1">
          PAYMMENT HISTORY
        </h2>
      </div>
      <div className="bg-zinc-100 p-5 rounded-lg">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="py-3 font-bold text-xl">
              Total Payment: {payments.length}
            </h2>
            {/* <h2 className="py-3 font-bold text-xl">
              Total Spent: {totalSpent}
            </h2> */}
          </div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-amber-200 text-zinc-800 *:!font-normal">
                  <th>No.</th>
                  <th>Email</th>
                  <th>Amount</th>
                  <th>Tr. Id</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((item, idx) => (
                  <tr key={item._id} className="hover">
                    <td>{idx + 1}</td>
                    <td className="font-semibold">{item.email}</td>
                    <td className="font-semibold">${item.amount}</td>
                    <td>{item.transactionId}</td>
                    <td>{item.time}</td>
                    <td>{item.status}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;

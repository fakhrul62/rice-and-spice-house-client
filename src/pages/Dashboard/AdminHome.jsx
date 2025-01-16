import React from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { IoCartOutline, IoFastFoodOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlineAttachMoney } from "react-icons/md";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Legend,
} from "recharts";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const { data: stats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  const { data: orderStats = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  ///chart
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const pieChartData = orderStats.map(data=>{
    return {
      name:data.category,
      value:data.quantity
    }
  })
  ///chart
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold logo-1 tracking-widest text-zinc-900 inline-block ">
          Welcome,{" "}
          <span className="border-b-4 border-amber-400 pb-1">
            {user?.displayName}
          </span>
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-5 mt-10">
        <div className="bg-amber-300 border border-amber-400 shadow-xl p-5 text-zinc-900 text-center rounded-lg space-y-2">
          <h4 className="text-2xl font-medium">Total Orders</h4>
          <p className="text-4xl font-bold flex items-center justify-center gap-3">
            <IoCartOutline /> {stats?.payments}
          </p>
        </div>
        <div className="bg-amber-300 border border-amber-400 shadow-xl p-5 text-zinc-900 text-center rounded-lg space-y-2">
          <h4 className="text-2xl font-medium">Total Revenue</h4>
          <p className="text-4xl font-bold flex items-center justify-center gap-3">
            <MdOutlineAttachMoney />
            {stats?.revenue}
          </p>
        </div>
        <div className="bg-amber-300 border border-amber-400 shadow-xl p-5 text-zinc-900 text-center rounded-lg space-y-2">
          <h4 className="text-2xl font-medium">Total Users</h4>
          <p className="text-4xl font-bold flex items-center justify-center gap-3">
            <HiOutlineUserGroup />
            {stats?.users}
          </p>
        </div>
        <div className="bg-amber-300 border border-amber-400 shadow-xl p-5 text-zinc-900 text-center rounded-lg space-y-2">
          <h4 className="text-2xl font-medium">Total Items</h4>
          <p className="text-4xl font-bold flex items-center justify-center gap-3">
            {" "}
            <IoFastFoodOutline />
            {stats?.menus}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-10">
        <BarChart
          width={500}
          height={300}
          data={orderStats}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Bar
            dataKey="quantity"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {orderStats.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
        <PieChart width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
      </div>
    </div>
  );
};

export default AdminHome;

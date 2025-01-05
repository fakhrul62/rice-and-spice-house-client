import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Helmet } from "react-helmet-async";
import "../css/Order.css";
import useMenu from "../hooks/useMenu";
import MenuItemCard from "../components/MenuItemCard";
import OrderItemCard from "../components/OrderItemCard";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Order = (props) => {
  const [value, setValue] = useState(0);
  const [menus] = useMenu();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Order</title>
        <link rel="canonical" href="" />
      </Helmet>
      <div className="bg-[url(https://i.ibb.co.com/GtSjTF3/order-cover.jpg)] bg-cover bg-center bg-no-repeat py-32">
        <h2 className="text-center font-bold text-6xl text-white">
          Order Food
        </h2>
      </div>
      <div className="w-10/12 mx-auto my-10">
        <Box className="flex justify-center">
          <Tabs value={value} onChange={handleChange} className="!font-body">
            <Tab label="Pizza" />
            <Tab label="Soup" />
            <Tab label="Salad" />
            <Tab label="Desserts" />
            <Tab label="Drinks" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="grid grid-cols-3 gap-5">
          {menus
              .filter((SingleMenu) => SingleMenu.category === "pizza")
              .map((menu) => (
                <OrderItemCard key={menu._id} menu={menu} />
              ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
        <div className="grid grid-cols-3 gap-5">
          {menus
              .filter((SingleMenu) => SingleMenu.category === "soup")
              .map((menu) => (
                <OrderItemCard key={menu._id} menu={menu} />
              ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        <div className="grid grid-cols-3 gap-5">
          {menus
              .filter((SingleMenu) => SingleMenu.category === "salad")
              .map((menu) => (
                <OrderItemCard key={menu._id} menu={menu} />
              ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
        <div className="grid grid-cols-3 gap-5">
          {menus
              .filter((SingleMenu) => SingleMenu.category === "dessert")
              .map((menu) => (
                <OrderItemCard key={menu._id} menu={menu} />
              ))}
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
        <div className="grid grid-cols-3 gap-5">
          {menus
              .filter((SingleMenu) => SingleMenu.category === "drinks")
              .map((menu) => (
                <OrderItemCard key={menu._id} menu={menu} />
              ))}
          </div>
        </CustomTabPanel>
      </div>
    </div>
  );
};

export default Order;

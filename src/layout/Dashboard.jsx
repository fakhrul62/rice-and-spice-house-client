import { Link, NavLink, Outlet } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsCart4 } from "react-icons/bs";
import { IoCalendarOutline, IoBookmarksOutline } from "react-icons/io5";
import { PiQuotes } from "react-icons/pi";
import { HiArrowLeftStartOnRectangle } from "react-icons/hi2";
import "../css/Dashboard.css";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="flex">
      <div className="w-80 min-h-screen bg-zinc-900 flex flex-col justify-between">
        <div>
          <div className="p-6">
            <Link to="/" className="flex gap-2 items-center">
              {/* <span className="w-12"><Lottie animationData={logo} loop={true} /></span> */}
              <span className="flex flex-col -space-y-5 justify-center">
                <span className="logo-1 text-2xl text-white relative z-20">
                  Rice & Spice
                </span>
                <span className="logo-2 text-5xl text-amber-400 z-10`">
                  House
                </span>{" "}
              </span>
            </Link>
          </div>
          <div className="p-4">
            <ul className="dash-nav *:text-white hover:*:text-zinc-950 hover:*:bg-amber-400 *:rounded-lg *:py-2 *:px-4 *:mb-2 *:flex *:items-center *:gap-2">
              <NavLink to="/dashboard" end>
                <LuLayoutDashboard />
                Dashboard
              </NavLink>

              <NavLink to="/dashboard/cart">
                <BsCart4 />
                My Cart
              </NavLink>

              <NavLink to="/dashboard/reservation">
                <IoCalendarOutline />
                Reservation
              </NavLink>

              <NavLink to="/dashboard/review">
                <PiQuotes />
                Add a Review
              </NavLink>

              <NavLink to="/dashboard/bookings">
                <IoBookmarksOutline />
                My Bookings
              </NavLink>

              <NavLink className="" to="/">
                <HiArrowLeftStartOnRectangle />
                Go to Home
              </NavLink>
            </ul>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-4 p-6">
          <img
            src={user.photoURL}
            className="h-12 w-12 object-cover rounded-full"
          />
          <h2 className="text-white">{user.displayName}</h2>
        </div>
      </div>
      <div className="flex-1 p-6">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

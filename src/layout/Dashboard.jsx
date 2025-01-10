import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-80 min-h-screen bg-zinc-900">
        <div className="p-6">
          <Link className="flex gap-2 items-center">
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
          <ul className="*:text-white hover:*:text-zinc-950 hover:*:bg-amber-400 *:rounded-lg *:py-2 *:px-4 *:mb-2 *:flex">
            <NavLink to="/dashboard">Dashboard</NavLink>

            <NavLink to="/dashboard/cart">My Cart</NavLink>

            <NavLink to="/dashboard/reservation">Reservation</NavLink>

            <NavLink to="/dashboard/review">Add a Review</NavLink>

            <NavLink to="/dashboard/bookings">My Bookings</NavLink>

            <NavLink to="/">Go to Home</NavLink>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

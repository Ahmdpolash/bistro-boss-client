import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import {
  FaAd,
  FaAlignJustify,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaKey,
  FaList,
  FaLock,
  FaMoneyBill,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaVoicemail,
} from "react-icons/fa";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";

const Dashboard = () => {

  // const isAdmin = true;

  const [isAdmin] = useAdmin()

  const { data } = useCart();
  return (
    <div>
      <div className="flex flex-col lg:flex-row ">
        <div className="bg-[#D1A054] min-h-screen w-64">
        <span className="text-3xl font-bold mx-auto text-center mt-2 block">Bistro Boss</span>
          <ul className="p-6 space-y-6">
            {isAdmin ? (
              <>
                <li className="flex  text-[18px] uppercase items-center gap-2">
                  <FaHome className="text-2xl" />
                  <NavLink to="/dashboard/adminHome">Admin Home</NavLink>
                </li>
                <li className="flex text-[18px] uppercase items-center gap-2">
                  <FaUtensils className="text-2xl" />
                  <NavLink to="/dashboard/addItem">Add Items</NavLink>
                </li>
                <li className="flex text-[18px] uppercase items-center gap-2">
                  <FaList className="text-2xl" />
                  <NavLink to="/dashboard/manageItem">Manage Items</NavLink>
                </li>
                <li className="flex text-[18px] uppercase items-center gap-2">
                  <FaBook className="text-2xl" />
                  <NavLink
                    to="/dashboard/manageBookings"
                    className={({ isActive }) => (isActive ? "text-white" : "")}
                  >
                    Manage Bookings
                  </NavLink>
                </li>

                <li className="flex text-[18px] uppercase items-center gap-2">
                  <FaUsers className="text-2xl" />
                  <NavLink to="/dashboard/allUsers">All Users</NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="flex  text-[18px] uppercase items-center gap-2">
                  <FaHome className="text-2xl" />
                  <NavLink to="/dashboard/userHome">User Home</NavLink>
                </li>
                <li className="flex text-[18px] uppercase items-center gap-2">
                  <FaCalendar className="text-2xl" />
                  <NavLink to="/dashboard/reservation">reservation</NavLink>
                </li>
                <li className="flex text-[18px] uppercase items-center gap-2">
                  <FaMoneyBill className="text-2xl" />
                  <NavLink to="/dashboard/paymentHistory">payment history</NavLink>
                </li>
                <li className="flex text-[18px] uppercase items-center gap-2">
                  <FaShoppingCart className="text-2xl" />
                  <NavLink
                    to="/dashboard/cart"
                    className={({ isActive }) => (isActive ? "text-white" : "")}
                  >
                    my cart ({data?.length}){" "}
                  </NavLink>
                </li>
                <li className="flex text-[18px] uppercase items-center gap-2">
                  <FaAd className="text-2xl" />
                  <NavLink to="/dashboard/review">add review</NavLink>
                </li>
                <li className="flex text-[18px] uppercase items-center gap-2">
                  <FaList className="text-2xl" />
                  <NavLink to="/dashboard/bookings">my booking</NavLink>
                </li>
              </>
            )}
            {/* //? shared ;;; */}
            <hr />
            <li className="flex text-[18px] items-center gap-2">
              <FaHome className="text-2xl" />
              <NavLink to="/">Home</NavLink>
            </li>{" "}
            <li className="flex text-[18px] items-center gap-2">
              <FaAlignJustify className="text-2xl" />
              <NavLink to="/dashboard/bookings">Menu</NavLink>
            </li>
            <li className="flex text-[18px] items-center gap-2">
              <FaLock className="text-2xl" />
              <NavLink to="/dashboard/bookings">Shop</NavLink>
            </li>
            <li className="flex text-[18px] items-center gap-2">
              <FaEnvelope className="text-2xl" />
              <NavLink to="/dashboard/bookings">Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 bg-[#F6F6F6]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

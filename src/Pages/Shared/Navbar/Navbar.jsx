import React, { useState, useEffect, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../../../provider/AuthProvider";
import { BsFillCartCheckFill } from "react-icons/bs";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(authContext);
  const [isAdmin] = useAdmin();
  const [scrolled, setScrolled] = useState(false);
  const { data } = useCart();

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogOut = () => {
    logOut().then();
  };

  const nav = (
    <>
      <li>
        <NavLink className="hover:text-white" to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className="hover:text-white"  to="/contact">Contact US</NavLink>
      </li>
     
      <li>
        <NavLink className="hover:text-white" to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink className="hover:text-white" to="/order/salad">Our Shop</NavLink>
      </li>
      {user && isAdmin && (
        <li>
          <NavLink className="hover:text-white" to="/dashboard/adminHome">Dashboard</NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link className="hover:text-white" to="/dashboard/userHome">Dashboard</Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div
        className={`navbar fixed px-4 lg:px-16 mx-auto z-10  text-white ${
          scrolled ? "bg-slate-800" : "bg-opacity-60 bg-black"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <span className="text-2xl font-bold">Bistro Boss</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <p>{user?.displayName}</p>

              <Link to="/dashboard/cart">
                <button
                  type="button"
                  className="relative mr-6 inline-flex items-center p-3 text-sm font-medium text-center text-white rounded-lg  focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <BsFillCartCheckFill className="text-3xl text-red-500 mt-1" />

                  <span className="sr-only">Notifications</span>
                  <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-[1px] -end-2 dark:border-gray-900">
                    {data?.length}
                  </div>
                </button>
              </Link>

              <button
                onClick={handleLogOut}
                className="px-5 py-3 rounded-md bg-red-500"
              >
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="bg-purple-600 px-5 py-3 rounded-md">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

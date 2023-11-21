import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Layout = () => {
  const location  = useLocation()

  const hideNavFooter = location.pathname.includes('login')
  return (
    <>
     {hideNavFooter ||  <Navbar />}
      <Outlet />
     {hideNavFooter || <Footer/>}
    </>
  );
};

export default Layout;

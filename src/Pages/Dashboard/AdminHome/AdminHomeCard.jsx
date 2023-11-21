import React from "react";
import {
  FaBook,
  FaCar,
  FaProductHunt,
  FaUsers,
  FaWallet,
} from "react-icons/fa";

const AdminHomeCard = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6 my-3">

      <div className="bg-gradient-to-r from-[#BB34F5] from-0% to-[#FCDBFF] to-100% border shadow-md h-[130px] rounded-lg">
        <div className="flex items-center justify-center h-full gap-3">
          <div>
            <FaWallet className="text-4xl text-white" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">${stats?.revenue}</h2>
            <h1 className="text-2xl font-bold text-white">Revenue</h1>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r  from-[#D3A256] from-0% to-[#FDE8C0] to-100% border shadow-md h-[130px] rounded-lg">
        <div className="flex items-center justify-center h-full gap-3">
          <div>
            <FaUsers className="text-4xl text-white" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">{stats?.users}</h2>
            <h1 className="text-2xl font-bold text-white">Customer</h1>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#FE4880] from-0% to-[#FECDE9] to-100% border shadow-md h-[130px] rounded-lg">
        <div className="flex items-center justify-center h-full gap-3">
          <div>
            <FaBook className="text-4xl text-white" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">
              {stats?.menuItems}
            </h2>
            <h1 className="text-2xl font-bold text-white">Products</h1>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r  from-[#6AAEFF] from-0% to-[#B6F7FF] to-100% border shadow-md h-[130px] rounded-lg">
        <div className="flex items-center justify-center h-full gap-3">
          <div>
            <FaCar className="text-4xl text-white" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">{stats?.order}</h2>
            <h1 className="text-2xl font-bold text-white">Order</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHomeCard;

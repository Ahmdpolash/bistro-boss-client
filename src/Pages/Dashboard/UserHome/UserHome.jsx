import React from "react";
import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div className="px-4 lg:px-8 py-4">
      <h1 className="text-3xl font-bold">
        <span>Hi, Welcome </span>
        {user.displayName ? user?.displayName : "Back!"}
      </h1>
    </div>
  );
};

export default UserHome;

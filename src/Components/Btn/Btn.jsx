import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const Btn = () => {
  const { googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const handleGoogleLogin = () => {
    googleLogin().then((res) => {
      console.log(res.user);

      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
      };
      
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
      });
      navigate(location.state ? location.state : "/");
    });
  };
  return (
    <div>
      <div className="divider"></div>

      <div>
        <button
          onClick={handleGoogleLogin}
          className=" btn btn-error flex items-center justify-center gap-3 w-full text-[17px] text-white py-2"
        >
          <FaGoogle></FaGoogle>
          Login
        </button>
      </div>
    </div>
  );
};

export default Btn;

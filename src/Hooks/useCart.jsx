import React from "react";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
  const axiosSecure = useAxios();
  const { user } = useAuth();

  const { data,refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
  });
  return { data,refetch };
};

export default useCart;
 
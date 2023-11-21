import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () => {
  // const [loading, setLoading] = useState(true);
  // const [menu, setMenu] = useState([]);
  const axiosPublic = useAxiosPublic();

  // useEffect(() => {
  //   fetch("https://bistro-boss-server-kohl-chi.vercel.app/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //       setLoading(false);
  //     });
  // }, []);

  const {
    data: menu = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await axiosPublic.get("/menu");
      return res.data;
    },
  });

  return [menu, refetch,isPending];
};

export default useMenu;

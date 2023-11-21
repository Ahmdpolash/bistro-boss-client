import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/sectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  // const [menu, setMenu] = useState([]);
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category == "popular");

  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const filterData = data.filter((item) => item.category == "popular");
  //       setMenu(filterData);
  //     });
  // }, []);

  return (
    <div>
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      />
      <div className="grid grid-cols-1 px-4 lg:px-16 gap-8 lg:grid-cols-2">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to='/order'>
        <h3 className="uppercase font-bold text-2xl text-center border-b-2 py-2 border-black w-2/12 mx-auto mb-3">
          view full menu
        </h3>
      </Link>
    </div>
  );
};

export default PopularMenu;

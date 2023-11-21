import React from "react";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import Cover from "../../Shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ heading, coverImg, items }) => {
  return (
    <div>
      {heading && (
        <Cover
          img={coverImg}
          heading={heading}
          desc={"Would you like to try a dish?"}
        />
      )}

      <div className="grid grid-cols-1 px-4 lg:px-16 gap-8 mt-16 lg:grid-cols-2">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      <Link to={`/order/${heading}`}>
        <button className="btn btn-primary lg:ml-16 my-4">Order Now</button>
      </Link>
      
    </div>
  );
};

export default MenuCategory;

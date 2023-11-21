import React from "react";

const MenuItem = ({ item }) => {
  return (
    <div>
      <div className="mb-10">
        <div className="flex justify-between gap-3">
          <img style={{width:'100px', borderRadius:'0px 200px 200px 200px'}} src={item.image} alt="" />
          <div>
            <h3 className="uppercase font-bold">{item.name} ----------------</h3>
            <p>{item.recipe}</p>
          </div>
          <div className="text-yellow-600 font-semibold">${item.price}</div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;

import React from "react";
import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({items}) => {
  return (
    <div>
      <div className="px-4 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {items.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OrderTab;

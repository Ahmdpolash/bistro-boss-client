import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className=" md:w-4/12 my-8 mx-auto text-center mb-6 mt-16">
      <h3 className="text-yellow-600 py-2 text-[17px] font-semibold">
        {subHeading}
      </h3>
      <h3 className="text-3xl font-bold border-y-4 py-4 ">{heading}</h3>
    </div>
  );
};

export default SectionTitle;

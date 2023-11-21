import React from "react";
import './bistro.css'

const Bistro = () => {
  return (
    <div>
      <div className="px-4 mt-20 lg:px-16">
        <div className="flex bgImg bg-fixed lg:h-[290px] rounded-md items-center justify-center ">
          <div className="bg-white w-7/12 rounded-md p-10 text-black">
            <h1 className="text-2xl uppercase text-center space-y-3">Bistro Boss</h1>
            <p className="text-center py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bistro;

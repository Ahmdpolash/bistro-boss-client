import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, heading, desc }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImageAlt="the dog"
      bgImage={img}
      strength={-200}
    >
      <div className="hero h-[600px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl w-full bg-[#15151599]  py-16 lg:px-40 rounded-md">
            <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
            <p className="mb-5">{desc}</p>
          </div>
        </div>
      </div>
      
    </Parallax>
  );
};

export default Cover;

import React from "react";
import SectionTitle from "../../../Components/sectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./featured.css";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <div className="featured mb-4 lg:mb-8 bg-fixed text-white">
      <div className="z-10 relative my-3">
        <SectionTitle
          subHeading={"---Check it out---"}
          heading={"FEATURED ITEM"}
        />
      </div>
      <div className="md:flex mx-auto justify-center items-center py-8 px-16">
        <div>
          <img
            className="lg:w-[440px] relative z-10 rounded-md mx-auto text-center"
            src={featured}
            alt=""
          />
        </div>
        <div className="md:ml-10 m-0 relative z-20 w-4/12 space-y-3 ">
          <h3>WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <Link to='/order'>
            <button className="btn btn-outline border-0 border-b-4 text-white">
              READ MORE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;

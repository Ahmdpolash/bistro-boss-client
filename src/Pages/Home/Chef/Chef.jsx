import React from "react";
import SectionTitle from "../../../Components/sectionTitle";
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";

const Chef = () => {
  return (
    <div>
      <section className="px-4 lg:px-16">
        <SectionTitle
          subHeading={"---Should Try---"}
          heading={"CHEF RECOMMENDS"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">

        <div className="card border lg:h-[470px] bg-base-100 shadow-xl">
            <figure className="">
              <img 
                src={img1}
                alt="Shoes"
                className="w-full h-[270px] rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Caeser Salad!</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card border lg:h-[470px] bg-base-100 shadow-xl">
            <figure className="">
              <img 
                src={img2}
                alt="Shoes"
                className="w-full lg:h-[270px] rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Caeser Salad!</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card border h-[470px] bg-base-100 shadow-xl">
            <figure className="">
              <img 
                src={img3}
                alt="Shoes"
                className="w-full h-[270px] rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Caeser Salad!</h2>
              <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
              <div className="card-actions">
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chef;

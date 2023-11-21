import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/sectionTitle";
import img from '../../../assets/quote-left 1.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch("https://bistro-boss-server-kohl-chi.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    <div>
      <section className="px-4 lg:px-52">

        <SectionTitle
          subHeading={"---What Our Clients Say---"}
          heading={"TESTIMONIALS"}
        />

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col my-12 items-center px-16 justify-center">
                <Rating className="mt-2 py-4"
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
              <img className="w-[50px]  h-[50px]" src={img} alt="" />

                <div className="space-y-3  mx-auto text-center">
                 
                  <p>{review.details}</p>
                  <h3 className="text-2xl text-orange-400">{review.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;

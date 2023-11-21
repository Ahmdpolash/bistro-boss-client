import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import Call from "../Call/Call";
import Bistro from "../Category/Bistro";
import Chef from "../Chef/Chef";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <Bistro />
      <PopularMenu />
      <Call />
      <Chef />r
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;

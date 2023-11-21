import React from "react";
import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/sectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category == "dessert");
  const pizza = menu.filter((item) => item.category == "pizza");
  const salad = menu.filter((item) => item.category == "salad");
  const soup = menu.filter((item) => item.category == "soup");
  const offered = menu.filter((item) => item.category == "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <Cover
        img={coverImg}
        heading={"OUR MENU"}
        desc={"Would you like to try a dish?"}
      />
      <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"} />

      <MenuCategory items={offered}/>

      <MenuCategory items={dessert} heading="dessert" coverImg={dessertImg} />

      <MenuCategory items={pizza} heading="pizza" coverImg={pizzaImg} />

      <MenuCategory items={salad} heading="salad" coverImg={saladImg} />

      <MenuCategory items={soup} heading="soup" coverImg={soupImg} />

    </div>
  );
};

export default Menu;

import React from "react";
import Categories from "./Categories";
import Catg from "../shops/Catg";
import "./Home.css";
import SliderHome from "./Slider";

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="container d_flex">
          <Catg />
          <SliderHome />
        </div>
      </section>
    </>
  );
};

export default Home;

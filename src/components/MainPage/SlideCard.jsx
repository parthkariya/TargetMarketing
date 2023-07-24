import React from "react";
import Sdata from "./Sdata";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <>
      <Slider {...settings}>
        {/* {Sdata.map((value, index) => {
          return (
            <>
              <div className="box d_flex top" key={index}>
                <div className="left">
                  <h1>{value.title}</h1>
                  <p>{value.desc}</p>
                  <button className="btn-primary">Explore Now</button>
                </div>
                <div className="right">
                  <img src={value.cover} alt="" />
                </div>
              </div>
            </>
          );
        })} */}
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/003/692/287/small/big-sale-discount-promotion-banner-template-with-blank-product-podium-scene-graphic-free-vector.jpg"
          width="100%"
          height="500px"
        />
        <img
          src="https://fiverr-res.cloudinary.com/t_mobile_web_2,q_auto,f_auto/gigs/176512119/original/cc2d3dac2e8c3be817a0a952b6340941a8994ff2.jpg"
          width="100%"
          height="500px"
        />
        <img
          src="https://assets-global.website-files.com/5e39e095596498a8b9624af1/6279aad9a4206d4a46dcf770_WFU-thumbnail%20(CTA%20alert%20banner).jpg"
          width="100%"
          height="500px"
        />
      </Slider>
    </>
  );
};

export default SlideCard;

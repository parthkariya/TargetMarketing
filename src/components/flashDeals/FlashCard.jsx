import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useProductsContext } from "../../context/products_context";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};
const FlashCard = ({ image, id, name, price, product }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const { trending_products: tranding } = useProductsContext();

  return (
    <>
      <Slider {...settings}>
        {tranding.slice(0, 6).map((product) => {
          return (
            <div className="box">
              <div className="product mtop">
                <div className="img">
                  {/* <span className="discount">{productItems.discount}% Off</span> */}
                  <img
                    src={product.image}
                    alt=""
                    style={{ width: "100%", height: "100%" }}
                  />
                  {/* <div className='product-like'>
                    <label>{count}</label> <br />
                    <i className='fa-regular fa-heart' onClick={increment}></i>
                  </div> */}
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>${price}.00 </h4>
                    {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                    {/* <button onClick={() => addToCart(product.id)}>
                      <i className="fa fa-plus"></i>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default FlashCard;

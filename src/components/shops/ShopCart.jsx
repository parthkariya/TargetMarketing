//import React, { useState } from "react"

//const ShopCart = ({ addToCart, shopItems }) => {
//  const [count, setCount] = useState(0)
//  const increment = () => {
//    setCount(count + 1)
//  }

//  return (
//    <>
//      {shopItems.map((shopItems) => {
//        return (
//          <div className='product mtop'>
//            <div className='img'>
//              <span className='discount'>{shopItems.discount}% Off</span>
//              <img src={shopItems.cover} alt='' />
//              <div className='product-like'>
//                <label>{count}</label> <br />
//                <i className='fa-regular fa-heart' onClick={increment}></i>
//              </div>
//            </div>
//            <div className='product-details'>
//              <h3>{shopItems.name}</h3>
//              <div className='rate'>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//                <i className='fa fa-star'></i>
//              </div>
//              <div className='price'>
//                <h4>${shopItems.price}.00 </h4>
//                <button onClick={() => addToCart(shopItems)}>
//                  <i className='fa fa-plus'></i>
//                </button>
//              </div>
//            </div>
//          </div>
//        )
//      })}
//    </>
//  )
//}

//export default ShopCart

import React, { useState, useEffect } from "react";
import { useProductsContext } from "../../context/products_context";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ShopCart = ({
  shopItems,
  addToCart,
  image,
  id,
  name,
  price,
  product,
}) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const { products: featured } = useProductsContext();

  return (
    <>
      {featured.slice(0, 5).map((products, index) => {
        // console.log("proo -->", products);
        return (
          <>
            {/* <div className="box home_shop_card" key={products.id}>
              <Link to={`/singleProduct/${products.id}`}>
                <div className="product mtop">
                  <div className="img">
                    <span className="discount">{products.discount}% Off</span>

                    <img src={products.image} alt="" />
                    <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div>
                  </div>
                  <div className="product-details">
                    <p className="pro_name">{products.name}</p>
                    <div className="price">
                      <h4 className="pro_price">₹{products.price} </h4>
                    </div>
                  </div>
                </div>
              </Link>
            </div> */}

            <div class="product-card" key={products.id}>
              <Link to={`/singleProduct/${products.id}`}>
                <div class="badge">5% Off</div>
                <div class="product-tumb">
                  <img src={products.image} alt="" />
                </div>
                <div class="product-details">
                  <span class="product-catagory">{products.category}</span>
                  <h4>
                    <a href="">{products.name}</a>
                  </h4>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Vero, possimus nostrum!
                  </p> */}
                  <div class="product-bottom-details">
                    <div class="product-price">
                      {/* <small>$96.00</small> */}₹{products.price}
                    </div>
                    <div class="product-links">
                      {/* <a href="">
                        <i class="fa fa-heart"></i>
                      </a> */}
                      <a href="">
                        <i class="fa fa-shopping-cart"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </>
        );
      })}
    </>
  );
};

export default ShopCart;

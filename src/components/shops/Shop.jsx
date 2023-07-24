import React, { useEffect } from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import { Link } from "react-router-dom";
import { useProductsContext } from "../../context/products_context";
import { getUniqueValues, formatPrice } from "../../utils/helpers";
import { useFilterContext } from "../../context/filter_context";

import "./style.css";
import Categories from "../MainPage/Categories";
import { FcNext } from "react-icons/fc";
const Shop = ({ shopItems, addToCart, image, id, name, price, product }) => {
  const {
    filters: {
      text,
      occasion,
      category,
      color,
      min_price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");

  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <div className="contentWidth fullwidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex home-pro-cat-tilte">
                <Link to={{ pathname: "/products", state: categories[0] }}>
                  <h2>New Arrival</h2>
                </Link>
                <p className="vr-divider"></p>
                <Link to={{ pathname: "/products", state: categories[1] }}>
                  <h2>Best Sellers</h2>
                </Link>
                <p className="vr-divider"></p>
                <Link to={{ pathname: "/products", state: categories[2] }}>
                  <h2>Events</h2>
                </Link>
              </div>
              <div className="heading-right row view_flex">
                <Link
                  to={{ pathname: "/products" }}
                  className="view-all-product"
                >
                  View All Products
                </Link>
                {/* <div className="view-next-icon"> */}
                {/* <i className="fa-solid fa-caret-right "></i> */}
                <FcNext className="view-next-icon" />
                {/* </div> */}
              </div>
            </div>
            {/* <marquee direction="right" scrolldelay="50" hspace="1000"> */}
            <div className="product-content  flexall">
              <ShopCart
                addToCart={addToCart}
                shopItems={shopItems}
                className="home_shop_marq"
              />
            </div>
            {/* </marquee> */}
          </div>
        </div>
      </section>
      {/* Masonry */}

      {/*  */}
    </>
  );
};

export default Shop;

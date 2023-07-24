import React, { useEffect } from "react";
import Catg from "../components/shops/Catg";
import ShopCart from "../components/shops/ShopCart";
import "../components/shops/style.css";
import { useProductsContext } from "../context/products_context";
import { useFilterContext } from "../context/filter_context";
import { Link } from "react-router-dom";

import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

import Filters from "../components/Filters";
import Loading from "../components/Loading";

import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const ProductsPage = ({ addToCart, shopItems }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [value, setValue] = React.useState("all");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const {
    filters: {
      text,
      occasion,
      category,
      color,
      min_price,
      max_price,
      price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const { filtered_products: products } = useFilterContext();

  const {
    products_loading: loading,
    produts_error: error,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <div className="products_page">
        <section className="filter_wrapper">
          <Filters />
        </section>

        <section className="products_wrapper">
          {products.map((products, index) => {
            const { id, image, name, price, description } = products;

            if (products.length < 1) {
              return (
                <h5 style={{ textTransform: "none" }}>
                  Sorry, no product matched to your search...
                </h5>
              );
            }

            return (
              <div className="box product_card" key={id}>
                <Link to={`/singleProduct/${id}`}>
                  <div className="product mtop">
                    <div className="img">
                      <span className="discount">{products.discount}% Off</span>
                      <img
                        className="pro_sec_img"
                        src={products.image}
                        alt=""
                      />
                      {/* <div className="product-like">
                  <label>{count}</label> <br />
                  <i className="fa-regular fa-heart" onClick={increment}></i>
                </div> */}
                    </div>
                    <div className="product-details">
                      <p className="pro_name height_const">{products.name}</p>
                      <div className="price">
                        <p className="pro_price">
                          ₹{products.price.split("-")[0]}
                          &nbsp;-&nbsp; ₹{products.price.split("-")[1]}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </section>

        <div>
          {products <= 0 ? (
            <h3>No products match, please clear the filter</h3>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;

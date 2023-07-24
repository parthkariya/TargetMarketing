import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFilterContext } from "../context/filter_context";
import { useProductsContext } from "../context/products_context";
import { getUniqueValues } from "../utils/helpers";
import Loading from "./Loading";

const Gift = () => {
  const [gprice, setGprice] = useState('');
  const [gcategory, setGcategory] = useState('');
  const [gavability, setGavability] = useState('');
  const uniqueIds = [];

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
    clearFilters, searchFilter,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");

  const uniquePriceRange = all_products.filter((p) => {
    const isDuplicate = uniqueIds.includes(p.price);

    if (!isDuplicate) {
      uniqueIds.push(p.price);
      return true;
    }
    return false;
  });

  const {
    products_loading: loading,
    produts_error: error,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="gift-main-container">
        <div className="gift-container">
          <p className="gift-part">Gift Finder</p>
          <div className="gift-part-flex">
            <div className="lbl-selector">
              <label className="s-lbl">Budget</label>
              <select
                className="gift-selector"
                name="budget"
                value={gprice}
                onChange={(e) => {
                  setGprice(e.target.value);
                  console.log("cat -->", gprice);
                }}
              >
                <option
                  value={""}
                >
                  All
                </option>
                {uniquePriceRange.map((up, index) => {
                  return (
                    <option
                      value={up.price}
                    >
                      {up.price}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="lbl-selector">
              <label className="s-lbl">Category</label>
              <select
                className="gift-selector"
                name="budget"
                value={gcategory}
                onChange={(e) => {
                  setGcategory(e.target.value);
                  console.log("cat -->", gcategory);
                  // updateFilters();
                }}
              >
                {categories.map((c, index) => {
                  return (
                    <option value={c}>{c}</option>
                  );
                })}
              </select>
            </div>
            <div className="lbl-selector">
              <label className="s-lbl">Availability</label>
              <select className="gift-selector" name="avalability">
                <option value="all">All</option>
                <option value="music">Music</option>
                <option value="trave">Ready Satock</option>
                <option value="health">Made To Order</option>
              </select>
            </div>
          </div>

          <Link
            className="gift-btn"
            to={`/products-filter`}
            onClick={() => searchFilter(gprice, gcategory)}
          >
            Search
          </Link>
        </div>
      </div>
    </>
  );
};

export default Gift;

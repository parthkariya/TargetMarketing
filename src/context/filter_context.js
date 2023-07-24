import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducers/filter_reducer";
import {
  LOAD_PRODUCTS,
  // SET_GRIDVIEW,
  // SET_LISTVIEW,
  // UPDATE_SORT,
  // SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  SEARCH_FILTER_PRODUCTS,
} from "../actions";
import { useProductsContext } from "./products_context";

const initialState = {
  //fetch product
  products: [],
  filtered_products: [],
  all_products: [],
  isSearch: false,
  //display
  // grid_view: true,
  //sort
  // sort: "price-lowest",
  //filters
  filters: {
    text: "",
    occasion: "all",
    category: "all",
    color: "all",
    filter_price: "all",
    min_price: 0,
    max_price: 0,
    price: "default",
    shipping: false,
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  //fetch products from product context
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  //products load
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  // sorting change effect
  useEffect(() => {
    // console.log("----------", state.isSearch === false || state.isSearch === "", state.isSearch, state.filters)
    if (state.isSearch === false) {
      dispatch({ type: FILTER_PRODUCTS });
      // console.log("filterd -- products", products);
      // dispatch({ type: SORT_PRODUCTS });
    }
  }, [
    products,
    state.filters, state.isSearch
  ]);

  //function for product grid / list display
  // const setGridView = () => {
  //   dispatch({ type: SET_GRIDVIEW });
  // };
  // const setListView = () => {
  //   dispatch({ type: SET_LISTVIEW });
  // };

  //sorting functions
  // const updateSort = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   dispatch({ type: UPDATE_SORT, payload: value });
  // };

  //filters function
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    // console.log("filter params ", e.target.value, e.target.name, e.target.textContent, e.target);
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "occasion") {
      value = e.target.textContent;
    }
    if (name === "category") {
      value = e.target.textContent;
    }
    if (name === "color") {
      value = e.target.dataset.color;
    }
    if (name === "price") {
      value = e.target.textContent;
    }
    if (name === "shipping") {
      value = e.target.checked;
    }
    // console.log("++++++++++++++++++++++++++++++", { name, value })
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });

  };

  const searchFilter = (price, category) => {
    // console.log("=============", price, category)
    dispatch({ type: SEARCH_FILTER_PRODUCTS, payload: { price, category } });
  }

  const clearFilters = () => {
    dispatch({ type: CLEAR_FILTERS });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        // setGridView,
        // setListView,
        // updateSort,
        updateFilters,
        clearFilters, searchFilter
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
// make sure use
export const useFilterContext = () => {
  return useContext(FilterContext);
};

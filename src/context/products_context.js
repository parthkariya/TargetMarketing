import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import products_reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import { single_product_url } from "../utils/constants";
import { search_url } from "../utils/constants";
import { useUserContext } from "../context/user_context";

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SEARCH_PRODUCTS_SUCCESS,
  GET_SEARCH_PRODUCTS_ERROR,
} from "../actions";

const initialState = {
  isSidebarOpen: false,
  //load all product
  products_loading: false,
  produts_error: false,
  products: [],
  //featured product
  featured_products: [],
  //Trending product
  trending_products: [],
  //single product
  search_product: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
  // userid:0,
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const { userid } = useUserContext();
  //using reducer
  const [state, dispatch] = useReducer(products_reducer, initialState);

  //sidebar functions
  const openSideBar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSideBar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  //fetch all product api
  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/x.targetmarketing.v1+json",
        },
      });
      const products = response.data.data;
      console.log(products);
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
    // const response = await axios.get(url);
    // console.log(response);
  };

  //fetch single product api
  const fetchSingleProduct = async (single_product_url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(single_product_url, {
        headers: {
          Accept: "application/x.targetmarketing.v1+json",
        },
      });
      const singleProduct = response.data.data;
      console.log("singleproduct ", response.data.data);

      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
    // const response = await axios.get(url);
    // console.log(response);
  };

  const searchProducts = async (param) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.post(search_url, param, {
        headers: {
          Accept: "application/x.targetmarketing.v1+json",
        },
      });
      console.log("search :", response.data);
      const products = response.data.records.data;

      dispatch({ type: GET_SEARCH_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_SEARCH_PRODUCTS_ERROR });
    }
  };

  const onClearSearchResult = async () => {
    dispatch({ type: GET_SEARCH_PRODUCTS_ERROR });
  };

  // use effect to fire function when site loads
  useEffect(() => {
    fetchProducts(`${url}${userid}`);
    fetchProducts(`${single_product_url}${userid}`);
  }, [userid]);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSideBar,
        closeSideBar,
        fetchSingleProduct,
        searchProducts,
        onClearSearchResult,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};

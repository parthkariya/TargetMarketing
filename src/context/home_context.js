import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/home_reducer";
import { home_url as url } from "../utils/constants";
import {
  GET_HOME_DATA_BEGIN,
  GET_HOME_DATA_ERROR,
  GET_HOME_DATA_SUCCESS,
} from "../actions";

const initialState = {
  //Home page api initial state
  home_loading: false,
  home_error: false,
  homeData: [],
  categories: [],
  occassions: [],
};

const HomeContext = React.createContext();

export const HomeProvider = ({ children }) => {
  //using reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  //fetch all product api
  const fetchProducts = async (url) => {
    dispatch({ type: GET_HOME_DATA_BEGIN });
    try {
      const response = await axios.get(url, {
        headers: {
          Accept: "application/x.targetmarketing.v1+json",
        },
      });
      const homeData = response.data;
      // console.log(products);
      dispatch({ type: GET_HOME_DATA_SUCCESS, payload: homeData });
    } catch (error) {
      dispatch({ type: GET_HOME_DATA_ERROR });
    }
    // const response = await axios.get(url);
    // console.log(response);
  };

  //use effect to fire function when site loads
  useEffect(() => {
    fetchProducts(`${url}`);
  }, []);

  return (
    <HomeContext.Provider value={{ ...state }}>{children}</HomeContext.Provider>
  );
};
// make sure use
export const useHomeContext = () => {
  return useContext(HomeContext);
};

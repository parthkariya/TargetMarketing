import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
  SEARCH_FILTER_PRODUCTS,
} from "../actions";

const filter_reducer = (state, action) => {
  //fetch product and save for filter and load
  if (action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((p) => p.price);
    // maxPrice = Math.max(...maxPrice);
    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: {
        ...state.filters,
        max_price: maxPrice,
        price: "default",
      },
    };
  }
  //sorting
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true };
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === "price-lowest") {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === "price-highest") {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === "name-a") {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === "name-z") {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }
    return { ...state, filtered_products: tempProducts };
  }
  //filters
  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, isSearch: false, filters: { ...state.filters, [name]: value }, };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { text, occasion, category, shipping, price, color } = state.filters;

    // console.log("=====", text, occasion, category, shipping, price, color)

    let tempProducts = [...all_products];
    //---------- filtering -----------
    //text
    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().startsWith(text);
      });
      // console.log("=====test", tempProducts)
    }
    //company
    // if (occasion !== "all") {
    //   tempProducts = tempProducts.filter(
    //     (product) => product.occasion === occasion
    //   );
    // }
    //category
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
      // console.log("=====Category", tempProducts)

    }
    //colors
    // if (color !== "all") {
    //   tempProducts = tempProducts.filter((product) => {
    //     return product.colors.find((c) => c === color);
    //   });
    // }
    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => product.colors === color);
      // console.log("=====color", tempProducts)
    }
    //price
    if (price !== "default") {
      tempProducts = tempProducts.filter((product) => product.price === price);
      // console.log("=====price", price, tempProducts)
    }
    //shipping
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
      // console.log("=====shipping", tempProducts)
    }

    // console.log("----{", tempProducts)
    return { ...state, isSearch: false, filtered_products: tempProducts, };
  }

  if (action.type === SEARCH_FILTER_PRODUCTS) {
    const { all_products } = state;
    const { price, category } = action.payload
    let temp = [...all_products];
    if (price && category) {
      // console.log("===========if")
      temp = temp.filter((product) => product.price === price && product.category === category);
    }
    else if (price === "" && category === "") {
      // console.log("===========if else")
    }
    else if (price === "") {
      // console.log("===========if else1")
      temp = temp.filter((product) => product.category === category);
    } else if (category == "") {
      // console.log("===========if else2")
      temp = temp.filter((product) => product.price === price);
    }

    // console.log("----", temp)
    return {
      ...state, isSearch: true, filtered_products: temp,
      filters: {
        ...state.filters, ["price"]: price === "" ? "all" : price,
        ["category"]: category === "" ? "all" : category,
      }
    };

  }

  // clear filters
  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: "",
        company: "all",
        category: "all",
        color: "all",
        price: "default",
        shipping: false,
      },
      isSearch: false
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;

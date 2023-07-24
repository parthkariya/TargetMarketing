import React, { useState, useEffect, useReducer } from "react";
import Home from "../components/MainPage/Home";
import FlashDeals from "../components/flashDeals/FlashDeals";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shops/Shop";
import Annocument from "../components/annocument/Annocument";
import Wrapper from "../components/wrapper/Wrapper";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { search_url } from "../utils/constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Notification from "../utils/Notification";

import { useFilterContext } from "../context/filter_context";
import { useProductsContext } from "../context/products_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import Filters from "../components/Filters";
import Loading from "../components/Loading";
import ButtonGroup from "antd/lib/button/button-group";
import Gift from "../components/Gift";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import WEBSITE_LOGO from "../assets/WEBSITE_LOGO.png";
import {
  FaShoppingCart,
  FaUserMinus,
  FaUserPlus,
  FaSistrix,
  FaRegUser,
  FaSignOutAlt,
  FaUserEdit,
  FaRegHeart,
  FaCheck,
  FaEnvelope,
  FaLock,
  FaCheckCircle,
  FaGoogle,
  FaFacebook,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";

import { RiWhatsappFill } from "react-icons/ri";

import { FiPhoneCall, FiSearch } from "react-icons/fi";

import { useCartContext } from "../context/cart_context";
import { useUserContext } from "../context/user_context";
import LoginComponent from "../components/Login/LoginComponent";
import products_reducer from "../reducers/products_reducer";
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
import Footer from "../common/footer/Footer";

const Pages = ({ productItems, addToCart, CartItem, shopItems }) => {
  const [myOptions, setMyOptions] = useState([]);
  const [search_product, setsearch_product] = useState([]);
  const [getSerach, setIsSerach] = useState("");
  const [gprice, setGprice] = useState([]);
  const [gcategory, setGcategory] = useState([]);
  const [gavability, setGavability] = useState([]);
  const navigate = useNavigate();
  const {
    // searchProducts,
    products,
    // search_product,
    onClearSearchResult,
  } = useProductsContext();

  const uniqueIds = [];

  const { total_items, cart } = useCartContext();
  const { setLogin, setSignUp, isLogin, logoutUser, userid } = useUserContext();
  const [showscreen, setShowlogin] = React.useState(false);
  const [search, setSearch] = useState("");

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
    single_product_loading: false,
    single_product_error: false,
    single_product: {},
    // userid:0,
  };

  const [state, dispatch] = useReducer(products_reducer, initialState);

  useEffect(() => { }, []);

  window.scrollTo(0, 0);
  useEffect(() => {
    if (isLogin) {
      setShowlogin(false);
    }
  }, [isLogin]);

  const handleNavigation = (qty) => {
    // console.log("dataid--->", data);
    navigate(`/products`, {
      state: { qty },
    });
  };

  const clearSearch = () => {
    setsearch_product([]);
    setSearch("");
  };

  const testiSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 4000,
    autoplay: true,
    autostart: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
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

  // console.log(colors);
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

  // const onSearch = async () =>  {
  //       var params = {
  //         email: email,
  //         password: password,
  //       };
  //       setLogin(params, url);
  // }

  // const getDataFromAPI = () => {
  //   console.log("Options Fetched from API");

  //   fetch("http://dummy.restapiexample.com/api/v1/employees")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       for (var i = 0; i < res.data.length; i++) {
  //         myOptions.push(res.data[i].employee_name);
  //       }
  //       setMyOptions(myOptions);
  //     });
  // };

  const onSearch = (search) => {
    setSearch(search);
    const formData = new FormData();
    formData.append("search", search);
    //  formData.append("customer_id", userid);
    searchProducts(formData);
    console.log(formData);
  };

  const searchProducts = async () => {
    const formData = new FormData();
    formData.append("search", search);
    try {
      const response = await axios
        .post(search_url, formData, {
          headers: {
            Accept: "application/x.targetmarketing.v1+json",
          },
        })
        .catch((error) => console.error(`Error: ${error}`));
      console.log("serch", response.data);

      // setMyOptions(products);

      if (response.data.success == 1) {
        setsearch_product(response.data.records.data);
        Notification(
          "success",
          "Success!",
          "form has been successfully submitted"
        );
        return;
      } else {
        Notification("error", "Error!", "please enter valid data!");
        return;
      }
    } catch (error) {
      Notification("error", error);
    }
  };

  const setSignOut = () => {
    logoutUser();
    navigate("/");
    window.location.reload();
  };

  const HandleScroll = () => {
    window.scrollTo(0, 5000);
  };

  return (
    <>
      <section className="welcome-section"></section>

      <section className="home-screen">
        <div className="hs-sec01">
          <div className="hs-sec01-pt01">
            <img className="web-logo" src={WEBSITE_LOGO} alt="website logo" />
          </div>
          <div className="hs-sec01-pt02">
            <RiWhatsappFill className="nav-contact-icon" />
            <div className="nav-contacts">+91 99242 20204</div>
            <button onClick={HandleScroll} className="nav-contactus-btn">ContactUs</button>
            <div className="nav-buttons">
              <div className="nav-btn-cart">
                <Link to="/cart">
                  <i className="nav-btn-box">
                    <FaShoppingCart />
                  </i>
                  {cart.length === 0 ? "" : <span>{cart.length}</span>}
                </Link>
              </div>
              <div className="nav-btn-user">
                {isLogin ? (
                  <>
                    {/* <i className="nav-btn-box login_hover">
                      <FaRegUser />
                    </i> */}

                    <div className="nav-profile-menu">
                      <p>
                        <Link to="/dashboard" className="nav-profile-icn">
                          <FaUserEdit />
                          {/* Dashboard */}
                        </Link>
                      </p>
                      <p>
                        <button
                          onClick={() => setSignOut()}
                          className="logout-btn"
                        >
                          <FaSignOutAlt />
                          {/* Logout */}
                        </button>
                      </p>
                    </div>
                  </>
                ) : (
                  <i className="nav-btn-box" onClick={() => setShowlogin(true)}>
                    <FaUserPlus />
                  </i>
                )}
              </div>
            </div>
          </div>
        </div>
        <LoginComponent showscreen={showscreen} setShowlogin={setShowlogin} />
        <div className="hs-sec02">
          <div className="hs-search">
            {/* <Autocomplete
              className="hs-search-box"
              freeSolo
              autoComplete
              autoHighlight
              options={myOptions}
              renderInput={(params) => (
                <TextField
                  className="hs-search-txt"
                  {...params}
                  onChange={(e) => {
                    onSearch(e.target.value);
                    console.log("search_product -->", search);
                  }}
                  value={search}
                  variant="filled"
                  label="Search Products ..."
                />
              )}
            /> */}
            <div className="search-box">
              <input
                className="search-input"
                type="text"
                name=""
                placeholder="Search"
                onChange={(val) => {
                  onSearch(val.target.value);
                  console.log("search -->", search);
                }}
                value={search}
              />
              <button className="search-btn" onClick={() => onSearch(search)}>
                <i class="fas fa-search"></i>
              </button>
              {/* <Link class="search-btn" to={{ pathname: "/Search", state: search }}  >
              <i class="fas fa-search"></i>
            </Link> */}

              {search.length > 0 && search_product.length > 0 ? (
                <div
                  className="serach-div"
                  id="mySerach"
                // style={{ height: "200px", background: "red" }}
                >
                  {search_product.map((val, _indx) => {
                    console.log("vallll -->", search_product);
                    return (
                      <div className="search_res_link">
                        <Link
                          to={`/singleProduct/${val.product_id}`}
                          onClick={() => clearSearch()}
                        >
                          {val.name.length > 0 ? val.name : null}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="hs-sec03">
          <div className="hs-sec03-pt01">
            <img src="https://p.kindpng.com/picc/s/423-4230987_movie-poster-text-png-hd-transparent-png.png" />
          </div>
          <div className="hs-sec03-pt02">
            <h3>WHY US ?</h3>
            <p>
              Innovating Gifts Since 1991 <span>|</span>
              <br />
              Gift Range Starts from ₹5/- Only <span>|</span>
              <br />
              Wide Range of Unique Gifts <span>|</span>
              <br />
              We Provide Designing & All Type of Printing Solutions
              <span>|</span>
              <br />
              We Understant Your Needs & Provide Best Customized Options
              <span>|</span>
              <br />
              Door Delivery Across India <span>|</span>
            </p>
          </div>
        </div>
      </section>

      {/* <Home CartItem={CartItem} /> */}

      {/* <FlashDeals productItems={productItems} addToCart={addToCart} /> */}
      {/* <TopCate /> */}
      {/* <NewArrivals /> */}
      {/* <Discount /> */}

      {/* <Annocument /> */}

      <Shop />

      <section className="home-search-option">
        <Gift />
        {/* -------------------- Search By Price ----------------------------- */}

        <div className="home-search-by-price">
          <div className="home-search-title">Search By Price</div>
          <div className="sbp-list">
            {uniquePriceRange.map((up, index) => {
              return (
                <>
                  <Link
                    to={`/products-filter`}
                    onClick={updateFilters}
                    key={index}
                    type="button"
                    name="price"
                    value={up.price}
                    className="sbp-item"
                  >
                    {up.price}
                    {/* {up.price.split("-")[0]}
                    &nbsp;-&nbsp;
                    {up.price.split("-")[1]} */}
                  </Link>
                </>
              );
            })}
          </div>
        </div>

        {/* -------------------- Search By Category ----------------------------- */}

        <div className="home-search-by-cat">
          <div className="home-search-title">Search By Category</div>
          <div className="sbc-list">
            {categories.map((c, index) => {
              return (
                <Link
                  to={`/products-filter`}
                  onClick={updateFilters}
                  type="button"
                  name="category"
                  value={c}
                  className="sbc-item"
                  key={c.id}
                >
                  {c}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------------------------- Testimonial's Section ------------------------------- */}

      <section className="home-testimonials">
        <h2 className="testi-title">What our clients say</h2>
        <div className="border-bottom"></div>
        <Slider {...testiSettings}>
          <div className="testi-slide" width="50%">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              officia nobis ab labore sequi rem. Ex vel assumenda magnam laborum
              enim, ea numquam labore Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nulla officia nobis ab labore sequi rem. Ex vel
              assumenda magnam laborum enim, ea numquam labore in alias tempore.
              Adipisci, facilis quisquam. in alias tempore. Adipisci, facilis
              quisquam.
            </p>
            <h2>alias tempore</h2>
            <h4>labore sequi rem</h4>
          </div>
          <div className="testi-slide" width="50%">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              officia nobis ab Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nulla officia nobis ab labore sequi rem. Ex vel
              assumenda magnam laborum enim, ea numquam labore in alias tempore.
              Adipisci, facilis quisquam. labore sequi rem. Ex vel assumenda
              magnam laborum enim, ea numquam labore in alias tempore. Adipisci,
              facilis quisquam.
            </p>
            <h2>alias tempore</h2>
            <h4>labore sequi rem</h4>
          </div>
          <div className="testi-slide" width="50%">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              officia nobis ab labore sequi rem. Ex vel assumenda magnam laborum
              enim, ea numquam labore in Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nulla officia nobis ab labore sequi rem. Ex vel
              assumenda magnam laborum enim, ea numquam labore in alias tempore.
              Adipisci, facilis quisquam. alias tempore. Adipisci, facilis
              quisquam.
            </p>
            <h2>alias tempore</h2>
            <h4>labore sequi rem</h4>
          </div>
          <div className="testi-slide" width="50%">
            <p>
              Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nulla officia nobis ab labore sequi rem. Ex vel
              assumenda magnam laborum enim, ea numquam labore in alias tempore.
              Adipisci, facilis quisquam. sit amet consectetur adipisicing elit.
              Nulla officia nobis ab labore sequi rem. Ex vel assumenda magnam
              laborum enim, ea numquam labore in alias tempore. Adipisci,
              facilis quisquam.
            </p>
            <h2>alias tempore</h2>
            <h4>labore sequi rem</h4>
          </div>
        </Slider>
      </section>

      {/* ---------------------------------- Our Clints ------------------------------------------ */}

      <section className="clients-gallary">
        <div className="cg-title">
          <p>OVER 500+ CLIENTS THAT TRUST TARGET MARKETING</p>
        </div>
        <div className="border-bottom"></div>
        <div className="cg-items">
          <img src="https://inkbotdesign.com/wp-content/uploads/2012/09/Microsoft-Logo-Design.png?ezimgfmt=ng:webp/ngcb15" />

          <img src="https://inkbotdesign.com/wp-content/uploads/2012/09/Toyota-Logo-Design.jpg?ezimgfmt=ng:webp/ngcb15" />

          <img src="https://inkbotdesign.com/wp-content/uploads/2012/09/Samsung-Famous-Logos.png?ezimgfmt=ng:webp/ngcb15" />

          <img src="https://inkbotdesign.com/wp-content/uploads/2012/09/Colgate-Logo-Design.png?ezimgfmt=ng:webp/ngcb15" />

          <img src="https://inkbotdesign.com/wp-content/uploads/2012/09/Subway-Logo-Design.png?ezimgfmt=ng:webp/ngcb15" />

          <img src="https://inkbotdesign.com/wp-content/uploads/2012/09/Lacoste-Logo-Design.png?ezimgfmt=ng:webp/ngcb15" />

          <img src="https://inkbotdesign.com/wp-content/uploads/2012/09/National-Geographic-Logo-Design.png?ezimgfmt=ng:webp/ngcb15" />

          <img src="https://inkbotdesign.com/wp-content/uploads/2012/09/Nestle-Logo-Design.png?ezimgfmt=ng:webp/ngcb15" />

          <img src="https://inkbotdesign.com/wp-content/uploads/2012/09/Panasonic-Logo-Design.png?ezimgfmt=ng:webp/ngcb15" />

          <img src="https://inkbotdesign.com/wp-content/uploads/2012/09/Continental-Logo-Design.png?ezimgfmt=ng:webp/ngcb15" />

          <img src="https://inkbotdesign.com/wp-content/uploads/2012/09/Picasa-Logo-Design.png?ezimgfmt=ng:webp/ngcb15" />
        </div>
      </section>

      {/* ---------------------------------- Industries ------------------------------------------ */}

      {/* <section className="indus">
        <h1 className="indus-title">Industries</h1>
        <div className="border-bottom"></div>
        <div className="indus-list">
          <p className="indus-item">EDUCATION</p>
          <p className="indus-item">HEALTH CARE</p>
          <p className="indus-item">PHARMA</p>
          <p className="indus-item">TOURISM</p>
          <p className="indus-item">RETAIL TRADE</p>
          <p className="indus-item">FMCG</p>
          <p className="indus-item">FINANCIAL SERVICES</p>
          <p className="indus-item">REAL ESTATE</p>
          <p className="indus-item">AUTOMOBILE</p>
          <p className="indus-item">ENGINEERING</p>
          <p className="indus-item">ENERGY</p>
          <p className="indus-item">AGRICULTURE</p>
          <p className="indus-item">IT</p>      
          <p className="indus-item">CONSTRUCTION</p>
          <p className="indus-item">LOGISTICS</p>
          <p className="indus-item">MANUFACTURING</p>
          <p className="indus-item">CERAMIC</p>
          <p className="indus-item">BANKING</p>
          <p className="indus-item">OTHERS</p>
        </div>
      </section> */}
      <Footer />

      {/* <Wrapper /> */}
    </>
  );
};

export default Pages;

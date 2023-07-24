import React, { useEffect, useState } from "react";
import logo from "../../components/assets/images/logo.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/user_context";
import LoginComponent from "../../components/Login/LoginComponent";
import { useCartContext } from "../../context/cart_context";
import WEBSITE_LOGO from "../../assets/WEBSITE_LOGO.png";
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
import { useProductsContext } from "../../context/products_context";

const Search = ({ }) => {
  const { total_items, cart } = useCartContext();

  // fixed Header
  // window.addEventListener("scroll", function() {
  //   const search = document.querySelector(".search");
  //   search.classList.toggle("active", window.scrollY > 100);
  // });

  const [showscreen, setShowlogin] = React.useState(false);
  const { setLogin, setSignUp, isLogin, logoutUser, userid } = useUserContext();
  const { searchProducts, products, search_product, onClearSearchResult } =
    useProductsContext();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (isLogin) {
      setShowlogin(false);
    }
  }, [isLogin]);

  const navigate = useNavigate();

  const setSignOut = () => {
    logoutUser();
    navigate("/");
    window.location.reload();
  };

  const HandleScroll = () => {
    window.scrollTo(0, 3500);
  };

  return (
    <>
      <section className="search">
        <div className="container c_flex">
          <div className="logo width ">
            <Link to="/">
              <img className="web-logo" src={WEBSITE_LOGO} alt="website logo" />
            </Link>
          </div>

          {/* <div className="search-box f_flex">
            <i className="fa fa-search"></i>
            <input
              type="text"
              name=""
              placeholder="Search"
              onChange={(val) => ""}
              value={search}
            />
            <button className="search-btn" onClick={() => ""}>
              <i className="fas fa-search"></i>
            </button>
          </div> */}

          {/* <div className="icon f_flex width nav_icons">
            <div className="cart">
              <Link to="/cart">
                <i className="icon-circle">
                  <FaShoppingCart />
                </i>
                {total_items === 0 ? "" : <span>{total_items}</span>}
              </Link>
            </div>
            <div className="user">
              {isLogin ? (
                <>
                  <i className="icon-circle login_hover">
                    <FaRegUser />
                  </i>

                  <div className="profile_menu">
                    <p>
                      <Link to="/dashboard">
                        <FaUserEdit />
                        <span>Dashboard</span>
                      </Link>
                    </p>
                    <hr />
                    <p>
                      <button
                        onClick={() => setSignOut()}
                        className="logout-btn"
                      >
                        <FaSignOutAlt />
                        <span> Logout</span>
                      </button>
                    </p>
                  </div>
                </>
              ) : (
                <i className="icon-circle" onClick={() => setShowlogin(true)}>
                  <FaUserPlus />
                </i>
              )}
            </div>
          </div> */}
          <div className="hs-sec01-pt02">
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
                          Dashboard
                        </Link>
                      </p>
                      <p>
                        <button
                          onClick={() => setSignOut()}
                          className="logout-btn"
                        >
                          <FaSignOutAlt />
                          Logout
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
      </section>
    </>
  );
};

export default Search;

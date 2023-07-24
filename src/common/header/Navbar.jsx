import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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

const Navbar = () => {
  // Toogle Menu

  const navigate = useNavigate();

  const [MobileMenu, setMobileMenu] = useState(false);

  const [showscreen, setShowlogin] = React.useState(false);

  return (
    <>
      <header className="header">
        <div
          className="container d_flex custom_header
        "
        >
          {/* <div className="catgrories d_flex">
            <span class="fa-solid fa-border-all"></span>
            <h4>
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div> */}

          <div className="navlink">
            <div
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              <ul className='link  uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>
                <li>
                  <Link to={{ pathname: "/" }}>Home</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/about" }}>About</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/products" }}>Products</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/contact" }}>Contact</Link>
                </li>
              </ul>

              {/* <button
                className="toggle"
                onClick={() => setMobileMenu(!MobileMenu)}
              >
                {MobileMenu ? (
                  <i className="fas fa-times close home-btn"></i>
                ) : (
                  <i className="fas fa-bars open"></i>
                )}
              </button> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

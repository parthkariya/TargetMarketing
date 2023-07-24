import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";
const FooterSecond = () => {
  return (
    <section className="sec-footer-second">
      <div className="con-footer-second">
        <p className="footer-sec-heading">Target Marketing</p>
        <p className="footer-sec-txt">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </p>
        <div className="footer-sec-logos">
          <a href="https://wa.me/919924220204" target="_blank">
            <FaWhatsapp className="footer-sec-logo" />
          </a>
          <a href="https://www.facebook.com/login/" target="_blank">
            <AiOutlineFacebook className="footer-sec-logo" />
          </a>
          <a href="https://www.instagram.com/accounts/login/" target="_blank">
            <IoLogoInstagram className="footer-sec-logo" />
          </a>
        </div>
      </div>
      <div className="fooer-sec-end">
        <p className="fooer-sec-end-txt">
          Copyright &copy;2022 Target Marketing
        </p>
        <ul className="fooer-sec-end-links">
          <li>
            <Link to="/privacypolicy" className="fooer-sec-end-link">
              Privacy Policy
            </Link>
          </li>
          <li>
            <p class="vr-divider vr-divider-padding"></p>
          </li>
          <li>
            {" "}
            <Link to="/terms&condition" className="fooer-sec-end-link">
              Terms & Conditions
            </Link>
          </li>
          <li>
            <p class="vr-divider vr-divider-padding"></p>
          </li>
          <li>
            {" "}
            <Link to="/about" className="fooer-sec-end-link">
              AboutUs
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FooterSecond;

import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { FiFileText } from "react-icons/fi";
import { FiPhoneCall } from "react-icons/fi";
import { BiMailSend } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineFacebook } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import FooterSecond from "../../components/FooterSecond"

const Footer = () => {
  return (
    <>
      <footer>
        <div className="section-container contact-us-bg-color">
          <div className="footer-container">
            <div className="footer-heading">
              <h1 className="heading">contact us</h1>
            </div>
            <div className="flex-main-container">
              <div className="flex-container">
                <div className="first-row-flex-part">
                  <div className="contact-us-part">
                    <div className="contact-us-content">
                      <FiPhoneCall className="call-icon" />
                      <p className="contact-us-content-title">Call Us</p>
                      <div className="number-flex">
                        <a
                          className="contact-us-content-number"
                          href="tel:9924220204"
                        >
                          9924220204
                        </a>
                        <a
                          className="contact-us-content-number"
                          href="tel:9824220204"
                        >
                          9824220204
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="contact-us-part">
                    <div className="contact-us-content">
                      <a href="https://wa.me/919924220204" target="_blank">
                        <FaWhatsapp className="whatsapp-icon" />
                      </a>
                      <p className="contact-us-content-title">WhatsApp</p>
                    </div>
                  </div>
                  <div className="contact-us-part">
                    <div className="contact-us-content">
                      <a href="https://www.facebook.com/login/" target="_blank">
                        <AiOutlineFacebook className="facebook-icon" />
                      </a>
                      <p className="contact-us-content-title">Facebook</p>
                    </div>
                  </div>
                  <div className="contact-us-part">
                    <div className="contact-us-content">
                      <a
                        href="https://www.instagram.com/accounts/login/"
                        target="_blank"
                      >
                        <IoLogoInstagram className="insta-icon" />
                      </a>
                      <p className="contact-us-content-title">Instagram</p>
                    </div>
                  </div>
                </div>
                <div className="second-row-flex-part">
                  <div className="contact-us-part">
                    <div className="contact-us-content">
                      <BiMailSend className="mail-icon" />
                      <p className="contact-us-content-title">Mail Us </p>
                      <div>
                        <a
                          className="contact-us-content-mailid"
                          href="mailto:infotargetgift@gmail.com"
                        >
                          infotargetgift@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <Link to="/brief" className="contact-us-part">
                    <div className="contact-us-content">
                      <FiFileText className="share-brief-icon" />
                      <p className="contact-us-content-title">
                        Share Your Brief
                      </p>
                      <div>
                        <p className="share-briff">
                          Send us your general questions or inquiries
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link
                    to="/contact"
                    className="contact-us-part contact-us-part-last"
                  >
                    <div className="contact-us-content">
                      <GoLocation className="location-icon" />
                      <p className="contact-us-content-title">Address</p>
                      <p className="contact-us-content-address">
                        TARGET MARKETING, <br />
                        Sidhpura chambers,
                        <br /> 8 Patel Nagar, 80ft Road, <br /> Near Sorathiya
                        Vadi Circle, Rajkot – 360002.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterSecond />
      </footer>{" "}
      {/* <footer>
      //   <div className="container grid3 flex2">
      //     <div className="box">
      //       <h1>Target Marketing</h1>
      //       <p>
      //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
      //         libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
      //         et lectus vel ut sollicitudin elit at amet.
      //       </p> */}
      {/* <div className="icon d_flex">
              <div className="img d_flex">
                <i class="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i class="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div> */}
      {/* </div> */}
      {/* <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div> */}
      {/* //     <div className="box">
      //       <h2>Contact Us</h2>
      //       <ul>
      //         <li>Call Us : +91 9924220204 | +91 9824220204</li>
      //         <li>Email Us : infotargetgift@gmail.com</li>
      //         <li>
      //           Address : TARGET MARKETING, Sidhpura chambers, 8 Patel Nagar,
      //           80ft Road, Near Sorathiya Vadi Circle, Rajkot – 360002.
      //         </li>
      //       </ul>
      //     </div>

      //     <div className="box">
      //       <h2>Other Details</h2>
      //       <ul className="otherDetails_list">
      //         <Link to="/services">
      //           <li>Services</li>
      //         </Link>
      //         <Link to="/faqs">
      //           <li>FAQs</li>
      //         </Link>
      //         <Link to="/legal">
      //           <li>Legal</li>
      //         </Link>
      //         <li>Sales : infotargetgift@gmail.com</li>
      //         <li>Design : temp-tm@mail.com</li>
      //       </ul>
      //     </div>
      //   </div> */}
      {/* // </footer> */}
    </>
  );
};

export default Footer;

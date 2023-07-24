import React from "react";
import sImg01 from "../assets/sImg01.jpg";
import sImg02 from "../assets/sImg02.jpg";
import sImg03 from "../assets/sImg03.jpg";
import sImg04 from "../assets/sImg04.jpg";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";

const Services = () => {
  return (
    <>
      <Header />

      <section className="service_sec">
        <div className="service_header">
          <h2> Services</h2>
        </div>
        <div className="service-list">
          <div className="service-item">
            <div className="sItem_img">
              <img src={sImg01} />
            </div>
            <div className="sItem_content">
              <h3>Printing Solutions</h3>
              <p>
                There are different type of branding options available to affix
                your corporate logo onto corporate and promotional gifts. There
                are different logo branding options available which includes:-
                <br />
                Also, we provide personalised services depending on the product
                you choose
              </p>
              <div className="sItem_subConetnt">
                <p>Laser Engraving</p>
                <p>Digital Printing</p>
                <p>Offset Printing</p>
                <p>Light up Logo</p>
                <p>Embossing</p>
                <p>Screen Printing</p>
                <p>Pad Printing</p>
              </div>
            </div>
          </div>
          <div className="service-item">
            <div className="sItem_content">
              <h3>Packaging</h3>
              <p>
                Company provides standard packaging as shared in quotation.
                <br />
                Custom packaging is developed on made to order basis only and is
                chargeable additional. Please contact your Manager for details
                on custom packaging.
              </p>
            </div>
            <div className="sItem_img">
              <img src={sImg02} />
            </div>
          </div>
          <div className="service-item">
            <div className="sItem_img">
              <img src={sImg03} />
            </div>
            <div className="sItem_content">
              <h3>Logistic Support</h3>
              <p>
                We provide shipping across India. Air and Surface mode on to pay
                basis.
                <br />
                We have tie up with various transport and courier agencies like
                DTDC, Tirupati, Post, FedEx, Gati Cargo, TCI Express, VRL,
                Girnar Logistics, Delhi Rajasthan Transport, etc.
              </p>
            </div>
          </div>
          <div className="service-item">
            <div className="sItem_content">
              <h3>Warranty</h3>
              <p>As per product and company rules.</p>
            </div>
            <div className="sItem_img">
              <img src={sImg04} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Services;

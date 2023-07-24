import React from "react";
import about_img_01 from "../assets/about_img_01.jpg";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";

const About = () => {
  return (
    <>
      <Header />
      <section className="about_sec">
        <div className="about_us">
          <div className="about-img">
            <img src={about_img_01} />
          </div>
          <div className="about-content">
            <h2>About Us</h2>
            <p className="au_des">
              We at TARGET MARKETING offer a distinctively unique and wide range
              of customized products and gift sets for our corporate clients. We
              are a premier supplier of high quality promotional products, since
              1991, customized with your company’s name/logo to promote your
              brand. We combine our systematic approach and experience to
              deliver exclusive promotional products that best suit your
              corporate gifting requirements and leave a positive impact on
              recipients.
              <br />
              <br />
              With a speciality in original and creative branding design we have
              been working closely with the leading MNC’s of all the sectors
              like Raymond, Ambuja Cement, HDFC Bank, Asian Paints, LIC and the
              list goes on.
              <br />
              <br />
              Whether you need a few or large number of gifts to express your
              gratitude towards your customers/clients you can contact us and
              see what a powerful resource we can be for YOUR Company.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;

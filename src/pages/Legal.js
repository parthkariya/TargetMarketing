import React from "react";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";

const Legal = () => {
  return (
    <>
      <Header />
      <section className="leg_sec">
        <div className="leg_header">
          <h2> Legal</h2>
        </div>
        <div className="leg-list">
          <div className="leg-item">
            <h3>Terms & Condition</h3>
            <p>
              Your use of the website implies that you agree with the terms of
              use:- We are not responsible for any damage or loss during
              transportation. Any complaint should be done in writing within 15
              days from the date of bill. Subject to RAJKOT jurisdiction only.
            </p>
          </div>
          <div className="leg-item">
            <h3>Privacy Policy</h3>
            <p>
              This privacy notice applies solely to information collected by
              this website.
            </p>
            <div className="leg-subContent">
              <h3>Information Collection, Use, and Sharing :</h3>
              <p>
                We are the sole owners of the information collected on this
                site. We only have access to/collect information that you
                voluntarily give us via email or other direct contact from you.
                <br />
                <br />
                We will not sell or rent this information to anyone. We will use
                your information to respond to you, regarding the reason you
                contacted us. We will not share your information with any third
                party outside of our organization, other than as necessary to
                fulfil your request, e.g. to ship an order.
                <br />
                <br />
                Unless you ask us not to, we may contact you via email in the
                future to tell you about specials, new products or services, or
                changes to this privacy policy.
              </p>
            </div>
            <div className="leg-subContent">
              <h3>Your Access to and Control Over Information :</h3>
              <p>
                You may opt out of any future contacts from us at any time. You
                can do the following at any time by contacting us via the email
                address or phone number given on our website.
              </p>
            </div>
            <div className="leg-subContent">
              <h3>Security :</h3>
              <p>
                We take precautions to protect your information. When you submit
                sensitive information via the website, your information is
                protected both online and offline. Wherever we collect sensitive
                information (such as credit card data), that information is
                encrypted and transmitted to us in a secure way.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Legal;

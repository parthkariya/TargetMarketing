import React from "react";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";
const PrivacyPolicy = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <section className="sec-privacy-policy">
        <div className="con-privacy-policy">
          <h3 className="privacy-policy-heading">Privacy Policy</h3>
          <p className="privacy-policy-subheading-txt">
            This privacy notice applies solely to information collected by this
            website.
          </p>
          <h4 className="privacy-policy-subheading">
            Information Collection, Use, and Sharing
          </h4>
          <p className="privacy-policy-txt">
            We are the sole owners of the information collected on this site. We
            only have access to/collect information that you voluntarily give us
            via email or other direct contact from you.
          </p>
          <p className="privacy-policy-txt">
            We will not sell or rent this information to anyone. We will use
            your information to respond to you, regarding the reason you
            contacted us. We will not share your information with any third
            party outside of our organization, other than as necessary to fulfil
            your request, e.g. to ship an order.
          </p>
          <p className="privacy-policy-txt">
            Unless you ask us not to, we may contact you via email in the future
            to tell you about specials, new products or services, or changes to
            this privacy policy.
          </p>
          <h4 className="privacy-policy-subheading">
            Your Access to and Control Over Information
          </h4>
          <p className="privacy-policy-txt">
            You may opt out of any future contacts from us at any time. You can
            do the following at any time by contacting us via the email address
            or phone number given on our website.
          </p>
          <h4 className="privacy-policy-subheading">Security</h4>
          <p className="privacy-policy-txt">
            We take precautions to protect your information. When you submit
            sensitive information via the website, your information is protected
            both online and offline. Wherever we collect sensitive information
            (such as credit card data), that information is encrypted and
            transmitted to us in a secure way.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;

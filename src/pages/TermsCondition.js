import React from "react";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";

const TermsCondition = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      <section className="sec-privacy-policy">
        <div className="con-privacy-policy">
          <h3 className="privacy-policy-heading"> TERMS AND CONDITIONS</h3>
          <p className="privacy-policy-txt privacy-policy-txt-lineheight">
            Your use of the website implies that you agree with the terms of
            use:- We are not responsible for any damage or loss during
            transportation. Any complaint should be done in writing within 15
            days from the date of bill. Subject to RAJKOT jurisdiction only.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsCondition;

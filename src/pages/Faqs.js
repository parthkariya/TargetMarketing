import React from "react";
import Footer from "../common/footer/Footer";
import Header from "../common/header/Header";

const Faqs = () => {
  return (
    <>
      <Header />

      <section className="faq_sec">
        <div className="faq_header">
          <h2> Frequenty Asked Questions</h2>
        </div>
        <div className="faq-list">
          <div className="faq-item">
            <div className="faq_content">
              <h3>1. What kind of customisation do you provide?</h3>
              <p>
                All the products shown on the website can be imprinted with logo
                provided by client with additional branding charges. The
                branding colour and size depends on product material, dimensions
                & quantity. Few of the branding techniques we use are laser
                engraving, embossing & screen printing.
              </p>
              {/* <div className="faq_conetnt">
                
              </div> */}
            </div>
          </div>
          <div className="faq-item">
            <div className="faq_content">
              <h3>
                2. Are the mentioned prices final or negotiable? What kind of
                customisation do you provide?
              </h3>
              <p>
                Prices for MOQ are mentioned with all the products without add
                on charges that is branding, packaging & delivery. Because of
                the multiple factors involved in the final product, we suggest
                you to shortlist product and ask our sales team for the best
                prices according to finalised quantity.
              </p>
              {/* <div className="faq_conetnt">
                
              </div> */}
            </div>
          </div>
          <div className="faq-item">
            <div className="faq_content">
              <h3>3. What is minimum order quantity?</h3>
              <p>
                Our MOQ varies across products. Approximate MOQ is mentioned in
                each product’s description, although we can consider little
                smaller orders also. Product and branding cost both vary with
                quantity, higher the quantity, lower the price.
              </p>
              {/* <div className="faq_conetnt">
                
              </div> */}
            </div>
          </div>
          <div className="faq-item">
            <div className="faq_content">
              <h3>4. Can we print special message with every gift?</h3>
              <p>
                Individual message printing is possible on some of the products,
                which are printed with screen printing or laser engraving. You
                can talk to our sales support for possibility of
                personalisation.
              </p>
              {/* <div className="faq_conetnt">
              </div> */}
            </div>
          </div>
          <div className="faq-item">
            <div className="faq_content">
              <h3>5. What is the approximate time of delivery?</h3>
              <p>
                Almost all the products displayed on website are either ready
                stock or can be manufactured in short time. Usually we take
                10-15 days to print and dispatch the products depending on
                order.
              </p>
              {/* <div className="faq_conetnt">
              </div> */}
            </div>
          </div>
          <div className="faq-item">
            <div className="faq_content">
              <h3>6. Is cash on delivery available?</h3>
              <p>No.</p>
              {/* <div className="faq_conetnt">
              </div> */}
            </div>
          </div>
          <div className="faq-item">
            <div className="faq_content">
              <h3>7. What are the payment terms?</h3>
              <p>100% advance.</p>
              {/* <div className="faq_conetnt">
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Faqs;

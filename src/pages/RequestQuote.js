import axios from "axios";
import React, { useEffect, useState } from "react";
import sImg01 from "../assets/sImg01.jpg";
import Notification from "../utils/Notification";

import Header from "../common/header/Header";
import { useCartContext } from "../context/cart_context";
import { new_place_order } from "../utils/constants";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../common/footer/Footer";

function RequestQuote() {
  const { cart, clearCart } = useCartContext();
  const [ritem, setRitem] = useState("");
  const [ritemId, setRitemId] = useState("");

  const [rfname, setRfname] = useState("");
  const [remail, setRemail] = useState("");
  const [rmobile, setRmobile] = useState("");
  const [rbudget, setRbudget] = useState("");
  const [rpurpose, setRpurpose] = useState("");
  const [rDate, setRdate] = useState("");
  const [raddinfo, setRaddinfo] = useState();

  const location = useLocation();
  const navigate = useNavigate();

  const { cart1 } = location.state;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const requestQuote = async () => {
    const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexpMobile = /^[0-9\b]+$/;

    if (rfname == "") {
      Notification("error", "Error!", "Please enter your Name!");
      return;
    } else if (remail == "") {
      Notification("error", "Error!", "Please enter your Email Address!");
      return;
    } else if (regEx.test(remail) == false) {
      Notification("error", "Error!", "Please enter valid email id!");
      return;
    } else if (regexpMobile.test(rmobile) == false) {
      Notification("error", "Error!", "Please enter valid Number!");
      return;
    } else if (rbudget == "") {
      Notification("error", "Error!", "Please enter budget!");
      return;
    } else if (rpurpose == "") {
      Notification("error", "Error!", "Please enter purpose!");
      return;
    } else if (rDate == "") {
      Notification("error", "Error!", "Please enter date of request!");
      return;
    } else {
      const formData = new FormData();

      for (var i = 0; i < cart.length; i++) {
        // console.log("id--->", cart[i].idmain);
        formData.append("product_id[" + i + "]", cart[i].idmain);
        // console.log("qty--->", cart[i].amount);
        formData.append("quantity[" + i + "]", cart[i].amount);
      }
      formData.append("name", rfname);
      formData.append("email", remail);
      formData.append("number", rmobile);
      formData.append("budget", rbudget);
      formData.append("purpose", rpurpose);
      formData.append("date_of_req", rDate);
      formData.append("add_info", raddinfo);

      console.log("formData brief ", formData);

      const response = await axios
        .post(new_place_order, formData, {
          headers: {
            Accept: "application/x.targetmarketing.v1+json",
          },
        })
        .catch((error) => console.error(`Error: ${error}`));
      console.log("response brief ---> ", response.data);

      if (response.data.success == 1) {
        clearCart();
        navigate("/");

        Notification(
          "success",
          "Success!",
          "form has been successfully submitted"
        );
        return;
      } else {
        Notification("error", "Error!", "please enter valid data!");
        return;
      }
    }
  };

  return (
    <>
      <Header />
      <div className="requestquote-section">
        <div className="rq-heading-part">
          <h1 className="rq-main-heading">REQUEST QUOTE</h1>
          <p className="rq-sub-heading">Fill in your Information</p>
        </div>
        {/* <div className="requestquote-container"> */}
        <div className="requestquote-flex-cont">
          <div className="rq-flex-part-first">
            <div className="rq-nm-inp">
              <label className="rq-lbl">Full Name</label>
              <input
                type="text"
                className="rq-txt"
                value={rfname}
                onChange={(e) => setRfname(e.target.value)}
              />
            </div>
            <div className="rq-flex-first-sub-part">
              <div className="rq-nm-inp">
                <label className="rq-lbl">Email</label>
                <input
                  type="email"
                  className="rq-txt"
                  value={remail}
                  onChange={(e) => setRemail(e.target.value)}
                />
              </div>
              <div className="rq-nm-inp">
                <label className="rq-lbl">Mobile</label>
                <input
                  type="number"
                  className="rq-txt"
                  value={rmobile}
                  onChange={(e) => setRmobile(e.target.value)}
                />
              </div>
            </div>
            <div className="rq-nm-inp">
              <label className="rq-lbl">Budget</label>
              <input
                type="text"
                className="rq-txt"
                value={rbudget}
                onChange={(e) => setRbudget(e.target.value)}
              />
            </div>
            <div className="rq-flex-first-sub-part">
              <div className="rq-nm-inp">
                <label className="rq-lbl">Purpose</label>
                <input
                  type="text"
                  className="rq-txt"
                  value={rpurpose}
                  onChange={(e) => setRpurpose(e.target.value)}
                />
              </div>
              <div className="rq-nm-inp">
                <label className="rq-lbl">Date Of Requerment</label>
                {/* <input
                  type="number"
                  className="rq-txt"
                  value={rDate}
                  onChange={(e) => setRdate(e.target.value)}
                /> */}
                <input
                  type="text"
                  placeholder="yyyy-mm-dd"
                  className="rq-txt"
                  value={rDate}
                  onChange={(e) => setRdate(e.target.value)}
                />
              </div>
            </div>
            <div className="rq-nm-inp">
              <label className="rq-lbl">Additional Information</label>
              <textarea
                type="text"
                className="txt-area"
                value={raddinfo}
                onChange={(e) => setRaddinfo(e.target.value)}
              />
            </div>
            <button className="rq-btn" onClick={() => requestQuote()}>
              Submit
            </button>
          </div>
          <div className="rq-flex-part-second">
            <h2 className="cart-summary-heading">Cart Summary</h2>
            <div className="cart-sum-hr" />
            {cart1.map((item, index) => {
              return (
                <div
                  className="rq-second-part-sub"
                  key={item.idmain}
                  onChange={() => {
                    setRitemId(item.id);
                    console.log(item.id);
                  }}
                >
                  <img src={item.image} className="cart-sum-img" />
                  <div className="rq-cart-sub">
                    <p className="cart-sub-item-head">{item.name}</p>
                    <p
                      className="rq-cart-sun-item-qnt"
                      onChange={() => setRitem(item.amount)}
                    >
                      Qty : {item.amount}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="cart-sum-hr"></div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <Footer />
    </>
  );
}

export default RequestQuote;

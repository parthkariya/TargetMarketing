import axios from "axios";
import React, { useEffect, useState } from "react";
// import { Gift } from "../components";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { contact_us } from "../utils/constants";
import { mobileValidate } from "../utils/helpers";
import Notification from "../utils/Notification";

import Header from "../common/header/Header";
import { add_brief } from "../utils/constants";
import Footer from "../common/footer/Footer";

const Brief = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [bDesc, setBdesc] = useState("");
  const [bQty, setBqty] = useState("");
  const [bDate, setBdate] = useState("");
  const [bImg, setBimg] = useState();
  const [bName, setBname] = useState("");
  const [bMobile, setBmobile] = useState("");
  const [bEmail, setBemail] = useState("");

  const brief = async () => {
    const regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexpMobile = /^[0-9\b]+$/;

    if (bName == "") {
      Notification("error", "Error!", "Please enter your Name!");
      return;
    } else if (bEmail == "") {
      Notification("error", "Error!", "Please enter your Email Address!");
      return;
    } else if (regEx.test(bEmail) == false) {
      Notification("error", "Error!", "Please enter valid email id!");
      return;
    } else if (regexpMobile.test(bMobile) == false) {
      Notification("error", "Error!", "Please enter valid Number!");
      return;
    } else if (bMobile == "") {
      Notification("error", "Error!", "Please enter your Number!");
      return;
    } else if (bDesc == "") {
      Notification("error", "Error!", "Please enter your Message!");
      return;
    } else if (bQty == "") {
      Notification("error", "Error!", "Please enter your Quantity!");
      return;
    } else if (bDate == "") {
      Notification("error", "Error!", "Please enter your Date!");
      return;
    } else {
      const formData = new FormData();
      formData.append("description", bDesc);
      formData.append("quantity", bQty);
      formData.append("used_date", bDate);
      formData.append("name", bName);
      formData.append("contact", bMobile);
      formData.append("email", bEmail);
      // formData.append("image_full_path", bImg);
      // formData.append("country_id", 101);
      // formData.append("state_id", 12);
      // formData.append("city_id", "779");
      console.log("formData brief ", formData);

      const response = await axios
        .post(add_brief, formData, {
          headers: {
            Accept: "application/x.targetmarketing.v1+json",
          },
        })
        .catch((error) => console.error(`Error: ${error}`));
      console.log("response brief ---> ", response.data);

      if (response.data.success == 1) {
        setBname("");
        setBemail("");
        setBmobile("");
        setBdate("");
        setBdesc("");
        setBimg("");
        setBqty("");

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
      <div className="section-brief">
        <div className="container">
          <div className="brief-content">
            <p className="brief-form-title">
              In case you don't find any products please share the brief so we
              can get back
            </p>
            <div className="form-flex-container">
              <div className="product-description-part">
                <div className="lbl-inp">
                  <lable className="b-lbl">Product and Description*</lable>
                  <textarea
                    type="text"
                    className="brief-msg-txt"
                    value={bDesc}
                    onChange={(e) => setBdesc(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-part">
                <div className="lbl-inp">
                  <label className="b-lbl">Requested Quantity*</label>
                  <input
                    type="text"
                    className="brief-txt"
                    value={bQty}
                    onChange={(e) => setBqty(e.target.value)}
                  />
                </div>
                <div className="lbl-inp">
                  <label className="b-lbl">When Will be Used*</label>
                  <input
                    type="text"
                    placeholder="dd-----yyyy"
                    className="brief-txt"
                    value={bDate}
                    onChange={(e) => setBdate(e.target.value)}
                  />
                </div>
              </div>

              {/* <button className="upload-btn">upload a file</button> */}
              <input
                className="upload-btn"
                type="file"
                accept="image/*"
                style={{}}
                id="contained-button-file"
                content="Upload a File"
                value={bImg}
                onChange={(e) => setBimg(e.target.value)}
              />
              <div className="form-part">
                <div className="lbl-inp">
                  <label className="b-lbl">Name*</label>
                  <input
                    type="text"
                    className="brief-txt"
                    value={bName}
                    onChange={(e) => setBname(e.target.value)}
                  />
                </div>
                <div className="lbl-inp">
                  <label className="b-lbl">Phone No.*</label>
                  <input
                    type="text"
                    className="brief-txt"
                    value={bMobile}
                    onChange={(e) => setBmobile(e.target.value)}
                  />
                </div>
                <div className="lbl-inp">
                  <label className="b-lbl">E-Mail*</label>
                  <input
                    type="text"
                    className="brief-txt"
                    value={bEmail}
                    onChange={(e) => setBemail(e.target.value)}
                  />
                </div>
              </div>
              <div className="submit-btn-part">
                {/* <button className="btn-sub">SUBMIT</button> */}
                <a
                  href="javascript:void(0)"
                  className="btn-sub"
                  onClick={() => brief()}
                >
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Brief;

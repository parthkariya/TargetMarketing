import React, { useEffect, useState } from "react";
import Header from "../common/header/Header";
import { GrLocation } from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import axios from "axios";
import { contact_us } from "../utils/constants";
import { mobileValidate } from "../utils/helpers";
import Notification from "../utils/Notification";
import Footer from "../common/footer/Footer";

const Contact = () => {
  const [show, setShow] = React.useState();

  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [message, setmessage] = useState("");

  const mContactus = async () => {
    const regEx =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexpMobile = /^[0-9\b]+$/;

    if (firstname == "") {
      Notification("error", "Error!", "Please enter your Name!");
      return;
    } else if (email == "") {
      Notification("error", "Error!", "Please enter your Email Address!");
      return;
    } else if (regEx.test(email) == false) {
      Notification("error", "Error!", "Please enter valid email id!");
      return;
    } else if (regexpMobile.test(number) == false) {
      Notification("error", "Error!", "Please enter valid Number!");
      return;
    } else if (number == "") {
      Notification("error", "Error!", "Please enter your Number!");
      return;
    } else if (message == "") {
      Notification("error", "Error!", "Please enter your Message!");
      return;
    } else {
      const formData = new FormData();
      formData.append("firstname", firstname);
      formData.append("lastname", "test");
      formData.append("email", email);
      formData.append("number", number);
      formData.append("message", message);
      formData.append("country_id", 101);
      formData.append("state_id", 12);
      formData.append("city_id", "779");
      console.log("formData contact us ", formData);

      const response = await axios
        .post(contact_us, formData, {
          headers: {
            Accept: "application/x.targetmarketing.v1+json",
          },
        })
        .catch((error) => console.error(`Error: ${error}`));
      console.log("response contact us ", response.data);

      if (response.data.success == 1) {
        setfirstname("");
        setemail("");
        setnumber("");
        setmessage("");

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
      <section className="contact_sec">
        <div className="contact">
          <div className="c-form">
            <h2 className="contact-us-heading"> Contact Us</h2>
            <form className="c-form">
              <lable className="c-lbl">Name</lable>
              <input
                type="text"
                placeholder=""
                value={firstname}
                className="c-txt"
                onChange={(e) => setfirstname(e.target.value)}
              />
              {/* <input type="text" className="c-txt" /> */}
              <lable className="c-lbl">Number</lable>
              <input
                type="text"
                placeholder=""
                name="field-name"
                value={number}
                maxLength={10}
                onChange={(e) => {
                  if (mobileValidate(e.target.value)) {
                    setnumber(e.target.value);
                  }
                }}
                className="c-txt"
              />
              {/* <input type="text" className="c-txt" /> */}
              <lable className="c-lbl">Email</lable>
              <input
                type="text"
                placeholder=""
                value={email}
                onChange={(e) => setemail(e.target.value)}
                className="c-txt"
              />
              {/* <input type="text" className="c-txt" /> */}
              <lable className="c-lbl">Message</lable>
              <textarea
                placeholder="Please leave comment here..."
                value={message}
                className="c-msg-txt"
                onChange={(e) => setmessage(e.target.value)}
              ></textarea>
              {/* <textarea type="text" className="c-msg-txt" /> */}
              <a
                href="javascript:void(0)"
                className="c-form-btn"
                onClick={() => mContactus()}
              >
                Submit
              </a>
            </form>
          </div>
          <div className="c-details">
            <h2 className="quick-heading">Quick Contact</h2>
            <div className="con-info-flex">
              <HiOutlineMail className="con-info-icon" />
              <p className="c-ulbl mt01">Email Id :</p>
            </div>

            <p className="c-dlbl">infotargetgift@gmail.com</p>
            <div className="con-info-flex">
              <AiOutlinePhone className="con-info-icon" />
              <p className="c-ulbl">Phone :</p>
            </div>
            <p className="c-dlbl">+91 9924220204</p>
            <div className="con-info-flex">
              <GrLocation className="con-info-icon" />
              <p className="c-ulbl">Address :</p>
            </div>
            <p className="c-dlbl">
              TARGET MARKETING, Sidhpura chambers, 8 Patel Nagar, 80ft Road,
              Near Sorathiya Vadi Circle, Rajkot – 360002.
            </p>
            <p className="c-ulbl">Office Hours :</p>
            <p className="c-dlbl">10:00 am to 6:00 pm.</p>
            <iframe
              width="100%"
              height="300"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29721.54250856522!2d70.7760554032362!3d22.2874097846101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959cbc74cf7aa11%3A0xf65b0fdaebffdadb!2sTarget%20Marketing!5e0!3m2!1sen!2sin!4v1664352047813!5m2!1sen!2sin"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              allowFullScreen
            ></iframe>

            <br />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

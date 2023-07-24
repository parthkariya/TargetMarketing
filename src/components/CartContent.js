import React, { useEffect } from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link, useNavigate } from "react-router-dom";
import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import axios from "axios";
// import OrderContext from "../context/place_order_context";
import { BaseUrl } from "../utils/constants";
import { useUserContext } from "../context/user_context";
import Notification from "../utils/Notification";
import LoginComponent from "../components/Login/LoginComponent";
import { Button } from "antd";

const CartContent = (props) => {
  const { cart, clearCart } = useCartContext();
  const { logintoken } = useUserContext();
  // const { setOrder } = OrderContext();

  // useEffect(() => {
  //   console.log("logintoken -->", logintoken);
  // }, []);
  const [showscreen, setShowlogin] = React.useState(false);
  const { setLogin, setSignUp, isLogin, logoutUser } = useUserContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      setShowlogin(false);
    }
  }, [isLogin]);

  const placeorder = () => {
    let formdata = new FormData();
    for (var i = 0; i < cart.length; i++) {
      // console.log("id--->", cart[i].idmain);
      formdata.append("product_id[" + i + "]", cart[i].idmain);
      // console.log("qty--->", cart[i].amount);
      formdata.append("quantity[" + i + "]", cart[i].amount);
    }
    console.log("formdata-->>", formdata);
    axios
      .post(
        "https://theapplified.com/targetmarketing/api/v1/new-place-order",
        formdata,
        {
          headers: {
            Accept: "application/x.targetmarketing.v1+json",
            Authorization: "Bearer" + logintoken,
          },
        }
      )
      .then((res) => {
        console.log("respons-->>", res.data);
        if (res.data.success) {
          Notification("success", "Success!", "We'll get to you soon");
          console.log("success");
          clearCart();
        }
      })

      .catch((err) => {
        console.log("err-->>", err);
      });
  };

  // const placeorder = () => {
  //   let formdata = new FormData();
  //   for (var i = 0; i < cart.length; i++) {
  //     formdata.append("product_id[" + i + "]", cart[i].idmain);
  //     formdata.append("quantity[" + i + "]", cart[i].amount);
  //   }
  //   console.log("formdata-->", formdata);
  //   // setOrder(formData, props);
  // };

  return (
    <Wrapper className="section section-center">
      {/* heading for cart screen tables  */}
      <CartColumns />
      {/* cart items */}
      {cart.map((item) => {
        // console.log("cartContent Price", item.price);
        return <CartItem key={item.id} {...item} />;
      })}

      <hr />
      <div className="link-container">
        {/* {isLogin ? ( */}
        <Link
          to={"/requestquote"}
          state={{ cart1: cart }}
          type="button"
          className="link-btn cart_link_btn"
        // onClick={() => placeorder()}
        >
          Request Quotation
        </Link>
        {/* ) : (
          <Button
            type="button"
            className="link-btn cart_link_btn"
            onClick={() => setShowlogin(true)}
          >
            Request Quotation
          </Button>
        )} */}

        <button
          type="button"
          className="link-btn clear-btn cart_link_btn"
          onClick={clearCart}
        >
          Clear Inquiry Cart
        </button>

        <Link to="/products" className="link-btn cart_link_btn">
          Add More Products
        </Link>
      </div>
      {/* cart total */}
      {/* <CartTotals /> */}
      <LoginComponent showscreen={showscreen} setShowlogin={setShowlogin} />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: flex-start;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-primary-5);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;
export default CartContent;

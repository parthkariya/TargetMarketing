import React, { useEffect } from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent } from "../components";
import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";

const CartPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <>
        <Header />
        <Wrapper className="page-100">
          <div className="empty">
            <h2>Your Inquiry Cart is empty</h2>
            <Link to="/products" className="ap-cart-btn">
              Add Products{" "}
            </Link>
          </div>
        </Wrapper>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <main>
        {/* <PageHero title="cart" /> */}

        <Wrapper className="cart-page-wrapper">
          <h1 className="cart-heading">ENQUIRY CART</h1>
          <p className="cart-heading-sub">Your Shortlisted Corporate Gifts</p>
          <CartContent />
        </Wrapper>
      </main>
    </>
  );
};

const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
  @media screen and (max-width: 575px) {
    .link-container {
      flex-wrap: wrap;
      .link-btn {
        flex: 0 0 100%;
        max-width: 100%;
        margin-bottom: 15px;
        text-align: center;
      }
    }
  }
`;

export default CartPage;

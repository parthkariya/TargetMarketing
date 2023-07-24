import React from "react";
import styled from "styled-components";

const CartColumns = () => {
  return (
    <Wrapper>
      <div className="content bg-color">
        <h5 className="cart-box-heading">Products</h5>
        <h5 className="cart-box-heading">Price Range</h5>
        <h5 className="cart-box-heading">Qty</h5>
        {/* <h5>subtotal</h5> */}
        <span></span>
      </div>
      <hr />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  @media (min-width: 776px) {
    display: block;
    /* background-color: #e9ecef; */
    .content {
      display: grid;
      grid-template-columns: 316px 1fr 1fr 1fr auto;
      justify-items: center;
      column-gap: 1rem;
      h5 {
        color: var(--clr-grey-5);
        font-weight: 600;
      }
    }

    span {
      width: 2rem;
      height: 2rem;
    }
    hr {
      /* margin-top: 1rem; */
      margin-bottom: 3rem;
    }
  }
`;

export default CartColumns;

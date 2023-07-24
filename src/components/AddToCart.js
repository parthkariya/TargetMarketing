import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import QtyButtons from "./QtyButtons";
import Notification from "../utils/Notification";
import {
  FaPlus,
  FaMinus,
  FaHeart,
  FaRulerHorizontal,
  FaWhatsapp,
  FaMailBulk,
} from "react-icons/fa";
const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  // console.log('add to cart ', product)
  const { id, stock, colors, occasion, product_code, sizes } = product;
  // Set Color State
  const [mainColor, setMainColor] = useState(colors ? colors[0] : []);
  const [mainSize, setMainSize] = useState(sizes ? sizes[0] : []);

  //set the amount buttons state
  const [qty, setQty] = useState();

  const increase = () => {
    setQty((oldQty) => {
      let tempQty = oldQty + 1;
      if (tempQty > stock) {
        tempQty = stock;
      }
      return tempQty;
    });
  };

  const decrease = () => {
    setQty((oldQty) => {
      let tempQty = oldQty - 1;
      if (tempQty < 1) {
        tempQty = 1;
      }
      return tempQty;
    });
  };

  return (
    <Wrapper>
      <div className="price-box">
        {/* <div className="size-box">
          <span>Size</span>
          <select
            onChange={(e) => {
              setMainSize(e.target.value);
            }}
          >
            {sizes.map((size, index) => {
              return <option value={size}>{size}</option>;
            })}
          </select>
        </div> */}

        <div className="quantity-box">
          <h3>Add Quantity :</h3>
          <input
            type="number"
            className="input"
            value={qty}
            onChange={(value) =>
              value.target.value <= 0 ? null : setQty(value.target.value)
            }
          />
        </div>

        {/* <QtyButtons qty={qty} increase={increase} decrease={decrease} /> */}
      </div>
      <div className="addcart-box">
        <div className="cart-btn atc-btn">
          <button
            type="submit"
            onClick={() => {
              qty >= 1
                ? addToCart(id, mainColor, qty, product, mainSize)
                : Notification("warning", "Enter Quanity");
            }}
          >
            ADD TO CART
          </button>
        </div>
        {/* <Link to="/cart" className="cart-btn">
          <button type="submit">LIVE CHAT</button>
        </Link> */}
      </div>

      {/* amount button */}
      <div className="btn-container"></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  h6.qtyText {
    padding: 11px 0 5px 0;
  }
  button {
    cursor: pointer;
  }
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    margin-top: 5px;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
  .qtyText {
    color: darkgrey;
  }
  input {
    border: 1px solid;
    padding: 4px 10px;
  }
`;
export default AddToCart;

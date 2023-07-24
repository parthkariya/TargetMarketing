import React, { useState } from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CartItem = ({ id, image, name, color, price, amount, size, idmain }) => {
  const [qty, setQty] = useState(amount);
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, "inc", qty);
  };

  const decrease = () => {
    toggleAmount(id, "dec", qty);
  };

  return (
    <Wrapper>
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h3 className="">{name}</h3>
          {/* <p className="color">
            color : <span style={{ background: color }}></span>
            <h5 className="price-small">{formatPrice(price)}</h5>i
          </p> */}
          {/* <p className="name">
            Size : <span>{size}</span>
          </p> */}
          <Link to={`/singleProduct/${idmain}`} className="btn">
            Details &gt;
          </Link>
        </div>
      </div>
      <h5 className="price">₹{price}</h5>
      {/* <input
        type="number"
        className="cart-item-qty"
        value={amount}
        onChange={(value) =>
          value.target.value <= 0
            ? null
            : toggleAmount(id, "inc", value.target.value)
        }
      /> */}
      <p className="cart-item-qty">{amount}</p>

      {/* <AmountButtons amount={amount} increase={increase} decrease={decrease} /> */}
      {/* <h5 className="subtotal">{formatPrice(price * amount)}</h5> */}
      <button
        type="button"
        className="remove-btn"
        onClick={() => {
          removeItem(id);
        }}
      >
        {/* <h3>remove</h3> */}
        <FaTrash className="remove-icon" />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .subtotal {
    display: none;
  }
  .price {
    display: none;
  }
  display: grid;
  grid-template-columns: 200px auto auto;
  grid-template-rows: unset;
  gap: 3rem 1rem;
  justify-items: center;
  margin-bottom: 30px;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #ededed;
  + hr {
    display: none;
  }
  .title {
    grid-template-rows: unset;
    display: grid;
    grid-template-columns: 75px 125px;
    align-items: center;
    text-align: left;
    gap: 1rem;
  }
  img {
    width: 100%;
    height: unset;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 0.75rem;
    margin-bottom: 0;
  }

  .color {
    color: var(--clr-grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    span {
      display: inline-block;
      width: 0.5rem;
      height: 0.5rem;
      background: red;
      margin-left: 0.5rem;
      border-radius: var(--radius);
    }
  }
  .price-small {
    color: var(--clr-primary-5);
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }
  .remove-btn {
    h3 {
      color: #e94560;
    }
    background: transparent;
    border: transparent;
    letter-spacing: var(--spacing);
    background: var(--clr-red-dark);
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    font-size: 0.75rem;
    cursor: pointer;
  }
  @media (min-width: 776px) {
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }
    .price-small {
      display: none;
    }
    .price {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }
    .color {
      font-size: 0.85rem;
      span {
        width: 0.75rem;
        height: 0.75rem;
      }
    }
    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: unset;
    img {
      height: unset;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }

  @media screen and (max-width: 1600px) {
    grid-template-rows: unset;
    height: unset !important;
    .title {
      grid-template-rows: unset;
      height: unset !important;
    }
  }
  @media screen and (max-width: 775px) {
    p.color {
      flex-wrap: wrap;
      h5.price-small {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
  }
  @media screen and (max-width: 575px) {
    display: flex;
    flex-wrap: wrap;
    .title {
      flex: 0 0 100%;
      max-width: 100%;
      display: flex;
      img {
        max-width: 100px;
      }
      div {
        flex: 0 0 100%;
        max-width: calc(100% - 110px);
        margin-left: auto;
      }
    }
  }
  input {
    border: 1px solid black;
    padding: 4px 10px;
  }
`;

export default CartItem;

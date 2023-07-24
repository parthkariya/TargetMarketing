import React from "react";
import "./style.css";
import { useCartContext } from "../../context/cart_context";
import { useUserContext } from "../../context/user_context";
import LoginComponent from "../../components/Login/LoginComponent";
import { Link, useLocation } from "react-router-dom";

const Cart = ({
  props,
  id,
  image,
  name,
  color,
  price,

  size,
  idmain,
  addToCart,
  decreaseQty,
}) => {
  const { cart, clearCart } = useCartContext();
  const { removeItem, toggleAmount } = useCartContext();
  const { setLogin, setSignUp, isLogin, logoutUser } = useUserContext();

  // Stpe: 7   calucate total of items
  const totalPrice = cart.reduce((price, item) => price + item.price, 0);

  // const totalQty = cart.reduce(
  //   (total_items, item) => total_items + item.total_items,
  //   0
  // );

  // prodcut qty total

  // const location = useLocation();
  // const data = location.state.data;

  return (
    <>
      <section className="cart-items">
        <div className="container d_flex cart_section">
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className="cart-details">
            {cart.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )}

            {/* yasma hami le cart item lai display garaaxa */}
            {cart.map((item) => {
              return (
                <div className="cart-list product d_flex" key={item.id}>
                  <div className="img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="cart-details">
                    <Link to={`/productDetails/${item.id}`}>
                      <p className="pro_name">{item.name}</p>
                    </Link>{" "}
                    { }
                    <h4>
                      <span>₹{item.price}.00 *</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart">
                      <button
                        className="removeCart"
                        onClick={() => {
                          removeItem(item.id);
                        }}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    </div>
                  </div>

                  <div className="cart-item-price"></div>
                </div>
              );
            })}
          </div>

          <div className="cart-total product">
            {/* <h2>Cart Summary</h2>
            <div className=" d_flex cart_total_sub_sec">
              {cart.map((item) => {
                return (
                  <h3 className="cart_total_price" key={item.id}>
                    0{total_items}
                    {item.name}
                  </h3>
                );
              })}
              <div className="total_orders">
                <h4>Total Orders :</h4> <h3>{qty}</h3>
              </div>
            </div> */}
            <div className=" d_flex cart_total_sub_sec">
              <button className="quotation_btn" onClick={isLogin ? "" : ""}>
                INQUIRE NOW
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

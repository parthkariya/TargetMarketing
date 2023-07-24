import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import { single_product_url as url } from "../utils/constants";
import { formatPrice } from "../utils/helpers";
import ProductImages from "../components/ProductImages";
import Error from "../components/Error";
import Loading from "../components/Loading";

import Header from "../common/header/Header";

import styled from "styled-components";

import {
  FaPlus,
  FaGrinHearts,
  FaHeart,
  FaRulerHorizontal,
  FaWhatsapp,
  FaMailBulk,
  FaRegHeart,
} from "react-icons/fa";
import { useUserContext } from "../context/user_context";
import Categories from "../components/MainPage/Categories";
import { AddToCart } from "../components";
import Footer from "../common/footer/Footer";

const SingleProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [disable, setDisable] = React.useState(false);
  // console.log(url);
  const { userid, isLogin } = useUserContext();
  const [fruit, setFruit] = useState("");
  const [qty, setQty] = useState();

  //getting perams
  const { id } = useParams();

  //getting history
  // const history = useHistory();

  //getting data from context
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: singleProduct,
    fetchSingleProduct,
  } = useProductsContext();

  const { addToCart } = useCartContext();

  //fetch data from single product object
  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    sku,
    company,
    images,
    is_wishlist,
    occasion,
    category,
    availability,
    product_code,
  } = singleProduct;

  //fetch single product details
  useEffect(() => {
    fetchSingleProduct(`${url}${id}/${userid}`);
  }, [id, userid]);

  // useEffect(() => {
  //   if (error) {
  //     setTimeout(() => {
  //       history.push("/");
  //     }, 3000);
  //   }
  // }, [error]);

  //loading
  if (loading) {
    return <Loading />;
  }

  //error
  if (error) {
    return <Error />;
  }
  return (
    <Wrapper>
      <Header />
      <div className="section section-center page">
        <div className="product-center">
          {/* gallery */}
          <ProductImages images={images} className="spp-img-wrapper" />
          <section className="spp-content">
            <p className="pro_name">{name}</p>
            {/* ratings */}
            {/* <Stars stars={stars} reviews={reviews} /> */}
            {/* info */}
            <p className="pro_code"> Product Code : {product_code}</p>
            <hr className="spp-divider" />
            <div className="spp-tags-list">
              <h4 className="pd-item">₹{price}.00</h4>
              <h4 className="pd-item">{category}</h4>

              {/* <h4 className="pd-item">{occasion}</h4> */}
              {/* <h4 className="pd-item">{availability}</h4> */}
              {/* <h4 className="pd-item">{company}</h4> */}
            </div>

            {/* <div className="pro_params">
              <p className="pd-item">Occasion : {occasion}</p>
              <p className="pd-item"> Company :{company}</p>
            </div> */}
            {/* <div className="pro_details">
              <p>Description :</p>
              <p
                className="pd-item"
                dangerouslySetInnerHTML={{
                  __html: description,
                }}
              ></p>
            </div> */}

            <AddToCart product={singleProduct} />

            {/* <div className="user_input">
              <lable>Quantity : </lable>
              <input
                type="text"
                min="1"
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="proQty_input_box"
              />
            </div> */}

            {/* <div className="atc_btn_sec">
              <Link
                to="/cart"
                state={{ data: qty }}
                className={disable === true ? "atc_dis_btn" : "atc_btn"}
                disabled={disable}
                onClick={() => {
                  addToCart(id, qty, singleProduct);
                  setDisable(true);
                }}
              >
                ADD TO ENQUIRY CART
              </Link>
            </div> */}
            {/* <div className="lc_btn_sec">
              <button
                className="lc_btn"
                onClick={() => {
                  // addToCart(id, mainColor, qty, singleProduct, mainSize);
                }}
              >
                LIVE CHAT
              </button>
            </div> */}
            {/* {stock > 0 && <ProductTab description={description} />} */}
            {/* <div className="userinfo">
              <p>Need help placing your order?</p>
              <ul>
                <li>
                  <FaWhatsapp />{" "}
                  <span>Call or WhatsApp us at +91-0123456789</span>
                </li>
                <li>
                  <FaMailBulk />{" "}
                  <span>E-mail us at info@targetmarketing.com</span>
                </li>
              </ul>
            </div> */}
          </section>
        </div>
      </div>
      <div className="section section-center">
        <div className="spp-sub-sec">
          <div className="pro-desc01">
            <h3 className="pro-desc-ttl">ABOUT THIS PRODUCT</h3>
            <p className="pro-desc-txt">
              Amazon gift cards can be seamlessly converted to Amazon Pay
              balance. Now customers can use their amazon pay balance to shop
              across 10cr+ products on Amazon, recharge their mobile numbers &
              purchase vouchers of 150+ brands on Amazon. Not only this, Amazon
              Pay balance can be used to pay on 3rd party merchants like Redbus,
              Bookmyshow, Faasos Fresh menu, Housejoy.in etc.
            </p>
            <p className="pro-desc-ttl">GOOD TO KNOW</p>
            <p className="pro-desc-txt">
              Choose any denomination from Rs.10 to Rs.10000. Redeemable across
              all products on Amazon except apps, certain global store products
              and other Amazon Pay gift cards. Amazon Gift Card available
              physical / E-Gift Card
            </p>
          </div>
          <div className="pro-imp01">
            <h3 className="pro-desc-ttl">IMPORTANT TO KNOW</h3>
            <p className="pro-desc-txt">
              We need your logo and artwork in CDR or AI Format. We will share
              artwork rendering for sampling and once approved proceed for
              production. Printing on this product is digital or screen.
              Packaging is standard please check with us for custom packing. If
              you have specific requirement for master carton please inform us.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .section-center {
    margin: 5%;
    min-height: 50vh;
  }
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: #686868;
    font-weight: 400;
    letter-spacing: 0.1em;
    font-size: 25px;
    margin: 30px 0 0 0;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  .price-box {
    display: flex;
    align-items: center;
    margin: 35px 0 0 0;
  }
  .price-box span {
    font-size: 20px;
    display: block;
    margin-bottom: 10px;
    letter-spacing: 0.1em;
    font-weight: 300;
  }
  .size-box select {
    border: 1px solid #888;
    line-height: 35px;
    height: 35px;
    display: inline-block;
    width: 113px;
    padding: 0 10px;
  }
  .quantity-box {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    h4 {
      margin: 0 !important;
    }

    .qty {
      border: 1px solid #888;
      line-height: 35px;
      height: 35px;
      padding: 0 10px;
      display: flex;
      align-items: center;
    }
    button.qty-btn {
      background: transparent;
      border: none;
      cursor: pointer;
    }
    h2.qty {
      padding: 0 9px;
      font-size: 18px;
      margin: 0;
      min-width: 40px;
      display: inline-block;
      text-align: center;
      border: none;
      width: unset;
      font-weight: 400;
    }
  }
  .addcart-box {
    display: flex;
    align-items: flex-start;
    margin: 30px 0 0 0;
  }
  .cart-btn button {
    display: inline-block;
    border: none;
    background: #515151;
    color: #fff;
    line-height: 50px;
    letter-spacing: 0.2em;
    font-weight: 400 !important;
    font-size: 15px;
    width: 300px;
  }
  .cart-btn {
    margin-right: 25px;
  }
  .cart-btn:last-child button {
    background: #686868;
  }
  .cart-btn:last-child button {
    background: #686868;
  }

  .size-box-inner ul {
    display: flex;
    align-items: center;
  }
  .size-box-inner ul svg {
    font-size: 28px;
    color: #515151;
    margin: 0px 25px 0px 0px;
    line-height: 35px;
  }
  .size-box-inner ul span {
    font-size: 23px;
    font-weight: 300;
    letter-spacing: 0.2em;
  }
  .size-box-inner ul li {
    margin: 0 35px 0 0;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .size-box-inner ul li:last-child svg {
    color: #686868;
    transform: rotate(180deg);
  }
  .size-box-inner {
    padding: 30px 0 0 0;
  }
  .userinfo {
    padding: 40px 0 0 0;
  }
  .userinfo p {
    margin: 0 0 6px 0;
    color: #686868;
    letter-spacing: 0.2em;
    font-size: 18px;
  }
  .userinfo li {
    color: #686868;
    font-size: 17px;
    padding: 0px 0 0px 0;
    display: inline-block;
    width: 100%;
    letter-spacing: 0.1em;
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      // align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
  @media screen and (max-width: 1400px) {
    .product-center {
      display: flex;
      grid-template-columns: unset;
      align-items: end;
      section.content {
        max-width: 50%;
        flex: 0 0 50%;
        align-self: start;
        .addcart-box {
          flex-wrap: wrap;
          width: 100%;
          .cart-btn {
            margin: 0 0 20px 0;
            width: 100%;
          }
        }
        .size-box-inner ul {
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          width: 100%;
          text-align: left;
        }
        .size-box-inner ul li {
          text-align: left;
          width: 100%;
        }
      }
    }
  }
  @media screen and (max-width: 991px) {
    .product-center {
      flex-wrap: wrap;
      width: 100%;
      section.content {
        max-width: 100%;
        -webkit-flex: 0 0 100%;
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
      }
    }
  }
  @media screen and (max-width: 575px) {
    .section.section-center.page {
      max-width: 90%;
    }
  }
`;

export default SingleProductPage;

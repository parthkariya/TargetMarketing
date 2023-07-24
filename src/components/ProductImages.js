import React, { useState } from "react";
import styled from "styled-components";
import { ImWhatsapp } from "react-icons/im";

const ProductImages = ({ images = [{ url: "" }] }) => {
  const [main, setMain] = useState(images[0]);
  const currentURL = window.location.href;
  // console.log(currentURL);
  return (
    <Wrapper className="spp-img">
      {/* <div className="gallery">
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              alt={image.filename}
              key={index}
              onClick={() => setMain(images[index])}
              className={`${image.url === main.url ? "active" : null}`}
            />
          );
        })}
      </div> */}
      <img src={main.url} alt="main image" className="main" />

      <a
        href="https://api.whatsapp.com/send?text=https://theapplified.com/tm/products"
        // data-action="share/whatsapp/share"
        target="_blank"
        className="spp-social"
      >
        <ImWhatsapp />
        <p>WhatsApp</p>
      </a>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  .main {
    max-width: calc(100% - 155px);
    display: flex;
    width: unset !important;
    object-fit: contain;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: contain;
  }
  .gallery {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-right: 18px;
    overflow-y: scroll;
    padding: 5px 20px 0 5px;
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: #48c0cc;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #48c0cc;
    }
    img {
      height: 100px;
      width: 100px;
      cursor: pointer;
      margin-bottom: 20px;
    }
  }
  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
    }
    .gallery {
      img {
      }
    }
  }
  @media (min-width: 992px) {
    .gallery {
    }
  }
  @media screen and (max-width: 1400px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
    max-width: 50%;
    flex: 0 0 50%;
    .main {
      width: 100% !important;
      max-width: 100%;
    }
    .gallery {
      flex-direction: unset !important;
      overflow: hidden !important;
      overflow-x: scroll !important;
      max-height: unset;
      max-width: 100%;
      img {
        height: 150px !important;
        margin: 10px;
      }
    }
  }
  @media screen and (max-width: 991px) {
    max-width: 100%;
    flex: 0 0 100%;
    .main {
      object-position: top;
    }
  }
`;

export default ProductImages;

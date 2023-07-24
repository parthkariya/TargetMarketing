import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  // {
  //   id: 1,
  //   text: "shop",
  //   url: "/products",
  // },
  {
    id: 2,
    text: "Book An Appointment",
    url: "/contactus",
  },
  {
    id: 3,
    text: "About",
    url: "/about",
  },
  // {
  //   id: 4,
  //   text: "checkout",
  //   url: "/checkout",
  // },
];
export const linkss = [
  {
    id: 1,
    text: "shop",
    url: "/products",
  },
  {
    id: 2,
    text: "Book An Appointment",
    url: "/contactus",
  },
  {
    id: 3,
    text: "About",
    url: "/about",
  },
  // {
  //   id: 4,
  //   text: "checkout",
  //   url: "/checkout",
  // },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
  },
];

// export const products_url = "https://course-api.com/react-store-products";
// const BaseUrl = "https://applified.co.in/dsh/api/v1/";
const BaseUrl = "https://theapplified.com/targetmarketing/api/v1/";
export const products_url = BaseUrl + "new-product/";

export const home_url = BaseUrl + "get-home/";

export const single_product_url = BaseUrl + "new-product-detail/";

export const login_url = BaseUrl + "login";

export const signup_url = BaseUrl + "register";
export const add_wishlist_url = BaseUrl + "all-wishlist";
export const place_order_url = BaseUrl + "new-place-order";
export const add_address_url = BaseUrl + "add-address";
export const get_countries = BaseUrl + "countries";
export const get_state = BaseUrl + "state";
export const get_address = BaseUrl + "view-address";
export const delete_address = BaseUrl + "delete-address";
export const edit_address_url = BaseUrl + "edit-address";
export const guest_ordet_url = BaseUrl + "new-place-order-guest";
export const get_ordet_url = BaseUrl + "get-order-list";
export const get_customer_details_url = BaseUrl + "customers-detail";
export const update_customer_details_url = BaseUrl + "update-profile";
export const get_order_details_url = BaseUrl + "get-order-detail/";
export const return_order_url = BaseUrl + "return";
export const download_invoice_url = BaseUrl + "download-invoice";
export const create_store_ticket = BaseUrl + "store-ticket";
export const store_ticket_view_url = BaseUrl + "store-ticket-view";
export const contact_us = BaseUrl + "contact-us";
export const add_brief = BaseUrl + "add-brief";
export const new_place_order = BaseUrl + "new-place-order";
export const search_url = BaseUrl + "search/product";

// export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

// screen type
export const HOME_SCREEN = 101;
export const PROFILE_SCREEN = 102;
export const CHECKOUT_SCREEN = 103;
export const USER_SCREEN = 104;

// profile tab

export const USER_PROFILE_TAB = 201;
export const ADDRESS_TAB = 202;
export const MY_ORDER_TAB = 203;
export const RAISE_TICKET_TAB = 204;
export const NOTIFICAION_TAB = 205;

// google client id
export const WEB_CLIENT_ID =
  "643629890291-27gl333mpl92eekq7bp663qaslscglgl.apps.googleusercontent.com";

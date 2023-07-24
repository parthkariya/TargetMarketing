import React from "react";
import "./Header.css";
import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";
import { useUserContext } from "../../context/user_context";

const Header = ({ CartItem }) => {
  const { isLogin, logoutUser, userid } = useUserContext();
  const [showscreen, setShowlogin] = React.useState(false);

  return (
    <>
      {/* <Head /> */}
      <Search CartItem={CartItem} />
      <Navbar />
    </>
  );
};

export default Header;

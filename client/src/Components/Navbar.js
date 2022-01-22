import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";

function Navbar() {
  const [Login, setLogin] = useState(false);
  const cartState = useSelector((state) => state.cartReducer);
  const userState = useSelector((state) => state.loginUserReducer);
  const { current_user } = userState;
  useEffect(() => {
    if (localStorage.getItem("current_user")) {
      setLogin(true);
    }
  });

  function logoutUser() {
    if (localStorage.getItem("current_user")) {
      localStorage.removeItem("current_user");
    }
  }

  return (
    <div className="Navbar flex justify-between p-6 place-items-center hadow-lg shadow-indigo-500/50">
      <div className="left">
        <h1>
          F<span>oo</span>dy
        </h1>
      </div>
      <div className="center font-semibold">
        <a className="text-black " href="/">
          Home
        </a>
        <a>Menu</a>
        <a className="">About Us</a>
        <a>Contact</a>
      </div>
      <div className="right">
        {Login ? <span className="user_name">{current_user.name}</span> : null}
        <a href="/login" className="login_btn" onClick={logoutUser}>
          {Login ? "Logout" : "login"}
        </a>

        {Login ? (
          <a href="/cart" className="text-xl cart_icon">
            <AiOutlineShoppingCart />
            {cartState.cartItems.length}
          </a>
        ) : (
          <h1></h1>
        )}
      </div>
    </div>
  );
}

export default Navbar;

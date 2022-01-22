import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createorder } from "../actions/orderAction";
import emailjs from "@emailjs/browser";
import "./Checkout.css";

function Checkout({ subtotal }) {
  useEffect(() => {
    dispatch(createorder(subtotal));
  }, [subtotal]);
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.createorderReducer);
  const { order_data } = orderState;
  // console.log(order_data);

  function displayRazorpay() {
    var options = {
      key: "rzp_test_QxHaQP0vbMKLZj",
      amount: subtotal * 100,
      currency: "INR",
      name: "Foody",
      order_id: order_data,
      handler: function (response) {
        alert("Your order has been placed" + response.razorpay_payment_id);
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    const razorpayObject = new window.Razorpay(options);
    razorpayObject.open();
  }
  return (
    <div>
      <button className="paynow_btn" onClick={displayRazorpay}>
        Paynow
      </button>
    </div>
  );
}

export default Checkout;

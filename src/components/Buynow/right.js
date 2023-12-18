import React, { useEffect, useState, useContext } from "react";
import { CountContext } from "../../App";
import { useNavigate } from "react-router-dom";
const Right = () => {
  const {
    cartitems,
    setcartitems,
    total,
    settotal,
    nitems,
    islogged,
    user,
    phone,
  } = useContext(CountContext);
  const navigate = useNavigate();

  // const calculateSubtotal = () => {
  //   return cartitems
  //     .reduce((total, item) => total + item.price.cost, 0)
  //     .toFixed(2);
  // };
  //Ssetnitems(cartitems.length);
  // let items = 0;
  // useEffect(() => {
  //   items = cartitems.length;
  // }, [cartitems]);

  const Proceed = () => {
    if (islogged) {
      console.log(islogged);
      console.log(user, phone, cartitems);
    } else {
      alert("Not logged-In");
      navigate("/login"); // Use navigate for navigation
    }
  };

  return (
    <div className="right_buy">
      <img src="" alt="" />
      <div className="cost_right">
        <p>Your order is eligible for free delivery</p>
        <span styke={{ color: "#565959" }}>Select this option at checkout</span>
        <h3>
          Subtotal ({nitems} items) :
          <span style={{ fontWeight: 700 }}>₹{total}</span>
        </h3>
        <button className="rightbuy_btn" onClick={Proceed}>
          Proceed to buy
        </button>
        <div className="emi">Emi available</div>
      </div>
    </div>
  );
};

export default Right;

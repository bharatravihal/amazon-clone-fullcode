import React, { useEffect, useState, useContext } from "react";

import "./Buynow.css";
import { Divider } from "@mui/material";
import Option from "./option";
import Subtotal from "./subtotal";
import Right from "./right";
import { CountContext } from "../../App";
const Buynow = () => {
  const { cartitems, setcartitems } = useContext(CountContext);

  return (
    <div className="buynow_section">
      <div className="buynow_container">
        <div className="left_buy">
          <h1>Shopping Cart</h1>

          <Divider />
          {cartitems.length === 0 ? (
            <p>Cart is empty</p>
          ) : (
            <>
              <p>Select All Items</p>
              <span className="leftbuyprice">Price</span>
              <Divider />
              {cartitems.map((item) => (
                <React.Fragment key={item.id}>
                  <div className="item_containert">
                    <img src={item.url} alt={item.name} />
                    <div className="item_details">
                      <h3>{item.title.longTtile}</h3>
                      <h3>{item.title.shortTitle}</h3>
                      <h3 className="diffrentprice">{item.price.mrp}</h3>
                      <p className="unusuall">Usually dispatched in 8 days</p>
                      <p>Eligible for free delivery</p>
                      <Option item={item} />
                    </div>
                    <h3 className="item_price">₹{item.price.cost}</h3>
                  </div>
                  <Divider key={`divider-${item.id}`} />
                </React.Fragment>
              ))}
            </>
          )}

          <Divider />
          <Subtotal />
        </div>
        <Right />
      </div>
    </div>
  );
};

export default Buynow;

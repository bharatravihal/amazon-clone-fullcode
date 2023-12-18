import React, { useEffect, useState, useContext } from "react";
import { CountContext } from "../../App";
const Subtotal = () => {
  const { cartitems, setcartitems, total, settotal, nitems, setnitems } =
    useContext(CountContext);
  // const [nitems, setnitems] = useState();
  let items = 0;
  // useEffect(async () => {
  //   items = cartitems.length;
  // }, [cartitems]);
  const calculateSubtotal = () => {
    setnitems(cartitems.length);
    return cartitems
      .reduce((total, item) => total + item.price.cost, 0)
      .toFixed(2);
  };
  settotal(calculateSubtotal());
  console.log(nitems);
  // setnitems(cartitems.length);

  return (
    <div className="sub_item">
      <h3>
        SubTotal({nitems} items):
        <strong style={{ fontWeight: 700, color: "#111" }}> ₹{total}</strong>
      </h3>
    </div>
  );
};

export default Subtotal;

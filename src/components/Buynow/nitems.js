import React, { useEffect, useState, useContext } from "react";
import { CountContext } from "../../App";

const Item = () => {
  const { cartitems, setcartitems, total, settotal, nitems, setnitems } =
    useContext(CountContext);
  useEffect(() => {
    setnitems(cartitems.length);
  }, [cartitems, setnitems]);
};

export default Item;

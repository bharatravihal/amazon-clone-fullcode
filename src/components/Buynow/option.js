import React, { useState, useContext, useEffect } from "react";
import { CountContext } from "../../App";

const Option = (props) => {
  const { cartitems, setcartitems } = useContext(CountContext);
  //const { item } = props; // Access 'item' from props
  //console.log(props);
  const handleDelete = () => {
    // Filter out the item to be deleted from the cartitems
    console.log("delete");
    console.log(props);
    const updatedCartItems = cartitems.filter(
      (cartItem) => cartItem.id !== props.item.id
    );

    // Update the cartitems in the context
    setcartitems(updatedCartItems);
    console.log(cartitems);
  };
  return (
    <div className="add_remove_select">
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <p style={{ cursor: "pointer" }} onClick={handleDelete}>
        Delete
      </p>
      <span>|</span>
      <p className="forremovemedia">Save for later</p>
      <span>|</span>
      <p className="forremovemedia">see more like this</p>
      <span>|</span>
    </div>
  );
};

export default Option;

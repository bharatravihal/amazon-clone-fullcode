import "./rightheader.css";
import Avatar from "@mui/material/Avatar";
import React, { useContext } from "react";
import { CountContext } from "../../App";
import { NavLink } from "react-router-dom";
import Divider from "@mui/material/Divider";

const Rightheader = ({ onClose }) => {
  const { user, setuser } = useContext(CountContext);
  return (
    <>
      <div className="rightheader">
        <div className="right_nav" onClick={() => onClose}>
          {user ? (
            <>
              <Avatar className="avtar2">{user[0].toUpperCase()}</Avatar>
              <h3>Hello {user}</h3>
            </>
          ) : (
            <Avatar className="avtar"></Avatar>
          )}
        </div>
        <div className="nav_btn">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Shop By Category</NavLink>
          <Divider style={{ width: "100%", marginLeft: "-20px" }} />
          <NavLink to="/">Today's Deals</NavLink>
          {user ? (
            <NavLink to="/buynow">Your Orders</NavLink>
          ) : (
            <NavLink to="/login">Your Orders</NavLink>
          )}

          <Divider style={{ width: "100%", marginLeft: "-20px" }} />
          <div className="flag">
            <NavLink to="/">Settings</NavLink>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rightheader;

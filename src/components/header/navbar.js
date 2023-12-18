import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./navbar.css";
import Rightheader from "./rightheader";
import Drawer from "@mui/material/Drawer";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";
import { CountContext } from "../../App";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
const Navbar = () => {
  const [dropen, setdropen] = useState(false);
  const {
    user,
    setuser,
    islogged,
    setislogged,
    nitems,
    setnitems,
    cartitems,
    setcartitems,
  } = useContext(CountContext);
  useEffect(() => {
    setnitems(cartitems.length);
  }, [cartitems]);
  return (
    <header>
      <nav>
        <div className="left">
          <IconButton
            className="hamburgur"
            onClick={() => {
              setdropen(true);
            }}
          >
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>
          <Drawer
            open={dropen}
            onClose={() => {
              setdropen(false);
            }}
          >
            <Rightheader
              onClose={() => {
                setdropen(false);
              }}
            />
          </Drawer>
          <div className="navlogo">
            <NavLink to="/">
              <img src="../amazon_PNG25.png" alt="" />
            </NavLink>
          </div>
          <div className="nav_searchbaar">
            <input type="text" name="" id="" />
            <div className="search_icon">
              <SearchIcon />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            {/* <NavLink to="/login">Sign In</NavLink> */}
            {islogged ? (
              <NavLink
                onClick={() => {
                  toast("succesfully logged out");
                  setuser();
                  setislogged(false);
                  setcartitems([]);
                  setnitems(0);
                }}
              >
                Logout
              </NavLink>
            ) : (
              <NavLink to="/login">Sign In</NavLink>
            )}
          </div>
          <NavLink to="/buynow">
            <div className="cart_btn">
              <Badge badgeContent={nitems} color="primary">
                <ShoppingCartIcon id="icon" />
                <p>Cart </p>
              </Badge>
            </div>
          </NavLink>
          {islogged ? (
            <span style={{ color: "#fff" }}>{user}</span>
          ) : (
            <Avatar className="avtar" />
          )}
          <ToastContainer />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

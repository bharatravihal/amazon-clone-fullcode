import React, { useEffect, useState, useContext } from "react";
import "./cart.css";
import { Divider } from "@mui/material";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { CountContext } from "../../App";

const Cart = () => {
  const navigate = useNavigate();

  const { cartitems, setcartitems } = useContext(CountContext);
  const [url, seturl] = useState();
  const [productId, setproductId] = useState();
  const [mrp, setmrp] = useState();
  const [cost, setcost] = useState();
  const [save, setsave] = useState();
  const [discount, setdiscount] = useState();
  const [extradiscount, setextradiscount] = useState();
  const [des, setdes] = useState();
  const [longTitle, setlongTitle] = useState();
  const [shortTitle, setshortTitle] = useState();

  const [data, setdata] = useState();
  const { id } = useParams("");
  console.log(id);

  const getinddata = async () => {
    try {
      const res = await axios.get(`http://localhost:8005/getproductsone/${id}`);

      console.log(res);
      setdata(res.data);
      setproductId(res.data.id);
      seturl(res.data.url);
      setmrp(res.data.price.mrp);
      setcost(res.data.price.cost);
      setsave(mrp - cost);
      setdiscount(res.data.price.discount);
      setdes(res.data.description);
      setextradiscount(res.data.discount);
      setlongTitle(res.data.title.longTitle);
      setshortTitle(res.data.title.shortTitle);
      // setProductData(data);
      //setdata(res.data);
    } catch (error) {
      console.error("Error fetching individual data:", error);
    }
  };

  useEffect(() => {
    getinddata();
  }, [id]);

  // console.log(id);
  // const getinddata = async () => {
  //   const res = await fetch(`/getproductsone/${id}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await res.json();
  //   console.log(data);
  // };
  // useEffect(() => {
  //   getinddata();
  // }, [id]);
  // const response = await axios.get(
  //   `http://localhost:8005/getproductsone/${id}`
  // );
  // console.log(response.data);

  // const addtocart = async (id) => {
  //   const checkres = await fetch(`/addcart/${id}`, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(data),
  //     credentials: "include",
  //   });
  //   const data1 = await checkres.json();
  //   console.log(data1 + "frontend data");
  //   if (checkres.status === 401 || !data1) {
  //     console.log("user invalid");
  //     alert("user invalid");
  //   } else {
  //     alert("data added in ur cart");
  //   }
  // };

  const addtocart = async (id) => {
    console.log(id);
    try {
      const response = await fetch(`/addcart/${id}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
        }),
        credentials: "include",
      });
      console.log(response.data + "frontend data");

      if (response.status === 401 || !response.data) {
        console.log(response.status);
        console.log("user invalid");
        alert("user invalid");
      } else {
        alert("data added in ur cart");
      }
    } catch (error) {
      console.error("Error in addtocart:", error);
    }
  };
  const addcart = async (data) => {
    // console.log(data);
    // await setcartitems([...cartitems, data]);
    // console.log(cartitems);
    const isItemInCart = cartitems.some((item) => item.id === data.id);

    if (!isItemInCart) {
      // Item is not in the cart, add it
      await setcartitems([...cartitems, data]);
      console.log(cartitems);
    } else {
      // Item is already in the cart, you can show an alert or handle it in some way
      console.log("Item is already in the cart");
      // Optionally, show an alert
      alert("Item is already in the cart");
    }
  };

  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img src={url} alt="" />
          <div className="cart_btn">
            <button
              className="cart_btn1"
              onClick={() => {
                addcart(data);
              }}
            >
              Add To Cart
            </button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>{shortTitle}</h3>
          <h4>{longTitle}</h4>
          <Divider />
          <p className="mrp">MRP :₹{mrp}</p>
          <p>
            Deal of the day :<span style={{ color: "#B12704" }}> ₹{cost}</span>
          </p>
          <p>
            You save:
            <span style={{ color: "#B12704" }}>
              {" "}
              ₹{mrp - cost}({discount})
            </span>
          </p>
          <div className="discount_box">
            <h5>
              Discount:
              <span style={{ color: "#111" }}>{extradiscount}</span>
            </h5>
            <h4>
              Free Delivery:<span style={{ color: "#111" }}> Oct 8-21</span>
            </h4>
            <p>
              Fastest Delivery:
              <span style={{ color: "#111" }}>Tomorrow 11am</span>
            </p>
            <div className="description">
              About the Item:
              <span
                style={{
                  color: "#565959",
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: "0.4px",
                }}
              >
                {" "}
                {des}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

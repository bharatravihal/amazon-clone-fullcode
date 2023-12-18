import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//import { Logincontext } from "../context/Contextprovider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Signin.css";
import axios from "axios";
import { CountContext } from "../../App";

const Sign_in = () => {
  const navigate = useNavigate();

  const { user, setuser, islogged, setislogged, nitems, phone, setphone } =
    useContext(CountContext);
  const [logdata, setdata] = useState({
    email: "",
    password: "",
  });
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const senddata = async (e) => {
    e.preventDefault();
    await setdata({
      email,
      password,
    });
    console.log(email, password);
    const res = await axios.post("http://localhost:8005/login", {
      email,
      password,
    });
    // console.log(res);
    if (res.status === 201) {
      toast.success("successful login", {
        position: "top-center",
      });
      setuser(res.data.fname);
      setphone(res.data.mobile);
      console.log(user);
      setislogged(true);
      setemail("");
      setpassword("");
      if (nitems) {
        navigate("/buynow");
      } else {
        navigate("/");
      }
    } else if (res.data.status == 400) {
      toast.error("incorrect password");
    } else if (res.data.status == 404) {
      toast.error("email not registered");
    } else if (res.data.status == 422) {
      toast.error("provide both details");
    }
  };

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./blacklogoamazon.png" alt="signupimg" />
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Sign-In</h1>
            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                value={email}
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                // onChange={adddata}
                value={password}
                id="password"
              />
            </div>
            <button className="signin_btn" onClick={senddata}>
              Sign-In
            </button>
          </form>
          <ToastContainer />
        </div>
        <div className="create_accountinfo">
          <p>New to Amazon?</p>
          <button>
            {" "}
            <NavLink to="/register">Create your Amazon Account</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sign_in;

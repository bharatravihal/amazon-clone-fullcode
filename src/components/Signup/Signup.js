import { Divider } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Signup = () => {
  // const [udata, setudata] = useState({
  //   name: "",
  //   email: "",
  //   mobile: "",
  //   password: "",
  //   cpassword: "",
  // });

  const [fname, setfname] = useState();
  const [email, setemail] = useState();
  const [mobile, setmobile] = useState();
  const [password, setpassword] = useState();
  const [cpassword, setcpassword] = useState();

  const adddata = async (e) => {
    e.preventDefault();
    // setudata({
    //   fname: fname,
    //   email: email,
    //   mobile: mobile,
    //   password: password,
    //   cpassword: cpassword,
    // });
    // console.log(udata);
    console.log(fname, email, mobile, password, cpassword);

    const res = await axios.post("http://localhost:8005/register", {
      fname,
      email,
      mobile,
      password,
      cpassword,
    });
    console.log("status", res);
    //console.log(res.response.status);
    if (res.status === 201) {
      toast.success("Data successfully added", {
        position: "top-center",
      });
      setfname("");
      setemail("");
      setmobile("");
      setpassword("");
      setcpassword("");
    } else if (res.data.status == 409) {
      toast.error("Email or mobile already exists", {
        position: "top-center",
      });
    } else if (res.data.status == 400) {
      toast.error("Passwords not matching", {
        position: "top-center",
      });
    } else if (res.data.status == 422) {
      toast.error("all fields are required", {
        position: "top-center",
      });
    } else if (res.data.status == 500) {
      toast.error("unknown errro", {
        position: "top-center",
      });
    }
  };

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="blacklogoamazon.png" alt="" />
        </div>

        <div className="sign_form">
          <form>
            <h1>Sign-Up</h1>
            <div className="form_data">
              <label for="fname">Your Name</label>
              <input
                type="text"
                id="fname"
                name="name"
                value={fname}
                onChange={(e) => {
                  setfname(e.target.value);
                }}
              ></input>
            </div>
            <div className="form_data">
              <label for="email">Email</label>
              <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              ></input>
            </div>
            <div className="form_data">
              <label for="Phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={mobile}
                onChange={(e) => {
                  setmobile(e.target.value);
                }}
              ></input>
            </div>
            <div className="form_data">
              <label for="Password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              ></input>
            </div>
            <div className="form_data">
              <label for="cPassword">Password Again</label>
              <input
                type="password"
                id="cpassword"
                name="cpassword"
                value={cpassword}
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              ></input>
            </div>
            <button className="signin_btn" onClick={adddata}>
              Continue
            </button>

            <div className="signin_info">
              <p>Already Have an Account?</p>

              <NavLink to="/login">Sign In</NavLink>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Signup;

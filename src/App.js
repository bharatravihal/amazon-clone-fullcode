import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useContext } from "react";
import Navbar from "./components/header/navbar";
import Newnav from "./newnav/newnav";
import Maincomp from "./components/home/Maincomp";
import Footer from "./components/footer/Footer";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Cart from "./components/cart/cart";
import Buynow from "./components/Buynow/Buynow";
import Item from "./components/Buynow/nitems";
// import Productincart from "./components/";
export const CountContext = React.createContext();
export const CountProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [islogged, setislogged] = useState(false);
  const [cartitems, setcartitems] = useState([]);
  const [total, settotal] = useState();
  const [nitems, setnitems] = useState(0);
  const [phone, setphone] = useState();

  return (
    <CountContext.Provider
      value={{
        user,
        setuser,
        islogged,
        setislogged,
        cartitems,
        setcartitems,
        total,
        settotal,
        nitems,
        setnitems,
        phone,
        setphone,
      }}
    >
      {children}
    </CountContext.Provider>
  );
};
function App() {
  return (
    <>
      <CountProvider>
        <Router>
          <Navbar />
          <Newnav />
          <Routes>
            <Route path="/" element={<Maincomp />} />
            <Route path="/login" element={<Signin />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/getproductsone/:id" element={<Cart />} />
            {/* <Route path="/productcart" element={<Productincart />} /> */}
            <Route path="/buynow" element={<Buynow />} />
            <Route path="/oiuytfc" element={<Item />} />
          </Routes>
        </Router>
        <Footer />
      </CountProvider>
    </>
  );
}

export default App;

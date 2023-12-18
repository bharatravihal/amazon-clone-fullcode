// import React from "react";
// import Banner from "./Banner.js";
// import "./Home.css";
// import Slide from "./Slide";
// const Maincomp = () => {
//   return (
//     <div className="home_section">
//       <div className="banner_part">
//         <Banner />
//         <Slide />
//       </div>
//       <div className="center_img">
//         <img
//           src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// };

// export default Maincomp;
// Maincomp.js
import React from "react";
import Banner from "./Banner.js";
import "./Home.css";
import Slide from "./Slide";
//import Footer from "../footer/Footer.js";
const Maincomp = () => {
  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
        <Slide />
      </div>
      <div className="center_img">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Maincomp;

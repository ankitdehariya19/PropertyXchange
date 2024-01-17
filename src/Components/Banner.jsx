// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import Image from "../assets/img/hero.jpeg";
// import Search from "./Elements/Search";
// import ButtonGroup from "./Search/ButtonGroup";
// import NestedDropdown from "./Search/NestedDropdown";
// import DependentSearch from "./Search/DependentSearch";
// import Demo from "../Components/Search/Demo";

// const Banner = () => {
//   const bannerStyle = {
//     position: "relative",
//     backgroundImage: `url(${Image})`,
//     backgroundSize: "cover",
//     // backgroundPosition: "center",
//     minHeight: "calc(100vh - 45vh)",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//     color: "#fff",
//     // backgroundRepeat: "no-repeat"
//     // margin: "-60px 0 0 0",
//     padding: "20px 0 0 0"
//   };

//   const overlayStyle = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     width: "100%",
//     height: "100%",
//     backgroundColor: "rgba(247, 108, 0, 0.2)",
//     zIndex: 0,
//     borderBottomLeftRadius: "40px",
//     borderBottomRightRadius: "40px",
//     zIndex:""
//   };

//   return (
//     <div className="">
//       <section style={bannerStyle} className="relative mx-16 rounded-b-[40px] h-full ">
//         <div style={overlayStyle}></div>

//         <div className="w-full mt-20 ">
//           <Search className="absolute bottom-10" />
//           <Demo/>
//           {/* <ButtonGroup/> */}
//           {/* <NestedDropdown/> */}

//         </div>
//       </section>
//     </div>
//   );
// };

// export default Banner;


import React from "react";
import Image from "../assets/img/homeimg5.png";
import Demo from "../Components/Search/Demo";

const Banner = () => {
  return (
    <div className="relative mx-16  rounded-b-[40px] ">
      {/* Background Image with Gradient Overlay */}
      <section
        className="bg-cover bg-center bg-no-repeat relative rounded-b-[40px] overflow-hidden"
        style={{
          backgroundImage: `url(${Image})`,
          minHeight: "calc(100vh - 45vh)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-gray-900 to-transparent opacity-70 rounded-b-[40px]"></div>
      </section>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end  text-white">
       
        <div className="flex w-full items-center justify-center z-40">
          <Demo />
        </div>
      </div>

      {/* Demo Component Outside the Centered Content */}
    </div>
  );
};

export default Banner;

// import React from "react";
// import image from "../../assets/images/hero2.png";
// import Searchbox from "../Elements/Searchbox";
// import PropertyFilter from "../Elements/PropertyFilter";

// const Hero2 = () => {
//   return (
//     <div className="relative h-screen bg-orange-100">
//       {/* Hero Section */}
//       <div className="w-full h-1/2 py-12 flex flex-col sm:flex-row justify-between ">
//         <div className="flex flex-col justify-center items-center text-left sm:w-2/3 pl-8 ">
//           <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-orange-500 tracking-tighter">
//             FIND PERFECT <br/> PROPERTY WITH US
//           </h1>
//           <p className="max-w-[600px] pl-10 text-black text-sm md:text-base lg:text-lg mt-6">
//             Propertyxchange, where your dream property awaits! Discover a wide range of homes, land, and commercial spaces that fit your needs perfectly.
//           </p>
//         </div>
//         <div className="flex justify-end items-end h-fit ">
//           <img
//             src={image}
//             alt="Hero"
//             className="rounded-xl w-full  object-cover"
//           />
//         </div>
//       </div>

//       {/* Search Section */}
//       <div className="w-full h-52 py-12 px-4 sm:px-10">
//         <div className="flex w-full justify-center items-center rounded-xl py-5 bg-orange-500 flex-col">
//           <div className="flex  flex-col items-center justify-center space-y-4 text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
//             <div className="space-y-2">
//               <h2 className="text-base sm:text-2xl text-orange-100 font-normal tracking-tighter">
//                 SEARCH THE REAL ESTATE YOU ARE LOOKING FOR
//               </h2>
//             </div>

//           </div>
//           <Searchbox/>
//           {/* <PropertyFilter/> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero2;

import React from "react";
import image from "../../assets/images/hero2.png";
import Searchbox from "../Elements/Searchbox";
import PropertyFilter from "../Elements/PropertyFilter";

const Hero2 = () => {
  return (
    <div className="relative h-screen bg-orange-100">
      {/* Hero Section */}
      <div className="flex flex-col justify-between items-center sm:flex-row h-1/2 py-12">
        <div className="flex flex-col justify-center items-center text-left sm:w-2/3 pl-8 ">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold text-orange-500 tracking-tighter ">
            FIND PERFECT <br /> PROPERTY WITH US
          </h1>
          <p className="max-w-[600px] pl-10 text-black text-sm md:text-base lg:text-lg mt-6">
            Welcome to Propertyxchange, where your dream property awaits!
            Explore a diverse range of homes, land, and commercial spaces
            tailored to your needs.
          </p>
        </div>
        <div className="flex justify-start items-start h-fit  mt-16">
          <img
            src={image}
            alt="Hero"
            className="rounded-xl"
            style={{ width: "1000px", height: "500px" }} // Adjust the values as needed
          />
        </div>
      </div>

      {/* Search Section */}
      <div className="w-full h-52 py-12 px-4 sm:px-10">
        <div className="flex w-full justify-center items-center rounded-xl py-5 bg-orange-500 flex-col">
          <div className="flex flex-col items-center justify-center space-y-4 text-center w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 px-4">
            <div className="space-y-2">
              <h2 className="text-base sm:text-2xl text-orange-100 font-normal tracking-tighter">
                SEARCH FOR THE REAL ESTATE YOU DESIRE
              </h2>
            </div>
          </div>
          {/* <Searchbox /> */}
          <PropertyFilter/>
        </div>
      </div>
    </div>
  );
};

export default Hero2;

// HomePage.js

import React from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/hero.png";

const HomePage = () => {
  return (
    <div className="bg-orange-100 h-screen flex flex-col relative">
      <div className="max-w-8xl mx-auto p-4 px-10 flex items-center justify-between">
        <div className="w-2/3">
          <h1 className="text-5xl text-orange-500 font-bold mb-4">
            FIND YOUR PERFECT PROPERTY WITH US
          </h1>
          <p className="text-lg text-gray-600 mt-16 mb-6">
            Welcome to Propertyxchange, where your dream property awaits! Discover a wide range of homes, land, and commercial spaces that fit your needs perfectly.
          </p>
        </div>
        <div className="w-1/2 flex justify-end -mr-12">
          <img
            src={image} // Replace with your actual image URL
            alt="Home Image"
            className="h-auto max-w-4xl object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-full h-52 bg-orange-500 rounded-xl m-10 flex items-center justify-center">
        <h1 className="text-2xl text-white text-center">
          SEARCH THE REAL ESTATE YOU ARE LOOKING FOR
        </h1>
      </div>
    </div>
  );
};

export default HomePage;

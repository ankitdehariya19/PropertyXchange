import React, { useState, useEffect } from "react";
import Header from "./Header";
import Image from "../assets/img/house-banner4.jpg";
import Search from "./Elements/Search";

const TypingHeading = ({ text, interval }) => {
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleCharacters((prev) => (prev < text.length ? prev + 1 : 0));
    }, interval);

    return () => clearInterval(intervalId);
  }, [text, interval]);

  return (
    <div className="typing-heading-container">
      <h1 className="text-4xl lg:text-6xl font-bold mb-6">
        {text.slice(0, visibleCharacters)}
      </h1>
    </div>
  );
};

const Banner = () => {
  const bannerStyle = {
    position: "relative",
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "calc(100vh - 64px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 25, 0.4)",
    zIndex: 0,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 1,
  };

  return (
    <div className="h-screen">
      <section style={bannerStyle} className="relative h-screen ">
        <div style={overlayStyle}></div>
        <div className="w-full absolute top-0">
          <Header />
        </div>
        <div className="max-w-3xl  mt-20 " style={contentStyle}>
          <div className="w-full h-52 my-2 py-4 ">
            <TypingHeading
              text="Rent Your Dream House With Us"
              interval={100}
            />
          </div>
          <p className=" text-gray-200 text-sm mb-5 mx-auto max-w-2xl">
            Your Ultimate Destination for Hotel Bookings! Discover a wide range
            of accommodations tailored to your preferences. From luxurious
            resorts to charming boutique hotels, find your perfect stay at the
            best prices. Start planning your dream getaway today with
            BookMyStay!
          </p>
        </div>
        <div className="w-full my-14 ">
          <Search className="absolute bottom-10" />
        </div>
      </section>
    </div>
  );
};

export default Banner;

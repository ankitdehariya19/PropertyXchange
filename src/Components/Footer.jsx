// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import SocialMediaButtons from "./SocialMediaButtons";
import PropertyCard from "./PropertyCard"; // Adjust the component name as per your actual component
import houseImage from "../assets/img/home.jpg";
import home2Image from "../assets/img/home2.jpg";
import home3Image from "../assets/img/home3.jpg";

const Footer = () => {
  const propertyCategories = [
    { id: 1, name: "House", link: "#", count: 50 },
    { id: 2, name: "Flat", link: "#", count: 30 },
    { id: 3, name: "Commercial", link: "#", count: 20 },
    { id: 4, name: "Plot", link: "#", count: 10 },
  ];

  const latestProperties = [
    { id: 1, name: "Modern City Apartment", link: "#", image: houseImage, propertiesCount: 10 },
    { id: 2, name: "Spacious Suburban Home", link: "#", image: home2Image, propertiesCount: 20 },
    { id: 3, name: "Luxury Waterfront Villa", link: "#", image: home3Image, propertiesCount: 15 },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-between items-start ">
        <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
          <img src={logo} alt="Company Logo" className="mb-4" />
          <p>Email: info@bookmystay.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main Street, Cityville, State, 12345</p>
          <div className="mt-4">
            <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
            <SocialMediaButtons />
          </div>
        </div>

        <div className="w-full mt-5 lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Property Categories</h3>
          <ul className="list-none p-0">
            {propertyCategories.map((category) => (
              <li key={category.id} className="mb-2">
                <Link to={category.link} className="hover:underline">
                  {category.name} ({category.count})
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full mt-5 lg:w-1/4 mb-8 lg:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Latest Properties</h3>
          <div className="flex flex-col h-96">
            {latestProperties.map((property) => (
              <PropertyCard
                key={property.id}
                name={property.name}
                image={property.image}
              
              />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <p>&copy; 2024 BookMyStay. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

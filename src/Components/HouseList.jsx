import React, { useContext } from "react";
import { HouseContext } from "../Components/Elements/HouseContext";
import House from "../Components/Elements/House";
import { Link } from "react-router-dom";
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  
  if (loading) {
    return (
      <ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />
    );
  }

 
  if (houses.length < 1) {
    return (
      <div className="text-center text-3xl text-gray-400 mt-48">
        Sorry, Nothing Found
      </div>
    );
  }

  return (
    <section className="mb-20 mt-20  ">
      <div className="container mx-auto mt-20 text-center  my-24 pt-20 ">
        <p className="text-2xl font-semibold text-gray-800 mb-4 ">
          Discover the Perfect Property - Properties By City
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          Embark on an enchanting journey of discovery as you explore the ideal
          properties in the city of your choice. Whether you picture a serene
          suburban retreat or a dynamic urban residence, our extensive range of
          listings will captivate your imagination. From opulent apartments to
          charming homes and everything in between, our platform empowers you to
          customize your search according to your specific preferences.
        </p>
      </div>

      <div className="container mx-auto ">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-14">
        
          {houses.map((house, index) => (
            <Link to={`/property/${house.id}`} key={index}>
              <House house={house} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HouseList;

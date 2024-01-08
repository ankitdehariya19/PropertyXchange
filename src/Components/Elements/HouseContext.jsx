import React, { useState, useEffect, createContext } from 'react';
import { housesData } from "../../data";

export const HouseContext = createContext();

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const allCountries = houses.map((house) => house.country);
    const uniqueCountries = ["Location (any)", ...new Set(allCountries)];
    setCountries(uniqueCountries);
  }, [houses]);

  useEffect(() => {
    const allProperties = houses.map((house) => house.type);
    const uniqueProperties = ["Property type (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, [houses]);

  const handleClick = () => {
    setLoading(true);

    // Correct the indices to get the min and max prices
    const minPrice = parseInt(price.split(' ')[0]);
    const maxPrice = parseInt(price.split(' ')[2]);

    const newHouses = housesData.filter((house) => {
      const housePrice = parseInt(house.price);

      // Check filters
      const countryMatch = country === "Location (any)" || house.country === country;
      const propertyMatch = property === "Property type (any)" || house.type === property;
      const priceMatch =
        price === "Price range (any)" || (housePrice >= minPrice && housePrice <= maxPrice);

      return countryMatch && propertyMatch && priceMatch;
    });

    setTimeout(() => {
      setHouses(newHouses);
      setLoading(false);
    }, 1000);
  };

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;

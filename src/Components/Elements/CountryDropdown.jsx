import React, { useState, useContext, useRef, useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { HouseContext } from "./HouseContext";
import useOutsideClick from "../useOutsideClick";

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const filteredCountries = countries.filter((c) =>
    c.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const closeDropdown = () => {
    setIsOpen(false);
    setSearchTerm("");
  };

  const handleOutsideClick = () => {
    if (isOpen) {
      closeDropdown();
    }
  };

  useOutsideClick(dropdownRef, handleOutsideClick);

  useEffect(() => {
    
    if (!isOpen) {
      setSearchTerm("");
    }
  }, [isOpen]);

  return (
    <div className="relative w-1/3 flex items-center justify-between">
      <div className="relative w-full" ref={dropdownRef}>
        <div className="flex items-center rounded-lg overflow-hidden  border-gray-300">
          <div className="ml-2">
            <RiMapPinLine className="dropdown-icon-secondary" />
          </div>
          <input
            type="text"
            value={country || searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsOpen(true)}
            className="search-input bg-transparent flex-1 px-4 py-2 focus:outline-none outline-none border-none placeholder-white text-white"
            placeholder="Search for your place"
          />

          {country && (
            <div
              className="ml-2 cursor-pointer"
              onClick={() => setCountry(null)}
            >
              <MdOutlineCancel className="dropdown-icon-secondary" />
            </div>
          )}

          <div>
            {isOpen ? (
              <RiArrowDownSLine className="dropdown-icon-secondary" />
            ) : (
              <RiArrowUpSLine className="dropdown-icon-secondary" />
            )}
          </div>
        </div>
        {isOpen && searchTerm && (
          <div className="absolute w-full mt-9 bg-black bg-opacity-80  rounded-lg shadow-md overflow-hidden">
            {filteredCountries.length === 0 ? (
              <div className="p-2 text-gray-500">
                No matching countries found
              </div>
            ) : (
              <>
                {filteredCountries.map((filteredCountry, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setCountry(filteredCountry);
                      closeDropdown();
                    }}
                    className={`cursor-pointer px-4 py-2 ${
                      filteredCountry === country
                        ? "bg-gray-200 text-gray-800"
                        : "cursor-pointer hover:text-violet-700 transition"
                    }`}
                  >
                    {filteredCountry}
                  </div>
                ))}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDropdown;

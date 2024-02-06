import React, { useEffect, useState , useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import useOutsideClick from './useOutsideClick';

const Selector = ({ options, onSelect }) => {
  const [countries, setCountries] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null); 

  useOutsideClick(dropdownRef, () => {
    setOpen(false);
    setInputValue("");
  });


  useEffect(() => {
    setCountries(options);
  }, [options]);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    setInputValue("");
    onSelect(option); // Pass the selected option to the parent component
  };

  return (
    <div className="w-96 text-white  relative  font-medium h-fit" ref={dropdownRef} >
      <div
        onClick={() => setOpen(!open)}
        className={` p-2  w-60 flex items-center justify-between rounded text-gray-500 ${
          !selected && "text-gray-700"
        }`}
      > <HiOutlineLocationMarker
      className="dropdown-icon-primary"
      size={20}
      
    />
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select Country"}
          
         <BiChevronDown size={20}  className="dropdown-icon-secondary"  />
      </div>
      <ul 
        className={` mt-2 overflow-y-auto absolute top-12 bg-white text-gray-500   ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-gray-700" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Enter country name"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {countries?.map((option) => (
          <li
            key={option}
            className={`p-2 text-sm hover:bg-gray-100  hover:text-gray-500
            ${
              option?.toLowerCase() === selected?.toLowerCase() &&
              "bg-sky-600 text-white"
            }
            ${
              option?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
            }`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;

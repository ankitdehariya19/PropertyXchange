import React, { useState } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { BiChevronDown } from 'react-icons/bi';

const PriceRangeDropdown = ({ onRangeSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const price = [
    {
      value: "Price range (any)",
    },
    {
      value: "100000 - 130000",
    },
    {
      value: "130000 - 160000",
    },
    {
      value: "160000 - 190000",
    },
    {
      value: "190000 - 220000",
    },
    {
      value: "220000 - 250000",
    },
    {
      value: "250000 - 300000",
    },
    {
      value: "20000 - 40000",
    },
  ];

  return (
    <Menu as="div" className="flex relative bg-white w-full justify-center items-center h-fit">
      <Menu.Button
        onClick={() => setIsOpen(!isOpen)}
        className=" flex justify-center items-center w-full text-left"
      >
        <RiWallet3Line className="dropdown-icon-primary" />
        <div>
          <div className="text-[15px] font-medium leading-tight">
            {price[0].value} {/* Corrected reference to price */}
          </div>
          <div className="text-[13px]">Choose Price Range</div>
        </div>
        <BiChevronDown size={20}  className="dropdown-icon-secondary"  />
      </Menu.Button>
      <Menu.Items className="dropdown-menu bg-white absolute top-12">
        {price.map((priceOption, index) => (
          <Menu.Item
            as="li"
            key={index}
            className="cursor-pointer hover:text-violet-700 transition"
            onClick={() => {
              // Call the onRangeSelect prop with the selected price range
              const [minPrice, maxPrice] = priceOption.value.split(" - ");
              onRangeSelect(parseInt(minPrice), parseInt(maxPrice));
              setIsOpen(false); // Close the dropdown after selection
            }}
          >
            {priceOption.value}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;

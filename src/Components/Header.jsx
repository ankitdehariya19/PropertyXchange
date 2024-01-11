import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/img/Logo3.png';
import useOutsideClick from './useOutsideClick';

const menuItems = [
  { label: 'Buy', submenu: ['house', 'flat', 'commercial', 'plot'] },
  { label: 'Sell', submenu: ['home-owner', 'agent', 'builder'] },
  { label: 'Luxury Properties', submenu: ['home', 'flat', 'villa', 'pent-house', 'land'] },
  { label: 'Projects', submenu: ['upcoming', 'ongoing', 'completed'] },
];

const Header = () => {
  const [showSubMenu, setShowSubMenu] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  const handleButtonClick = (index) => {
    setShowSubMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleHover = (index) => {
    setShowSubMenu(index);
  };

  const handleCloseSubMenu = () => {
    setShowSubMenu(null);
  };

  const handleSubMenuClick = (menuItem, subItem) => {
    navigate(`/${menuItem.toLowerCase()}/${subItem.toLowerCase()}`);
    handleCloseSubMenu();
  };

  const renderSubmenuItems = (submenu, menuItemLabel) =>
    submenu.map((subItem, subIndex) => (
      <li key={subIndex}>
        <Link
          to={`/${menuItemLabel.toLowerCase()}/${subItem.toLowerCase()}`}
          onClick={() => handleSubMenuClick(menuItemLabel, subItem)}
          className="block px-4 py-2 transition duration-300 hover:bg-[#F76C00] hover:text-white"
        >
          {subItem}
        </Link>
      </li>
    ));

  useOutsideClick(menuRef, handleCloseSubMenu);

  return (
    <header className="bg-white p-2 ">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center z-40 ">
        <div className="mb-4 sm:mb-0 z-50">
          <Link to="/" className="block">
            <img
              src={Logo}
              alt="Logo"
              className="mx-auto w-32 sm:w-48 lg:w-48"
            />
          </Link>
        </div>

        <div className="flex flex-col  sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 z-50">
          {menuItems.map((menuItem, index) => (
            <div key={index} className="relative" ref={menuRef}>
              <button
                className="cursor-pointer hover:text-orange-500 text-black transition focus:outline-none"
                onMouseEnter={() => handleHover(index)}
                onClick={() => handleButtonClick(index)}
              >
                {menuItem.label}
              </button>
              {showSubMenu === index && (
                <ul className="sm:absolute top-full left-0 mt-2 sm:mt-0 bg-white border  rounded-lg shadow-md overflow-hidden w-40">
                  {renderSubmenuItems(menuItem.submenu, menuItem.label)}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 z-50">
          <Link to="/PostProperty">
            <button className="bg-[#F76C00] hover:bg-[#F76C00] text-white px-4 py-2 rounded-lg transition">
              Post Property Free
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/img/logo2.png';
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
          className="block px-4 py-2 transition duration-300 hover:bg-violet-100 text-white hover:text-black"
        >
          {subItem}
        </Link>
      </li>
    ));

  useOutsideClick(menuRef, handleCloseSubMenu);

  return (
    <header className="  bg-black p-5  z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="mb-4 sm:mb-0">
          <Link to="/" className="block">
            <img
              src={Logo}
              alt="Logo"
              className="mx-auto w-32 sm:w-48 lg:w-48"
            />
          </Link>
        </div>

        <div className="flex flex-col text-white sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 z-50">
          {menuItems.map((menuItem, index) => (
            <div key={index} className="relative" ref={menuRef}>
              <button
                className="cursor-pointer hover:text-[#F76C00] transition focus:outline-none active:active"
                onMouseEnter={() => handleHover(index)}
                onClick={() => handleButtonClick(index)}
              >
                {menuItem.label}
              </button>
              {showSubMenu === index && (
                <ul className="sm:absolute top-full left-0 mt-2 sm:mt-0 bg-black  bg-opacity-80  rounded-lg shadow-md overflow-hidden w-40">
                  {renderSubmenuItems(menuItem.submenu, menuItem.label)}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/LogIn">
            <button className="text-white hover:text-[#F76C00] transition">Log In</button>
          </Link>

          <Link to="/SignUp">
            <button className="bg-[#F76C00] hover:bg-[#F76C00] text-white px-4 py-2 rounded-lg transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

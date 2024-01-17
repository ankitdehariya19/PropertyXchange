// Button.js
import React from 'react';

const Button = ({ onClick, children, isActive }) => {
  return (
    <button
      className={`bg-gray-100  shadow-md font-semibold py-2 px-7  text-gray-500 rounded-full  focus:outline-none transition-all duration-300 ease-in-out ${
        isActive ? ' bg-orange-500 shadow-orange-500 border-none text-white' : ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

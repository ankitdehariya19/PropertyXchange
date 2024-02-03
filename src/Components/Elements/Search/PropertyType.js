import React, { useState } from 'react';

const CustomDropdown = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="dropdown">
        <span className={`rounded-md shadow-sm`}>
          <button
            type="button"
            className={`inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-200 transition`}
          >
            {selectedOption || 'Property Types'}
          </button>
        </span>

        <div className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}>
          <div className={`py-1`}>
            <div className="dropdown-item" onClick={() => handleOptionClick('Residential')}>
              <span>Residential</span>
              <div className={`dropdown-content`}>
                <div className="dropdown-item" onClick={() => handleOptionClick('Flat')}>
                  <span>Flat</span>
                  <div className={`dropdown-content`}>
                    <div className="dropdown-item" onClick={() => handleOptionClick('1 Bhk')}>
                      <span>1 Bhk</span>
                    </div>
                    <div className="dropdown-item" onClick={() => handleOptionClick('2 Bhk')}>
                      <span>2 Bhk</span>
                    </div>
                    <div className="dropdown-item" onClick={() => handleOptionClick('3 Bhk')}>
                      <span>3 Bhk</span>
                    </div>
                    <div className="dropdown-item" onClick={() => handleOptionClick('4 Bhk')}>
                      <span>4 Bhk</span>
                    </div>
                    <div className="dropdown-item" onClick={() => handleOptionClick('5 Bhk')}>
                      <span>5 Bhk</span>
                    </div>
                    <div className="dropdown-item" onClick={() => handleOptionClick('5+ Bhk')}>
                      <span>5+ Bhk</span>
                    </div>
                  </div>
                </div>
                <div className="dropdown-item" onClick={() => handleOptionClick('House/Villa')}>
                  <span>House/Villa</span>
                  <div className={`dropdown-content`}>
                    {/* Add House/Villa options */}
                  </div>
                </div>
                <div className="dropdown-item" onClick={() => handleOptionClick('Plot')}>
                  <span>Plot</span>
                  <div className={`dropdown-content`}>
                    <div className="dropdown-item">
                      {/* Add Range Selector component or input as needed */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown-item" onClick={() => handleOptionClick('Commercial')}>
              <span>Commercial</span>
              <div className={`dropdown-content`}>
                {/* Add Commercial options */}
              </div>
            </div>
            <div className="dropdown-item" onClick={() => handleOptionClick('Other Property Types')}>
              <span>Other Property Types</span>
              <div className={`dropdown-content`}>
                {/* Add Other Property Types options */}
              </div>
            </div>
            <div className="dropdown-item" onClick={() => handleOptionClick('Land')}>
              <span>Land</span>
              {/* Add Land options */}
            </div>
            <div className="dropdown-item" onClick={() => handleOptionClick('Vacation Rentals')}>
              <span>Vacation Rentals</span>
              {/* Add Vacation Rentals options */}
            </div>
            <div className="dropdown-item" onClick={() => handleOptionClick('Mixed-Use Developments')}>
              <span>Mixed-Use Developments</span>
              {/* Add Mixed-Use Developments options */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomDropdown;

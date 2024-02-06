import React, { useState, useRef } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaHome, FaWallet } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import useOutsideClick from "./useOutsideClick";

const PropertyType = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [activePropertyType, setActivePropertyType] = useState("");
  const [activeSubType, setActiveSubType] = useState("");
  const [isSubpropertyTypeOpen, setIsSubpropertyTypeOpen] = useState(false);
  const [isBedroomsOpen, setIsBedroomsOpen] = useState(false);

  const dropdownRef = useRef(null); // Create a ref for the dropdown
  const propertyType = [
    {
      name: "Residential",
      SubpropertyType: [
        { type: "House", bedrooms: ["1 Bedroom", "2 Bedrooms", "3 Bedrooms"] },
        { type: "Apartment", bedrooms: ["Studio", "1 Bedroom", "2 Bedrooms"] },
        { type: "Condo", bedrooms: ["1 Bedroom", "2 Bedrooms"] },
      ],
    },
    {
      name: "Commercial",
      SubpropertyType: [
        { type: "House", bedrooms: ["1 Bedroom", "2 Bedrooms", "3 Bedrooms"] },
        { type: "Apartment", bedrooms: ["Studio", "1 Bedroom", "2 Bedrooms"] },
        { type: "Condo", bedrooms: ["1 Bedroom", "2 Bedrooms"] },
      ],
    },
    {
      name: "Other Property Types",
      SubpropertyType: ["Office", "Retail", "Warehouse"],
    },
  ];

  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
    // You may want to reset other state variables here
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setActivePropertyType("");
    setActiveSubType("");
    setIsSubpropertyTypeOpen(false);
    setIsBedroomsOpen(false);
  };

  const toggleSubpropertyTypeDropdown = () => {
    setIsSubpropertyTypeOpen(!isSubpropertyTypeOpen);
    setIsBedroomsOpen(false);
  };

  const toggleBedroomsDropdown = () => {
    setIsBedroomsOpen(!isBedroomsOpen);
  };

  const handlePropertyTypeSelect = (option) => {
    if (activePropertyType === option) {
      // Deactivate if already active
      setSelectedOption("");
      setActivePropertyType("");
      setActiveSubType("");
      setIsSubpropertyTypeOpen(false);
      setIsBedroomsOpen(false);
      onSelect({
        propertyType: "",
        subType: "",
        bedroom: "",
      });
    } else {
      // Activate if not already active
      setSelectedOption(option);
      setActivePropertyType(option);
      setActiveSubType("");
      setIsSubpropertyTypeOpen(true);
      setIsBedroomsOpen(false);
      onSelect({
        propertyType: option,
        subType: "",
        bedroom: "",
      });
    }
  };

  const handleSubpropertyTypeelect = (option) => {
    if (activeSubType === option) {
      // Deactivate if already active
      setSelectedOption("");
      setActiveSubType("");
      setIsBedroomsOpen(false);
      onSelect({
        propertyType: activePropertyType,
        subType: "",
        bedroom: "",
      });
    } else {
      // Activate if not already active
      setSelectedOption(option);
      setActiveSubType(option);
      setIsBedroomsOpen(true);
      onSelect({
        propertyType: activePropertyType,
        subType: option,
        bedroom: "",
      });
    }
  };

  const handleBedroomSelect = (option) => {
    if (selectedOption === option) {
      // Deactivate if already active
      setSelectedOption("");
      onSelect({
        propertyType: activePropertyType,
        subType: activeSubType,
        bedroom: "",
      });
    } else {
      // Activate if not already active
      setSelectedOption(option);
      onSelect({
        propertyType: activePropertyType,
        subType: activeSubType,
        bedroom: option,
      });
    }
  };
  return (
    // <div className="relative w-full  sm:w-96 " ref={dropdownRef} >

    // <motion.button
    //   onClick={toggleDropdown}
    //   className=" text-black w-full sm:w-96 flex justify-between items-center px-4 py-2 rounded-md focus:outline-none transition-all duration-300 ease-in-out"
    //   whileHover={{ scale: 1.02 }}
    // > <FaHome className="dropdown-icon-primary" />
    //   <span className="truncate font-semibold">{selectedOption || "Select Property Type"}</span>
    //   <div
    //     animate={{ rotate: isOpen ? 180 : 0 }}
    //     className="h-4 w-4 transform transition-transform duration-300"
    //   >
    //     <BiChevronDown size={20}  className="dropdown-icon-secondary"  />
    //   </div>
    // </motion.button>

    // {isOpen && (
    //   <motion.div
    //     initial={{ opacity: 0, y: -10 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     exit={{ opacity: 0, y: -10 }}
    //     transition={{ duration: 0.3 }}
    //     className="absolute mt-8 w-full  rounded-md sm:w-96 z-10"
    //   >
    //     <div className="  rounded-md shadow-md overflow-hidden" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
    //       {propertyType.map(({ name, SubpropertyType }) => (
    //         <div key={name}>
    //           <motion.div
    //             onClick={() => handlePropertyTypeSelect(name)}
    //             className={`cursor-pointer py-3 px-4  text-left flex items-center ${
    //               name === activePropertyType ? " active" : ""
    //             }`}
    //             whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    //           >
    //             <span className="text-white font-medium">{name}</span>
    //             <motion.div
    //               animate={{ rotate: activePropertyType === name && isSubpropertyTypeOpen ? 180 : 0 }}
    //               className="h-4 w-4 ml-auto transform transition-transform duration-300"
    //             >
    //               <BsChevronDown />
    //             </motion.div>
    //           </motion.div>

    //           {activePropertyType === name && isSubpropertyTypeOpen && (
    //             <motion.div
    //               initial={{ opacity: 0, x: -10 }}
    //               animate={{ opacity: 1, x: 0 }}
    //               exit={{ opacity: 0, x: -10 }}
    //               transition={{ duration: 0.3 }}
    //               className="pl-8 m-2 p-2"
    //             >
    //               {Array.isArray(SubpropertyType)
    //                 ? SubpropertyType.map((subType) => (
    //                     <div key={subType.type || subType}>
    //                       <motion.div
    //                         onClick={() => handleSubpropertyTypeelect(subType.type || subType)}
    //                         className={`cursor-pointer w-fit py-2 px-4  text-white text-left focus:outline-none transition-all duration-300 ease-in-out ${
    //                           (subType.type || subType) === activeSubType
    //                             ? "text-black border-l-4 pl-2 border-orange-500 bg-black border "
    //                             : ""
    //                         }`}
    //                         whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    //                       >
    //                         {subType.type || subType}
    //                       </motion.div>

    //                       {subType.type === activeSubType && isBedroomsOpen && (
    //                         <motion.div
    //                           initial={{ opacity: 0, x: -10 }}
    //                           animate={{ opacity: 1, x: 0 }}
    //                           exit={{ opacity: 0, x: -10 }}
    //                           transition={{ duration: 0.3 }}
    //                           className="pl-8 mt-2"
    //                         >
    //                           {subType.bedrooms.map((bedroom) => (
    //                             <motion.div
    //                               key={bedroom}
    //                               onClick={() => handleBedroomSelect(bedroom)}
    //                               className={`cursor-pointer py-2 px-4  text-white  text-left focus:outline-none transition-all duration-300 ease-in-out ${
    //                                 bedroom === selectedOption
    //                                   ? "text-orange-500 border-l-4 pl-2 active:bg-black border-orange-500 "
    //                                   : ""
    //                               }`}
    //                               whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    //                             >
    //                               {bedroom}
    //                             </motion.div>
    //                           ))}
    //                         </motion.div>
    //                       )}
    //                     </div>
    //                   ))
    //                 : null}
    //             </motion.div>
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   </motion.div>
    // )}
    // </div>

    // <div className="relative w-full sm:w-96">
    //   <button
    //     onClick={toggleDropdown}
    //     className="text-black w-full flex justify-between items-center px-4 py-2 rounded-md focus:outline-none transition-all duration-300 ease-in-out bg-white shadow-md"
    //   >
    //     <span className="truncate font-semibold">{selectedOption || "Select Property Type"}</span>
    //     <div className="h-4 w-4">
    //       <BiChevronDown size={20} className="dropdown-icon-secondary" />
    //     </div>
    //   </button>

    //   {isOpen && (
    //     <div className="absolute mt-2 w-full rounded-md shadow-md bg-white z-10">
    //       {propertyType.map(({ name, SubpropertyType }) => (
    //         <div key={name} className="border-b border-gray-200">
    //           <div
    //             onClick={() => handlePropertyTypeSelect(name)}
    //             className={`cursor-pointer py-3 px-4 text-left flex items-center ${
    //               name === activePropertyType ? "bg-gray-100" : ""
    //             }`}
    //           >
    //             <span className="font-semibold">{name}</span>
    //             <div className="ml-auto">
    //               <BsChevronDown />
    //             </div>
    //           </div>

    //           {activePropertyType === name && isSubpropertyTypeOpen && (
    //             <div className="pl-8">
    //               {Array.isArray(SubpropertyType)
    //                 ? SubpropertyType.map((subType) => (
    //                     <div key={subType.type || subType} className="border-b border-gray-200">
    //                       <div
    //                         onClick={() => handleSubpropertyTypeelect(subType.type || subType)}
    //                         className={`cursor-pointer py-2 px-4 text-left ${
    //                           (subType.type || subType) === activeSubType ? "bg-gray-100" : ""
    //                         }`}
    //                       >
    //                         {subType.type || subType}
    //                       </div>

    //                       {subType.type === activeSubType && isBedroomsOpen && (
    //                         <div className="pl-8">
    //                           {subType.bedrooms.map((bedroom) => (
    //                             <div
    //                               key={bedroom}
    //                               onClick={() => handleBedroomSelect(bedroom)}
    //                               className={`cursor-pointer py-2 px-4 text-left ${
    //                                 bedroom === selectedOption ? "bg-gray-100" : ""
    //                               }`}
    //                             >
    //                               {bedroom}
    //                             </div>
    //                           ))}
    //                         </div>
    //                       )}
    //                     </div>
    //                   ))
    //                 : null}
    //             </div>
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //   )}
    // </div>

    // <div className="relative w-full ">
    //   <button
    //     onClick={toggleDropdown}
    //     className="text-black w-96 flex justify-between items-center px-4 py-2 rounded-md focus:outline-none transition-all duration-300 ease-in-out bg-white shadow-md"
    //   >
    //     <span className="truncate font-semibold">
    //       {selectedOption || "Select Property Type"}
    //     </span>
    //     <div className="h-4 w-4">
    //       <BiChevronDown size={20} className="dropdown-icon-secondary" />
    //     </div>
    //   </button>

    //   {isOpen && (
    //     <div className="absolute mt-2 w-96 rounded-md shadow-md z-10">
    //       <div className="bg-white  rounded-md">
    //         {propertyType.map(({ name, SubpropertyType }) => (
    //           <div key={name} className="">
    //             <div
    //               onClick={() => handlePropertyTypeSelect(name)}
    //               className={`cursor-pointer text-gray-500  text-base hover:font-bold py-3 my-2 px-4 text-left flex items-center ${
    //                 name === activePropertyType ? " font-bold  text-gray-500" : ""
    //               }`}
    //             >
    //               <span className="">{name}</span>
    //               <div className="ml-auto">
    //                 <BsChevronDown />
    //               </div>
    //             </div>

    //             {activePropertyType === name && isSubpropertyTypeOpen && (
    //               <div className="">
    //                 {Array.isArray(SubpropertyType)
    //                   ? SubpropertyType.map((subType) => (
    //                       <div
    //                         key={subType.type || subType}
    //                         className=""
    //                       >
    //                         <div
    //                           onClick={() =>
    //                             handleSubpropertyTypeelect(
    //                               subType.type || subType
    //                             )
    //                           }
    //                           className={`cursor-pointer hover:bg-gray-100 hover:font-bold hover:text-gray-500 pl-10 py-2 px-4 text-left ${
    //                             (subType.type || subType) === activeSubType
    //                               ? " font-bold bg-gray-100 text-gray-500"
    //                               : ""
    //                           }`}
    //                         >
    //                           {subType.type || subType}
    //                         </div>

    //                         {subType.type === activeSubType &&
    //                           isBedroomsOpen && (
    //                             <div className="flex justify-center items-center">
    //                               {subType.bedrooms.map((bedroom) => (
    //                                 <div
    //                                   key={bedroom}
    //                                   onClick={() =>
    //                                     handleBedroomSelect(bedroom)
    //                                   }
    //                                   className={`cursor-pointer my-2 mx-1 text-sm rounded-full px-4 py-2 text-gray-500 border-gray-300 ${
    //                                     bedroom === selectedOption
    //                                       ? "bg-orange-500 border  text-white"
    //                                       : "border "
    //                                   }`}
    //                                 >
    //                                   <h1 className="flex items-center">
    //                                     {bedroom}
    //                                   </h1>
    //                                 </div>
    //                               ))}
    //                             </div>
    //                           )}
    //                       </div>
    //                     ))
    //                   : null}
    //               </div>
    //             )}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   )}
    // </div>

    <div className="relative w-full bg-white" ref={dropdownRef}>
    <motion.button
      onClick={toggleDropdown}
      className="text-gray-500 w-96 flex justify-between items-center px-4 py-2 rounded-md focus:outline-none transition-all duration-300 ease-in-out "
   
    > <FaHome className="dropdown-icon-primary" />
      <span className="truncate font-semibold">
        {selectedOption || "Select Property Type"}
      </span>
      <div className="h-4 w-4 bg-white">
        <BiChevronDown size={20} className="dropdown-icon-secondary" />
      </div>
    </motion.button>

    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="absolute mt-2 w-96 rounded-md  z-10"
      >
        <div className=" rounded-md bg-white">
          {propertyType.map(({ name, SubpropertyType }) => (
            <div key={name} className="">
              <div
                onClick={() => handlePropertyTypeSelect(name)}
                className={`cursor-pointer text-gray-500  text-base hover:font-bold py-3 my-2 px-4 text-left flex items-center ${
                  name === activePropertyType ? " font-bold  text-gray-500" : ""
                }`}
              >
                <span className="">{name}</span>
                <div className="ml-auto">
                  <BsChevronDown />
                </div>
              </div>

              {activePropertyType === name && isSubpropertyTypeOpen && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className=""
                >
                  {Array.isArray(SubpropertyType)
                    ? SubpropertyType.map((subType) => (
                        <div
                          key={subType.type || subType}
                          className=""
                        >
                          <div
                            onClick={() =>
                              handleSubpropertyTypeelect(
                                subType.type || subType
                              )
                            }
                            className={`cursor-pointer hover:bg-gray-100 hover:font-bold hover:text-gray-500 pl-10 py-2 px-4 text-left ${
                              (subType.type || subType) === activeSubType
                                ? " font-bold bg-gray-100 text-gray-500"
                                : ""
                            }`}
                          >
                            {subType.type || subType}
                          </div>

                          {subType.type === activeSubType &&
                            isBedroomsOpen && (
                              <div className="flex justify-center items-center">
                                {subType.bedrooms.map((bedroom) => (
                                  <div
                                    key={bedroom}
                                    onClick={() =>
                                      handleBedroomSelect(bedroom)
                                    }
                                    className={`cursor-pointer my-2 mx-1 text-sm rounded-full px-4 py-2 text-gray-500 border-gray-300 ${
                                      bedroom === selectedOption
                                        ? "bg-orange-500 border  text-white"
                                        : "border "
                                    }`}
                                  >
                                    <h1 className="flex items-center">
                                      {bedroom}
                                    </h1>
                                  </div>
                                ))}
                              </div>
                            )}
                        </div>
                      ))
                    : null}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    )}
  </div>
  );
};

export default PropertyType;

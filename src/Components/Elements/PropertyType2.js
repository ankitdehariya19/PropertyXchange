// import React, { useState } from "react";
// import { BsChevronDown } from "react-icons/bs";

// const PropertyType = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState("");
//   const [activePropertyType, setActivePropertyType] = useState("");
//   const [activeSubType, setActiveSubType] = useState("");
//   const [isSubTypesOpen, setIsSubTypesOpen] = useState(false);
//   const [isBedroomsOpen, setIsBedroomsOpen] = useState(false);

//   const propertyTypes = [
//     {
//       name: "Residential",
//       subTypes: [
//         { type: "House", bedrooms: ["1 Bedroom", "2 Bedrooms", "3 Bedrooms"] },
//         { type: "Apartment", bedrooms: ["Studio", "1 Bedroom", "2 Bedrooms"] },
//         { type: "Condo", bedrooms: ["1 Bedroom", "2 Bedrooms"] },
//       ],
//     },
//     { name: "Commercial", subTypes: [
//         { type: "House", bedrooms: ["1 Bedroom", "2 Bedrooms", "3 Bedrooms"] },
//         { type: "Apartment", bedrooms: ["Studio", "1 Bedroom", "2 Bedrooms"] },
//         { type: "Condo", bedrooms: ["1 Bedroom", "2 Bedrooms"] },
//       ], },
//     { name: "Other Property Types", subTypes: ["Office", "Retail", "Warehouse"] },
//   ];

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//     setActivePropertyType("");
//     setActiveSubType("");
//     setIsSubTypesOpen(false);
//     setIsBedroomsOpen(false);
//   };

//   const toggleSubTypesDropdown = () => {
//     setIsSubTypesOpen(!isSubTypesOpen);
//     setIsBedroomsOpen(false);
//   };

//   const toggleBedroomsDropdown = () => {
//     setIsBedroomsOpen(!isBedroomsOpen);
//   };

// //   const handlePropertyTypeSelect = (option) => {
// //     setSelectedOption(option);
// //     setActivePropertyType(option);
// //     setActiveSubType("");
// //     setIsSubTypesOpen(true);
// //     setIsBedroomsOpen(false);
// //   };

// //   const handleSubTypeSelect = (option) => {
// //     setSelectedOption(option);
// //     setActiveSubType(option);
// //     setIsBedroomsOpen(true);
// //   };

// //   const handleBedroomSelect = (option) => {
// //     setSelectedOption(option);
// //     // Additional logic for bedroom selection if needed
// //   };




// const handlePropertyTypeSelect = (option) => {
//     if (activePropertyType === option) {
//       // Deactivate if already active
//       setSelectedOption("");
//       setActivePropertyType("");
//       setActiveSubType("");
//       setIsSubTypesOpen(false);
//       setIsBedroomsOpen(false);
//     } else {
//       // Activate if not already active
//       setSelectedOption(option);
//       setActivePropertyType(option);
//       setActiveSubType("");
//       setIsSubTypesOpen(true);
//       setIsBedroomsOpen(false);
//     }
//   };
  
//   const handleSubTypeSelect = (option) => {
//     if (activeSubType === option) {
//       // Deactivate if already active
//       setSelectedOption("");
//       setActiveSubType("");
//       setIsBedroomsOpen(false);
//     } else {
//       // Activate if not already active
//       setSelectedOption(option);
//       setActiveSubType(option);
//       setIsBedroomsOpen(true);
//     }
//   };
  
//   const handleBedroomSelect = (option) => {
//     if (selectedOption === option) {
//       // Deactivate if already active
//       setSelectedOption("");
//     } else {
//       // Activate if not already active
//       setSelectedOption(option);
//     }
//   };
  
//   return (
//     <div className="relative">
//       <button
//         onClick={toggleDropdown}
//         className="bg-gray-300 px-4 py-2 rounded-md flex items-center space-x-2 focus:outline-none"
//       >
//         <span>{selectedOption || "Select Property Type"}</span>
//         <BsChevronDown className="h-4 w-4" />
//       </button>

//       {isOpen && (
//         <div className="absolute mt-2 w-full z-10">
//           <div className="bg-white border rounded-md shadow-md">
//           {propertyTypes.map(({ name, subTypes }) => (
//   <div key={name}>
//     <div>
//       <h1
//         onClick={() => handlePropertyTypeSelect(name)}
//         className={`cursor-pointer py-2 px-4 hover:bg-gray-100 ${
//           name === activePropertyType ? "bg-gray-100 active" : ""
//         }`}
//       >
//         {name}
//       </h1>
//     </div>
//     {activePropertyType === name && isSubTypesOpen && (
//       <div className="pl-8">
//         {Array.isArray(subTypes)
//           ? subTypes.map((subType) => (
//               <div key={subType.type || subType}>
//                 <h1
//                   onClick={() => handleSubTypeSelect(subType.type || subType)}
//                   className={`cursor-pointer py-2 px-4 hover:bg-gray-100 subType ${
//                     (subType.type || subType) === activeSubType ? "bg-gray-100 active" : ""
//                   }`}
//                 >
//                   {subType.type || subType}
//                 </h1>
//                 {subType.type === activeSubType && isBedroomsOpen && subType.bedrooms && (
//                   <div className="pl-8">
//                     {subType.bedrooms.map((bedroom) => (
//                       <div key={bedroom}>
//                         <h1
//                           onClick={() => handleBedroomSelect(bedroom)}
//                           className={`cursor-pointer py-2 px-4 hover:bg-gray-100 subType ${
//                             bedroom === selectedOption ? "bg-gray-100 active" : ""
//                           }`}
//                         >
//                           {bedroom}
//                         </h1>
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>
//             ))
//           : null}
//       </div>
//     )}
//   </div>
// ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PropertyType;






import React, { useState , useRef  } from "react";
import { BsChevronDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { FaHome, FaWallet } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";
import useOutsideClick from './useOutsideClick';

const PropertyType = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [activePropertyType, setActivePropertyType] = useState("");
  const [activeSubType, setActiveSubType] = useState("");
  const [isSubTypesOpen, setIsSubTypesOpen] = useState(false);
  const [isBedroomsOpen, setIsBedroomsOpen] = useState(false);
  
  const dropdownRef = useRef(null); // Create a ref for the dropdown
  const propertyTypes = [
    {
      name: "Residential",
      subTypes: [
        { type: "House", bedrooms: ["1 Bedroom", "2 Bedrooms", "3 Bedrooms"] },
        { type: "Apartment", bedrooms: ["Studio", "1 Bedroom", "2 Bedrooms"] },
        { type: "Condo", bedrooms: ["1 Bedroom", "2 Bedrooms"] },
      ],
    },
    { name: "Commercial", subTypes: [
        { type: "House", bedrooms: ["1 Bedroom", "2 Bedrooms", "3 Bedrooms"] },
        { type: "Apartment", bedrooms: ["Studio", "1 Bedroom", "2 Bedrooms"] },
        { type: "Condo", bedrooms: ["1 Bedroom", "2 Bedrooms"] },
      ], },
    { name: "Other Property Types", subTypes: ["Office", "Retail", "Warehouse"] },
  ];

  useOutsideClick(dropdownRef, () => {
    setIsOpen(false);
    // You may want to reset other state variables here
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setActivePropertyType("");
    setActiveSubType("");
    setIsSubTypesOpen(false);
    setIsBedroomsOpen(false);
  };

  const toggleSubTypesDropdown = () => {
    setIsSubTypesOpen(!isSubTypesOpen);
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
      setIsSubTypesOpen(false);
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
      setIsSubTypesOpen(true);
      setIsBedroomsOpen(false);
      onSelect({
        propertyType: option,
        subType: "",
        bedroom: "",
      });
    }
  };
  
  const handleSubTypeSelect = (option) => {
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
  //   <div className="relative w-[700px]">
  //   <button
  //     onClick={toggleDropdown}
  //     className="bg-gray-300 w-96 flex justify-between items-center px-4 py-2 rounded-md focus:outline-none"
  //   >
  //     <span className="truncate">{selectedOption || "Select Property Type"}</span>
  //     <BsChevronDown className="h-4 w-4" />
  //   </button>
  
  //   {isOpen && (
  //     <div className="absolute mt-2 w-full z-10">
  //       <div className="bg-white border rounded-md shadow-md">
  //         {propertyTypes.map(({ name, subTypes }) => (
  //           <div key={name}>
  //             <div>
  //               <h1
  //                 onClick={() => handlePropertyTypeSelect(name)}
  //                 className={`cursor-pointer py-2 px-4 hover:bg-gray-100 text-left flex  items-center ml-3 ${
  //                   name === activePropertyType ? "bg-gray-200 active" : ""
  //                 }`}
  //               >
  //                 {name}
  //                 <BsChevronDown className="h-4 w-4 flex justify-center items-center ml-3" />
  //               </h1>
  //             </div>
  //             {activePropertyType === name && isSubTypesOpen && (
  //               <div className="pl-8  m-2 p-2 ">
  //                 {Array.isArray(subTypes)
  //                   ? subTypes.map((subType) => (
  //                       <div key={subType.type || subType}>
  //                         <h1
  //                           onClick={() => handleSubTypeSelect(subType.type || subType)}
  //                           className={`cursor-pointer py-2 px-4 hover:text-orange-500 text-left  focus:outline-none transition-all duration-300 ease-in-out ${
  //                             (subType.type || subType) === activeSubType ? " text-orange-500 shadow-orange-500 border-none  " : ""
  //                           }`}
  //                         >
  //                           {subType.type || subType}
                            
  //                         </h1>
  //                         {subType.type === activeSubType && isBedroomsOpen && (
  //                           <div className="pl-8 m-2 flex w-full  ">
  //                             {subType.bedrooms.map((bedroom) => (
  //                               <div key={bedroom}>
  //                               <h1
  //                                 onClick={() => handleBedroomSelect(bedroom)}
  //                                 className={`bg-gray-100 mx-2 my-3 shadow-md font-semibold py-2 px-7 text-gray-500 rounded-full focus:outline-none transition-all duration-300 ease-in-out ${
  //                                   bedroom === selectedOption ? "bg-orange-500 text-white active" : ""
  //                                 }`}
  //                               >
  //                                 {bedroom}
  //                               </h1>
  //                             </div>
                              
  //                             ))}
  //                           </div>
  //                         )}
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


<div className="relative w-full  sm:w-96 " ref={dropdownRef}>

<motion.button
  onClick={toggleDropdown}
  className="bg-white text-black w-full sm:w-96 flex justify-between items-center px-4 py-2 rounded-md focus:outline-none transition-all duration-300 ease-in-out"
  whileHover={{ scale: 1.02 }}
> <FaHome className="dropdown-icon-primary" />
  <span className="truncate font-semibold">{selectedOption || "Select Property Type"}</span>
  <div
    animate={{ rotate: isOpen ? 180 : 0 }}
    className="h-4 w-4 transform transition-transform duration-300"
  > 
    <BiChevronDown size={20}  className="dropdown-icon-secondary"  />
  </div>
</motion.button>

{isOpen && (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="absolute mt-2 w-full bg-white rounded-md sm:w-96 z-10"
  >
    <div className="bg-white border rounded-md shadow-md overflow-hidden">
      {propertyTypes.map(({ name, subTypes }) => (
        <div key={name}>
          <motion.div
            onClick={() => handlePropertyTypeSelect(name)}
            className={`cursor-pointer py-3 px-4 hover:bg-gray-100 text-left flex items-center ${
              name === activePropertyType ? "bg-orange-200 active" : ""
            }`}
            whileHover={{ backgroundColor: "rgba(255, 165, 0, 0.2)" }}
          >
            <span className="text-orange-500 font-medium">{name}</span>
            <motion.div
              animate={{ rotate: activePropertyType === name && isSubTypesOpen ? 180 : 0 }}
              className="h-4 w-4 ml-auto transform transition-transform duration-300"
            >
              <BsChevronDown />
            </motion.div>
          </motion.div>

          {activePropertyType === name && isSubTypesOpen && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="pl-8 m-2 p-2"
            >
              {Array.isArray(subTypes)
                ? subTypes.map((subType) => (
                    <div key={subType.type || subType}>
                      <motion.div
                        onClick={() => handleSubTypeSelect(subType.type || subType)}
                        className={`cursor-pointer hover:bg-orange-100 py-2 px-4 hover:text-orange-500 text-left focus:outline-none transition-all duration-300 ease-in-out ${
                          (subType.type || subType) === activeSubType
                            ? "text-black border-l-4 pl-2 border-orange-500 bg-orange-200"
                            : ""
                        }`}
                        whileHover={{ backgroundColor: "rgba(255, 165, 0, 0.2)" }}
                      >
                        {subType.type || subType}
                      </motion.div>

                      {subType.type === activeSubType && isBedroomsOpen && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.3 }}
                          className="pl-8 mt-2"
                        >
                          {subType.bedrooms.map((bedroom) => (
                            <motion.div
                              key={bedroom}
                              onClick={() => handleBedroomSelect(bedroom)}
                              className={`cursor-pointer py-2 px-4 hover:text-orange-500 hover:bg-orange-100 text-left focus:outline-none transition-all duration-300 ease-in-out ${
                                bedroom === selectedOption
                                  ? "text-orange-500 border-l-4 pl-2 border-orange-500 bg-orange-200"
                                  : ""
                              }`}
                              whileHover={{ backgroundColor: "rgba(255, 165, 0, 0.2)" }}
                            >
                              {bedroom}
                            </motion.div>
                          ))}
                        </motion.div>
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

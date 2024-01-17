// import React, { useState } from "react";
// import Button from "../Elements/Button";
// import CustomRangeSelector from "../Elements/CustomRangeSelector";
// import BudgetRangeSelector from "../Elements/BudgetRangeSelector";
// import PropertySearchComponent from "./PropertySearchComponent";

// const Demo = () => {
//   const locations = ["New York", "Los Angeles", "Chicago", "San Francisco"];

//   const [isPropertyTypeVisible, setIsPropertyTypeVisible] = useState(false);
//   const [isResidentialVisible, setIsResidentialVisible] = useState(false);
//   const [isDivVisible, setIsDivVisible] = useState(false);
//   const [isHouseVisible, setIsHouseVisible] = useState(false);
//   const [isPlotVisible, setIsPlotVisible] = useState(false);
//   const [isCommercialVisible, setIsCommercialVisible] = useState(false);
//   const [isOtherPropertyVisible, setIsOtherPropertyVisible] = useState(false);
//   const [selectedValues, setSelectedValues] = useState([]);
//   const [selectedVillaValues, setSelectedVillaValues] = useState([]);
//   const [selectedCommercialValues, setSelectedCommercialValues] = useState([]);
//   const [selectedAgriculturalValues, setSelectedAgriculturalValues] = useState([]);
//   const [selectedBudget, setSelectedBudget] = useState([50000, 100000]);
//   const [isBudgetVisible, setIsBudgetVisible] = useState(false);
  

//   const handleLocationSelect = (selectedLocation) => {
//     console.log("Selected Location in App:", selectedLocation);
//   };
//   const toggleVisibility = () => {
//     setIsDivVisible(!isDivVisible);
//   };
//   const toggleHouseVisibility = () => {
//     setIsHouseVisible(!isHouseVisible);
//   };
//   const togglePlotVisibility = () => {
//     setIsPlotVisible(!isPlotVisible);
//   };

//   const toggleResidentialVisibility = () => {
//     setIsResidentialVisible(!isResidentialVisible);
//   };
//   const toggleCommercialVisibility = () => {
//     setIsCommercialVisible(!isCommercialVisible);
//   };
//   const toggleOtherPropertyVisibility = () => {
//     setIsOtherPropertyVisible(!isOtherPropertyVisible);
//   };
//   const handleButtonClick = (value) => {
//     const index = selectedValues.indexOf(value);
//     if (index !== -1) {
//       // If value is already selected, remove it
//       setSelectedValues([...selectedValues.slice(0, index), ...selectedValues.slice(index + 1)]);
//     } else {
//       // If value is not selected, add it
//       setSelectedValues([...selectedValues, value]);
//     }
//   };
//   const handleVillaButtonClick = (value) => {
//     const index = selectedVillaValues.indexOf(value);
//     if (index !== -1) {
//       // If value is already selected, remove it
//       setSelectedVillaValues([...selectedVillaValues.slice(0, index), ...selectedVillaValues.slice(index + 1)]);
//     } else {
//       // If value is not selected, add it
//       setSelectedVillaValues([...selectedVillaValues, value]);
//     }
//   };
//   const handleCommercialButtonClick = (value) => {
//     const index = selectedCommercialValues.indexOf(value);
//     if (index !== -1) {
//       // If value is already selected, remove it
//       setSelectedCommercialValues([...selectedCommercialValues.slice(0, index), ...selectedCommercialValues.slice(index + 1)]);
//     } else {
//       // If value is not selected, add it
//       setSelectedCommercialValues([...selectedCommercialValues, value]);
//     }
//   };

//   const handleAgriculturalButtonClick = (value) => {
//     const index = selectedAgriculturalValues.indexOf(value);
//     if (index !== -1) {
//       // If value is already selected, remove it
//       setSelectedAgriculturalValues([...selectedAgriculturalValues.slice(0, index), ...selectedAgriculturalValues.slice(index + 1)]);
//     } else {
//       // If value is not selected, add it
//       setSelectedAgriculturalValues([...selectedAgriculturalValues, value]);
//     }
//   };

//   const handleRangeSelect = (selectedRange) => {
//     // Use the selectedRange in your logic (e.g., perform a search)
//     console.log("Selected Range:", selectedRange);
//   };
//   const togglePropertyTypeVisibility = () => {
//     setIsPropertyTypeVisible(!isPropertyTypeVisible);
//     setIsBudgetVisible(false);
//   };
//   const handleBudgetChange = (selectedBudget) => {
//     setSelectedBudget(selectedBudget);
//     // Use the selectedBudget in your logic (e.g., perform a search)
//     console.log("Selected Budget Range:", selectedBudget);
//   };
//   const toggleBudgetVisibility = () => {
//     setIsBudgetVisible(!isBudgetVisible);
//     setIsPropertyTypeVisible(false);
//   };

  
  
//   return (
//     <>
//       <div className="flex flex-col mt-2 justify-center h-full items-center w-full bg-slate-500">
//         <div className="flex  gap-20  justify-around bg-red-600 h-24 items-center w-3/5 px-10 rounded-full ">
//           <div className="bg-purple-400 flex justify-center items-center w-full h-full">
//             <PropertySearchComponent
//               locations={locations}
//               onLocationSelect={handleLocationSelect}
//             />
//           </div>
//           <div className="bg-pink-400 flex justify-center items-center w-full h-full">
//             <h1 onClick={togglePropertyTypeVisibility}>Property Type</h1>
//             <div></div>
//           </div>

//           <div className="bg-yellow-200 flex justify-center items-center w-full h-full">
//             <h1 onClick={toggleBudgetVisibility}> Budget </h1>
//             <div></div>
//           </div>
//           <div className="bg-orange-300 flex justify-center items-center w-full h-full">
//             <button>search</button>
//           </div>
//         </div>
//         <div className="flex w-3/5 justify-between bg-blue-400 ">

//           <div className="w-full z-50  ">
//             {isPropertyTypeVisible && (
//               <div className="min-w-[650px] ml-80 h-fit  p-2  bg-white rounded-b-lg ">
//                 <div className="w-full h-fit  ">
//                   <h1  className="w-fit font-medium hover:bg-slate-300 py-2 px-10 rounded-md transition-all transform duration-300" onClick={toggleResidentialVisibility}>Residential</h1>
//                   {isResidentialVisible && (
//                     <div className="w-fit ml-10 ">
//                       <div className="ml-5 p-1 ">
//                         <h1 className="bg-gray-300 w-fit  py-2 px-11 font-normal text-black  transition-all transform duration-300 border hover:border-orange-500 flex justify-center items-center hover:bg-slate-100 rounded-full" onClick={toggleVisibility}>Flat</h1>
//                         {isDivVisible && (
//                            <div className="ml-5 p-5 flex gap-4">
//                            <Button
//                              onClick={() => handleButtonClick("1bhk")}
//                              isActive={selectedValues.includes("1bhk")}
//                            >
//                              1bhk
//                            </Button>
//                            <Button
//                              onClick={() => handleButtonClick("2bhk")}
//                              isActive={selectedValues.includes("2bhk")}
//                            >
//                              2bhk
//                            </Button>
//                            <Button
//                              onClick={() => handleButtonClick("3bhk")}
//                              isActive={selectedValues.includes("3bhk")}
//                            >
//                              3bhk
//                            </Button>
//                            <Button
//                              onClick={() => handleButtonClick("4bhk")}
//                              isActive={selectedValues.includes("4bhk")}
//                            >
//                              4bhk
//                            </Button>
//                            <Button
//                              onClick={() => handleButtonClick("5bhk")}
//                              isActive={selectedValues.includes("5bhk")}
//                            >
//                              5bhk
//                            </Button>
                     
//                            {/* <div className="flex">
//                              <p>Selected Values: {selectedValues.join(', ')}</p>
//                            </div> */}
//                          </div>
//                         )}
//                       </div>
//                       <div className="ml-5 p-1 ">
//                         <h1 className="bg-gray-300 w-fit  py-2 px-4 font-normal text-black  transition-all transform duration-300 border hover:border-orange-500 flex justify-center items-center hover:bg-slate-100 rounded-full" onClick={toggleHouseVisibility}>House/Villa</h1>
//                         {isHouseVisible && (
//                            <div className="gap-x-5 p-5 flex ml-5">
//                            <Button
//                              onClick={() => handleVillaButtonClick("1bhk")}
//                              isActive={selectedVillaValues.includes("1bhk")}
//                            >
//                              1bhk
//                            </Button>
//                            <Button
//                              onClick={() => handleVillaButtonClick("2bhk")}
//                              isActive={selectedVillaValues.includes("2bhk")}
//                            >
//                              2bhk
//                            </Button>
//                            <Button
//                              onClick={() => handleVillaButtonClick("3bhk")}
//                              isActive={selectedVillaValues.includes("3bhk")}
//                            >
//                              3bhk
//                            </Button>
//                            <Button
//                              onClick={() => handleVillaButtonClick("4bhk")}
//                              isActive={selectedVillaValues.includes("4bhk")}
//                            >
//                              4bhk
//                            </Button>
                     
//                            {/* <div className="flex ">
//                              <p>Selected Villa Values: {selectedVillaValues.join(', ')}</p>
//                            </div> */}
//                          </div>
//                         )}
//                       </div>
//                       <div className="ml-5 p-1 ">
//                         <h1 className="bg-gray-300 w-fit  py-2 px-11 font-normal text-black  transition-all transform duration-300 border hover:border-orange-500 flex justify-center items-center hover:bg-slate-100 rounded-full" onClick={togglePlotVisibility}>Plot</h1>
//                         {isPlotVisible && (
//                           <div className="ml-5 p-4">
                           
//                             <div className="ml-5">
//                               <CustomRangeSelector
//                                 onRangeChange={handleRangeSelect}
//                               />
//                             </div>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>

//                 <div className="w-full h-fit  ">
//                   <h1  className="w-fit font-medium hover:bg-slate-300 py-2 px-10 rounded-md transition-all transform duration-300" onClick={toggleCommercialVisibility}>Commercial</h1>
//                   {isCommercialVisible && (
//                     <div className="flex flex-wrap gap-4 items-start ml-5">
//                     <Button
//                       onClick={() => handleCommercialButtonClick("Office Space")}
//                       isActive={selectedCommercialValues.includes("Office Space")}
//                     >
//                       Office Space
//                     </Button>
//                     <Button
//                       onClick={() => handleCommercialButtonClick("Shop/Showroom")}
//                       isActive={selectedCommercialValues.includes("Shop/Showroom")}
//                     >
//                       Shop/Showroom
//                     </Button>
//                     <Button
//                       onClick={() => handleCommercialButtonClick("Commercial Land")}
//                       isActive={selectedCommercialValues.includes("Commercial Land")}
//                     >
//                       Commercial Land
//                     </Button>
//                     <Button
//                       onClick={() => handleCommercialButtonClick("Warehouse/Godown")}
//                       isActive={selectedCommercialValues.includes("Warehouse/Godown")}
//                     >
//                       Warehouse/Godown
//                     </Button>
//                     <Button
//                       onClick={() => handleCommercialButtonClick("Industrial Building")}
//                       isActive={selectedCommercialValues.includes("Industrial Building")}
//                     >
//                       Industrial Building
//                     </Button>
//                     <Button
//                       onClick={() => handleCommercialButtonClick("Industrial Shed")}
//                       isActive={selectedCommercialValues.includes("Industrial Shed")}
//                     >
//                       Industrial Shed
//                     </Button>
              
//                     {/* <div className="flex">
//                       <p>Selected Commercial Values: {selectedCommercialValues.join(', ')}</p>
//                     </div> */}
//                   </div>
//                   )}
//                 </div>
//                 <div className="w-full h-fit ">
//                   <h1 className="w-fit font-medium hover:bg-slate-300 py-2 px-10 rounded-md transition-all transform duration-300" onClick={toggleOtherPropertyVisibility}>
//                     Other Property Types
//                   </h1>
//                   {isOtherPropertyVisible && (
//                    <div className="flex p-5 flex-wrap gap-4 items-start ml-5">
//                    <Button
//                      onClick={() => handleAgriculturalButtonClick("Agricultural Land")}
//                      isActive={selectedAgriculturalValues.includes("Agricultural Land")}
//                    >
//                      Agricultural Land
//                    </Button>
//                    <Button
//                      onClick={() => handleAgriculturalButtonClick("Farm House")}
//                      isActive={selectedAgriculturalValues.includes("Farm House")}
//                    >
//                      Farm House
//                    </Button>
             
//                    {/* <div className="flex">
//                      <p>Selected Agricultural Values: {selectedAgriculturalValues.join(', ')}</p>
//                    </div> */}
//                  </div>
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className="w-full z-40 ml-9 ">
//             {isBudgetVisible && (
//               <div className="w-full ">
//                 <BudgetRangeSelector onBudgetChange={handleBudgetChange} />
//                 <div>
//                   Budget: ${selectedBudget[0]} - ${selectedBudget[1]}
//                 </div>
//                 {/* Render other components based on the selected budget range */}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Demo;









import React, { useState } from "react";
import Button from "../Elements/Button";
import CustomRangeSelector from "../Elements/CustomRangeSelector";
import BudgetRangeSelector from "../Elements/BudgetRangeSelector";
import PropertySearchComponent from "./PropertySearchComponent";

const Demo = () => {
  const locations = ["New York", "Los Angeles", "Chicago", "San Francisco"];

  const [isPropertyTypeVisible, setIsPropertyTypeVisible] = useState(false);
  const [isResidentialVisible, setIsResidentialVisible] = useState(false);
  // const [isDivVisible, setIsDivVisible] = useState(false);
  // const [isHouseVisible, setIsHouseVisible] = useState(false);
  // const [isPlotVisible, setIsPlotVisible] = useState(false);
  const [isCommercialVisible, setIsCommercialVisible] = useState(false);
  const [isOtherPropertyVisible, setIsOtherPropertyVisible] = useState(false);
  // const [selectedValues, setSelectedValues] = useState([]);
  // const [isDivVisible, setIsDivVisible] = useState(false);
  // const [selectedVillaValues, setSelectedVillaValues] = useState([]);
  const [selectedCommercialValues, setSelectedCommercialValues] = useState([]);
  const [selectedAgriculturalValues, setSelectedAgriculturalValues] = useState(
    []
  );
  const [selectedBudget, setSelectedBudget] = useState([50000, 100000]);
  const [isBudgetVisible, setIsBudgetVisible] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const [isDivVisible, setIsDivVisible] = useState(true);
  const [selectedVillaValues, setSelectedVillaValues] = useState([]);
  const [isHouseVisible, setIsHouseVisible] = useState(false);
  const [isPlotVisible, setIsPlotVisible] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);

  const handleLocationSelect = (selectedLocation) => {
    console.log("Selected Location in App:", selectedLocation);
  };
  const toggleVisibility = () => {
    setIsDivVisible(!isDivVisible);
    setIsHouseVisible(false);
    setIsPlotVisible(false);
  };
  const toggleHouseVisibility = () => {
    setIsHouseVisible(!isHouseVisible);
    setIsDivVisible(false);
    setIsPlotVisible(false);
  };
  const togglePlotVisibility = () => {
    setIsPlotVisible(!isPlotVisible);
    setIsDivVisible(false);
    setIsHouseVisible(false);
  };

  const toggleResidentialVisibility = () => {
    setIsResidentialVisible(!isResidentialVisible);
  };
  const toggleCommercialVisibility = () => {
    setIsCommercialVisible(!isCommercialVisible);
  };
  const toggleOtherPropertyVisibility = () => {
    setIsOtherPropertyVisible(!isOtherPropertyVisible);
  };
  const handleButtonClick = (value) => {
    const index = selectedValues.indexOf(value);
    if (index !== -1) {
      // If value is already selected, remove it
      setSelectedValues([
        ...selectedValues.slice(0, index),
        ...selectedValues.slice(index + 1),
      ]);
    } else {
      // If value is not selected, add it
      setSelectedValues([...selectedValues, value]);
    }
    setIsHouseVisible(false);
  };

  const handleVillaButtonClick = (value) => {
    const index = selectedVillaValues.indexOf(value);
    if (index !== -1) {
      // If value is already selected, remove it
      setSelectedVillaValues([
        ...selectedVillaValues.slice(0, index),
        ...selectedVillaValues.slice(index + 1),
      ]);
    } else {
      // If value is not selected, add it
      setSelectedVillaValues([...selectedVillaValues, value]);
    }
  };

  const handleCommercialButtonClick = (value) => {
    const index = selectedCommercialValues.indexOf(value);
    if (index !== -1) {
      // If value is already selected, remove it
      setSelectedCommercialValues([
        ...selectedCommercialValues.slice(0, index),
        ...selectedCommercialValues.slice(index + 1),
      ]);
    } else {
      // If value is not selected, add it
      setSelectedCommercialValues([...selectedCommercialValues, value]);
    }
  };

  const handleAgriculturalButtonClick = (value) => {
    const index = selectedAgriculturalValues.indexOf(value);
    if (index !== -1) {
      // If value is already selected, remove it
      setSelectedAgriculturalValues([
        ...selectedAgriculturalValues.slice(0, index),
        ...selectedAgriculturalValues.slice(index + 1),
      ]);
    } else {
      // If value is not selected, add it
      setSelectedAgriculturalValues([...selectedAgriculturalValues, value]);
    }
  };

  const handleRangeSelect = (selectedRange) => {
    // Use the selectedRange in your logic (e.g., perform a search)
    console.log("Selected Range:", selectedRange);
  };
  const togglePropertyTypeVisibility = () => {
    setIsPropertyTypeVisible(!isPropertyTypeVisible);
    setIsBudgetVisible(false);
  };
  const handleBudgetChange = (selectedBudget) => {
    setSelectedBudget(selectedBudget);
    // Use the selectedBudget in your logic (e.g., perform a search)
    console.log("Selected Budget Range:", selectedBudget);
  };
  const toggleBudgetVisibility = () => {
    setIsBudgetVisible(!isBudgetVisible);
    setIsPropertyTypeVisible(false);
  };

  return (
    <>
      <div className="flex flex-col mt-2 justify-center h-full items-center w-full bg-slate-500">
        <div className="flex  gap-20  justify-around bg-white h-24 items-center w-3/5 px-10 rounded-full ">
          <div className=" flex justify-center items-center w-full h-full">
            <PropertySearchComponent
              locations={locations}
              onLocationSelect={handleLocationSelect}
            />
          </div>
          <div className=" flex justify-center items-center w-full h-full">
            <h1 onClick={togglePropertyTypeVisibility}>Property Type</h1>
            <div></div>
          </div>

          <div className=" flex justify-center items-center w-full h-full">
            <h1 onClick={toggleBudgetVisibility}> Budget </h1>
            <div></div>
          </div>
          <div className=" flex justify-center items-center w-full h-full">
            <button>search</button>
          </div>
        </div>
        <div className="flex w-3/5 justify-between ">
          <div className="w-full z-50  ">
            {isPropertyTypeVisible && (
              <div className="min-w-[650px] ml-80 h-fit  p-2  bg-white rounded-b-lg ">
                <div className="w-full h-fit  ">
                  <h1
                    className="w-fit font-medium hover:bg-slate-300 py-2 px-10 rounded-md transition-all transform duration-300"
                    onClick={toggleResidentialVisibility}
                  >
                    Residential
                  </h1>
                  {isResidentialVisible && (
                    <div className="w-fit flex flex-col  ml-10 ">
                      <div className="flex gap-x-5 items-center justify-center bg-red-300 p-3 w-96">
                        <Button
                          onClick={toggleVisibility}
                          isActive={isDivVisible}
                        >
                          Flat
                        </Button>
                        <Button
                          onClick={toggleHouseVisibility}
                          isActive={isHouseVisible}
                        >
                          House/Villa
                        </Button>
                        <Button
                          onClick={togglePlotVisibility}
                          isActive={isPlotVisible}
                        >
                          Plot
                        </Button>
                      </div>
                      <div>
                        <div
                          className={`ml-5 p-1 z-0  ${isDivVisible ? " " : ""}`}
                        >
                          {isDivVisible && (
                            <div className="ml-5 p-5 flex gap-4 ">
                              <Button
                                onClick={() => handleButtonClick("1bhk")}
                                isActive={selectedValues.includes("1bhk")}
                              >
                                1bhk
                              </Button>
                              <Button
                                onClick={() => handleButtonClick("2bhk")}
                                isActive={selectedValues.includes("2bhk")}
                              >
                                2bhk
                              </Button>
                              <Button
                                onClick={() => handleButtonClick("3bhk")}
                                isActive={selectedValues.includes("3bhk")}
                              >
                                3bhk
                              </Button>
                              <Button
                                onClick={() => handleButtonClick("4bhk")}
                                isActive={selectedValues.includes("4bhk")}
                              >
                                4bhk
                              </Button>
                              <Button
                                onClick={() => handleButtonClick("5bhk")}
                                isActive={selectedValues.includes("5bhk")}
                              >
                                5bhk
                              </Button>
                              {/* <div className="flex">
                                      <p>Selected Values: {selectedValues.join(', ')}</p>
                                  </div> */}
                            </div>
                          )}
                        </div>
                        <div
                          className={`ml-5 p-1 z-10 ${
                            isHouseVisible ? " " : ""
                          }`}
                        >
                          {isHouseVisible && (
                            <div className="gap-x-5 p-5 flex ml-5">
                              <Button
                                onClick={() => handleVillaButtonClick("1bhk")}
                                isActive={selectedVillaValues.includes("1bhk")}
                              >
                                1bhk
                              </Button>
                              <Button
                                onClick={() => handleVillaButtonClick("2bhk")}
                                isActive={selectedVillaValues.includes("2bhk")}
                              >
                                2bhk
                              </Button>
                              <Button
                                onClick={() => handleVillaButtonClick("3bhk")}
                                isActive={selectedVillaValues.includes("3bhk")}
                              >
                                3bhk
                              </Button>
                              <Button
                                onClick={() => handleVillaButtonClick("4bhk")}
                                isActive={selectedVillaValues.includes("4bhk")}
                              >
                                4bhk
                              </Button>
                              {/* <div className="flex ">
                                        <p>Selected Villa Values: {selectedVillaValues.join(', ')}</p>
                                  </div> */}
                            </div>
                          )}
                        </div>
                        <div
                          className={`ml-5 p-1 z-20 ${
                            isPlotVisible ? " " : ""
                          }`}
                        >
                          {isPlotVisible && (
                            <div className="ml-5 p-4">
                              <div className="ml-5">
                                <CustomRangeSelector
                                  onRangeChange={handleRangeSelect}
                                />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="w-full h-fit  ">
                  <h1
                    className="w-fit font-medium hover:bg-slate-300 py-2 px-10 rounded-md transition-all transform duration-300"
                    onClick={toggleCommercialVisibility}
                  >
                    Commercial
                  </h1>
                  {isCommercialVisible && (
                    <div className="flex flex-wrap gap-4 items-start ml-5 p-2">
                      <Button
                        onClick={() =>
                          handleCommercialButtonClick("Office Space")
                        }
                        isActive={selectedCommercialValues.includes(
                          "Office Space"
                        )}
                      >
                        Office Space
                      </Button>
                      <Button
                        onClick={() =>
                          handleCommercialButtonClick("Shop/Showroom")
                        }
                        isActive={selectedCommercialValues.includes(
                          "Shop/Showroom"
                        )}
                      >
                        Shop/Showroom
                      </Button>
                      <Button
                        onClick={() =>
                          handleCommercialButtonClick("Commercial Land")
                        }
                        isActive={selectedCommercialValues.includes(
                          "Commercial Land"
                        )}
                      >
                        Commercial Land
                      </Button>
                      <Button
                        onClick={() =>
                          handleCommercialButtonClick("Warehouse/Godown")
                        }
                        isActive={selectedCommercialValues.includes(
                          "Warehouse/Godown"
                        )}
                      >
                        Warehouse/Godown
                      </Button>
                      <Button
                        onClick={() =>
                          handleCommercialButtonClick("Industrial Building")
                        }
                        isActive={selectedCommercialValues.includes(
                          "Industrial Building"
                        )}
                      >
                        Industrial Building
                      </Button>
                      <Button
                        onClick={() =>
                          handleCommercialButtonClick("Industrial Shed")
                        }
                        isActive={selectedCommercialValues.includes(
                          "Industrial Shed"
                        )}
                      >
                        Industrial Shed
                      </Button>

                      {/* <div className="flex">
                      <p>Selected Commercial Values: {selectedCommercialValues.join(', ')}</p>
                    </div> */}
                    </div>
                  )}
                </div>
                <div className="w-full h-fit ">
                  <h1
                    className="w-fit font-medium hover:bg-slate-300 py-2 px-10 rounded-md transition-all transform duration-300"
                    onClick={toggleOtherPropertyVisibility}
                  >
                    Other Property Types
                  </h1>
                  {isOtherPropertyVisible && (
                    <div className="flex p-5 flex-wrap gap-4 items-start ml-5">
                      <Button
                        onClick={() =>
                          handleAgriculturalButtonClick("Agricultural Land")
                        }
                        isActive={selectedAgriculturalValues.includes(
                          "Agricultural Land"
                        )}
                      >
                        Agricultural Land
                      </Button>
                      <Button
                        onClick={() =>
                          handleAgriculturalButtonClick("Farm House")
                        }
                        isActive={selectedAgriculturalValues.includes(
                          "Farm House"
                        )}
                      >
                        Farm House
                      </Button>

                      {/* <div className="flex">
                     <p>Selected Agricultural Values: {selectedAgriculturalValues.join(', ')}</p>
                   </div> */}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          <div className="w-full z-40 ml-9 rounded-md ">
            {isBudgetVisible && (
              <div className="w-full ">
                <BudgetRangeSelector onBudgetChange={handleBudgetChange} />
                <div className="w-full justify-center hidden ">
                  Budget: ${selectedBudget[0]} - ${selectedBudget[1]}
                </div>
                {/* Render other components based on the selected budget range */}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;

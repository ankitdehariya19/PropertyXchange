import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaHome, FaWallet } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Button from "./Button";
import CustomRangeSelector from "./CustomRangeSelector";
import BudgetRangeSelector from "./BudgetRangeSelector";
import PropertySearchComponent from "./PropertySearchComponent";
import { sampleProperties } from "../../common/sampleProperties";

const useToggleVisibility =
  (currentState, setState, otherStates = []) =>
  () => {
    setState(!currentState);
    otherStates.forEach((otherState) => otherState && otherState(false));
  };

const Demo = () => {
  const navigate = useNavigate();

  // States for property type visibility
  const [isPropertyTypeVisible, setIsPropertyTypeVisible] = useState(false);
  const [isResidentialVisible, setIsResidentialVisible] = useState(false);
  const [isCommercialVisible, setIsCommercialVisible] = useState(false);
  const [isOtherPropertyVisible, setIsOtherPropertyVisible] = useState(false);
  const [isBudgetVisible, setIsBudgetVisible] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState(false);
  const [isHouseVisible, setIsHouseVisible] = useState(false);
  const [isPlotVisible, setIsPlotVisible] = useState(false);

  // States for selected values
  const [selectedValues, setSelectedValues] = useState([]);
  const [selectedVillaValues, setSelectedVillaValues] = useState([]);
  const [selectedCommercialValues, setSelectedCommercialValues] = useState([]);
  const [selectedAgriculturalValues, setSelectedAgriculturalValues] = useState(
    []
  );

  // Budget range state
  const [selectedBudget, setSelectedBudget] = useState([50000, 100000]);

  // Location, Range, and filtered properties states
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [filteredProperties, setFilteredProperties] = useState([]);

  const divStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  };

  // Toggle visibility functions
  const toggleVisibility = useToggleVisibility(isDivVisible, setIsDivVisible, [
    setIsHouseVisible,
    setIsPlotVisible,
  ]);
  const toggleHouseVisibility = useToggleVisibility(
    isHouseVisible,
    setIsHouseVisible,
    [setIsDivVisible, setIsPlotVisible]
  );
  const togglePlotVisibility = useToggleVisibility(
    isPlotVisible,
    setIsPlotVisible,
    [setIsDivVisible, setIsHouseVisible]
  );
  const toggleResidentialVisibility = useToggleVisibility(
    isResidentialVisible,
    setIsResidentialVisible
  );
  const toggleCommercialVisibility = useToggleVisibility(
    isCommercialVisible,
    setIsCommercialVisible
  );
  const toggleOtherPropertyVisibility = useToggleVisibility(
    isOtherPropertyVisible,
    setIsOtherPropertyVisible
  );
  const togglePropertyTypeVisibility = useToggleVisibility(
    isPropertyTypeVisible,
    setIsPropertyTypeVisible,
    [setIsBudgetVisible]
  );
  const toggleBudgetVisibility = useToggleVisibility(
    isBudgetVisible,
    setIsBudgetVisible,
    [setIsPropertyTypeVisible]
  );

  // Handle button click for property types
  // ... (previous code)

  const useHandleButtonClick =
    (selectedValues, setSelectedValues) => (value) => {
      const index = selectedValues.indexOf(value);
      if (index !== -1) {
        setSelectedValues([
          ...selectedValues.slice(0, index),
          ...selectedValues.slice(index + 1),
        ]);
      } else {
        setSelectedValues([...selectedValues, value]);
      }
      setIsHouseVisible(false);
      console.log(`Selected ${value} values:`, selectedValues);
    };

  const handleButtonClick = useHandleButtonClick(
    selectedValues,
    setSelectedValues
  );
  const handleVillaButtonClick = useHandleButtonClick(
    selectedVillaValues,
    setSelectedVillaValues
  );
  const handleCommercialButtonClick = useHandleButtonClick(
    selectedCommercialValues,
    setSelectedCommercialValues
  );
  const handleAgriculturalButtonClick = useHandleButtonClick(
    selectedAgriculturalValues,
    setSelectedAgriculturalValues
  );


  // Helper function to get the property type based on subtype
  const getPropertyType = (property) => {
    if (property.propertyType === "Residential") {
      return property.subtype === "Flat" ? "Flat" : "House/Villa";
    } else {
      return property.propertyType;
    }
  };

  // Handle location select
  const handleLocationSelect = (selectedLocation) => {
    setSelectedLocation(selectedLocation);
  
    // Filter properties based on the selected location
    const filteredData = sampleProperties.filter(
      (property) =>
        property.location && // Check if property.location is defined
        property.location.toLowerCase() === selectedLocation.toLowerCase()
    );
  
    setFilteredProperties(filteredData);
  };
  

  // Handle range select
  const handleRangeSelect = (selectedRange) => {
    setSelectedRange(selectedRange);
    console.log("Selected Range:", selectedRange);
  };;

  // Handle budget change
  const handleBudgetChange = (selectedBudget) => {
    setSelectedBudget(selectedBudget);
    console.log("Selected Budget Range:", selectedBudget);
  };

  // Handle search button click
  const handleSearch = () => {
    const searchCriteria = {
      location: selectedLocation,
      propertyType: {
        residential: selectedValues,
        commercial: selectedCommercialValues,
        villa: selectedVillaValues,
        agricultural: selectedAgriculturalValues,
      },
      budget: selectedBudget,
    };
  
    const searchResults = sampleProperties.filter((property) => {
      // Check location
      if (
        selectedLocation &&
        property.location.toLowerCase() !== selectedLocation.toLowerCase()
      ) {
        return false;
      }
  
      // Check property type
      const propertyType = getPropertyType(property);
      if (
        (selectedValues.length > 0 && !selectedValues.includes(propertyType)) ||
        (selectedCommercialValues.length > 0 &&
          !selectedCommercialValues.includes(propertyType)) ||
        (selectedVillaValues.length > 0 &&
          !selectedVillaValues.includes(propertyType)) ||
        (selectedAgriculturalValues.length > 0 &&
          !selectedAgriculturalValues.includes(propertyType))
      ) {
        return false;
      }
  
      // Check budget
      if (
        property.budget < selectedBudget[0] ||
        property.budget > selectedBudget[1]
      ) {
        return false;
      }
  
      // Check bhk
      if (
        (propertyType === "Flat" || propertyType === "House/Villa") &&
        selectedValues.includes(propertyType) &&
        selectedValues.includes(property.bhk + "bhk")
      ) {
        return true;
      }
  
      return true;
    });
  
    console.log("Search Criteria:", searchCriteria);
    console.log("Search Results:", searchResults);
  
    // Navigate to search results page
    navigate("/search-results", { state: { searchCriteria } });
  };

  return (
    <>
      <div className="flex flex-col mt-2 h-32 items-center w-full z-50 text-white">
        <div
          className="flex justify-around items-center w-3/5 px-10 rounded-full z-40 "
          style={divStyle}
        >
          {/* Location Selector */}
          <div className="flex justify-center items-center w-full h-full z-40">
            <HiOutlineLocationMarker
              className="dropdown-icon-primary"
              size={40}
            />
            <PropertySearchComponent
              sampleProperties={sampleProperties}
              onLocationSelect={handleLocationSelect}
              isPropertyTypeVisible={isPropertyTypeVisible}
              setIsPropertyTypeVisible={setIsPropertyTypeVisible}
              isBudgetVisible={isBudgetVisible}
              setIsBudgetVisible={setIsBudgetVisible}
            />
          </div>

          {/* Property Type Selector */}
          <div className="flex justify-center items-center w-full h-full z-40">
            <FaHome className="dropdown-icon-primary" />
            <h1
              className="cursor-pointer w-40 justify-items-start flex items-center text-white"
              onClick={togglePropertyTypeVisibility}
            >
              Property Type
              {isPropertyTypeVisible ? (
                <IoIosArrowUp className="dropdown-icon-primary " />
              ) : (
                <IoIosArrowDown className="dropdown-icon-primary" />
              )}
            </h1>
          </div>

          {/* Budget Selector */}
          <div className="flex justify-center items-center w-full h-full z-40">
            <FaWallet className="dropdown-icon-primary" />
            <h1
              className="cursor-pointer flex items-center gap-x-2 text-white"
              onClick={toggleBudgetVisibility}
            >
              Budget
              {isBudgetVisible ? (
                <IoIosArrowUp className="dropdown-icon-primary" />
              ) : (
                <IoIosArrowDown className="dropdown-icon-primary" />
              )}
            </h1>
          </div>

          {/* Search Button */}
          <div className="flex justify-center items-center w-full h-full z-40">
            <button
              className="py-3 px-10 bg-orange-500 rounded-full text-white hover:bg-orange-600"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>

        {/* Property Type Selector Dropdown */}
        <div className="flex w-3/5 justify-between z-40">
          <div className="w-full z-50  ">
            {isPropertyTypeVisible && (
              <div
                className="min-w-[650px] ml-80 h-fit p-2 rounded-b-lg z-50"
                style={divStyle}
              >
                <div className="w-full h-fit  ">
                  {/* Residential Property Type */}
                  <h1
                    className="w-fit flex justify-center items-center gap-x-3 font-medium py-2 px-10 rounded-md transition-all transform duration-300"
                    onClick={toggleResidentialVisibility}
                  >
                    Residential
                    {isResidentialVisible ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </h1>

                  {isResidentialVisible && (
                    <div className="w-fit flex flex-col ml-10 ">
                      <div className="flex gap-x-5 items-center justify-center p-3 w-96 transition-all transform duration-300 ease-in-out">
                        {[
                          {
                            label: "Flat",
                            onClick: toggleVisibility,
                            isActive: isDivVisible,
                          },
                          {
                            label: "House/Villa",
                            onClick: toggleHouseVisibility,
                            isActive: isHouseVisible,
                          },
                          {
                            label: "Plot",
                            onClick: togglePlotVisibility,
                            isActive: isPlotVisible,
                          },
                        ].map((button, index) => (
                          <Button
                            key={index}
                            onClick={button.onClick}
                            isActive={button.isActive}
                          >
                            {button.label}
                          </Button>
                        ))}
                      </div>

                      <div>
                        {/* Display options based on selection */}
                        <div className={`ml-5 z-0 ${isDivVisible ? " " : ""}`}>
                          {isDivVisible && (
                            <div className="ml-5 p-5 flex gap-4  ">
                              {["1bhk", "2bhk", "3bhk", "4bhk", "5bhk"].map(
                                (bedroom, index) => (
                                  <Button
                                    key={index}
                                    onClick={() => handleButtonClick(bedroom)}
                                    isActive={selectedValues.includes(bedroom)}
                                  >
                                    {bedroom}
                                  </Button>
                                )
                              )}
                            </div>
                          )}
                        </div>
                        <div
                          className={`ml-5 z-0 ${isHouseVisible ? " " : ""}`}
                        >
                          {isHouseVisible && (
                            <div className="ml-5 p-5 flex gap-4">
                              {["1bhk", "2bhk", "3bhk", "4bhk", "5bhk"].map(
                                (bedroom, index) => (
                                  <Button
                                    key={index}
                                    onClick={() =>
                                      handleVillaButtonClick(bedroom)
                                    }
                                    isActive={selectedVillaValues.includes(
                                      bedroom
                                    )}
                                  >
                                    {bedroom}
                                  </Button>
                                )
                              )}
                            </div>
                          )}
                        </div>
                        <div className={`ml-5 z-0 ${isPlotVisible ? " " : ""}`}>
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
                    className="w-fit flex justify-center items-center gap-x-3 font-medium py-2 px-10 rounded-md transition-all transform duration-300"
                    onClick={toggleCommercialVisibility}
                  >
                    Commercial
                    {isCommercialVisible ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </h1>
                  {isCommercialVisible && (
                    <div className="flex flex-wrap gap-4 items-start ml-5 p-2">
                      {[
                        "Office Space",
                        "Shop/Showroom",
                        "Commercial Land",
                        "Warehouse/Godown",
                        "Industrial Building",
                        "Industrial Shed",
                      ].map((commercialType, index) => (
                        <Button
                          key={index}
                          onClick={() =>
                            handleCommercialButtonClick(commercialType)
                          }
                          isActive={selectedCommercialValues.includes(
                            commercialType
                          )}
                        >
                          {commercialType}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Display options for Other Property Types */}
                <div className="w-full h-fit z-50">
                  <h1
                    className="w-fit flex justify-center items-center gap-x-3 font-medium py-2 px-10 rounded-md transition-all transform duration-300"
                    onClick={toggleOtherPropertyVisibility}
                  >
                    Other Property Types
                    {isOtherPropertyVisible ? (
                      <IoIosArrowUp />
                    ) : (
                      <IoIosArrowDown />
                    )}
                  </h1>
                  {isOtherPropertyVisible && (
                    <div className="flex p-5 flex-wrap gap-4 items-start ml-5">
                      {[
                        {
                          type: "Agricultural Land",
                          onClick: handleAgriculturalButtonClick,
                        },
                        {
                          type: "Farm House",
                          onClick: handleAgriculturalButtonClick,
                        },
                      ].map((agriculturalType, index) => (
                        <Button
                          key={index}
                          onClick={() =>
                            agriculturalType.onClick(agriculturalType.type)
                          }
                          isActive={selectedAgriculturalValues.includes(
                            agriculturalType.type
                          )}
                        >
                          {agriculturalType.type}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Budget Selector */}
          <div className="w-full z-40 ml-9 rounded-md ">
            {isBudgetVisible && (
              <div className="w-full ">
                <BudgetRangeSelector onBudgetChange={handleBudgetChange} />
                <div className="w-full justify-center hidden ">
                  Budget: ${selectedBudget[0]} - ${selectedBudget[1]}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;

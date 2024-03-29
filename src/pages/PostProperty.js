import React, { useState } from "react";
import CustomDropdown from "../components/Elements/FromCustomDropdown";

const PostProperty = () => {
  const [propertyType, setPropertyType] = useState("");
  const [propertySubType, setPropertySubType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [squareFeetArea, setSquareFeetArea] = useState("");
  const [propertyDetails, setPropertyDetails] = useState("");
  const [images, setImages] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const propertyTypes = ["Residential", "Commercial", "Other Property Types"];
  const residentialSubTypes = ["Flat", "House/Villa", "Plot"];
  const commercialSubTypes = [
    "Office Space",
    "Shop/Showroom",
    "Commercial Land",
    "Warehouse/Godown",
    "Industrial Building",
    "Industrial Shed",
  ];
  const otherSubTypes = ["Agricultural Land", "Farm House"];
  const bedroomOptions = ["1bhk", "2bhk", "3bhk", "4bhk", "5bhk"];

  const handlePropertyTypeChange = (type) => {
    setPropertyType(type);
    setPropertySubType("");
    setBedrooms("");
    setSquareFeetArea("");
  };

  const handlePropertySubTypeChange = (subType) => {
    setPropertySubType(subType);
    setBedrooms("");
    setSquareFeetArea("");
  };

  const handleBedroomsChange = (bedrooms) => {
    setBedrooms(bedrooms);
  };

  const handleSquareFeetAreaChange = (area) => {
    setSquareFeetArea(area);
  };

  const handlePropertyDetailsChange = (details) => {
    setPropertyDetails(details);
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);

    // Update image preview
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreview([...imagePreview, ...previews]);

    // Update actual images
    setImages([...images, ...files]);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);

    const updatedPreviews = [...imagePreview];
    updatedPreviews.splice(index, 1);
    setImagePreview(updatedPreviews);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled before submission
    if (
      propertyType &&
      propertySubType &&
      (bedrooms || squareFeetArea) &&
      propertyDetails &&
      images.length > 0
    ) {
      // Handle form submission logic here
      console.log("Form submitted:", {
        propertyType,
        propertySubType,
        bedrooms,
        squareFeetArea,
        propertyDetails,
        images,
      });

      // Show success message popup
      setShowSuccessPopup(true);

      // Reset form fields after submission (you can customize this based on your requirements)
      setPropertyType("");
      setPropertySubType("");
      setBedrooms("");
      setSquareFeetArea("");
      setPropertyDetails("");
      setImages([]);
      setImagePreview([]);
    } else {
      // If any required field is missing, show an alert or handle it as needed
      alert("Please fill in all required fields before submitting the form.");
    }
  };

  const closeSuccessPopup = () => {
    // Close success message popup
    setShowSuccessPopup(false);
  };

  return (
    <div className="w-full h-screen bg-gray-500 p-8 flex justify-center items-center">
      <div className="max-w-2xl w-full bg-white p-8 rounded shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Property Listing Form</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <CustomDropdown
            label="Property Type"
            options={propertyTypes}
            value={propertyType}
            onChange={handlePropertyTypeChange}
          />

          {propertyType && (
            <div>
              <CustomDropdown
                label="Property Sub-Type"
                options={
                  propertyType === "Residential"
                    ? residentialSubTypes
                    : propertyType === "Commercial"
                    ? commercialSubTypes
                    : otherSubTypes
                }
                value={propertySubType}
                onChange={handlePropertySubTypeChange}
              />

              {propertySubType && (propertySubType === "Flat" || propertySubType === "House/Villa") && (
                <CustomDropdown
                  label="Bedrooms"
                  options={bedroomOptions}
                  value={bedrooms}
                  onChange={handleBedroomsChange}
                />
              )}

              {propertySubType && propertySubType === "Plot" && (
                <div className="mb-4">
                  <label
                    htmlFor="squareFeetArea"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Square Feet Area:
                  </label>
                  <input
                    type="text"
                    id="squareFeetArea"
                    value={squareFeetArea}
                    onChange={(e) => handleSquareFeetAreaChange(e.target.value)}
                    className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    placeholder="Enter Square Feet Area"
                  />
                </div>
              )}
            </div>
          )}

          <div className="mb-4">
            <label
              htmlFor="propertyDetails"
              className="block text-sm font-medium text-gray-600"
            >
              Property Details:
            </label>
            <textarea
              id="propertyDetails"
              value={propertyDetails}
              onChange={(e) => handlePropertyDetailsChange(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none "
              rows="4"
              placeholder="Enter Property Details"
            ></textarea>
          </div>

          <div className="mb-4">
            <label
              htmlFor="imageUpload"
              className="block text-sm font-medium text-gray-600"
            >
              Upload Images:
            </label>
            <input
              type="file"
              id="imageUpload"
              multiple
              onChange={handleImageUpload}
              className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          {imagePreview.length > 0 && (
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-600">
                Image Preview:
              </label>
              <div className="flex space-x-2">
                {imagePreview.map((preview, index) => (
                  <div key={index} className="relative">
                    <img
                      src={preview}
                      alt={`Preview ${index}`}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full cursor-pointer"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button type="submit" className="bg-orange-500 text-white p-2 rounded w-full">
            Submit
          </button>
        </form>

        {showSuccessPopup && (
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded shadow-lg">
              <p className="text-2xl font-bold mb-4">Success!</p>
              <p className="text-gray-700">Your property has been successfully submitted.</p>
              <button
                onClick={closeSuccessPopup}
                className="mt-4 bg-orange-500 text-white p-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PostProperty;

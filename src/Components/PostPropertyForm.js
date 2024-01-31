// // // PostPropertyForm.js
// // import React, { useState } from 'react';

// // const PostPropertyForm = () => {
// //   const [propertyData, setPropertyData] = useState({
// //     location: "",
// //     propertyType: "",
// //     subtype: "",
// //     bhk: 0,
// //     budget: 0,
// //     overview: {
// //       updatedOn: "",
// //       bedrooms: 0,
// //       bathrooms: 0,
// //       garages: 0,
// //       area: "",
// //       yearBuilt: 0,
// //     },
// //     amenities: [],

// //     image: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;

// //     if (name === 'overview' || name === 'amenities') {
// //       setPropertyData((prevData) => ({
// //         ...prevData,
// //         [name]: value.split(',').map((item) => item.trim()), // assuming amenities are comma-separated
// //       }));
// //     } else if (name.includes('.')) {
// //       const [parent, child] = name.split('.');
// //       setPropertyData((prevData) => ({
// //         ...prevData,
// //         [parent]: {
// //           ...prevData[parent],
// //           [child]: value,
// //         },
// //       }));
// //     } else {
// //       setPropertyData((prevData) => ({
// //         ...prevData,
// //         [name]: value,
// //       }));
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // You can perform actions with propertyData, such as sending it to a server
// //     console.log(propertyData);
// //     // Clear the form after submission if needed
// //     setPropertyData({
// //       location: "",
// //       propertyType: "",
// //       subtype: "",
// //       bhk: 0,
// //       budget: 0,
// //       overview: {
// //         updatedOn: "",
// //         bedrooms: 0,
// //         bathrooms: 0,
// //         garages: 0,
// //         area: "",
// //         yearBuilt: 0,
// //       },
// //       amenities: [],

// //       image: "",
// //     });
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6 p-4 border rounded-md shadow-md">
// //       <h2 className="text-2xl font-semibold mb-4">Post Property Free</h2>

// //       <label className="block mb-2">
// //         Location:
// //         <input
// //           type="text"
// //           name="location"
// //           value={propertyData.location}
// //           onChange={handleChange}
// //           className="w-full border p-2 rounded-md"
// //         />
// //       </label>

// //       {/* Repeat similar label and input structures for other fields */}

// //       <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
// //         Submit Property
// //       </button>
// //     </form>
// //   );
// // };

// // export default PostPropertyForm;








// import React, { useState } from "react";

// // Improved Custom Dropdown component
// const CustomDropdown = ({ options, value, onChange, label }) => {
//   return (
//     <div className="mb-4">
//       <label
//         htmlFor={label}
//         className="block text-sm font-medium text-gray-600"
//       >
//         {label}:
//       </label>
//       <div className="relative">
//         <select
//           id={label}
//           value={value}
//           onChange={(e) => onChange(e.target.value)}
//           className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
//           aria-label={label}
//           aria-required="true"
//         >
//           <option value="">Select {label}</option>
//           {options.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//           <svg
//             className="h-4 w-4"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             ></path>
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// const PostProperty = () => {
//   const [propertyType, setPropertyType] = useState("");
//   const [propertySubType, setPropertySubType] = useState("");
//   const [bedrooms, setBedrooms] = useState("");
//   const [squareFeetArea, setSquareFeetArea] = useState("");
//   const [propertyDetails, setPropertyDetails] = useState("");
//   const [images, setImages] = useState([]);
//   const [imagePreview, setImagePreview] = useState([]);
  

//   const propertyTypes = ["Residential", "Commercial", "Other Property Types"];
//   const residentialSubTypes = ["Flat", "House/Villa", "Plot"];
//   const commercialSubTypes = [
//     "Office Space",
//     "Shop/Showroom",
//     "Commercial Land",
//     "Warehouse/Godown",
//     "Industrial Building",
//     "Industrial Shed",
//   ];
//   const otherSubTypes = ["Agricultural Land", "Farm House"];
//   const bedroomOptions = ["1bhk", "2bhk", "3bhk", "4bhk", "5bhk"];
  

//   const handlePropertyTypeChange = (type) => {
//     setPropertyType(type);
//     setPropertySubType("");
//     setBedrooms("");
//     setSquareFeetArea("");
//   };

//   const handlePropertySubTypeChange = (subType) => {
//     setPropertySubType(subType);
//     setBedrooms("");
//     setSquareFeetArea("");
//   };

//   const handleBedroomsChange = (bedrooms) => {
//     setBedrooms(bedrooms);
//   };

//   const handleSquareFeetAreaChange = (area) => {
//     setSquareFeetArea(area);
//   };

//   const handlePropertyDetailsChange = (details) => {
//     setPropertyDetails(details);
//   };

//   const handleImageUpload = (e) => {
//     const files = Array.from(e.target.files);

//     // Update image preview
//     const previews = files.map((file) => URL.createObjectURL(file));
//     setImagePreview([...imagePreview, ...previews]);

//     // Update actual images
//     setImages([...images, ...files]);
//   };

//   const handleRemoveImage = (index) => {
//     const updatedImages = [...images];
//     updatedImages.splice(index, 1);
//     setImages(updatedImages);

//     const updatedPreviews = [...imagePreview];
//     updatedPreviews.splice(index, 1);
//     setImagePreview(updatedPreviews);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log("Form submitted:", {
//       propertyType,
//       propertySubType,
//       bedrooms,
//       squareFeetArea,
//       propertyDetails,
//       images,
//     });
//   };

//   return (
//     <div className="w-full h-screen bg-red-600 p-8">
//       <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
//         <h1 className="text-3xl font-bold mb-6">Possfdhgsdfgt Property</h1>

//         <form onSubmit={handleSubmit}>
//           <CustomDropdown
//             label="Property Type"
//             options={propertyTypes}
//             value={propertyType}
//             onChange={handlePropertyTypeChange}
//           />

//           {propertyType && (
//             <div>
//               <CustomDropdown
//                 label="Property Sub-Type"
//                 options={
//                   propertyType === "Residential"
//                     ? residentialSubTypes
//                     : propertyType === "Commercial"
//                     ? commercialSubTypes
//                     : otherSubTypes
//                 }
//                 value={propertySubType}
//                 onChange={handlePropertySubTypeChange}
//               />

//               {propertySubType && propertySubType === "Flat" && (
//                 <CustomDropdown
//                   label="Bedrooms"
//                   options={bedroomOptions}
//                   value={bedrooms}
//                   onChange={handleBedroomsChange}
//                 />
//               )}

//               {propertySubType && propertySubType === "House/Villa" && (
//                 <CustomDropdown
//                   label="Bedrooms"
//                   options={bedroomOptions}
//                   value={bedrooms}
//                   onChange={handleBedroomsChange}
//                 />
//               )}

//               {propertySubType && propertySubType === "Plot" && (
//                 <CustomDropdown
//                   label="Square Feet Area"
//                   options={[]}
//                   value={squareFeetArea}
//                   onChange={handleSquareFeetAreaChange}
//                 />
//               )}

//               {/* ... (existing code) */}
//             </div>
//           )}

//           {/* ... (existing code) */}

//           <div className="mb-4">
//             <label
//               htmlFor="propertyDetails"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Property Details:
//             </label>
//             <textarea
//               id="propertyDetails"
//               value={propertyDetails}
//               onChange={(e) => handlePropertyDetailsChange(e.target.value)}
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
//               rows="4"
//               placeholder="Enter Property Details"
//             ></textarea>
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="imageUpload"
//               className="block text-sm font-medium text-gray-600"
//             >
//               Upload Images:
//             </label>
//             <input
//               type="file"
//               id="imageUpload"
//               multiple
//               onChange={handleImageUpload}
//               className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>

//           {imagePreview.length > 0 && (
//             <div className="mb-4">
//               <label className="block text-sm font-medium text-gray-600">
//                 Image Preview:
//               </label>
//               <div className="flex space-x-2">
//                 {imagePreview.map((preview, index) => (
//                   <div key={index} className="relative">
//                     <img
//                       src={preview}
//                       alt={`Preview ${index}`}
//                       className="w-20 h-20 object-cover rounded-md"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => handleRemoveImage(index)}
//                       className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full cursor-pointer"
//                     >
//                       X
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default PostProperty;

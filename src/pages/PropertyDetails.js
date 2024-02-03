import React from "react";
import { useLocation } from "react-router-dom";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import PropertyInterestForm from "../components/Elements/PropertyInterestForm";
import Amenities from "../components/cards/Amenities";
import PriceCard from "../components/cards/PriceCard";
import Overview from "../components/cards/Overview";

const PropertyDetails = () => {
  const routeLocation = useLocation();
  const { property } = routeLocation.state || {};

  if (!property) {
    return <p>Loading...</p>;
  }

  const images = [
    {
      original: property.image2,
      thumbnail: property.image2,
      description: "Apartment view 2",
    },
    {
      original: property.image3,
      thumbnail: property.image3,
      description: "Apartment view 3",
    },
    {
      original: property.image4,
      thumbnail: property.image4,
      description: "Apartment view 4",
    },
  ];

  const handleFormSubmit = (formData) => {
    // Handle form submission logic, including the propertyId
    console.log(
      "Form data submitted for property with ID",
      formData.propertyId,
      ":",
      formData
    );
  };

  const handleCallButtonClick = () => {
    // Add logic to initiate a call
    console.log("Initiating call...");
  };

  const handleWhatsAppButtonClick = () => {
    // Add logic to open WhatsApp
    console.log("Opening WhatsApp...");
  };

  return (
    <>
      <div className="w-full h-full mt-5  ">

        <div className="max-w-7xl mx-auto my-8 p-4 px-10 mt-10">
          <div className="flex gap-4">
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">
                {property.propertyType} {property.SubpropertyType}
              </h1>
              <p className="text-lg text-gray-600 mb-4">{property.Address}</p>
              <div className="relative flex items-center w-full justify-center mb-6">
                <div className="w-full ">
                  <Gallery
                    items={images}
                    renderItem={(item) => (
                      <img
                        src={item.original}
                        alt={item.description}
                        className="w-full h-auto max-h-96 object-cover"
                      />
                    )}
                  />
                </div>
              </div>
              <Overview  property={property}/>
              <Amenities amenities={property.amenities} />
             <div className="border rounded-lg p-4">
             <h2 className="text-2xl font-semibold mb-4">Property Details</h2>
              <p className="text-gray-600 mb-4">
               {property.description}
              </p>
             </div>
            </div>
            <div className="flex justify-center ">
              <div className="w-96 h-full flex flex-col pt-20 items-center   ">
                {/* <PriceCard property={property} /> */}
                <PropertyInterestForm
                  propertyId={property.id}
                  property={property}
                  onFormSubmit={handleFormSubmit}
                  onCallButtonClick={handleCallButtonClick}
                  onWhatsAppButtonClick={handleWhatsAppButtonClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetails;

// const PropertyDetail = () => {
//   return (
//     <div>
//                <div className="bg-gray-100">
//         <div className="container mx-auto p-8 ">
//           <div className="border shadow-sm p-8 rounded-lg mb-8">
//             <h1 className="text-4xl font-bold text-gray-800">
//               {property.location}
//             </h1>
//             <p className="text-gray-600">
//               {propertyType} - {subtype}
//             </p>
//             <div className="flex justify-between items-center">
//               <div className="grid grid-cols-2 gap-6">
//                 <div className="flex items-center">
//                   <p className="text-lg text-gray-800 font-semibold">Budget:</p>
//                   <p className="text-lg text-gray-800 ml-2">${budget}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
//             <div className="aspect-w-3 aspect-h-1 md:flex-shrink-0">
//               {image ? (
//                 <img
//                   className="w-full h-auto object-cover rounded-lg border border-gray-300"
//                   src={image}
//                   alt={`Property ${propertyLocation}`}
//                 />
//               ) : (
//                 <div className="h-full w-full bg-gray-300 rounded-lg"></div>
//               )}
//             </div>

//             <div>
//               <BookingForm onBookingSubmit={handleBookingSubmit} />
//               <div className=" ">
//                 <div className="flex">
//                   {amenities && <Amenities amenities={amenities} />}
//                   {overview && <PropertyOverview overview={overview} />}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex ">
//             {/* Use conditional rendering for ContactInformation */}
//             {contactInfo && (
//               <ContactInformation contactInfo={contactInfo} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

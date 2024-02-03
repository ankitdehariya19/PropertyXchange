import React, { useState } from "react";
import PriceCard from "../cards/PriceCard";

const PropertyInterestForm = ({
  property,
  propertyId,
  onFormSubmit,
  onCallButtonClick,
  onWhatsAppButtonClick,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });
  const [isMailSent, setIsMailSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    // Basic form validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.interest
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Show loading state
    setIsLoading(true);

    // Attach the propertyId to the form data
    const formDataWithPropertyId = {
      ...formData,
      propertyId,
    };

    try {
      // Simulate API call (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Call the parent component's onFormSubmit function
      onFormSubmit(formDataWithPropertyId);

      // Show success animation and clear the form
      setIsMailSent(true);
      setTimeout(() => {
        setIsMailSent(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          interest: "",
        });
        setIsLoading(false);
      }, 2000); // Adjust the timeout duration as needed
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error("Error sending email:", error);
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-4 h-fit">
      <div>
       
      </div>
      <div
        className={`shadow-sm w-full rounded-lg border transition-all ${
          isMailSent ? "border-green-500 success-animation" : ""
        }`}
      >
        <div className="p-6">
          {isMailSent && (
            <div className="text-green-500 mb-4">
              Mail sent successfully! Thank you for your interest.
            </div>
          )}
          <p className="font-semibold">{property.location}</p>
          <p className="text-gray-600 mb-4">
            {property.bathrooms} Bhk {property.propertyType}{" "}
            {property.SubpropertyType}
          </p>

          <input
            className="w-full mt-3 p-2 border rounded-md focus:outline-none"
            placeholder="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="w-full mt-3 p-2 border rounded-md focus:outline-none"
            placeholder="Your Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="w-full mt-3 p-2 border rounded-md focus:outline-none"
            placeholder="Your Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            className="w-full mt-3 p-2 border rounded-md focus:outline-none"
            placeholder={`I'm interested in [${property.propertyType}]`}
            name="interest"
            value={formData.interest}
            onChange={handleChange}
          />

          <div className="items-center p-6 flex justify-between">
            <button
              onClick={handleSubmit}
              className={`mt-4 bg-orange-500 hover:bg-orange-600 justify-center text-white p-2 rounded w-full flex m-2 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Email"}
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between ">
        <button
          onClick={onCallButtonClick}
          className="mt-4 hover:bg-orange-500 transform duration-300 justify-center text-gray-500 hover:text-white p-2 w-full flex m-2 rounded-lg border"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call
        </button>
        <button
          onClick={onWhatsAppButtonClick}
          className="mt-4 w-full justify-center hover:bg-orange-500 text-gray-500 hover:text-white p-2 rounded-lg border flex m-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <rect width={14} height={20} x={5} y={2} rx={2} ry={2} />
            <path d="M12 18h.01" />
          </svg>
          WhatsApp
        </button>
      </div>
    </div>
  );
};

export default PropertyInterestForm;

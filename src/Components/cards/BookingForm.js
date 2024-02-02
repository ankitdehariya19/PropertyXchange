// BookingForm.js

import React, { useState } from 'react';

const BookingForm = ({ onBookingSubmit }) => {
  const [bookingInfo, setBookingInfo] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    onBookingSubmit(bookingInfo);
    // You can reset the form or redirect the user after submission
  };

  return (
    <div className=" pt-6">
      <p className="text-lg text-gray-800">
        <span className="font-semibold">Booking Information:</span>
      </p>
      <form onSubmit={handleBookingSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
            value={bookingInfo.name}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border focus:border-none focus:outline-none rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Mobile Number:</label>
          <input
            type="tel"
            name="mobile"
            value={bookingInfo.mobile}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border focus:border-none focus:outline-none rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email (optional):</label>
          <input
            type="email"
            name="email"
            value={bookingInfo.email}
            onChange={handleInputChange}
            className="mt-1 p-2 w-full border focus:border-none focus:outline-none rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Additional Message:</label>
          <textarea
            name="message"
            value={bookingInfo.message}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 p-2 w-full border focus:border-none focus:outline-none rounded-md"
          ></textarea>
        </div>

        <button
          type="submit"
          className="py-3 px-10 bg-orange-500 rounded-full text-white hover:bg-orange-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

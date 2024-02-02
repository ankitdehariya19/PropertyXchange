// ContactInformation.js
import React from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactInformation = ({ contactInfo }) => (
  <div className="p-4 rounded-md">
    <p className="text-lg font-semibold text-gray-800">Contact Information:</p>
    <div className="grid grid-cols-1 gap-4 mt-2 text-gray-600">
      <div className="flex items-start">
        <FaEnvelope className="text-orange-500 mr-2 mt-1" />
        <div>
          <p className="font-semibold">Email:</p>
          <p>{contactInfo.email}</p>
        </div>
      </div>
      <div className="flex items-start">
        <FaPhone className="text-orange-500 mr-2 mt-1" />
        <div>
          <p className="font-semibold">Phone:</p>
          <p>{contactInfo.phone}</p>
        </div>
      </div>
    </div>
  </div>
);

export default ContactInformation;

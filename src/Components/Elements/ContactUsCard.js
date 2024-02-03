// ContactUsCard.js

import React from 'react';

const ContactUsCard = () => {
  const handleWhatsAppClick = () => {
    // Add your WhatsApp handling logic here
    alert('Opening WhatsApp...');
  };

  const handleCallClick = () => {
    // Add your Call handling logic here
    alert('Calling...');
  };

  return (
    <div className="flex flex-col space-y-4 ">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full" data-v0-t="card">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Request Info</h3>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium bg-primary text-white hover:bg-primary/90 h-10 px-4 py-2">
              Schedule a tour
            </button>
          </div>
          <div className="flex items-center space-x-4 mt-4">
            <span className="flex-shrink-0 h-10 w-10 overflow-hidden rounded-full bg-muted">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-white">MS</span>
            </span>
            <div>
              <p className="font-semibold">Michael Sutther</p>
              <p className="text-gray-600">Real Estate Broker</p>
            </div>
          </div>
          <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md text-sm font-medium h-10 px-4 py-2 mt-4">
            Schedule a showing
          </button>
          <input className="form-input mt-4" placeholder="Your Name" />
          <input className="form-input mt-4" placeholder="Your Email" type="email" />
          <input className="form-input mt-4" placeholder="Your Phone" />
          <input className="form-input mt-4" placeholder="I'm interested in [Studio Apartment]" />
        </div>
        <div className="flex items-center justify-between p-6">
          <button className="bg-primary text-white hover:bg-primary/90 rounded-md text-sm font-medium h-10 px-4 py-2">
            Send Email
          </button>
        </div>
      </div>
      <div className="flex space-x-2 w-full bg-red-300">
        <button className="border form-btn"> 
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Call
        </button>
        <button className="border form-btn" onClick={handleWhatsAppClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <rect width={14} height={20} x={5} y={2} rx={2} ry={2} />
            <path d="M12 18h.01" />
          </svg>
          WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ContactUsCard;

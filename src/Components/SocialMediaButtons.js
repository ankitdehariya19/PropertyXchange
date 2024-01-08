
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";

const SocialMediaButtons = () => {
  const platforms = [
    { name: "Facebook", icon: <FaFacebook /> },
    { name: "Twitter", icon: <FaTwitter /> },
    { name: "Instagram", icon: <FaInstagram /> },
    { name: "LinkedIn", icon: <FaLinkedin /> },
    { name: "Pinterest", icon: <FaPinterest /> },
  ];

  const handleSocialMediaClick = (platform) => {
    console.log(`Clicked on ${platform}`);
  };

  return (
    <div className="flex items-center space-x-4">
      {platforms.map(({ name, icon }) => (
        <button key={name} className="text-xl" onClick={() => handleSocialMediaClick(name)}>
          {icon}
        </button>
      ))}
    </div>
  );
};

export default SocialMediaButtons;

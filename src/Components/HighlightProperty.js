import React from 'react';

const HighlightProperty = ({ id, title, imageUrl }) => {
  return (
    <div
      key={id}
      className="highlight-property bgre rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
      style={{ width: '80px', height: '80px', padding: '10px' }} // Adjusted to make it a square
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover  rounded-lg" // Made the image cover the entire square and added rounded corners
      />
      <div className="p-2">
        <h2 className="text-xs font-semibold mb-1">{title}</h2>
      </div>
    </div>
  );
};

export default HighlightProperty;

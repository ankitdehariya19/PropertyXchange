import React from 'react'

const Overview = ({property}) => {
  return (
<div>
  <div className="flex flex-col space-y-4 border p-4 rounded-lg">
    <h2 className="text-lg font-semibold">Overview</h2>
    <div className="flex items-center space-x-8">
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
          <line x1={16} x2={16} y1={2} y2={6} />
          <line x1={8} x2={8} y1={2} y2={6} />
          <line x1={3} x2={21} y1={10} y2={10} />
        </svg>
        <div className="flex flex-col">
          <span className="text-sm font-medium">Updated On:</span>
          <span className="text-sm">{property.updatedOn}</span>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M2 4v16" />
          <path d="M2 8h18a2 2 0 0 1 2 2v10" />
          <path d="M2 17h20" />
          <path d="M6 8v9" />
        </svg>
        <span className="text-sm">{property.bedrooms} Bedrooms</span>
      </div>
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
          <line x1={10} x2={8} y1={5} y2={7} />
          <line x1={2} x2={22} y1={12} y2={12} />
          <line x1={7} x2={7} y1={19} y2={21} />
          <line x1={17} x2={17} y1={19} y2={21} />
        </svg>
        <span className="text-sm">{property.bathrooms} Bathrooms</span>
      </div>
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
          <circle cx={7} cy={17} r={2} />
          <path d="M9 17h6" />
          <circle cx={17} cy={17} r={2} />
        </svg>
        <span className="text-sm">{property.carparking} Garages</span>
      </div>
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
          <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
          <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
          <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
        </svg>
        <span className="text-sm">{property.area}</span>
      </div>
      <div className="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
          <line x1={16} x2={16} y1={2} y2={6} />
          <line x1={8} x2={8} y1={2} y2={6} />
          <line x1={3} x2={21} y1={10} y2={10} />
        </svg>
        <div className="flex flex-col">
          <span className="text-sm font-medium">Year Built:</span>
          <span className="text-sm">{property.yearBuilt}</span>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Overview

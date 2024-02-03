import React from "react";

const PriceCard = ({property}) => {
  return (
    <div>
      <div
        className="rounded-lg  text-card-foreground shadow-sm w-full max-w-md p-10 grid gap-10"
        data-v0-t="card"
      >
        <div className="flex flex-col items-center space-y-0 gap-4 p-0">
          <div className="grid gap-1 text-center">
            <h3 className="font-semibold whitespace-nowrap tracking-tight text-lg">
              {property.SubpropertyType}
            </h3>
            <p className="text-muted-foreground text-xs">
             {property.Landmarks}
            </p>
          </div>
        </div>
        <div className="p-0 grid gap-4">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex gap-2 items-center">
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
                className="w-4 h-4 shrink-0 fill-primary"
              >
                <path d="M2 4v16" />
                <path d="M2 8h18a2 2 0 0 1 2 2v10" />
                <path d="M2 17h20" />
                <path d="M6 8v9" />
              </svg>
              {property.bedrooms}Bedrooms
            </div>
            <div className="flex gap-2 items-center">
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
                className="w-4 h-4 shrink-0 fill-primary"
              >
                <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                <line x1={10} x2={8} y1={5} y2={7} />
                <line x1={2} x2={22} y1={12} y2={12} />
                <line x1={7} x2={7} y1={19} y2={21} />
                <line x1={17} x2={17} y1={19} y2={21} />
              </svg>
              {property.bathrooms} Bathrooms
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex gap-2 items-center">
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
                className="w-4 h-4 shrink-0 fill-primary"
              >
                <path d="M3 3v18h18" />
                <path d="M7 12v5h12V8l-5 5-4-4Z" />
              </svg>
              {property.area}
            </div>
            <div className="flex gap-2 items-center">
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
                className="w-4 h-4 shrink-0 fill-primary"
              >
                <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
                <path d="M7 7h.01" />
              </svg>
             {property.SQFTPrice}
            </div>
          </div>
        
        </div>
        <div className="flex items-center text-2xl font-bold p-0 justify-center">
        {property.price}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;

import React from "react";
import Button from "./Elements/Button";

const HighlightProperty = ({ id, title, imageUrl }) => {
  return (
   
      
      <div  key={id} className="relative w-96 h-40 flex justify-center items-center p-5">
        <div className=" border shadow-md flex justify-center w-64 h-full rounded-md ">
          <div className=" absolute border shadow-md rounded-md left-0 top-8  w-24 h-24">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover  rounded-lg" // Made the image cover the entire square and added rounded corners
            />
          </div>
          <div className=" rounded-md w-full flex justify-center items-center">
             <div className="">
             <h1>{title}</h1>
             <p>address</p>
             <Button >
                view 
             </Button>
             </div>
           
          </div>
        </div>
      </div>

  );
};

export default HighlightProperty;

import React from "react";
import { FcFilledFilter } from "react-icons/fc";
import { IoMdSearch } from "react-icons/io";

const Filtertopbar = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
        <div className="grid gap-1">
          <h1 className="text-2xl font-bold tracking-tight">Search Results</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Showing properties based on your search criteria.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full md:w-auto"
            type="button"
            id="radix-:r4n:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <FcFilledFilter />
            Property Type
          </button>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full md:w-auto"
            type="button"
            id="radix-:r4p:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <FcFilledFilter />
            Price Range
          </button>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full md:w-auto"
            type="button"
            id="radix-:r4r:"
            aria-haspopup="menu"
            aria-expanded="false"
            data-state="closed"
          >
            <FcFilledFilter />
            Bedrooms
          </button>
        </div>
        <form className="flex-1 ml-auto sm:flex-initial relative">
          <div className="relative">
            <IoMdSearch className="absolute left-3 top-3 " />
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              placeholder="Search location..."
              type="search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filtertopbar;

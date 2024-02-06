import React from 'react'

const SearchPagination = () => {
  return (
    <div className="flex justify-center mt-8 ">
    <nav
      role="navigation"
      aria-label="pagination"
      className="mx-auto flex w-full justify-center"
    >
      <ul className="flex flex-row items-center gap-1">
        <li className></li>
        <li className>
          <a
            className="inline-flex items-center whitespace-nowrap shrink-0 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 h-8 px-3 py-2 gap-1 pl-2.5"
            aria-label="Go to previous page"
            href="#"
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
              className="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span>Previous</span>
          </a>
        </li>
        <li className></li>
        <li className>
          <a
            className="inline-flex items-center whitespace-nowrap shrink-0 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 h-9 w-9"
            href="#"
          >
            1
          </a>
        </li>
        <li className></li>
        <li className>
          <a
            aria-current="page"
            className="inline-flex items-center whitespace-nowrap shrink-0 justify-center rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm font-medium hover:bg-accent hover:text-accent-foreground h-9 w-9"
            href="#"
          >
            2
          </a>
        </li>
        <li className></li>
        <li className>
          <a
            className="inline-flex items-center whitespace-nowrap shrink-0 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 h-9 w-9"
            href="#"
          >
            3
          </a>
        </li>
        <li className>
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center"
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
              className="h-4 w-4"
            >
              <circle cx={12} cy={12} r={1} />
              <circle cx={19} cy={12} r={1} />
              <circle cx={5} cy={12} r={1} />
            </svg>
            <span className="sr-only">More pages</span>
          </span>
        </li>
        <li className></li>
        <li className>
          <a
            className="inline-flex items-center whitespace-nowrap shrink-0 justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-gray-500 hover:bg-gray-100 hover:text-gray-900 h-8 px-3 py-2 gap-1 pr-2.5"
            aria-label="Go to next page"
            href="#"
          >
            <span>Next</span>
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
              className="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  )
}

export default SearchPagination

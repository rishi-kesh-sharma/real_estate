import React from "react";

const SearchInput = () => {
  return (
    <div className="relative w-full   rounded">
      <input
        type="search"
        className="block rounded-lg text-md p-3 w-full z-20  text-gray-700 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-green-500 focus:border-green-500 md:p-[1rem] md:text-[1.3rem] dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
        placeholder="Search for city or address"
        required
      />
      <button
        type="submit"
        className="absolute top-0 bottom-0 right-0  p-2.5 text-xl font-medium text-white bg-green-700 rounded-r-lg border border-green-700 md:p-[1rem] hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
        <svg
          aria-hidden="true"
          className="w-[1.5rem] h-[1.5rem] md:w-[2rem] "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </div>
  );
};

export default SearchInput;

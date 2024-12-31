import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full mt-4">
      <div className="">
        <p className="text-gray-700 md:mt-7 font-bold md:font-semibold">
          <span>200</span> products available
        </p>
      </div>
      <div className="flex items-center w-full md:w-max justify-between border border-gray-400 rounded-md mt-3 md:mt-0">
        <input
          type="search"
          name=""
          id=""
          placeholder="search for product"
          className="p-2 md:p-1"
        />
        <FaSearch size={22} className="pr-2 text-gray-600" />
      </div>
    </div>
  );
};

export default SearchSection;

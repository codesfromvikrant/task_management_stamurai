import React from "react";
import { FcFilledFilter } from "react-icons/fc";

const FilterBtn = () => {
  return (
    <div>
      <button className="flex justify-start items-center gap-2 bg-white py-2 px-4 shadow rounded">
        <p className="text-sm font-semibold text-gray-700">Filter By</p>
        <FcFilledFilter />
      </button>
    </div>
  );
};

export default FilterBtn;

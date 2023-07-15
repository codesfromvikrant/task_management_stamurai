import React from "react";

const SearchTask = () => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search For Task..."
        className="w-full p-2 bg-white text-sm rounded shadow placeholder:font-medium outline-blue-500"
      />
    </div>
  );
};

export default SearchTask;

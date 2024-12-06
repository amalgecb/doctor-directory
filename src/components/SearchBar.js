import React from "react";
import '../styles/SearchBar.css';


const SearchBar = ({ filters, setFilters }) => {
  const handleSearchChange = (e) => {
    if(e!=null){
    setFilters({ ...filters, search: e.target.value });
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by name, specialization, or hospital"
        value={filters.search}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;

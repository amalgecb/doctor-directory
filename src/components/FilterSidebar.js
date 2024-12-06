import React from "react";
import '../styles/FilterSidebar.css';


const FilterSidebar = ({ filters, setFilters }) => {
  const specializations = ["Cardiologist", "Dermatologist"]; 
  const hospitals = ["City Hospital", "Central Clinic"]; 

  const toggleFilter = (category, value) => {
    const updatedCategory = filters[category].includes(value)
      ? filters[category].filter((item) => item !== value) // Remove if unchecked
      : [...filters[category], value]; // Add if checked
  
    setFilters({ ...filters, [category]: updatedCategory });
  };
  
  

  return (
    <div className="filter-sidebar">
      <h4>Filter by Specialization</h4>
      {specializations.map((spec) => (
        <label key={spec}>
          <input
            type="checkbox"
            checked={filters.specialization.includes(spec)}
            onChange={() => toggleFilter("specialization", spec)}
          />
          {spec}
        </label>
      ))}

      <h4>Filter by Hospital</h4>
      {hospitals.map((hospital) => (
        <label key={hospital}>
          <input
            type="checkbox"
            checked={filters.hospital.includes(hospital)}
            onChange={() => toggleFilter("hospital", hospital)}
          />
          {hospital}
        </label>
      ))}
    </div>
  );
};

export default FilterSidebar;

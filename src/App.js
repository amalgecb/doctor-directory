import React, { useState } from "react";
import DoctorList from "./components/DoctorList";
import FilterSidebar from "./components/FilterSidebar";
import SearchBar from "./components/SearchBar";
import doctorData from "./data/doctors";
import './styles/App.css';// Replace with actual data source

const App = () => {
  const [filteredDoctors, setFilteredDoctors] = useState(doctorData);
  const [filters, setFilters] = useState({ search: "", specialization: [], hospital: [] });

  const applyFilters = () => {
    let result = doctorData;
    if (filters.specialization.length === 0 && filters.hospital.length === 0 && !filters.search) {
      setFilteredDoctors(doctorData);
      return; // No need to apply further filtering
    }
  
    // Filter by search input
    if (filters.search) {
      result = result.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          doctor.specialization.toLowerCase().includes(filters.search.toLowerCase()) ||
          doctor.hospital.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
  
    // Filter by specialization (only if specialization filters exist)
    if (filters.specialization.length > 0) {
      result = result.filter((doctor) =>
        filters.specialization.includes(doctor.specialization)
      );
    }
  
    // Filter by hospital (only if hospital filters exist)
    if (filters.hospital.length > 0) {
      result = result.filter((doctor) => filters.hospital.includes(doctor.hospital));
    }
  
    // Update the filtered doctors state
    setFilteredDoctors(result);
  };
  
  

  const updateFilters = (newFilters) => {
    setFilters(newFilters);
    applyFilters();
  };

  return (
    <div className="app-container">
      <FilterSidebar filters={filters} setFilters={updateFilters} />
      <div className="content">
        <SearchBar filters={filters} setFilters={updateFilters} />
        <DoctorList doctors={filteredDoctors} />
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import DoctorCard from "./DoctorCard";
import '../styles/DoctorList.css';

const DoctorList = ({ doctors }) => {
  const itemsPerPage = 6; // Number of cards per page
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDoctors = doctors.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(doctors.length / itemsPerPage);

  return (
    <div>
      <div className="doctor-list">
        {currentDoctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;

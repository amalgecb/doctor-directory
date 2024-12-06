import React from "react";
import '../styles/DoctorList.css';


const DoctorCard = ({ doctor }) => (
  <div className="doctor-card">
    <img src={doctor.photo} alt={doctor.name} className="doctor-photo" />
    <h3>{doctor.name}</h3>
    <p><strong>Specialization:</strong> {doctor.specialization}</p>
    <p><strong>Hospital:</strong> {doctor.hospital}</p>
    <p>{doctor.description}</p>
  </div>
);

export default DoctorCard;

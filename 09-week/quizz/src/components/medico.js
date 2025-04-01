import React from "react";

const MedicoCard = ({ nombre, especialidad }) => {
  return (
    <div>
      <h3>{nombre}</h3>
      <p>Especialidad: {especialidad}</p>
    </div>
  );
};

export default MedicoCard;

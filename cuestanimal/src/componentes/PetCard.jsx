import React from 'react';

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.imagen} alt={pet.nombre} className="pet-image" />
      <h2>{pet.nombre}</h2>
      <p><strong>Tipo:</strong> {pet.tipo}</p>
      <p><strong>Edad:</strong> {pet.edad}</p>
      <p><strong>Estado:</strong> {pet.estado === "adopcion" ? "En adopción" : "Adoptado"}</p>
    </div>
  );
};

export default PetCard;

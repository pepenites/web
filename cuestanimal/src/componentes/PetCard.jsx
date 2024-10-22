import React from 'react';

const PetCard = ({ pet }) => {
  return (
    <div className="pet-card">
      <img src={pet.imagen} alt={pet.nombre} className="pet-image" />
      <h2>{pet.nombre}</h2>
      <p><strong>Tipo:</strong> {pet.tipo}</p>
      <p><strong>Edad:</strong> {pet.edad}</p>
      <p><strong>Estado:</strong> {pet.estado === "adopcion" ? "En adopción" : "Adoptado"}</p>
      
      {/* Botón para redirigir a los detalles del enlace proporcionado en la API */}
      <a href={pet.url} target="_blank" rel="noopener noreferrer">
        <button>Más detalles</button>
      </a>
    </div>
  );
};

export default PetCard;

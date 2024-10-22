import React, { useState } from 'react';

const PetCard = ({ pet }) => {
  const [peticionEnviada, setPeticionEnviada] = useState(false);

  const handleEnviarPeticion = () => {
    setPeticionEnviada(true);
  };

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
      <button 
  className={`enviar-peticion-btn ${peticionEnviada ? 'enviada' : ''}`} 
  onClick={handleEnviarPeticion} 
  disabled={peticionEnviada}
>
  {peticionEnviada ? "Petición enviada" : "Enviar petición"}
</button>
    </div>
  );
};

export default PetCard;
// PetCard.js
import React, { useState } from 'react';

const PetCard = ({ pet }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prevShowDetails => !prevShowDetails);
  };

  return (
    <div className="pet-card">
      <img src={pet.imagen} alt={pet.nombre} />
      <h3>{pet.nombre}</h3>
      <a href={pet.url} target="_blank" rel="noopener noreferrer" onClick={toggleDetails}>
        {showDetails ? 'Ver menos' : 'Ver más'}
      </a>
      {showDetails && (
        <div className="pet-details">
          <div dangerouslySetInnerHTML={{ __html: pet.desc_fisica }} />
          <div dangerouslySetInnerHTML={{ __html: pet.desc_personalidad }} />
          <div dangerouslySetInnerHTML={{ __html: pet.desc_adicional }} />
        </div>
      )}
    </div>
  );
};

export default PetCard;

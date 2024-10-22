// PetList.jsx
import React from 'react';
import PetCard from './PetCard';

const PetList = ({ pets }) => {
  return (
    <div className="pet-list">
      {pets.length > 0 ? (
        pets.map(pet => <PetCard key={pet.id} pet={pet} />)
      ) : (
        <p>No hay mascotas que coincidan con los filtros.</p>
      )}
    </div>
  );
};

export default PetList;

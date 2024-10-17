import React from 'react';
import PetCard from './PetCard';
import styled from 'styled-components';

const PetListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PetList = ({ pets }) => {
  return (
    <PetListContainer>
      {pets.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </PetListContainer>
  );
};

export default PetList;

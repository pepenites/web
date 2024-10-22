// AdoptionApp.jsx
import React, { useState, useEffect } from 'react';
import PetList from './PetList';
import FilterBar from './FilterBar';
//import PetCard from './PetCard';

const AdoptionApp = () => {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({
    type: 'all',
    age: 'all',
    status: 'all'
  });

  useEffect(() => {
    // Fetch data from API
    fetch('https://huachitos.cl/api/animales')
      .then(res => res.json())
      .then(data => setPets(data.data))
      .catch(err => console.log(err));
  }, []);

  const applyFilters = () => {
    return pets.filter(pet => {
      const matchesType = filters.type === 'all' || pet.tipo === filters.type;
      const matchesStatus = filters.status === 'all' || pet.estado === filters.status;

      // Logic for filtering by age
      let matchesAge = true;
      if (filters.age === 'young') {
        matchesAge = parseInt(pet.edad) < 1;
      } else if (filters.age === 'adult') {
        matchesAge = parseInt(pet.edad) >= 1 && parseInt(pet.edad) <= 7;
      } else if (filters.age === 'senior') {
        matchesAge = parseInt(pet.edad) > 7;
      }

      return matchesType && matchesAge && matchesStatus;
    });
  };

  return (
    <div>
      <h1>Escoge a tu amigo</h1>
      <FilterBar filters={filters} setFilters={setFilters} />
      <PetList pets={applyFilters()} />
      
    </div>
  );
};

export default AdoptionApp;

// components/AdoptionApp.jsx
import React, { useEffect, useState } from 'react';
import '../App.css' // Asegúrate de importar el archivo CSS

const AdoptionApp = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const response = await fetch('https://huachitos.cl/api/animales');
      const data = await response.json();
      setPets(data.data);
    };

    fetchPets();
  }, []);

  return (
    <div>
      <h2>Mascotas Disponibles</h2>
      <div className="pet-cards">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.imagen} alt={pet.nombre} />
            <h3>{pet.nombre}</h3>
            <p>Tipo: {pet.tipo}</p>
            <p>Edad: {pet.edad}</p>
            <p>Estado: {pet.estado}</p>
            <p>Descripción: {pet.desc_personalidad}</p>
            <a href={pet.url}>Ver más</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdoptionApp;

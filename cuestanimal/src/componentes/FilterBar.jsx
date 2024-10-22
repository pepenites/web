// FilterBar.jsx
import React from 'react';

const FilterBar = ({ filters, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="filter-bar">
      <label>
        Tipo:
        <select name="type" value={filters.type} onChange={handleFilterChange}>
          <option value="all">Todos</option>
          <option value="Perro">Perros</option>
          <option value="Gato">Gatos</option>
          <option value="Conejo">Conejos</option>
        </select>
      </label>

      <label>
        Edad:
        <select name="age" value={filters.age} onChange={handleFilterChange}>
          <option value="all">Todas</option>
          <option value="young">Joven (menos de 1 año)</option>
          <option value="adult">Adulto (1 a 7 años)</option>
          <option value="senior">Senior (más de 7 años)</option>
        </select>
      </label>

      <label>
        Estado:
        <select name="status" value={filters.status} onChange={handleFilterChange}>
          <option value="all">Todos</option>
          <option value="adopcion">En adopción</option>
          <option value="adoptado">Adoptado</option>
        </select>
      </label>
    </div>
  );
};

export default FilterBar;

import './App.css';
import AdoptionApp from './componentes/AdoptionApp'; // Importa el componente de adopción




function App() {
  return (
    <div>
      <header>
        <h1>Adopta un Amigo Peludo</h1>
        <p>Encuentra tu nueva mascota aquí.</p>
      </header>
      <main>
        <AdoptionApp /> {/* Renderiza el componente de adopción */}
      </main>
    </div>
  );
};

export default App;

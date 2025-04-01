import { useState } from "react";

const Recepcionista: React.FC = () => {
  const [horario, setHorario] = useState("");
  const [extension, setExtension] = useState("");

  return (
    <div>
      <h1>Página del Recepcionista</h1>
      <p>Esta es la página donde se gestionan los recepcionistas.</p>

      <label>Horario laboral:</label>
      <input 
        type="text" 
        value={horario} 
        onChange={(e) => setHorario(e.target.value)}
      />

      <label>Extensión telefónica:</label>
      <input 
        type="text" 
        value={extension} 
        onChange={(e) => setExtension(e.target.value)}
      />
    </div>
  );
};

export default Recepcionista;

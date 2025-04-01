import { useState } from "react";

interface Medico {
  id: number;
  nombre: string;
  especialidad: string;
  licencia: string;
}

const Medico: React.FC = () => {
  const [medicos, setMedicos] = useState<Medico[]>([
    { id: 1, nombre: "Dr. Juan Pérez", especialidad: "Cardiología", licencia: "MED-123456" },
    { id: 2, nombre: "Dra. María López", especialidad: "Neurología", licencia: "MED-654321" }
  ]);

  const [nombre, setNombre] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [licencia, setLicencia] = useState("");
  const [editando, setEditando] = useState<number | null>(null);

  // Función para agregar un nuevo médico
  const agregarMedico = () => {
    if (!nombre || !especialidad || !licencia) return alert("Todos los campos son obligatorios");
    const nuevoMedico: Medico = {
      id: medicos.length + 1,
      nombre,
      especialidad,
      licencia
    };
    setMedicos([...medicos, nuevoMedico]);
    limpiarFormulario();
  };

  // Función para eliminar un médico
  const eliminarMedico = (id: number) => {
    setMedicos(medicos.filter(medico => medico.id !== id));
  };

  // Función para seleccionar un médico para editar
  const editarMedico = (medico: Medico) => {
    setEditando(medico.id);
    setNombre(medico.nombre);
    setEspecialidad(medico.especialidad);
    setLicencia(medico.licencia);
  };

  // Función para guardar los cambios al editar
  const modificarMedico = () => {
    if (!nombre || !especialidad || !licencia) return alert("Todos los campos son obligatorios");
    setMedicos(
      medicos.map(medico => 
        medico.id === editando ? { ...medico, nombre, especialidad, licencia } : medico
      )
    );
    limpiarFormulario();
  };

  // Función para limpiar el formulario
  const limpiarFormulario = () => {
    setNombre("");
    setEspecialidad("");
    setLicencia("");
    setEditando(null);
  };

  return (
    <div>
      <h1>Gestión de Médicos</h1>

      <label>Nombre:</label>
      <input 
        type="text" 
        value={nombre} 
        onChange={(e) => setNombre(e.target.value)}
      />

      <label>Especialidad:</label>
      <input 
        type="text" 
        value={especialidad} 
        onChange={(e) => setEspecialidad(e.target.value)}
      />

      <label>Número de licencia médica:</label>
      <input 
        type="text" 
        value={licencia} 
        onChange={(e) => setLicencia(e.target.value)}
      />

      {editando ? (
        <button onClick={modificarMedico}>Modificar</button>
      ) : (
        <button onClick={agregarMedico}>Agregar</button>
      )}
      
      <h2>Lista de Médicos</h2>
      <ul>
        {medicos.map((medico) => (
          <li key={medico.id}>
            {medico.nombre} - {medico.especialidad} - {medico.licencia}
            <button onClick={() => editarMedico(medico)}>Editar</button>
            <button onClick={() => eliminarMedico(medico.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Medico;

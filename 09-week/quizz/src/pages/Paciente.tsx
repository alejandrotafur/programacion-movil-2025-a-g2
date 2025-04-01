import { useState } from "react";

interface Paciente {
  id: number;
  nombre: string;
  historia: string;
  afiliacion: string;
}

const Paciente: React.FC = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([
    { id: 1, nombre: "Laura Torres", historia: "HIST-2024001", afiliacion: "EPS" }
  ]);

  const [nombre, setNombre] = useState("");
  const [historia, setHistoria] = useState("");
  const [afiliacion, setAfiliacion] = useState("");
  const [editando, setEditando] = useState<number | null>(null);

  const agregarPaciente = () => {
    if (!nombre || !historia || !afiliacion) return alert("Todos los campos son obligatorios");
    const nuevoPaciente: Paciente = { id: Date.now(), nombre, historia, afiliacion };
    setPacientes([...pacientes, nuevoPaciente]);
    limpiarFormulario();
  };

  const eliminarPaciente = (id: number) => {
    setPacientes(pacientes.filter(paciente => paciente.id !== id));
  };

  const editarPaciente = (paciente: Paciente) => {
    setEditando(paciente.id);
    setNombre(paciente.nombre);
    setHistoria(paciente.historia);
    setAfiliacion(paciente.afiliacion);
  };

  const modificarPaciente = () => {
    if (!nombre || !historia || !afiliacion) return alert("Todos los campos son obligatorios");
    setPacientes(pacientes.map(paciente => 
      paciente.id === editando ? { ...paciente, nombre, historia, afiliacion } : paciente
    ));
    limpiarFormulario();
  };

  const limpiarFormulario = () => {
    setNombre(""); setHistoria(""); setAfiliacion(""); setEditando(null);
  };

  return (
    <div>
      <h1>Gestión de Pacientes</h1>
      <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
      <input type="text" placeholder="Historia clínica" value={historia} onChange={e => setHistoria(e.target.value)} />
      <input type="text" placeholder="Afiliación" value={afiliacion} onChange={e => setAfiliacion(e.target.value)} />
      {editando ? <button onClick={modificarPaciente}>Modificar</button> : <button onClick={agregarPaciente}>Agregar</button>}
      <ul>
        {pacientes.map(paciente => (
          <li key={paciente.id}>
            {paciente.nombre} - {paciente.historia} - {paciente.afiliacion}
            <button onClick={() => editarPaciente(paciente)}>Editar</button>
            <button onClick={() => eliminarPaciente(paciente.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Paciente;

import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Gestión de Personal Médico</h1>
      <ul>
        <li><Link to="/medico">Médico</Link></li>
        <li><Link to="/enfermero">Enfermero</Link></li>
        <li><Link to="/recepcionista">Recepcionista</Link></li>
        <li><Link to="/paciente">Paciente</Link></li>
      </ul>
    </div>
  );
};

export default Home;

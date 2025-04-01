import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Registro from "./pages/Registro";
import Medico from "./pages/Medico"; // 
import Enfermero from "./pages/Enfermero";
import Recepcionista from "./pages/Recepcionista";
import Paciente from "./pages/Paciente";


const App: React.FC = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home" component={Home} />
        <Route exact path="/registro" component={Registro} />
        <Route exact path="/medico" component={Medico} />
        <Route exact path="/enfermero" component={Enfermero} />
        <Route exact path="/recepcionista" component={Recepcionista} />
        <Route exact path="/paciente" component={Paciente} />
        <Redirect exact path="/" to="/home" />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default App;

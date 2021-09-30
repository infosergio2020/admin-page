import './iconos/salida.svg';
import './App.css';
// import { Button } from "./componentes/boton/Boton.jsx";
import { Buscador } from "./componentes/buscador/Buscador.jsx";
import { Header } from "./componentes/header/Header.jsx";

import { Tabla } from './componentes/tabla/Tabla';

function App() {
    return ( 
        <div className = "App" >
            <Header />
            <Buscador/>
            <Tabla />
        </div>
    );
}

export default App;
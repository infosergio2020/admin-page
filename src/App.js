import './iconos/salida.svg';
import './App.css';
import { Button } from "./componentes/boton/Boton.jsx";
import { Buscador } from "./componentes/buscador/Buscador.jsx";
import { Header } from "./componentes/header/Header.jsx";


function App() {
    return ( 
        <div className = "App" >
            {
                /* <Button> Cerrar sesión</Button> 
                 */
            }

            <Header />
            <Buscador/>


        </div>
    );
}

export default App;
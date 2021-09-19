import './iconos/salida.svg';
import './App.css';
import { Button } from "./componentes/boton.jsx";
import { Buscador } from "./componentes/buscador.jsx";
import { Header } from "./componentes/header";


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
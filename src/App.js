import logo from './logo.svg';
import './App.css';
import { Button } from "./componentes/boton.jsx";
import { Buscador } from "./componentes/buscador.jsx";
import { Header } from "./componentes/header";


function App() {
    return ( 
        <div className = "App" >
            {
                /* <Button> Cerrar sesión</Button> 
                <img src={"./componentes/svg/icono.svg"} /> */
            }
            <Header />
            {/* <Buscador/>*/}


        </div>
    );
}

export default App;
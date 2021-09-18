import logo from './logo.svg';
import './App.css';
import { Button } from "./componentes/boton.jsx";
import { Buscador } from "./componentes/buscador.jsx";
import { Header } from "./componentes/header";


function App() {
    return ( 
        <div className = "App" >
            <h1> Hello CodeSandbox </h1>
            <h2> Start editing to see some magic happen! </h2>  
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
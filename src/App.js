import logo from './logo.svg';
import './App.css';
import { Button } from "./componentes/boton.jsx";
import { Buscador } from "./componentes/buscador.jsx";
import { Header } from "./componentes/header";


function App() {
    // return ( <
    //     div className = "App" >
    //     <
    //     header className = "App-header" >
    //     <
    //     img src = { logo }
    //     className = "App-logo"
    //     alt = "logo" / >
    //     <
    //     p >
    //     Edit < code > src / App.js < /code> and save to reload. <
    //     /p> <
    //     a className = "App-link"
    //     href = "https://reactjs.org"
    //     target = "_blank"
    //     rel = "noopener noreferrer" >
    //     Learn React <
    //     /a> <
    //     /header> <
    //     /div>
    // );
    return ( <
        div className = "App" >
        <
        h1 > Hello CodeSandbox < /h1>  <
        h2 > Start editing to see some magic happen! < /h2>  {
            /* <Button> Cerrar sesión</Button> 
                    
                        <img src={"./componentes/svg/icono.svg"} /> */
        }

        <
        Header > < /Header> {
            /* 
                    <Buscador> </Buscador>   */
        } <
        /div>
    );
}

export default App;
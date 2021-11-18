import React, { useState } from 'react';
import PropTypes from 'prop-types';
//COMPONENTES
import {Boton} from '../components/Boton';
//CSS
import '../styles/popWindow.css'
//ICONOS
import iconos from '../../src/assets/img/iconos';

export const PopWindow = ({title,icon,setData,video, setDatosArea, hidePop }) => {
// declaracion de un estado
        const [datos, setDatos] = useState({
            titulo:" ",
            url:" ",
            descripcion: " "
        });

// crear funcion para ver los inputs
    const handleInputChange = (e)=>{
        setDatos( {
            ...datos, 
            [e.target.name] : e.target.value
        });
    }

    // const guardar = (e)=>{
    //     setDatosArea( {
    //         ...datos, 
    //         datos        
               
    //     });
    //     // revisar si esta parte funciona--> Oriana dice: NO ES NECESARIO TENERLO PORQUE PODEMOS ACCEDER
    // DESDE CUALQUIER ARCHIVO MEDIANTE EL NOMBRE DE LA CLAVE DEL LOCALSTORAGE
    // SOY RE CAPA, ME HABIA OLVIDADO DE ESO Y RECIEN ME ACUERDO JE
    // Nota: tengo la necesidad de separar video de foto, porque se van a pisar 
    // }

    // guardado del LocalStorage
        function guardar(){
            localStorage.setItem('datos', JSON.stringify(datos));
        }

        function guardarF(){
            localStorage.setItem('datosF', JSON.stringify(datos));
        }

    // const handleSubmit = (e)=>{
    //     console.log('hadleSubmit',inputValue);
    //     e.preventDefault();        
    //     if(inputValue.trim().length > 2 ){
    //         setData( cats => [inputValue,...cats]);
    //         setInputValue('');
    //     }else {
    //         setInputValue('');
    //     }
    // }

    const [archivos, setArchivos] = useState(
        {url:" "}
    );
// crear funcion para almacenar las imagenes 
    const subirArchivos = (l)=>{
        setArchivos( {
            ...archivos, 
            [l.target.name] : l.target.value
        });
    }
    // const insertarArchivos= async()=>{
    //     const f=new FormData();

    //     for(let i=0; i<archivos.lenght;i++){
    //         f.append("files",archivos[i]);
    //     }
    // }



// MAIN()
    return (
        <>
        
        <div className="popWindow__header">
            <h2 tabIndex="0" aria-label={title}> <img alt="imagen. icono de imagen." src={icon}/>  {title}</h2>
            <Boton buttonStyle={"btn-small-circle blanco"} icono={iconos.close} onClick={hidePop}></Boton>
        </div>
        {/* <form  className="form background-form" onSubmit={handleSubmit}> */}
        <form  className="form background-form">
            <h3 tabIndex="0" aria-describedby="Complete los campos a continuación" >Complete los campos a continuación.</h3>
            <p>titulo: {datos.titulo} </p>
            <p>url: {datos.url} </p>
            <p>descripcion: {datos.descripcion} </p>
            <p>archivos: {archivos.url} </p>
            <div className="input-group">
                <input 
                    className="input input-background" 
                    type="text"
                    // value={inputValue}
                    name="titulo"
                    placeholder="Titulo"
                    onChange={handleInputChange}>
                </input>

                {/* mostrar y esconder el campo url de video */}
                {video && 
                <input 
                    className="input input-background" 
                    type="text"
                    name="url"
                    placeholder="Url"
                    // value={inputValue}
                    onChange={handleInputChange}>
                </input>
                
                }

                {/* mostrar y esconder el campo cargar imagen */}
                {!video && 
                <div className="center">
                
                <input 
                    className="" 
                    type="file"
                    name="url"
                    placeholder="Subir archivo"
                    
                    
                
                    // value={inputValue}
                    accept="image/gif, image/png, image/peg, "
                    multiple onChange={()=>subirArchivos}>
                </input>
                </div>
            
                
                }

                <textarea className="input-textArea input-background" type="text" name="descripcion" onChange={handleInputChange} placeholder="Descripción" aria-multiline="true"></textarea>

            </div>
            {/* si es un VIDEO muestra los botones de video */}
            {video &&
                <div className="center">
                    <Boton buttonStyle="verde" icono={iconos.check} onClick={guardar}> Guardar </Boton>
                    <Boton buttonStyle="rojo" icono={iconos.cancel}> Cancelar </Boton>
                </div>
            }
            {/* si NO es un VIDEO muestra los botones de FOTO */}
            {!video &&
                <div className="center">

                    <Boton buttonStyle="verde" icono={iconos.check} onClick={guardarF}> GuardarFoto </Boton>
                    <Boton buttonStyle="rojo" icono={iconos.cancel}> CancelarFOTO </Boton>
                </div>
            }
        </form>
        </>
    )

}

// con esto prevengo que alguien que reutilize mi funcion se olvide de mandar una funcion como parametro
PopWindow.propTypes = { 
    setData: PropTypes.func.isRequired,
}
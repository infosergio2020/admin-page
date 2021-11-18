import React, { useState } from 'react';
import PropTypes from 'prop-types';
//COMPONENTES
import {Boton} from '../components/Boton';
//CSS
import '../styles/popWindow.css'
//ICONOS
import iconos from '../../src/assets/img/iconos';

export const PopWindow = ({title,icon,setData,video, setarray , esconder}) => {
// declaracion de un estado
        const [datos, setDatos] = useState({
            titulo:" ",
            url:" ",
            descripcion: " "
        });

      
// crear funcion para ver los inputs
    const handleInputChange = (e)=>{
        console.log(e.target.value);
        setDatos( {
            ...datos, 
            [e.target.name] : e.target.value
        });
        
    }


    // guardado del LocalStorage
        function guardar(e){
            //localStorage.setItem('datosF', JSON.stringify(datos));
            //insertar elemento en un array
            e.preventDefault();
            
            // if(!video){
            //     var preview = document.querySelector('img');
            //     var file    = document.querySelector('input[type=file]').files[0];
            //     var reader  = new FileReader();
                
            //     reader.onloadend = function () {
            //     preview.src = reader.result;
            //     }
            
            //     if (file) {
            //         reader.readAsDataURL(file);
            //         console.log(preview.src)
            //     } else {
            //         preview.src = "";
            //     }                
            // }  
            setarray(array=>
                [...array,datos]  
            );    
            esconder(esconder=>!esconder);
            
        }
// Funciones

function previewFile(e) {
    var preview = document.getElementById('hola');
    var file = document.getElementById('lol').files[0];
    
    var reader = new FileReader();

    reader.onloadend = function() {
        preview.src = reader.result;
        datos.url=reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);

    } else {
        preview.src = "";
    }
}

// MAIN()
    return (
        <>
        
        <div className="popWindow__header">
            <h2 tabIndex="0" aria-label={title}> <img alt="imagen. icono de imagen." src={icon}/>  {title}</h2>
        </div>
        {/* <form  className="form background-form" onSubmit={handleSubmit}> */}
        <form  name="formularioUI" className="form background-form">
            <h3 tabIndex="0" aria-describedby="Complete los campos a continuación" >Complete los campos a continuación.</h3>
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
                    id= "lol"
                    placeholder="Subir archivo"              
                    // value={inputValue}
                    accept="image/gif, image/png, image/peg, "
                    onChange={previewFile}
                    >
                </input>
                <br></br>
                <img src="" id="hola" height="200" alt="Image preview..."></img>
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

                    <Boton buttonStyle="verde" icono={iconos.check} onClick={guardar}> GuardarFoto </Boton>
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
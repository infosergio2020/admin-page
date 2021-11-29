import React, { useEffect,useState,useMemo } from 'react';

export const EventoContext = React.createContext();

export function EventoProvider (props){
    //ARREGLO DE EVENTOS
    const [eventos, setEventos] = useState([]);
    // FOTOS
    const [fotos, setFotos] = useState([]);
    // VIDEOS
    const [videos, setVideos] = useState([]);
    // REDES SOCIALES
    const [redes, setRedes] = useState([]);       
    //DATO FORMULARIO  
    const [formulario, setFormulario] = useState({});
    // ESTADO DE INPUT REDES-SOCIALES
    const [nombreRed, setnombreRed] = useState("");
    // SOLO ACTUALIZAR SI HAY ELEMENTOS EN LOS ARRAY
    useEffect(() => {
        if(fotos.length !=0 ){
            setFormulario( { ...formulario, ['fotos'] : fotos });
        }
        if(videos.length !=0){
            setFormulario( { ...formulario, ['videos'] : videos });
        }
        if(redes.length !=0){
            setFormulario( { ...formulario, ['redesSociales'] : redes });
        }
    }, [fotos,videos,redes])
    // ALMACENA EN EL LOCAL SOLO
    useEffect(() => {
        if(eventos.length != 0){
            localStorage.setItem('Listaeventos', JSON.stringify(eventos));
        }
    }, [eventos]);
    // FUNCIONES PARA AGREGAR O ELIMINAR REDES SOCIALES
    const addRed = (e,item)=>{
        e.preventDefault();
        console.log(item);
        if(item == "" || item == " "){
            alert("debe completar el campo")
        } else{
            setRedes([item,...redes]);
        }
        
    }
    // BORRADO DE REDES
    const delRed = (e,item)=>{
        e.preventDefault();
        let newRedes = redes.filter(red => red !== item);
        setRedes(newRedes);
    }
    // BORRADO DE FOTOS
    const delFoto = (e,item)=>{
        e.preventDefault();
        let newFotos = fotos.filter(foto => foto !== item);
        setFotos(newFotos);
    }
    // BORRADO DE VIDEOS
    const delVideo = (e,item)=>{
        e.preventDefault();
        let newVideos = videos.filter(video => video !== item);
        setVideos(newVideos);
    }

    // crear funcion para ver los inputs
    const handleInputChange = (e)=>{
        let valor;
        switch(e.target.type) {
            case 'date':
                valor = e.target.value.toString();
                break;
            case 'time':
                valor = e.target.value.toString();
                break;
            default:
                valor = e.target.value
                break;
          }
        setFormulario( { ...formulario, [e.target.name]:valor });
    }
    const resetAllForm = ()=>{
        // BUSCAR EL INPUT
        let fecha = document.querySelector("#fecha");
        let hora = document.querySelector("#hora");
        let nombreEvento = document.querySelector("#nombreEvento");
        let lugarEvento = document.querySelector("#lugarEvento");
        let descripcionEvento = document.querySelector("#descripcionEvento");
        let redesSociales = document.querySelector("#redesSociales");
        // SOLO BORRAR SI EXISTE
        if(fecha != null){fecha.value=""}
        if(hora != null){hora.value=""}
        if(nombreEvento != null){nombreEvento.value=""}
        if(lugarEvento != null){lugarEvento.value=""}
        if(descripcionEvento != null){descripcionEvento.value=""}
        if(redesSociales != null){redesSociales.value=""}
        // RESETEAR FORMULARIO
        setFormulario({});
        // RESETEAR ARREGLO DE FOTO
        setFotos([]);
        // RESETEAR ARREGLO DE VIDEOS
        setVideos([]);
        // RESETEAR ARREGLO REDES SOCIALES
        setRedes([]);
        // RESETEAR INPUT REDSOCIAL
        setnombreRed("");
    }
    // FUNCIONES DEL FORMULARIO
    const save = (e)=>{
        e.preventDefault();
        setEventos( eventos => [...eventos,formulario]);
        resetAllForm();
        // alert("Se ha guardado el evento");
    };
    const reset = (e)=>{
        e.preventDefault();
        resetAllForm()
    };
    //GENERA EL ARCHIVO AUX  
    const value = useMemo(()=>{
        return ({
            // EVENTOS
            eventos,fotos,videos,redes,formulario,nombreRed,setnombreRed,
            setFotos,setVideos,
            addRed,delFoto,delVideo,delRed,handleInputChange,save,reset
            // AREAS
            
        })
    },[eventos,fotos,videos,redes,formulario,nombreRed]);
    
    return <EventoContext.Provider value={value} {...props} />
}

export function useEvento() {
    const context = React.useContext(EventoContext);
    if(!context){
        throw new Error('useEvento debe estar dentro del proveedor EventoContext')
    }
    return context;
}
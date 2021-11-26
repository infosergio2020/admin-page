import React, { useEffect,useState,useMemo } from 'react';

export const EventoContext = React.createContext();

export function EventoProvider (props){
    
    //ARREGLO DE EVENTOS
    const [eventos, setEventos] = useState([]);
    // FOTOS Y VIDEOS DEL EVENTO
    const [fotos, setFotos] = useState([]);
    const [videos, setVideos] = useState([]);
    // REDES SOCIALES
    const [redes, setRedes] = useState([]);       
    //DATO FORMULARIO  
    const [datos, setDatos] = useState({
        // nombreEvento:"Nombre del evento",
        // lugarEvento: "Lugar del evento",
        // descripcionEvento:"Descripcion del evento",
        // redesSociales: "Ingrese una red social",
    });
    // ESTADO DE INPUT REDES-SOCIALES
    const [nombreRed, setnombreRed] = useState("ingrese una red social");

    useEffect(() => {
        setDatos( {
            ...datos, 
            ['fotos'] : fotos,          
            ['videos'] : videos,
            ['redesSociales'] : redes,
        });
    }, [fotos,videos,redes])

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
    // metodos para operar con los estados
    const handleInputFocus = (e)=>{
        setDatos( { ...datos,  [e.target.name] : "" });
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
        setDatos( { ...datos, [e.target.name]:valor });
    }
    const resetAllForm = ()=>{
        document.querySelector("#fecha").value=""
        document.querySelector("#hora").value=""
        // RESETEAR FORMULARIO
        setDatos({
                nombreEvento:"Nombre del evento",
                lugarEvento: "Lugar del evento",
                descripcionEvento:"Descripcion del evento",
                redesSociales: "Ingrese una red social",
                fotos: [],
                videos: [],
            });
        // RESETEAR ARREGLO DE FOTO
        setFotos([]);
        // RESETEAR ARREGLO DE VIDEOS
        setVideos([]);
        // RESETEAR ARREGLO REDES SOCIALES
        setRedes([]);
        // RESETEAR INPUT REDSOCIAL
        setnombreRed("ingrese una red social");
    }
    // FUNCIONES DEL FORMULARIO
    const save = (e)=>{
        e.preventDefault();
        setEventos( eventos => [...eventos,datos]);
        // alert("Se ha guardado el evento");
        resetAllForm();
    };
    const reset = (e)=>{
        e.preventDefault();
        resetAllForm()
    };
    //GENERA EL ARCHIVO AUX  
    const value = useMemo(()=>{
        return ({
            eventos,fotos,videos,redes,datos,nombreRed,setnombreRed,
            setFotos,setVideos,
            addRed,delFoto,delVideo,delRed,handleInputFocus,handleInputChange,save,reset
        })
    },[eventos,fotos,videos,redes,datos,nombreRed]);
    
    return <EventoContext.Provider value={value} {...props} />
}


export function useEvento() {
    const context = React.useContext(EventoContext);
    if(!context){
        throw new Error('useEvento debe estar dentro del proveedor EventoContext')
    }
    return context;
}
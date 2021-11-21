// import atracciones from "../mockData/atracciones.json";
// let fs = require('fs');
let atracciones = require('../assets/mockData/atracciones.json');

export const getAtracciones = async ( titulo ) => {
    if(titulo){
        const result = atracciones.filter(atraccion => atraccion['titulo'].toLowerCase() === titulo.toLowerCase());
        
        if(result.length===0){
            console.log(result);
            return atracciones;
        }
        return result;
    } else {
        return atracciones;
    }
    
}

export const eliminarAtraccion = (item)=>{
    // console.log("eliminar atraccion");
    // console.log(atracciones);
    // let contador=0
    // atracciones.map((atraccion) => {
    //     if (atraccion.id === item){
    //         atracciones.splice(contador,1);
    //     }
    //     ++contador;
    // });
    // console.log(atracciones);
    // console.log('OH NOOOOOOOOO');
}
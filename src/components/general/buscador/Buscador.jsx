import React,{useState} from "react";
import "./buscador.css";

export const Buscador = ({setTitle}) => {
const [inputValue, setInputValue] = useState('');

// seteo el estado con el valor del input
const handleInputChange = (e)=>{ setInputValue( e.target.value );}
// cuando haga submit uso una funcion externa para setear el estado del componente padre
const handleSubmit = (e)=>{
  e.preventDefault();
  if(inputValue.trim().length > 2 ){
      setTitle( inputValue );
      setInputValue('');
  }else {
      alert('Debe tener mas de 2 caracteres');
      setInputValue('');
  }
}
  return (
    <div className={"divboton"}>
      <form className={"buscador"} onSubmit={handleSubmit}>
        <input
          className={"input"}
          type={"text"}
          placeholder={"Ingrese el nombre del evento"}
          name={"evento"}
          value={inputValue}
          onChange={handleInputChange}
        />
        <input className={"btn label"} type={"submit"} value={"buscar"} />
      </form>
    </div>
  );
}

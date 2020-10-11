import React, {useState} from 'react';
import Error from './Error';
//import { v4 as uuidv4 } from 'uuid';
import './Create.css';
const shortId = require('short-id');



const Create = ({addBicis}) => {
  const [error, setError] = useState(false);

  const [bicicletas, setBicicletas] = useState({
    marca: '',
    modelo: '',
    precio: ''
  });

  const handlerInput = (e) => {
    const {value: input} = e.target;
    setBicicletas({
        ...bicicletas,
        [e.target.name]: input,
        
    });
  }

  const create = (e) => {
      e.preventDefault();
       if(bicicletas.marca.trim() === '' || bicicletas.modelo.trim() === '' || bicicletas.precio.trim() === ''){
           setError(true)
           return;
        }
      
        const {marca, modelo, precio} = bicicletas;

        const biciObject = {
          id: shortId.generate(),
          marca,
          modelo,
          precio
        };

        addBicis(biciObject);
        setBicicletas({
          marca: '',
          modelo: '',
          precio: ''
        })
      
  };
  
 

  return (
    <>
    <form className="mt-5" onSubmit={create}>
        <div className="form-group mb-3">
            <label htmlFor="marca">Marca</label><span className="text-danger">*</span>
            <input id="marca" type="text" className="form-control" placeholder="Marca" onChange={handlerInput} value ={bicicletas.marca}  name="marca"/>
        </div>
        <div className="form-group">
            <label htmlFor="modelo">Modelo</label><span className="text-danger">*</span>
            <input id="modelo" type="text" className="form-control" placeholder="Modelo" onChange={handlerInput} value ={bicicletas.modelo} name="modelo"/>
        </div>
        <div className="form-group">
            <label htmlFor="precio">Precio</label><span className="text-danger">*</span>
            <input id="precio" type="number" className="form-control" placeholder="Precio" onChange={handlerInput} value ={bicicletas.precio} name="precio"/>
        </div>
        
        <button type="submit" className="btn btn-success btn-lg btn-block">Crear Producto</button>
    </form>
    {error ? <Error message="Todos los campos son obligatorios"/> : null}
    </>
  )
  
};

export default Create;


////------------useState-------------
/*const [error, setError] = useState(false);

  const [bicicletas, setBicicletas] = useState({
    id: uuidv4(),
    marca: '',
    modelo: '',
    precio: ''
  });


  const resetState = (elements) => {
    console.log(elements);
    const keys = Object.keys(elements)
    keys.forEach(key => setBicicletas({[key] : ''}))
  }


  const handlerInput = (e) => {
    const {value: input} = e.target;
    setBicicletas({
        ...bicicletas,
        [e.target.name]: input,
        
    });
  }

  const create = (e) => {
    e.preventDefault();
    if(bicicletas.marca.trim() === "" || bicicletas.modelo.trim() === "" || bicicletas.precio.trim() === ""){
        setError(true);
        return;
    }

    const {id, marca, modelo, precio} = bicicletas;

    const biciObject = {
        id,
        marca,
        modelo,
        precio
    };
    
    
    addBicis(biciObject);
    resetState(bicicletas)
  };

  return (
    <>
    <form className="mt-5" onSubmit={create}>
        <div className="form-group mb-3">
            <label htmlFor="marca">Marca</label><span className="text-danger">*</span>
            <input id="marca" type="text" className="form-control" placeholder="Marca" onChange={handlerInput} value ={bicicletas.marca}  name="marca"/>
        </div>
        <div className="form-group">
            <label htmlFor="modelo">Modelo</label><span className="text-danger">*</span>
            <input id="modelo" type="text" className="form-control" placeholder="Modelo" onChange={handlerInput} value ={bicicletas.modelo} name="modelo"/>
        </div>
        <div className="form-group">
            <label htmlFor="precio">Precio</label><span className="text-danger">*</span>
            <input id="precio" type="number" className="form-control" placeholder="Precio" onChange={handlerInput} value ={bicicletas.precio} name="precio"/>
        </div>
        
        <button type="submit" className="btn btn-success btn-lg btn-block">Crear Producto</button>
    </form>
    {error ? <Error message="Todos los campos son obligatorios"/> : null}
    </>
  )*/
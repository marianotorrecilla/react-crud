import React, {useState} from 'react';
import NavBar from './components/NavBar';
import Create from './components/Create';
import List from './components/List';
import Edit from './components/Edit';
import './App.css'

function App() {
  const [bicicletas, setBicicletas] = useState([]);

  //Agregar
  const addBicis = (bicicleta) => {
    setBicicletas([...bicicletas,bicicleta])
  }

  //Eliminar
  const deleteBici = (id) => {
    const bicisFiltradas = bicicletas.filter(bicicleta => bicicleta.id !== id);
    setBicicletas(bicisFiltradas)
  }

  //Editar
  const [editing, setEditing] = useState(false)

  const [currentBici, setCurrentBici] = useState({
    id: null, 
    marca: '',
    modelo: '',
    precio: ''
  });

  const editBici = (bicicleta) => {
    setEditing(true);
    setCurrentBici({
      id: bicicleta.id, 
      marca: bicicleta.marca,
      modelo: bicicleta.modelo,
      precio: bicicleta.precio
    })
  }

  const updateBici = (id, updatedBici) => {
    setEditing(false);

    setBicicletas(bicicletas.map(bicicleta => (bicicleta.id === id ? updatedBici : bicicleta)))
  }

  

  return (
    <div className="container-fluid">
      <NavBar />
      <div className="row col-12 mt-5 justify-content-center">
        <div className="col-4">

          {
            editing ? (
              <div>
                <h3 className="text-center mt-5">EDITAR PRODUCTO</h3>
                <Edit currentBici={currentBici} updateBici={updateBici}/>
              </div>
            ) : (
              <div>
                <h3 className="text-center mt-5">CREAR PRODUCTO</h3>
                <Create addBicis={addBicis}/>
              </div>
              
            )
          }

        </div>
      </div>
      <List bikes={bicicletas} deleteBici={deleteBici} editBici={editBici}/>
    </div>
  );
}

export default App;

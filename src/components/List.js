import React from 'react';
import './List.css';


const List = (props) => {

    //editar
    

  return (
    <table className="col-12 mt-5 table text-white">
        <thead>
            <tr className="col-12">
                <th scope="col">Marca</th>
                <th scope="col">Modelo</th>
                <th scope="col">Precio</th>
                <th scope="col">Editar</th>
                <th scope="col">Borrar</th>
            </tr>
        </thead>
        <tbody>
            {props.bikes.map(bici =>(
                <tr key={bici.id}>
                    <td>{bici.marca}</td>
                    <td>{bici.modelo}</td>
                    <td>${bici.precio}</td>
                    <td><button type="submit" className="btn btn-success" onClick={()=>{props.editBici(bici)}}>Edit</button></td>
                    <td><button type="submit" className="btn btn-danger" onClick={()=>{props.deleteBici(bici.id)}}>Delete</button></td>
                </tr>
            ))
            }
        </tbody>
    </table>
  )
};

export default List;

//<td><a type="submit" className="icon" onClick={()=>{props.editBici(bici)}}> <ion-icon name="pencil-outline"></ion-icon></a></td>
//<td><a type="submit" className="icon" onClick={()=>{props.deleteBici(bici.id)}}> <ion-icon name="trash-outline"></ion-icon></a></td>

//<td><button type="submit" className="btn btn-success" onClick={()=>{props.editBici(bici)}}>Edit</button></td>

//<td><button type="submit" className="btn btn-danger" onClick={()=>{props.deleteBici(bici.id)}}>Delete</button></td>
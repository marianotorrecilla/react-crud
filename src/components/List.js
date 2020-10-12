import React from 'react';
import './List.css';


const List = (props) => {

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
                    <td>
                        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal" >Delete</button>
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Eliminar Producto</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        Si desea ELIMINAR el producto, presione DELETE. Caso contrario, presione VOLVER.
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" className="btn btn-dark" data-dismiss="modal">Volver</button>
                                        <button type="submit" className="btn btn-danger" data-dismiss="modal" onClick={()=>{props.deleteBici(bici.id)}}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            ))
            }
        </tbody>
    </table>
  )
};

export default List;

//<td><a type="submit" className="icon" onClick={()=>{props.editBici(bici)}}> <ion-icon name="pencil-outline"></ion-icon></a></td>
//<td><a type="submit" className="trash" onClick={()=>{props.deleteBici(bici.id)}}> <ion-icon name="trash-outline"></ion-icon></a></td>

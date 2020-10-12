import React from 'react';
import { useForm } from 'react-hook-form';

const Edit = (props) => {

  //console.log(props.currentBici);
    
  const {register, errors, handleSubmit, setValue} = useForm({
    defaultValues: props.currentBici
  });

  setValue('marca', props.currentBici.marca);
  setValue('modelo', props.currentBici.modelo);
  setValue('precio', props.currentBici.precio);

  const onSubmit = (data,e) => {
    data.id = props.currentBici.id;
    props.updateBici(props.currentBici.id, data)
    e.target.reset();
  }

  
  return (
    <>
    <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        
            <>
            <div className="form-group mb-3">
                <label htmlFor="marca">Marca</label><span className="text-danger">*</span>
                <input id="marca" type="text" className="form-control" placeholder="Marca"  name="marca" ref={
                  register({
                    required: {value:true, message: 'Campo obligatorio'}
                  }) 
                }/>
                <div>
                  {errors?.marca?.message}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="modelo">Modelo</label><span className="text-danger">*</span>
                <input id="modelo" type="text" className="form-control" placeholder="Modelo"  name="modelo" ref={
                  register({
                    required: {value:true, message: 'Campo obligatorio'}
                  }) 
                } />
                <div>
                  {errors?.modelo?.message}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="precio">Precio</label><span className="text-danger">*</span>
                <input id="precio" type="number" className="form-control" placeholder="Precio"  name="precio" ref={
                  register({
                    required: {value:true, message: 'Campo obligatorio'}
                  }) 
                } />
                <div>
                  {errors?.precio?.message}
                </div>
            </div>

            <button type="submit" className="btn btn-warning btn-lg btn-block" >Editar Producto</button>
            </>
        
    </form>
    
    </>
  )
};

export default Edit;


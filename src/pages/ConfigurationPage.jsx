import React from 'react';
import '../styles/configuration.scss';

export const ConfigurationPage = () => {
  return (
    <div className='d-flex flex-column container'>
        <h3>Datos Configuración</h3>    
        <div class="configuration mt-3 d-flex flex-column">
            <Control label = "Nombre Empresa:"/>
            <Control label = "Ruc:"/>
            <Control label = "Encabezado:"/>
            <Control label = "Pie:"/>   
            <div className='grabar d-flex'>
                <button className='btn btn-secondary btnGrabar'>Grabar</button>
            </div>              
        </div>
        
    </div>
  )
}

const Control = ({label}) =>{
    return(
        <div className='control d-flex flex-row'>
            <label className='lbl'>{label}</label>
            <input className='form-control input'></input>
        </div>
    )
}
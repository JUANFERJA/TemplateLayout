import React, { useContext, useState } from 'react';
import '../styles/configuration.scss';
import { CompanyContext } from '../context/CompanyContext';
import { funcionesCompany } from '../Functions/funcionesCompany';
import { Control } from '../components/FormControls';


export const ConfigurationPage = () => {

  const {sendData} = funcionesCompany();
  const {company, setcompany} = useContext(CompanyContext);
  const [name, setname] = useState(company.name);
  const [ruc, setruc] = useState(company.ruc);
  const [header, setheader] = useState(company.header);
  const [footer, setfooter] = useState(company.footer)

  const{id_company} = company
  
  return (
    <div className='d-flex flex-column container'>
        <h3>Datos Configuración</h3>    
        <div class="configuration mt-3 d-flex flex-column">
            <Control label = "Nombre Empresa:" objeto = {{id:"name", setValue:setname, value: name}}/>
            <Control label = "Ruc:" objeto = {{id:"ruc", setValue:setruc, value: ruc}}/>
            <Control label = "Encabezado:"  objeto = {{id:"header", setValue:setheader, value: header}}/>
            <Control label = "Pie:"  objeto = {{id:"footer", setValue:setfooter, value: footer}}/>   
            <div className='grabar d-flex'>
                <button className='btn btn-secondary btnGrabar' 
                onClick={() => sendData({id_company, name, ruc, header, footer}, setcompany)}>Grabar</button>
            </div>              
        </div>
        
    </div>
  )
}


import React, { useContext, useState } from 'react'
import { funcionesRegistrarReclamo } from '../Functions/funcionesRegistrarReclamo';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../styles/nuevoReclamo.scss';
import { funcionesForms } from '../Functions/funcionesForms';
import { UserContext } from '../context/UserContext';
import { OptionBeneficiario } from '../components/FormNuevoReclamo/OptionBeneficiario';
import { OptionDiagnostico } from '../components/FormNuevoReclamo/OptionDiagnostico';
import { useNavigate } from 'react-router-dom';

export const NuevoReclamoPage = () => {
    const navigate = useNavigate();
    const {user} = useContext(UserContext);
    const {dni, jwt, full_name, user_id} = user;
    const {upLoadFile, validaData} = funcionesRegistrarReclamo();
    const {addValue} = funcionesForms();
    const [documento, setdocumento] = useState(null);
    const [factura, setfactura] = useState(null);
    const [facturaName, setfacturaName] = useState("");
    const [documentoName, setDocumentoName] = useState("");
    const [beneficiario, setBeneficiario] = useState("");
    const [diagnostico, setDiagnostico] = useState("");
    const [descripcion, setdescripcion] = useState("");
    const [valor, setvalor] = useState("");
    const [selectedDate, setSelectedDate] = useState(null);
    return (
    <div className='nuevoReclamo d-flex flex-column'>
        <h3>Registrar nuevo reclamo</h3>
        <div className='upLoadFiles'>
            <div className='controlNuevoReclamo d-flex flex-column'>
                <label className='txt' id="lbldocumento">1. Llenar documento de reclamo y adjuntar</label>
                <div className="d-flex flex-row btnDocumento">
                    <input type="text" value={documentoName} className="form-control" id="imgDefault" placeholder='Solo se admiten documentos .pdf' ></input>
                    <button type="button" className="btn btnSelect" 
                        onClick={() =>(document.getElementById("documento").click())}>
                            Adjuntar...
                    </button>
                </div>
                <input type="file" id="documento" className="form-control-file border selecDocumento" multiple
                       onChange={(e) =>upLoadFile(e.target, setdocumento, setDocumentoName, "lbldocumento")}/>
            </div>

            <div className='controlNuevoReclamo d-flex flex-column mt-2'>
                <label className='txt' id="lblfactura">2. Cargar Facturas</label>
                <div className="d-flex flex-row btnDocumento">
                    <input type="text" value={facturaName} className="form-control" id="imgDefault" placeholder='Solo se admiten documentos .pdf' ></input>
                    <button type="button" className="btn btnSelect" 
                        onClick={() =>(document.getElementById("factura").click())}>
                            Adjuntar...
                    </button>
                </div>
                <input type="file" id="factura" className="form-control-file border selecDocumento" multiple
                       onChange={(e) =>upLoadFile(e.target, setfactura, setfacturaName, "lblfactura")}/>
            </div>
        </div>

        <div className='datosControles d-flex flex-column mt-2'>
            <label className='txt'>3. Detalles adicionales</label>
            <div className='d-flex flex-row controlDatos'>
                <div className="d-flex flex-row" style={{width:"50%"}}>
                    <label id='lblNombres' className='lbl'>Nombres:</label>
                    <input type="text" className="form-control input2" value={full_name} disabled>
                    </input>                
                </div>
                <div className="d-flex flex-row" style={{width:"50%"}}>
                    <label id='lblnrodocumento' className='lbl'>Nro. de documento:</label>
                    <input type="text" className="form-control input2" value={dni} disabled>
                    </input>                
                </div>
            </div>

            <div className="d-flex flex-row controlDatos">
                <label id='lblBeneficiario' className='lbl'>Beneficiario:</label>
                <select className="form-control input" onChange={(e)=>addValue(e.target, "lblBeneficiario", setBeneficiario)}>
                    <OptionBeneficiario objeto={{user_id, jwt}}/>
                </select>
                           
            </div>
            <div className="d-flex flex-row controlDatos">
                <label id='lblDiagnotico' className='lbl'>Diagnóstico:</label>
                <select className="form-control input" onChange={(e)=>addValue(e.target, "lblDiagnotico", setDiagnostico)}>
                    <OptionDiagnostico/>
                </select>              
            </div>
            <div className='d-flex flex-row controlDatos'>
                <div className="d-flex flex-row" style={{width:"50%"}}>
                    <label id='lblDescripcion' className='lbl'>Descripción:</label>
                    <textarea type="text" className="form-control input2" 
                              onChange={(e)=>addValue(e.target, "lblDescripcion", setdescripcion)}>
                    </textarea>                
                </div>
                <div className="d-flex flex-row" style={{width:"50%"}}>
                    <label id='lblfecha' className='lbl'>Fecha del siniestro:</label>
                    <DatePicker className='form-control' selected={selectedDate} onChange={(date) => setSelectedDate(date)} />                
                </div>
            </div>
            <div className="d-flex flex-row controlDatos">
                <label id='lblvalor' className='lbl'>Valor a redimir:</label>
                <input type="text" className="form-control input"
                       onChange={(e)=>addValue(e.target, "lblvalor", setvalor)}>
                </input>                
            </div>
            <button className='btn btn-secondary save' onClick={() =>validaData({documento, factura, beneficiario, diagnostico, valor, descripcion,selectedDate, user_id, navigate})}>Registrar reclamo</button>
        </div>

        
    </div>
  )
}

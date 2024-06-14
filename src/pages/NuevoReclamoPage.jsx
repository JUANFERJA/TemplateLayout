import React, { useState } from 'react'
import { funcionesRegistrarReclamo } from '../Functions/funcionesRegistrarReclamo'
import '../styles/nuevoReclamo.scss';
import { funcionesForms } from '../Functions/funcionesForms';
export const NuevoReclamoPage = () => {
    const {upLoadFile, validaData} = funcionesRegistrarReclamo();
    const {addValue} = funcionesForms();
    const [documento, setdocumento] = useState(null);
    const [factura, setfactura] = useState(null);
    const [facturaName, setfacturaName] = useState("");
    const [documentoName, setDocumentoName] = useState("");
    const [nombres, setnombres] = useState();
    const [ndocumento, setndocumento] = useState();
    const [descripcion, setdescripcion] = useState();
    const [valor, setvalor] = useState();

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
            <div className="d-flex flex-row controlDatos">
                <label id='lblNombres' className='lbl'>Nombres:</label>
                <input type="text" className="form-control input" 
                       onChange={(e)=>addValue(e.target, "lblNombres", setnombres)}>
                </input>                
            </div>
            <div className="d-flex flex-row controlDatos">
                <label id='lblnrodocumento' className='lbl'>Nro. de documento:</label>
                <input type="text" className="form-control input"
                       onChange={(e)=>addValue(e.target, "lblnrodocumento", setndocumento)}>
                </input>                
            </div>
            <div className="d-flex flex-row controlDatos">
                <label id='lbldescripcion' className='lbl'>Descripción:</label>
                <input type="text" className="form-control input"
                       onChange={(e)=>addValue(e.target, "lbldescripcion", setdescripcion)}>
                </input>              
            </div>
            <div className="d-flex flex-row controlDatos">
                <label id='lblvalor' className='lbl'>Valor a redimir:</label>
                <input type="text" className="form-control input"
                       onChange={(e)=>addValue(e.target, "lblvalor", setvalor)}>
                </input>                
            </div>
            <button className='btn btn-secondary save' onClick={() =>validaData({documento, factura, nombres, ndocumento, descripcion, valor})}>Registrar reclamo</button>
        </div>

        
    </div>
  )
}

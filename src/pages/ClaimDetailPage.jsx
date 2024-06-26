import React, { useContext, useEffect, useState } from 'react'
import { ClaimContext } from '../context/ClaimContext'
import { UserContext } from '../context/UserContext';
import  '../styles/claimDetail.scss';
import { helpHttp } from '../helpers/helpHttp';
import swal from 'sweetalert';
import { paths } from '../helpers/paths';
import { funcionesClaimDetailPage } from '../Functions/funcionesClaimDetailPage';
import { useNavigate } from 'react-router-dom';

export const ClaimDetailPage = () => {
   
    const {claim} = useContext(ClaimContext);    
    const {id_claim, cod_diagnostic, creation_date, diagnostic, value, state,dni, full_name } = claim;
    const {goAccidentRatePage} = funcionesClaimDetailPage();
    let navigate = useNavigate();

  return (
    <div className='d-flex flex-column claim'>
      <div className='d-flex flex-row titles'>
        <span className='id'>Vista de Reclamo Nro: {id_claim}</span>
        <span className='state'>Estado: {state}</span>
      </div>

      <div className=' d-flex flex-row claimdetails'>
        <div className='d-flex flex-column inputs'>
            <DatoClaim objeto = {{id:"ID:", value:id_claim}}/>
            <DatoClaim objeto = {{id:"ASEGURADO:", value:full_name}}/>
            <DatoClaim objeto = {{id:"NRO. DOCUMENTO:", value:dni}} />
            <DatoClaim objeto = {{id:"VALOR RECLAMO:", value:value}}/>
            <DatoClaim objeto = {{id:"FECHA REGISTRO:", value:creation_date}}/>
            <div className='datoClaim d-flex flex-row'>
                <label className='labelad'>ADJUNTOS:</label>
                <div className='file d-flex flex-column files-controls'>
                    <Files objeto = {{tipo:"factura", id_claim}}/>  
                    <Files objeto = {{tipo:"documento", id_claim}}/>                          
                </div>
            </div>
        </div>
        <div className='d-flex flex-column actions'>
         {/*  <div className='d-flex flex-column actionsButtons'> */}
            <ActionClaim objeto={{icon:"fa fa-pencil", label:"Editar"}}/>  
            <ActionClaim objeto={{icon:"fa fa-trash-o", label:"Anular"}}/>
            <ActionClaim objeto={{icon:"fa fa-check-circle-o", label:"Aprobar"}}/>
            <ActionClaim objeto={{icon:"fa fa-clock-o", label:"Siniestralidad",action:() =>goAccidentRatePage(navigate)}}/>              
         {/*  </div> */}

          <div className='d-flex flex-column observation'>
             <label className='label'>OBSERVACIÓN:</label>
             <textarea className='textArea' rows={5}></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}


const DatoClaim = ({objeto}) =>{

    const {id, value} = objeto;
    return(
        <div className='d-flex flex-row datoClaim'>
            <label className='label'>{id}</label>
            <input className='form-control input' value={value} disabled></input>
        </div>
    )
}

const ActionClaim = ({objeto}) =>{
    const {icon, label, action} = objeto;
   
    return(
        <div className='d-flex flex-row action'>
          <i className={`${icon} icon`} onClick={action}></i>
          <label>{label}</label>
        </div>
    )
}

const Files = ({objeto}) =>{

    const {apiFiles} = paths();
    const {tipo, id_claim} = objeto;
    const [files, setFiles] = useState();
    let text = tipo == "documento" ? "DOC0000" : "FAC0000";
    let noFiles = tipo == "documento" ? "No existen documentos cargados" : "No existen facturas cargadas"
    let url = `${apiFiles}files/${id_claim}/${tipo}`;
    let api = helpHttp();
    let options = {"content-type":"application/json"}
    useEffect(() => {      
    
        api.get(url,options).then((res) =>{
            if(!res.err){setFiles(res); console.log("respuesta files", res)}else{
              swal("Ups!",res.statusText+": token o usuario no autorizado", "error");
            }
        })

      
    }, [])
    
    return(
        <div className='file-control d-flex flex-row mt-3'>
             <label className='label'>{`${tipo}: `}</label>
             <div className='files d-flex flex-column'>
               {
                files &&(
                    <>
                      {
                        files.length > 0 ? (
                          files.map((elemento, indice) =>(
                            <a href={`${apiFiles}files/${elemento.id}`} style={{fontSize:"11px"}}>{`${text}${indice+1}`}</a>              
                        ))
                        ):(
                          <>{noFiles}</>
                        )
                      }
                    </>
                )
               }
             </div> 
        </div>
    )
}
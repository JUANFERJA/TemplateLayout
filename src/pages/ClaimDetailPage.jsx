import React, { useContext, useEffect, useState } from 'react'
import { ClaimContext } from '../context/ClaimContext'
import { UserContext } from '../context/UserContext';
import  '../styles/claimDetail.scss';
import { helpHttp } from '../helpers/helpHttp';
import swal from 'sweetalert';

export const ClaimDetailPage = () => {
   
    const {claim} = useContext(ClaimContext);
    const {user} = useContext(UserContext);
    const {id_claim, cod_diagnostic, creation_date, diagnostic, value, state } = claim;
    const {dni, full_name}  =user;
    console.log("mi reclamo", claim)
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
            <ActionClaim objeto={{icon:"fa fa-home", label:"Editar"}}/>  
            <ActionClaim objeto={{icon:"fa fa-home", label:"Anular"}}/>
            <ActionClaim objeto={{icon:"fa fa-home", label:"Aprobar"}}/>
            <ActionClaim objeto={{icon:"fa fa-home", label:"Siniestralidad"}}/>              
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
    const {icon, label} = objeto
    return(
        <div className='d-flex flex-row action'>
          <i className={`${icon} icon`}></i>
          <label>{label}</label>
        </div>
    )
}

const Files = ({objeto}) =>{

    const {tipo, id_claim} = objeto;
    const [files, setFiles] = useState();
    let text = tipo == "documento" ? "DOC0000" : "FAC0000";
    let url = `http://localhost:8080/getFiles/${id_claim}/${tipo}`;
    let api = helpHttp();
    let options = {"content-type":"application/json"}
    useEffect(() => {      
    
        api.get(url,options).then((res) =>{
            if(!res.err){setFiles(res)}else{
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
                    files.map((elemento, indice) =>(
                        <a href={`${elemento.path_file}`} style={{fontSize:"11px"}}>{`${text}${indice+1}`}</a>              
                    ))
                )
               }
             </div> 
        </div>
    )
}
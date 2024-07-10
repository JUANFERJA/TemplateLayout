import React, { useContext} from 'react'
import { ClaimContext } from '../context/ClaimContext'
import  '../styles/claimDetail.scss';
import { funcionesClaimDetailPage } from '../Functions/funcionesClaimDetailPage';
import { useNavigate } from 'react-router-dom';
import { BtnReturn } from '../components/BtnReturn/BtnReturn';
import { ActionClaim, DatoClaim, Files } from '../components/FormControls';


export const ClaimDetailPage = () => {
   
    const {claim} = useContext(ClaimContext);    
    const {id_claim, creation_date, diagnostic, value, state,dni, full_name } = claim;
    const {goAccionPage} = funcionesClaimDetailPage();
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
            <DatoClaim objeto = {{id:"DIAGNÓSTICO:", value:diagnostic}}/>
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
            <ActionClaim objeto={{icon:"fa fa-check-circle-o", label:"Aprobar", action:() =>goAccionPage(navigate, "payOrder")}} />
            <ActionClaim objeto={{icon:"fa fa-clock-o", label:"Siniestralidad",action:() =>goAccionPage(navigate, "accidentRate")}}/>              
         {/*  </div> */}

          <div className='d-flex flex-column observation'>
             <label className='label'>OBSERVACIÓN:</label>
             <textarea className='textArea' rows={5}></textarea>
          </div>
        </div>
      </div>
      <BtnReturn/>
    </div>
  )
}







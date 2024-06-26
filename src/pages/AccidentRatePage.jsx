import React, { useContext } from 'react'
import { ClaimContext } from '../context/ClaimContext'
import '../styles/accidentRate.scss'

export const AccidentRatePage = () => {

    const {claim} = useContext(ClaimContext);
    const {beneficiary_name, full_name, id_beneficiary} = claim;
  return (
    <div className='d-flex flex-column container'>
        <div className='policyInfo d-flex flex-column'>
            <ControlComponent objeto={{label:"Asegurado:", value:full_name}}/>
            <ControlComponent objeto={{label:"Reclamante:", value:beneficiary_name}}/> 
        </div>

        <div className='data'>
            <table>
              <thead>
                <tr>
                    <th>Reclamo</th>
                    <th>Fecha Registro</th>
                    <th>Cod</th>
                    <th>Diagnostico</th>
                    <th>Fecha Ocurrencia</th>
                    <th>Estado</th>
                    <th>Fecha Anulado</th>
                    <th>Gstos Incurridos</th>
                    <th>Gastos no Cubiertos</th>
                    <th>Coaseguro</th>
                    <th>Deducible</th>
                    <th>Reembolso</th>
                </tr>
              </thead>
              
              <tbody>
                <Siniestralidad id_beneficiary = {id_beneficiary}/>       
              </tbody>

            </table>
        </div>
    </div>
 )
}

const ControlComponent =({objeto})=>{

    const {label, value} = objeto;
    return(
            <div className='control-component d-flex flex-row mt-2'>
                <label className='label'>{label}</label>
                <input className='form-control input' value={value} disabled></input>
            </div>
        )
}

const Siniestralidad =({id_beneficiary}) =>{

    

    return(
        <tr>
        <td>{elemento.id_claim}</td>
        <td>{elemento.creation_date}</td>
        <td>{elemento.cod_diagnostic}</td>
        <td>{`${elemento.diagnostic}`}</td>
        <td>{`${elemento.sinister_date}`}</td>
        <td>{`${elemento.state}`}</td>
        <td>{`${elemento.value}`}</td>
        <td><i className={`fa fa-eye`} onClick={() =>goDetailClaim(elemento)}></i></td>
        </tr>
    )
}
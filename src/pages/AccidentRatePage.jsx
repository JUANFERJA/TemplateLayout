import React, { useContext, useEffect } from 'react'
import { ClaimContext } from '../context/ClaimContext'
import '../styles/accidentRate.scss'
import { paths } from '../helpers/paths'
import useFetch from '../helpers/useFetch';
import { BtnReturn } from '../components/BtnReturn/BtnReturn';


const {apiPathJava} = paths();
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
            <table className='table table-striped table-dark'>
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
        <BtnReturn/>   
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

    
    let url = `${apiPathJava}getAllClaimByBeneficiary/${id_beneficiary}`;

    let response = useFetch(url);
    if(response.loading || !response){return"Loading..."}
    let claims = response.result;
   
    
    return(
        <>
            {
                claims && (
                    claims.map(elemento =>(
                        <tr style={{fontSize:"10px"}}>
                            <th>{elemento.claim.id_claim}</th>
                            <th>{elemento.claim.creation_date}</th>
                            <th>{elemento.claim.diagnostic_id}</th>
                            <th>Diagnostico</th>
                            <th>{elemento.claim.sinister_date}</th>
                            <th>{elemento.claim.state}</th>
                            <th>{elemento.claim.sinister_date}</th>
                            <th>{elemento.reserve.value}</th>
                            <th>{elemento.reserve.uncovered_expenses}</th>
                            <th>{elemento.reserve.coinsurance}</th>
                            <th>{elemento.reserve.deductible}</th>
                            <th>{elemento.reserve.reimbursement}</th>
                        </tr>
                    ))
                )
            }
            <Totales claims = {claims}/>            
        </>
       
    )
}

const Totales = ({claims}) =>{

    let gastos = 0;
    let gastosNoCubiertos = 0;
    let coaseguro = 0;
    let deducible = 0;
    let reembolso = 0;
    claims.forEach(function(claim){
        gastos +=  parseFloat(claim.reserve.value);
        gastosNoCubiertos += parseFloat(claim.reserve.uncovered_expenses);
        coaseguro += parseFloat(claim.reserve.coinsurance);
        deducible += parseFloat(claim.reserve.deductible);
        reembolso += parseFloat(claim.reserve.reimbursement);
    });
    
    return(
        <tr>
                <td colspan="7" >Totales: </td>
                <th>{gastos}</th>
                <th>{gastosNoCubiertos}</th>
                <th>{coaseguro}</th>
                <th>{deducible}</th>
                <th>{reembolso}</th>
        </tr>
    )
}
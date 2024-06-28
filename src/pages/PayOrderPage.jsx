import React, { useContext, useState } from 'react'
import '../styles/payOrder.scss';
import { ClaimContext } from '../context/ClaimContext';
import { funcionesForms } from '../Functions/funcionesForms';
import { BtnReturn } from '../components/BtnReturn/BtnReturn';
import { funcionesRegistrarPago } from '../Functions/funcionesRegistrarPago';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
export const PayOrderPage = () => {

  const {validaData} = funcionesRegistrarPago();
  const {claim} = useContext(ClaimContext);
  const { setlogin } = useContext(UserContext);
  const navigate = useNavigate();
  const{full_name, beneficiary_name, id_claim, value, id_reserve, sinister_date} = claim;
  const [factura, setfactura] = useState("");
  const [valorNoCubierto, setvalorNoCubierto] = useState("");
  const [coAseguro, setcoAseguro] = useState("");
  const [deducible, setdeducible] = useState("");
  console.log("mi claim ", claim)
  let date = new Date();
  date = (date.getDate() + "-" + (date.getMonth() +1) + "-" + date.getFullYear());

  return (
    <div className='orderPage d-flex flex-column'>        
        <div className='header d-flex flex-row'>
            <div className='insuredInfo'>
                <ControlDisabled objeto={{label: "Asegurado:", value:full_name}}/>
                <ControlDisabled objeto={{label: "Reclamante:", value:beneficiary_name}}/>
                <ControlDisabled objeto={{label: "Reclamo:", value:id_claim}}/>
            </div>
            <div className='policyInfo'>
                <ControlDisabled objeto={{label: "Póliza:", value:"12345"}}/>
                <ControlDisabled objeto={{label: "Vigencia:", value:"22-02-2024"}}/>
            </div>
        </div>

        <div className='body d-flex flex-column'>
            <h6 style={{textAlign:"initial", marginLeft:"26px", color:"white"}}>Datos Factura</h6>
            <div className='entityInfo d-flex flex-row'>
                <div className='leftControllers d-flex flex-column'>
                    <ControlDisabled objeto={{label: "Ruc:", value:"123456789001"}}/>
                    <ControlDisabled objeto={{label: "Proveedor:", value:"Ambulatorio"}}/>                    
                </div>

                <div className='rigthControllers d-flex flex-column'>
                    <ControlDisabled objeto={{label: "Fecha:", value:date}}/>
                    <ControlDisabled objeto={{label: "Nro.Autorización:", value:full_name}}/>
                </div>
            </div>

            <div className='billInfo d-flex flex-row'>
                <div className='billControllers'>
                    <ControlEnable objeto={{id:"factura", label:"VALOR FACTURA", value:factura, setFuncion:setfactura}}/>
                    <ControlEnable objeto={{id:"noCubierto", label:"VALOR NO CUBIERTO", value:valorNoCubierto, setFuncion:setvalorNoCubierto}}/>
                    <ControlEnable objeto={{id:"coaseguro", label:"COASEGURO", value:coAseguro, setFuncion:setcoAseguro}}/>
                    <ControlEnable objeto={{id:"deducible", label:"DEDUCIBLE", value:deducible, setFuncion:setdeducible}}/>
                </div>
                <div className='policyDetail '>
                    <div className='textAreaControl d-flex flex-column'>
                        <label className='label'>Beneficion/Cobertura Aplicado</label>
                        <textarea className='detailPolicy mt-2'> </textarea>
                    </div>   

                    <div className='actions d-flex flex-column'>
                        <div className='btnActions d-flex'>
                            <button className='btn btn-secondary factura'>Agregar Factura</button>
                            <button className='btn btn-success pagar' onClick={() => validaData({
                                    id_reserve, 
                                    sinister_date, 
                                    value, 
                                    "claim_id":id_claim,
                                    "uncovered_expenses":valorNoCubierto,
                                    "coinsurance":coAseguro,
                                    "deductible":deducible,
                                    "reimbursement":factura
                            }, claim, navigate, setlogin)}>Pagar</button>  
                        </div>
                        <BtnReturn/>                          
                    </div>                 
                    
                </div>
            </div>
        </div>
    </div>
  )
}

const ControlDisabled = ({objeto})=>{
    
    const {label, value} = objeto;
    
    return(
        <div className='controlDisabled d-flex flex-row'>
            <label className='label'>{label}</label>
            <input className="input form-control" value={value} disabled />
        </div>
    )
}


const ControlEnable = ({objeto})=>{
    
    const {id, label, value, setFuncion} = objeto;
    const {addValue} = funcionesForms();
    return(
        <div className='controlEnabled d-flex flex-row'>
            <label className='label' id={id}>{label}</label>
            <input className="input form-control" value={value} onChange={(e) =>addValue(e.target, id, setFuncion)} disabled={setFuncion}/>
        </div>
    )
}


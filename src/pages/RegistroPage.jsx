import React, { useState } from 'react'
import { funcionesForms } from '../Functions/funcionesForms'
import { funcionesRegistrar } from '../Functions/funcionesRegistrar';
import '../styles/registro.scss'
import { useNavigate } from 'react-router-dom';
export const RegistroPage = () => {
    const navigate = useNavigate();
    const {addValue} = funcionesForms();
    const {validaData} = funcionesRegistrar();
    const [nombres, setnombres] = useState("");
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [pass2, setpass2] = useState("");


  return (
    <div className="container d-flex containerRegistro">
      <div className="card d-flex">
        <div className='card-header d-flex flex-row'>
         <h4>Sistema de indemnizaciones</h4>
         <i class="fa fa-home ilogin"></i>
      </div>
      <div className="card-body d-flex flex-row">
                <div  className='formRegistro'>
                        <div className="mb-2 control d-flex flex-column">
                        <label  className="form-label" id="usuario">*Nombres:</label>
                        <input type="text" className="form-control" placeholder="ingrese su usuario" name="usuario" onChange={(e)=>addValue(e.target, "usuario", setnombres)}/>
                        <p className='required'>required</p>
                        </div>

                        <div className="mb-2 control d-flex flex-column">
                        <label className="form-label" id="email">*Email:</label>
                        <input type="email" className="form-control" placeholder="ingrese su email" name="usuario" onChange={(e)=>addValue(e.target, "email", setemail)}/>
                        <p className='required'>required</p>
                        </div>

                        <div className="mb-2 control d-flex flex-column">
                            <label className="form-label" id="pwd">*Clave:</label>
                            <input type="password" className="form-control" placeholder="ingrese su contraseña" onChange={(e)=>addValue(e.target, "pwd", setpass)}/>
                            <p className='required'>required</p>
                        </div>

                        <div className="mb-2  control d-flex flex-column">
                        <label className="form-label" id="pwd2">*Confirmar Clave:</label>
                        <input type="text" className="form-control" placeholder="ingrese su usuario" onChange={(e)=>addValue(e.target, "pwd2", setpass2)}/>
                        <p className='required'>required</p>
                        </div>
                    
                        <div className="mb-3">
                            <button className="btn btn-secondary" onClick={()=> validaData({nombres, email, pass, pass2}, navigate)}>
                                Registrarse
                            </button>
                        </div>
                </div>
      </div>
     </div>
   </div> 
  )
}

import React, { useContext, useState } from 'react';
import './formLogin.scss'
import { funciones } from './funciones';
import { UserContext } from '../../context/UserContext';
import { Link, useNavigate } from 'react-router-dom';
import { funcionesForms } from '../../Functions/funcionesForms';


export const FormLogin = () => {
    const {setuser, setlogin} = useContext(UserContext);
    let navigate = useNavigate();
    const {validaDatos} = funciones();
    const {addValue} = funcionesForms();
    const [usuario, setusuario] = useState("");
    const [pass, setpass] = useState("");

  return (
        <div  className='formLogin'>
            <div className="mb-3 mt-5 control d-flex flex-column">
              <label for="email" className="form-label" id="usuario">Usuario:</label>
              <input type="email" className="form-control" placeholder="ingrese su usuario" name="usuario" onChange={(e)=>addValue(e.target, "usuario", setusuario)}/>
            </div>

            <div className="mb-3 control d-flex flex-column">
                <label for="pwd" className="form-label" id="pwd">Password:</label>
                <input type="password" className="form-control" placeholder="ingrese su contraseña" onChange={(e)=>addValue(e.target, "pwd", setpass)}/>
            </div>
            
            <div className="form-check mb-3">
                <label className="form-check-label text-white">
                <input className="form-check-input" type="checkbox" name="remember"/> Captcha
                </label>
            </div>
            <button className="btn btn-secondary" onClick={() =>validaDatos(usuario, pass, setuser, setlogin, navigate)}>Submit</button>
            <div className="mb-3">
                <Link to="/Registro"className="text-white">
                  Registrarse
                </Link>
            </div>
    </div> 
  )
}

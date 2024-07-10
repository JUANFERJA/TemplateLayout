import React, { useContext, useState } from 'react';
import '../styles/updateUser.scss'
import { UpdateUserContext } from '../context/UpdateUserContext';
import { DatoUser } from '../components/FormControls';
import { Roles } from '../components/DropDowns/Roles';
import { funcionesRegistrar } from '../Functions/funcionesRegistrar';
import { useNavigate } from 'react-router-dom';
import { UserStatus } from '../components/DropDowns/UserStatus';
const{updateUser} = funcionesRegistrar();

export const UpdateUserPage = () => {

  const {userUpdate} = useContext(UpdateUserContext);
  const {id_user} = userUpdate;
 
  const [full_name, setfull_name] = useState(userUpdate.full_name)
  const [dni, setdni] = useState(userUpdate.dni);
  const [email, setemail] = useState(userUpdate.email)
  const [password, setpassword] = useState(userUpdate.password);
  const [id_rol, setid_rol] = useState(userUpdate.rol_id)
  const [status, setstatus] = useState(userUpdate.status)

  let navigate = useNavigate();
  return (
    <div className='d-flex flex-column container'>
        <h3>Update Usuario</h3> 
        <DatoUser objeto={{id:"fullName", value:full_name, setvalue:setfull_name, description:"Nombres Completos:"}}/>
        <DatoUser objeto={{id:"dni", value:dni, setvalue:setdni, description:"Dni:"}}/>
        <DatoUser objeto={{id:"email", value:email, setvalue:setemail, description:"Email:"}}/>
        <DatoUser objeto={{id:"password", value:password, setvalue:setpassword, description:"Password:"}}/> 
        <UserStatus setvalue={setstatus} id = {status}/>
        <Roles setrol={setid_rol} id = {id_rol}/>     
        <div className='button d-flex flex-column'>
            <button className='btn btn-secondary' 
                    onClick={() => updateUser({id_user,full_name,email,password,dni,"rol_id":id_rol,"id":id_rol, status}, navigate)}>
                    Guardar
            </button>
        </div>
    </div>
  )
}



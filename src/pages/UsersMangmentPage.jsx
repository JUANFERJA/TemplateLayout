import React, { useContext, useEffect, useState } from 'react';
import '../styles/usuarios.scss'
import { helpHttp } from '../helpers/helpHttp';
import { paths } from '../helpers/paths';
import { useNavigate } from 'react-router-dom';
import { UpdateUserContext } from '../context/UpdateUserContext';

let  api = helpHttp();
const {apiPathJava} = paths();

export const UsersMangmentPage = () => {

    const [usuarios, setusuarios] = useState();
    const [parametro, setparametro] = useState("");

    const addParametro = ({target}) =>{
        setparametro(target.value);
    }

    useEffect(() => {
               
        let url = `${apiPathJava}getAllUsers`;
       
        let options = {    
            headers: { 
                "content-type": "application/json" 
            },
        };    
        api.get(url, options).then((res) => {
        if (!res.err) {                    
            setusuarios(res);  
        }});
        }, [])
  return (
   
    <div className='d-flex flex-column container'>
        <div className='d-flex flex-row header'>
            <h3>Listado de Usuarios</h3>
            <div class="input-group search">
                <div class="form-outline" data-mdb-input-init>
                    <input type="search" id="form1" class="form-control input-search" placeholder='Search' onChange={addParametro}/>                    
                </div>
                <button type="button" class="btn bt-search" data-mdb-ripple-init>
                    <i class="fa fa-search"></i>
                </button>
            </div>
        </div>
        <div class="containerReclamos mt-3">
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th>NOMBRE</th>
                <th>CORREO</th>
                <th>PERFIL</th>
                <th>STATUS</th>
                <th>ACCION</th>
              </tr>
            </thead>
            <tbody>
              <Usuarios usuarios= {usuarios} setusuarios={setusuarios} parametro = {parametro}/>       
            </tbody>
          </table>         
        </div>
         
    </div>
  )
}

const Usuarios = ({usuarios, setusuarios, parametro}) =>{
  
    let navigate = useNavigate();
    const{setuserUpdate} = useContext(UpdateUserContext);

    const goUpdateUser = (usuario) =>{
       navigate(`/updateUsuario`);
       setuserUpdate(usuario)
    } 


    useEffect(() => {
               
      let url = `${apiPathJava}getAllUsersByName/${parametro}`;
      
      let options = {    
          headers: { 
              "content-type": "application/json" 
          },
      };
  
      api.get(url, options).then((res) => {
      if (!res.err) {                  
          setusuarios(res);  
      }else{
      
      }});
    }, [parametro])

  
    return(
      <>
        {
          !usuarios ?(<>No authorized</>):(
            <>
              {                
                usuarios.length > 0 ? (
                    usuarios.map(elemento =>(
                        <tr>
                          <td>{elemento.full_name}</td>                          
                          <td>{elemento.email}</td>
                          <Rol id = {elemento.rol_id}/>
                          <Status id = {elemento.status}/>
                          <td><i className={`fa fa-pencil`} onClick={() => goUpdateUser(elemento)}></i></td>
                        </tr>
                      ))
                ) :(
                    <tr>
                    <td>no existen datos</td>
                    <td>no existen datos</td>
                    <td>no existen datos</td>
                    <td><i className={`fa fa-pencil`}></i></td>
                  </tr> 
                )            
              }               
            </>
          )
        }
      </>
    )
  }

  const Rol = ({id}) =>{
    const [roles, setroles] = useState();
    let url = `${apiPathJava}getRoles`;
    
    

    useEffect(() => {
       let options = {    
            headers: { 
                "content-type": "application/json" 
            },
        };
    
        api.get(url, options).then((res) => {
        if (!res.err) {                  
          setroles(res);  
        }else{
          console.log(res);        
        }});
    }, [])
    
    return(
      <>
       {roles && (
        <>
          {
            roles.map(elemento =>(
              elemento.id == id &&
                (
                 <td><span>{elemento.name}</span></td>
                )
              ))
          }  
         </>               
        )}       
      </>
    )
  }

  const Status = ({id}) =>{
    const [status, setsatus] = useState();
    let url = `${apiPathJava}getStatus`;
    
    

    useEffect(() => {
       let options = {    
            headers: { 
                "content-type": "application/json" 
            },
        };
    
        api.get(url, options).then((res) => {
        if (!res.err) {                  
          setsatus(res);  
        }else{
          console.log(res);        
        }});
    }, [])
    
    return(
      <>
       {status && (
        <>
          {
            status.map(elemento =>(
              elemento.id_status == id &&
                (
                 <td><span>{elemento.description}</span></td>
                )
              ))
          }  
         </>               
        )}       
      </>
    )
  }
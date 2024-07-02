import React, { useEffect, useState } from 'react';
import '../styles/usuarios.scss'
import { helpHttp } from '../helpers/helpHttp';
import { paths } from '../helpers/paths';

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
    
   
    useEffect(() => {
               
      let url = `${apiPathJava}getAllUsersByName/${parametro}`;
      console.log("entra el aefect", url);
      let options = {    
          headers: { 
              "content-type": "application/json" 
          },
      };
  
      api.get(url, options).then((res) => {
      if (!res.err) {                  
          setusuarios(res);  
      }else{
        console.log(res);        
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
                          <td><span>{elemento.roles[0].name}</span></td>
                          <td><i className={`fa fa-pencil`}></i></td>
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
import React, { useContext, useEffect, useState } from 'react';
import '../styles/reclamos.scss'

import { paths } from '../helpers/paths';
import swal from 'sweetalert';
import { helpHttp } from '../helpers/helpHttp';
import { UserContext } from '../context/UserContext';
let  api = helpHttp();

const {apiPathJava} = paths();
export const InsuredClaimsPage = () => {
  
  
  return (
    <div className='d-flex flex-column container'>
        <h3>mis reclamos</h3>
        <div class="containerReclamos mt-3">
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th>NÚMERO</th>
                <th>ESTADO</th>
                <th>OBSERVACIÓN</th>
                <th>VALOR</th>
              </tr>
            </thead>
            <tbody>
              <MisReclamos/>       
            </tbody>
          </table>
        </div>
    </div>
  )
}

const MisReclamos = () =>{
  const {user} = useContext(UserContext);
  const {user_id, jwt} = user;
  const [claims, setclaims] = useState();
 
  useEffect(() => {
             
    let url = `${apiPathJava}getAllClaimsInsured/${user_id}`;
    console.log("entra el aefect", url);
    let options = {    
        headers: { 
            'Authorization': `Bearer ${jwt}`,
            "content-type": "application/json" 
        },
    };

    api.get(url, options).then((res) => {
    if (!res.err) {
                
        setclaims(res);  
    }else{
      console.log(res);
      setclaims(res);
      swal("Ups!",res.statusText+": token o usuario no autorizado", "error");
    }});
    }, [])

  return(
    <>
      {
        !claims ?(<>No authorized</>):(
          <>
            {
              !claims.err &&(
                <>
                  {
               claims? ( claims.map(elemento =>(
                <tr>
                  <td>{elemento.id_claim}</td>
                  <td>{elemento.state}</td>
                  <td><span>{elemento.observation}</span></td>
                  <td>{`${elemento.value} $`} <i className={`fa fa-eye`}></i></td>
                </tr>
              ))):(
                <tr>
                  <td>no existen datos</td>
                  <td>no existen datos</td>
                  <td>no existen datos</td>
                  <td>no existen datos</td>
                </tr>
              )
            }
                </>
              )
            } 
            
          </>
        )
      }
    </>
  )
}
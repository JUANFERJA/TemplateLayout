import React, { useContext, useEffect, useState } from 'react';
import { paths } from '../helpers/paths';
import swal from 'sweetalert';
import { helpHttp } from '../helpers/helpHttp';
import { UserContext } from '../context/UserContext';
import { ClaimContext } from '../context/ClaimContext';
import { useNavigate } from 'react-router-dom';
let  api = helpHttp();

const {apiPathJava} = paths();
export const AnalistClaimsPage = () => {
    const {user} = useContext(UserContext);
    const {full_name} = user;
  return (
   
    <div className='d-flex flex-column container'>
        <h3>Trabajos Asignados: {full_name}</h3>
        <div class="containerReclamos mt-3">
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th>Reclamo</th>
                <th>Fecha Registro</th>
                <th>Cod</th>
                <th>Diagnostico</th>
                <th>Fecha Ocurrencia</th>
                <th>Estado</th>
                <th>Valor reclamado</th>
                <th>Acciones</th>
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
    let navigate = useNavigate();
    const {setclaim} = useContext(ClaimContext)
    const {user} = useContext(UserContext);
    const {user_id, jwt} = user;
    const [claims, setclaims] = useState();
   
    useEffect(() => {
      let url = `${apiPathJava}getAllClaimsAnalist/${user_id}`;
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
   
    const goDetailClaim =(elemento)=>{

       setclaim(elemento);
       navigate(`/detailClaim/${elemento.id_claim}`)
    }
      
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
                    <td>{elemento.creation_date}</td>
                    <td>{elemento.cod_diagnostic}</td>
                    <td>{`${elemento.diagnostic}`}</td>
                    <td>{`${elemento.sinister_date}`}</td>
                    <td>{`${elemento.state}`}</td>
                    <td>{`${elemento.value}`}</td>
                    <td><i className={`fa fa-eye`} onClick={() =>goDetailClaim(elemento)} style={{cursor:"pointer"}}></i></td>
                  </tr>
                ))):(
                  <tr>
                    <td>no existen datos</td>
                    <td>no existen datos</td>
                    <td>no existen datos</td>
                    <td>no existen datos</td>
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
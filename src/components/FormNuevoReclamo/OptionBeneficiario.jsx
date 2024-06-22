import React, { useEffect, useState } from 'react'
import { paths } from '../../helpers/paths';
import swal from 'sweetalert';
import { helpHttp } from '../../helpers/helpHttp';
let api = helpHttp();
export const OptionBeneficiario = ({objeto}) => {

    const { apiPathJava} = paths();
    const {user_id, jwt} = objeto;
    
    const [beneficiarios, setbeneficiarios] = useState();
    
  
    useEffect(() => {
        let url = `${apiPathJava}beneficiarios/${user_id}`
        let options = {
            headers:{
                'Authorization': `Bearer ${jwt}`,
                "content-type": "application/json"
            }}

            api.get(url, options).then((res) => {
                if (!res.err) {     
                    console.log("en lo correcto",res);        
                    setbeneficiarios(res);  
                }else{
                  console.log(res);
                  setbeneficiarios(res);
                  swal("Ups!",res.statusText+": token o usuario no autorizado", "error");
                }});
    }, [])
    

  return (
    <>
            <option style={{display:"none"}}>Selecciona Beneficiario</option>
        {
           beneficiarios ? (
            beneficiarios.map(elemento =>(
                <option value={elemento.id_beneficiarie}>{elemento.full_name}</option>
            ))
           ):(
                <option>No existen beneficiarios para este documento</option>
           )
        }
    </>
    
  )
}

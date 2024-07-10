import React, { useEffect, useState } from 'react'
import { paths } from '../../helpers/paths'
import { helpHttp } from '../../helpers/helpHttp';

let path = paths();
const {apiPathJava} = path;
let api = helpHttp();

export const Roles = ({setrol, id}) => {

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
  
  
  return (
    <div className="d-flex flex-row control">
        <label className='label'>Roles:</label>        
        {roles && (
              <select className='form-control input' onChange={(e) => setrol(e.target.value)}>
                    {
                        roles.map(elemento =>(
                            elemento.id == id ? (
                                <option value = {elemento.id}  selected>
                                    {elemento.name}
                                </option>
                            ):(
                                <option value = {elemento.id}>
                                    {elemento.name}
                                </option>
                            )
                        ))
                    }  
              </select>                    
        )}       
    </div>
  )
}

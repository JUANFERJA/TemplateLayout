import React, { useEffect, useState } from 'react'
import { paths } from '../../helpers/paths'
import { helpHttp } from '../../helpers/helpHttp';

let path = paths();
const {apiPathJava} = path;
let api = helpHttp();

export const UserStatus = ({setvalue, id}) => {
    const [status, setstatus] = useState();
    let url = `${apiPathJava}getStatus`;
  
    useEffect(() => {
       let options = {    
            headers: { 
                "content-type": "application/json" 
            },
        };
    
        api.get(url, options).then((res) => {
        if (!res.err) {                  
            setstatus(res);  
        }else{
          console.log(res);        
        }});
    }, [])
    
    
    return (
      <div className="d-flex flex-row control">
          <label className='label'>Roles:</label>        
          {status && (
                <select className='form-control input' onChange={(e) => setvalue(e.target.value)}>
                      {
                          status.map(elemento =>(
                              elemento.id_status == id ? (
                                  <option value = {elemento.id_status}  selected>
                                      {elemento.description}   
                                  </option>
                              ):(
                                  <option value = {elemento.id_status}>
                                      {elemento.description}
                                  </option>
                              )
                          ))
                      }  
                </select>                    
          )}       
      </div>
    )
}

import React, { useEffect, useState } from 'react'
import { helpHttp } from '../../helpers/helpHttp';
import { paths } from '../../helpers/paths';
import swal from 'sweetalert';


export const Files = ({objeto}) =>{

    const {apiFiles} = paths();
    const {tipo, id_claim} = objeto;
    const [files, setFiles] = useState();
    let text = tipo == "documento" ? "DOC0000" : "FAC0000";
    let noFiles = tipo == "documento" ? "No existen documentos cargados" : "No existen facturas cargadas"
    let url = `${apiFiles}files/${id_claim}/${tipo}`;
    let api = helpHttp();
    let options = {
        headers: { "content-type": "application/json" },
      };
    useEffect(() => {      
    
        api.get(url,options).then((res) =>{
            if(!res.err){setFiles(res)}else{
              swal("Ups!",res.statusText+": token o usuario no autorizado", "error");
            }
        })

      
    }, [])
    
    return(
        <div className='file-control d-flex flex-row mt-3'>
             <label className='label'>{`${tipo}: `}</label>
             <div className='files d-flex flex-column'>
               {
                files &&(
                    <>
                      {
                        files.length > 0 ? (
                          files.map((elemento, indice) =>(
                            <a href={`${apiFiles}files/${elemento.id}`} style={{fontSize:"11px"}}>{`${text}${indice+1}`}</a>              
                        ))
                        ):(
                          <>{noFiles}</>
                        )
                      }
                    </>
                )
               }
             </div> 
        </div>
    )
}
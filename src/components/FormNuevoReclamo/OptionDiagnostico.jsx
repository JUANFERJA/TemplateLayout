import React from 'react'
import { paths } from '../../helpers/paths';
import useFetch from '../../helpers/useFetch';

export const OptionDiagnostico = () => {
    const { apiPathJava } = paths();


    let url = `${apiPathJava}diagnostics`
    let response = useFetch(url);
    if(response.loading || !response){
        return "Loading...";
    }   
    let diagnosticos = response.result;

  return (
    <>
        <option style={{display:"none"}}>Selecciona un diagnóstico</option>
    {
        diagnosticos.map(elemento =>(
            <option value={elemento.cod_diagnostic}>{elemento.description}</option>
        ))
    }
    </>
  )
}

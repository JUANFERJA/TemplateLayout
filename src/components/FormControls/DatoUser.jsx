import React from 'react'

export const DatoUser = ({objeto}) =>{

    const {description, value, id, setvalue} = objeto;

    const addValue = ({target}) =>{
        
        if(target.value == ""){
            document.getElementById(id).style.color = "#F68C9F"
        }else{
            document.getElementById(id).style.color = "#91bec2"
        }        
        setvalue(target.value)
    }

    return(
        <div className='d-flex flex-row control'>
            <label className='label' id={id}>{description}</label>
            <input className='form-control input'  value = {value} onChange={addValue}></input>
        </div>
    )
}
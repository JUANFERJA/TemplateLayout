import React from 'react'

export const Control = ({label, objeto}) =>{

    const {id, setValue, value} = objeto;

    const addValue = ({target}) =>{

        if(target.value == ""){
            console.log(id)
            document.getElementById(id).style.color = "#F68C9F"
        }else{
             document.getElementById(id).style.color = "#91bec2"
        }       
        setValue(target.value)
    }

    return(
        <div className='control d-flex flex-row'>
            <label className='lbl' id={id}>{label}</label>
            <input className='form-control input' value={value} onChange={addValue}></input>
        </div>
    )
}

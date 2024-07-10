import React from 'react'

export const ControlComponent =({objeto})=>{

    const {label, value} = objeto;
    return(
            <div className='control-component d-flex flex-row mt-2'>
                <label className='label'>{label}</label>
                <input className='form-control input' value={value} disabled></input>
            </div>
        )
}

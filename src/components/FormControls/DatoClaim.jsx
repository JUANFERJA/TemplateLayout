import React from 'react'

export const DatoClaim = ({objeto}) =>{

    const {id, value} = objeto;
    return(
        <div className='d-flex flex-row datoClaim'>
            <label className='label'>{id}</label>
            <input className='form-control input' value={value} disabled></input>
        </div>
    )
}

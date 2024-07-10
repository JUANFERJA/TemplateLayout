import React from 'react'

export const ActionClaim = ({objeto}) =>{
    const {icon, label, action} = objeto;
   
    return(
        <div className='d-flex flex-row action'>
          <i className={`${icon} icon`} onClick={action}></i>
          <label>{label}</label>
        </div>
    )
}
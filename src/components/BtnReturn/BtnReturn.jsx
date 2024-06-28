import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './btnreturn.scss';
export const BtnReturn = () => {
    let navigate = useNavigate();
  return (
    <FontAwesomeIcon icon={faRotateLeft} className='icoReturn' onClick={() =>navigate(-1)}/>  
  )
}

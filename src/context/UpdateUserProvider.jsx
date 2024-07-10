import React, { useState } from 'react'
import { UpdateUserContext } from './UpdateUserContext';

export const UpdateUserProvider = ({children}) => {

  const [userUpdate, setuserUpdate] = useState();

  return (
    <UpdateUserContext.Provider value = {{userUpdate, setuserUpdate}}>
        {children}
    </UpdateUserContext.Provider>
  )
}

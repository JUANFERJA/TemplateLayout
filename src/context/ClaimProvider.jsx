import React, { useState } from 'react'
import { ClaimContext } from './ClaimContext';

export const ClaimProvider = ({children}) => {
    const [claim, setclaim] = useState();
  return (
    <ClaimContext.Provider value = {{claim, setclaim}}>
         {children}
    </ClaimContext.Provider>
  )
}


import React, { useState } from 'react'
import { UserContext } from './UserContext'
import { CompanyContext } from './CompanyContext';

export const CompanyProvider = ({children}) => {
  
    const [company, setcompany] = useState();
    
  
  
    return (
            <CompanyContext.Provider value = {{company, setcompany}}>
                {children}
            </CompanyContext.Provider>
  )
}

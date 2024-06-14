import React, { useState } from 'react'
import { UserContext } from './UserContext'

export const UserProvider = ({children}) => {
  
    const [user, setuser] = useState();
    const [login, setlogin] = useState(false);
  
  
    return (
            <UserContext.Provider value = {{user, setuser, login, setlogin}}>
                {children}
            </UserContext.Provider>
  )
}

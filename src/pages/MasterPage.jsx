import React, { useContext } from 'react'
import { LoginPage } from './LoginPage'
import { Sidebar, NavBar } from '../components'
import { UserContext } from '../context/UserContext'
import { RoutesApp } from '../routes/RoutesApp'
import { AuthRoutes } from '../routes/AuthRoutes'


export const MasterPage = () => {

  const {login, user, setlogin} = useContext(UserContext);
  return (
    <>
          {
              login === false ? (
                <AuthRoutes/>
              ):(
                  <>
                    <div className='navbarCustom'>
                      <NavBar/>
                    </div>
                    <div className="cuerpo d-flex flex-row" id='cuerpo'>
                        <div className='sidebar'>
                          <Sidebar user={user} setlogin = {setlogin}/>
                        </div>
                        <div className='main'>
                          <RoutesApp/>
                        </div>
                    </div>
                  </>
                )
          }         
    </>
  )
}

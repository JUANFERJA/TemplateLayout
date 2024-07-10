import React, { useContext, useEffect } from 'react'
import swal from 'sweetalert';
import { Sidebar, NavBar } from '../components/Menus'
import { UserContext } from '../context/UserContext'
import { RoutesApp } from '../routes/RoutesApp'
import { AuthRoutes } from '../routes/AuthRoutes'
import { ClaimProvider } from '../context/ClaimProvider'
import { CompanyContext } from '../context/CompanyContext'
import { paths } from '../helpers/paths'
import { helpHttp } from '../helpers/helpHttp'
import { UpdateUserProvider } from '../context/UpdateUserProvider';

let path = paths()
const {apiPathJava} = path;

export const MasterPage = () => {

  const {login, user, setlogin} = useContext(UserContext);
  const{company, setcompany } = useContext(CompanyContext);

  let api = helpHttp();
  let options = {"content-type":"application/json"}

  useEffect(() => {
    
      let url = `${apiPathJava}getCompany`
      api.get(url,options).then((res) =>{
          if(!res.err){setcompany(res)}else{
            swal("Ups!",res.statusText+": token o usuario no autorizado", "error");
          }
      })
  
  }, [])
  
  return (
    <>
          {
              login === false ? (
                <AuthRoutes/>
              ):(
                  <>
                    <div className='navbarCustom'>
                      <NavBar company = {company}/>
                    </div>
                    <div className="cuerpo d-flex flex-row" id='cuerpo'>
                        <div className='sidebar'>
                          <Sidebar user={user} setlogin = {setlogin} company = {company}/>
                        </div>
                        <div className='main d-flex'>
                          <ClaimProvider>
                            <UpdateUserProvider>
                              <RoutesApp/>
                            </UpdateUserProvider>
                          </ClaimProvider>
                        </div>
                    </div>
                  </>
                )
          }         
    </>
  )
}

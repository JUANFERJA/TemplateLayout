import React, { useContext } from 'react'
import { Route, Routes} from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { NuevoReclamoPage, ReaclamosPage } from '../pages';


export const RoutesApp = () => {
  const{user} = useContext(UserContext);
  return (
    <Routes>
        <Route path={`/misReclamos/:idUsuario`}
               element={<ReaclamosPage user={user}/>}>
        </Route> 
        <Route path={`/nuevoReclamo/:idUsuario`}
               element={<NuevoReclamoPage user={user}/>}>
        </Route>      
    </Routes>
  )
}

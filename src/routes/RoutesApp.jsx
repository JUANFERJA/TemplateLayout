import React, { useContext } from 'react'
import { Route, Routes} from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { NewClaimPage, InsuredClaimsPage, AnalistClaimsPage, ClaimDetailPage } from '../pages';


export const RoutesApp = () => {
  const{user} = useContext(UserContext);
  return (
    <Routes>
        <Route path={`/insuredReclamos/:idUsuario`}
               element={<InsuredClaimsPage user={user}/>}>
        </Route> 
        <Route path={`/analistReclamos/:idUsuario`}
               element={<AnalistClaimsPage user={user}/>}>
        </Route>
        <Route path={`/DetailClaim/:idClaim`}
               element={<ClaimDetailPage user={user}/>}>
        </Route>
        <Route path={`/nuevoReclamo/:idUsuario`}
               element={<NewClaimPage user={user}/>}>
        </Route>      
    </Routes>
  )
}

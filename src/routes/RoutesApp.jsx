import React, { useContext } from 'react'
import { Route, Routes} from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { NewClaimPage, InsuredClaimsPage, AnalistClaimsPage, ClaimDetailPage, AccidentRatePage, PayOrderPage, UsersMangmentPage, RolsAccessPage, ConfigurationPage } from '../pages';



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
        <Route path={`/detailClaim/:idClaim`}
               element={<ClaimDetailPage user={user}/>}>
        </Route>
        <Route path={`/nuevoReclamo/:idUsuario`}
               element={<NewClaimPage user={user}/>}>
        </Route>     
        <Route path={`/accidentRate`}
               element={<AccidentRatePage/>}>
        </Route> 
        <Route path={`/payOrder`}
               element={<PayOrderPage/>}>
        </Route>
        <Route path={`/usersMangment/:idUsuario`}
               element={<UsersMangmentPage/>}>
        </Route>
        <Route path={`/rolesMangment/:idUsuario`}
               element={<RolsAccessPage/>}>
        </Route>
        <Route path={`/mangment/:idUsuario`}
               element={<ConfigurationPage/>}>
        </Route>
    </Routes>
  )
}

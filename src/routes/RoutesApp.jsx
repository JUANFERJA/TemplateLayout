import React, { useContext } from 'react'
import { Route, Routes} from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { NewClaimPage, InsuredClaimsPage, AnalistClaimsPage, ClaimDetailPage, AccidentRatePage, PayOrderPage } from '../pages';



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
    </Routes>
  )
}

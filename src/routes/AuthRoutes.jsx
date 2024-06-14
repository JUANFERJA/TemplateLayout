
import React, { useContext } from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { LoginPage, RegistroPage } from '../pages';


export const AuthRoutes = () => {
  const{user} = useContext(UserContext);
  return (
    <Routes>
        <Route path={`/Registro`}
               element={<RegistroPage/>}>
        </Route>
        <Route path={`/login`}
               element={<LoginPage/>}>
        </Route>
        <Route path={`/*`}
               element={<LoginPage/>}>
        </Route>
    </Routes>
  )
}

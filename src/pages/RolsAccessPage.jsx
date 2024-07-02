import React from 'react';
import '../styles/rols.scss'

export const RolsAccessPage = () => {
  return (
    <div className='d-flex flex-column container'>
        <div className='d-flex flex-row header'>
            <h3>Accesos por Perfil</h3>           
        </div>
        <div class="containerRoles mt-3">
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th>PERFIL</th>
                <th>MENU</th>
                <th>HABILITADO</th>               
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Admin</td>
                <td>Usuario</td>
                <td><i className={`fa fa-check-square-o`}></i></td>
              </tr>  
              <tr>
                <td>Admin</td>
                <td>Perfiles</td>
                <td><i className={`fa fa-check-square-o`}></i></td>
              </tr>
              <tr>
                <td>Admin</td>
                <td>Configuración</td>
                <td><i className={`fa fa-check-square-o`}></i></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='grabar d-flex'>
               <button className='btn btn-secondary btnGrabar'>Grabar</button>
        </div>
    </div>
  )
}

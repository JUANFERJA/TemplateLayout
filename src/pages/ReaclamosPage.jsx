import React from 'react';
import '../styles/reclamos.scss'

export const ReaclamosPage = () => {
  return (
    <div className='d-flex flex-column'>
        <h3>mis reclamos</h3>
        <div class="container containerReclamos mt-3">
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th>NÚMERO</th>
                <th>ESTADO</th>
                <th>OBSERVACIÓN</th>
                <th>VALOR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RC0000258</td>
                <td>PAGADO</td>
                <td><span>SE REALIZA EL APGO DEL RECLAMO CORRESPONDIENTE</span></td>
                <td>$450,50 <i className={`fa fa-eye`}></i></td>
              </tr>
              <tr>
                <td>RC0000258</td>
                <td>PAGADO</td>
                <td><span>SE REALIZA EL APGO DEL RECLAMO CORRESPONDIENTE</span></td>
                <td>$450,50 <i className={`fa fa-eye`}></i></td>
              </tr>
              <tr>
                <td>RC0000258</td>
                <td>PAGADO</td>
                <td><span>SE REALIZA EL APGO DEL RECLAMO CORRESPONDIENTE</span></td>
                <td>$450,50 <i className={`fa fa-eye`}></i></td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

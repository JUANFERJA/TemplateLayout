import React from 'react'
import '../styles/login.scss'
import { SlideCarrousel } from '../components/SlideCarrousel/SlideCarrousel'
import { FormLogin } from '../components/FormLogin/FormLogin'
export const LoginPage = () => {
  return (   
            <div className="container d-flex containerLogin">
                <div className="card d-flex">
                    <div className='card-header d-flex flex-row'>
                        <h4>Sistema de indemnizaciones</h4>
                        <i class="fa fa-home ilogin"></i>
                    </div>
                    <div className="card-body d-flex flex-row">
                        <SlideCarrousel/>
                        <FormLogin/>
                    </div>
                </div>
            </div>   
        )
}

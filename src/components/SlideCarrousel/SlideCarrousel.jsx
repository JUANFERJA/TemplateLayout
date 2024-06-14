import React from 'react'
import { imagenesJson } from '../../helpers/imagenesJson';
import './slideCarrousel.scss'
const urlimagen = require.context('../../assets/images', true);

export const SlideCarrousel = () => {

    const {images} = imagenesJson();
  return (
    <div className='d-flex flex-column slideCarrousel'>
           <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {
                        images.map(elemento =>(
                            <button type="button" data-bs-target="#demo" data-bs-slide-to={elemento.id} className="active"></button>
                        ))
                    }                 
                </div>

                
                <div class="carousel-inner">
                {
                    images.map(elemento =>(
                    <div className={elemento.id === 0 ?  "carousel-item active imCarrousel" : "carousel-item imCarrousel"}>
                        <img src={urlimagen(`./${elemento.nombreImagen}`)} alt={elemento.nombreImagen} className="d-block w-100 imCarrousel"/>
                    </div>
                    ))
                }                    
                </div>

    
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
                </button>
           </div>

            <div className="container-fluid">
                <h3 className='title'>Bienvenido al Sisetma de Gestión</h3>
                <p className='parrafo'>Aquí podrás realizar todas tus gestiones referente a tus reclamos</p>
            </div>
        </div> 
  )
}
  
import React, { useContext } from 'react'
import useFetch from '../helpers/useFetch';
import { Link, useNavigate } from 'react-router-dom';
import { funcionCollapseSidebar } from '../Functions/funcionCollapseSidebar';

export const Sidebar = ({user, setlogin}) => {
    
    const{outLogin} = funcionCollapseSidebar();
    let url = `https://localhost:44340/api/GetMenuSidebar?idRol=${user.rol}`;
    let response = useFetch(url);
    let navigate = useNavigate();
    if(response.loading || !response){
        return "Loading..."
    }

    const {data} = response.result;
  return (
    <div id="accordion" className='menuCollapse'>
        {
            data.map(elemento =>(
                <div className="card">
                    <div className="card-header d-flex">
                        {console.log('elemento', elemento)}
                    <i className={`fa fa-${elemento.icon} fa1`}></i>
                    {elemento.childrens === null?(
                        <Link className="text"to={`/reclamos/${user.id}`}>{elemento.descripcion}</Link>):
                    (<a className="text" data-bs-toggle="collapse" href={`#collapse${elemento.id}`}>
                        <span>{elemento.descripcion}</span>
                    </a>)}
                    </div>
                <div id={`collapse${elemento.id}`} className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">                        
                        {elemento.childrens != null &&(<Subniveles data = {elemento.childrens} id={elemento.id} user={user}/>)}
                    </div>
                </div>
                </div>
            ))
        }
            <div className="card">
                    <div className="card-header d-flex">                     
                    <i className={`fa fa-arrow-left fa1`}></i>
                    <a className="text" onClick={() =>outLogin(setlogin, navigate)}>
                        <span className='span'>Salir</span>                        
                    </a>
                    </div>               
            </div>       
    </div>
  )
}

const Subniveles = ({data, id, user}) =>{
    console.log(user, "user")
    return(
        <div id={`accordion${id}`}>
        {
            data.map(elemento =>(
                <div className="">
                    <div className= {`card-header d-flex children`}>
                    <i className={`fa fa-circle fa2 left${elemento.nivel}`}></i>
                    {elemento.childrens === null?(
                        <Link className="text2"to={`/nuevoReclamo/${user.id}`}>{elemento.descripcion}</Link>):
                    (<a className="text2" data-bs-toggle="collapse" href={`#collapse${elemento.id}`}>
                        <span>{elemento.descripcion}</span>
                    </a>)}
                    </div>
                <div id={`collapse${elemento.id}`} className="collapse" data-bs-parent={`#accordion${id}`}>
                    <div className="card-body p-0">
                        {console.log(elemento.childrens)}
                        {elemento.childrens != null &&(<Subniveles data = {elemento.childrens} id = {elemento.nivel} user={user}/>)}
                    </div>
                </div>
                </div>
            ))
        }   
       </div>
    )
}
import React from 'react'
import useFetch from '../helpers/useFetch';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
export const Sidebar = () => {
    let url = "https://localhost:44340/api/GetMenuSidebar?idRol=1";
    let response = useFetch(url);

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
                    <a className="text" data-bs-toggle="collapse" href={`#collapse${elemento.id}`}>
                        <span className='span'>{elemento.descripcion}</span>                        
                    </a>
                    </div>
                <div id={`collapse${elemento.id}`} className="collapse" data-bs-parent="#accordion">
                    <div className="card-body">
                        {console.log(elemento.childrens)}
                        {elemento.childrens != null &&(<Subniveles data = {elemento.childrens} id={elemento.id}/>)}
                    </div>
                </div>
                </div>
            ))
        }
      

       
    </div>
  )
}

const Subniveles = ({data, id}) =>{
    return(
        <div id={`accordion${id}`}>
        {
            data.map(elemento =>(
                <div className="">
                    <div className= {`card-header d-flex children`}>
                    <i className={`fa fa-circle fa2 left${elemento.nivel}`}></i>
                    <a className={`text2`} data-bs-toggle="collapse" href={`#collapse${elemento.id}`}>
                        {elemento.descripcion}
                    </a>
                    </div>
                <div id={`collapse${elemento.id}`} className="collapse" data-bs-parent={`#accordion${id}`}>
                    <div className="card-body p-0">
                        {console.log(elemento.childrens)}
                        {elemento.childrens != null &&(<Subniveles data = {elemento.childrens} id = {elemento.nivel}/>)}
                    </div>
                </div>
                </div>
            ))
        }   
       </div>
    )
}
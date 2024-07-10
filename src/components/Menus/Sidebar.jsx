import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import { Link, useNavigate } from 'react-router-dom';
import { funcionCollapseSidebar } from '../../Functions/funcionCollapseSidebar';
import { paths } from '../../helpers/paths';
import { helpHttp } from '../../helpers/helpHttp';

export const Sidebar = ({user, setlogin, company}) => {
    const{apiPathJava} = paths();
    let  api = helpHttp();
    let navigate = useNavigate();
    const{outLogin} = funcionCollapseSidebar();
    const {rol_id, jwt} = user;
    const [data, setdata] = useState();


    useEffect(() => {
    console.log("entra el aefect", rol_id);         
    let url = `${apiPathJava}menu/${rol_id}`;
    let options = {    
        headers: { 
            'Authorization': `Bearer ${jwt}`,
            "content-type": "application/json" 
        },
    };

    api.get(url, options).then((res) => {
    if (!res.err) {     
        console.log("en lo correcto",res);        
        setdata(res);  
    }else{
      console.log(res);
      setdata(res);
      swal("Ups!",res.statusText+": token o usuario no autorizado", "error");
    }});
    }, [])
    
  return (
    <>
        {
            !data? (<>no authorized</>):
            (
                <div id="accordion" className='menuCollapse d-flex flex-column'>
                    {
                       !data.err &&(
                        data.map(elemento =>(
                            <div className="card">
                                <div className="card-header d-flex">
                                   
                                <i className={`fa ${elemento.icon} fa1`}></i>
                                {elemento.childrens === null?(
                                    <Link className="text"to={`/${elemento.url}/${rol_id}`}>{elemento.description}</Link>):
                                (<a className="text" data-bs-toggle="collapse" href={`#collapse${elemento.id_menu}`}>
                                    <span>{elemento.description}</span>
                                </a>)}
                                </div>
                            <div id={`collapse${elemento.id_menu}`} className="collapse" data-bs-parent="#accordion">
                                <div className="card-body">                        
                                    {elemento.childrens != null &&(<Subniveles data = {elemento.childrens} id={elemento.id_menu} user={user}/>)}
                                </div>
                            </div>
                            </div>
                        ))
                       )
                    }
                        <div className="card">
                            <div className="card-header d-flex">                     
                            <i className={`fa fa-arrow-left fa1`}></i>
                            <a className="text" onClick={() =>outLogin(setlogin, navigate)}>
                                <span className='span'>Salir</span>                        
                            </a>
                            </div>               
                        </div>    

                        <div className='footer'>
                            <label className='label'>{company.footer}</label>
                        </div>   
                </div>
            )
        }
    </>
  )
}

const Subniveles = ({data, id, user}) =>{
   
    return(
        <div id={`accordion${id}`}>
        {
            data.map(elemento =>(
                <div className="">
                    <div className= {`card-header d-flex children`}>
                    <i className={`fa fa-circle fa2 left${elemento.nivel}`}></i>
                    {elemento.childrens === null?(
                        <Link className="text2"to={`/${elemento.url}/${user.rol_id}`}>{elemento.description}</Link>):
                    (<a className="text2" data-bs-toggle="collapse" href={`#collapse${elemento.id_menu}`}>
                        <span>{elemento.description}</span>
                    </a>)}
                    </div>
                <div id={`collapse${elemento.id_menu}`} className="collapse" data-bs-parent={`#accordion${id}`}>
                    <div className="card-body p-0">
                        {elemento.childrens != null &&(<Subniveles data = {elemento.children} id = {elemento.nivel} user={user}/>)}
                    </div>
                </div>
                </div>
            ))
        }   
       </div>
    )
}
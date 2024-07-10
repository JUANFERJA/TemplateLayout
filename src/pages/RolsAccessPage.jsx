import React, { useEffect, useState } from 'react';
import '../styles/rols.scss';
import { paths } from '../helpers/paths';
import { helpHttp } from '../helpers/helpHttp';
import * as $ from 'jquery';

let path = paths();
const{apiPathJava} = path;
let  api = helpHttp();

export const RolsAccessPage = () => {

  const [menu, setmenu] = useState();

  const updaMenu = () =>{

        let url = `${apiPathJava}updateMenu`;
        let options = {    
            headers: { "content-type": "application/json"},
            body:menu
        };

        api.post(url, options).then((res) => {
        if (!res.err) {                  
          console.log(res);
        }else{
          console.log(res);      
        }});  
  }


  return (
    <div className='d-flex flex-column container'>
        <div className='d-flex flex-row header'>
            <h3>Accesos por Perfil</h3>           
        </div>
        <div class="containerRoles">
          <table class="table table-hover table-dark">
            <thead>
              <tr>
                <th>PERFIL</th>
                <th>MENU</th>
                <th>HABILITADO</th>               
              </tr>
            </thead>
            <tbody>       
              <TableRoleMenu objeto = {{menu, setmenu}}/>
            </tbody>
          </table>
        </div>
        <div className='grabar d-flex'>
               <button className='btn btn-secondary btnGrabar' onClick={updaMenu}>Grabar</button>
        </div>
    </div>
  )
}

const TableRoleMenu = ({objeto}) =>{

  const {menu, setmenu} = objeto;

  useEffect(() => {
    let url = `${apiPathJava}allMenuByRol`;
    let options = {    
        headers: { 
            "content-type": "application/json" 
        },
    };

    api.get(url, options).then((res) => {
    if (!res.err) {                  
      setmenu(res);  
    }else{
      console.log(res);
      setmenu(res);     
    }});
    }, [])

  return(
    <>
      {
        menu ? (
          <>
            {
              menu.map((elemento, index) =>(
                <tr>
                  <td>{elemento.description_rol}</td>
                  <td>{elemento.description}</td>
                  <td><InputCheck objeto = {{setmenu, elemento, menu, index}}/></td>
                </tr>
              ))
            }
          </>
        ) :(
          <tr>
            <td>no hay datos</td>
            <td>no hay datos</td>
            <td>no hay datos</td>
          </tr>
        )
      }
    </>
  )
}

const InputCheck = ({objeto}) =>{

  const {setmenu, elemento, menu, index} = objeto;
  const {status, rol_id, id_menu} = elemento;
  const [enable, setenable] = useState(false);
  let newMenu = menu; 

  const addCheck = ({target}) =>{

    if(target.checked == true){
      console.log("cuando selecciona");
      newMenu[index].status = "activo"
      setenable(true)   
      setmenu(newMenu);       
    }else{
      setenable(false)      
      newMenu[index].status = "inactivo"
      setmenu(newMenu);       
    }

  }

  useEffect(() => {
    if(status == "activo"){
      setenable(true);
    }
  }, [])
  
  return(
    <input type="checkbox" 
           className="form-check-input checkitem" 
           id = {`item${id_menu}`}
           value={id_menu}
           onChange={addCheck}
           checked = {enable}
           disabled = {rol_id == 3 ? true:false}/>
  )
}
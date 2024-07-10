import swal from 'sweetalert';
import { helpHttp } from '../helpers/helpHttp';
import { paths } from '../helpers/paths';
let api = helpHttp();
let path = paths();
const {apiPathJava} = path;

export const funcionesRegistrar = () => {
  
  const validaData = (objeto, navigate) =>{

    const {nombres, email, pass, pass2} = objeto
    if(nombres == ""|| email =="" || pass == "" || pass2 == ""){

        if(nombres ==""){document.getElementById("usuario").style.color="#F68C9F"}
        if(email ==""){document.getElementById("email").style.color="#F68C9F"}
        if(pass ==""){document.getElementById("pwd").style.color="#F68C9F"}
        if(pass2 ==""){document.getElementById("pwd2").style.color="#F68C9F"}
        swal("Ups!","Debe llenar todos los campos requeridos","error");
        return;
    }

    if(pass != pass2){
        swal("Ups!","las contraseñas no coinciden","error");
        return;
    }

    saveUser(objeto, navigate)
  }

  const saveUser = (objeto, navigate) =>{
    let data = {
        ...objeto, 
        idRol:1,
    }
    const createData = (data) => {

        
        /* data.id = Date.now();
        let url = `${Path2}/api/InsertArtefacto`;
        let options = {
        body: data,
        headers: { "content-type": "application/json" },
        };
    
        api.post(url, options).then((res) => {
        if (!res.err) {
        } else {
        }
        }); */
    };   
    /* createData(data); */
    console.log("mis datos para registrar usuario", data)
    swal("Registro Exitoso!","El Usuario ha sido registrado correctamente","success").then(() => {
         navigate("/Login")
       });
   
  }
  
  const updateUser = (objeto, navigate) =>{
      
      let url = `${apiPathJava}updateUser`;
      let options = {    
          headers: {"content-type": "application/json"},
          body:objeto
      };
  
      api.post(url, options).then((res) => {
      if (!res.err) {     
        console.log("mis datos", url, objeto)
          swal("Congratulations!","El registro se ha grabado con éxito","success");             
          navigate(-1);
      }else{
        console.log(res);        
      }});
  }
  return{
    validaData,
    updateUser
  }
}

import { helpHttp } from "../../helpers/helpHttp";
import swal from 'sweetalert';
import { paths } from "../../helpers/paths";


export const funciones = () => {
  const{apiPathJava} = paths(); 
  let  api = helpHttp();
  //metodo para hacer la consulta a la bd para el login
  const validaDatos = (usuario, pass, setuser, setlogin, navigate) =>{
   if(usuario == "" || pass == ""){
      if(usuario ==""){document.getElementById("usuario").style.color="#F68C9F"}
      if(pass ==""){document.getElementById("pwd").style.color="#F68C9F"}
     
      swal("Ups!","Debe llenar todos los campos requeridos","error");
   }
 
   createData({"username":usuario, "password":pass}, setuser, setlogin, navigate);
  }


  const createData = (data, setuser, setlogin, navigate) => {
    data.id = Date.now();
    let url = `${apiPathJava}authenticate`;
    let options = {
    body: data,
    headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
    if (!res.err) {     
      console.log("mi respuesta", res)
        if(res.message){
          swal("Ups!","Usuario Deshabilitado o Bloqueado, pongase en contacto con el administrador...", "error");
        }else{
              setuser(res);
              setlogin(true);
              let urlComponent = res.rol_id == 2 ? "analistReclamos" : "insuredReclamos";
              urlComponent = res.rol_id == 3 ? "usersMangment": urlComponent;
              navigate(`/${urlComponent}/${res.rol_id}`);
          }
        
             
    }else{
      console.log(res);
      swal("Ups!","Usuario y/o contraseña no validos", "error");
    }});


     
}

  return{
   validaDatos
  }
}

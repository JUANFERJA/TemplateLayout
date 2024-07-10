import swal from 'sweetalert';
import { helpHttp } from '../helpers/helpHttp';
import { paths } from '../helpers/paths';

let  api = helpHttp();
const {apiPathJava} = paths();

export const funcionesCompany = () => {
  
    const sendData = (objeto, setcompany) =>{

        const {name, ruc, header, footer} = objeto;
        if(name == "" || ruc == "" || header == "" || footer == ""){
            if(name == ""){document.getElementById("nombre").style.color = "antiquewhite"}
            if(ruc == ""){document.getElementById("ruc").style.color = "antiquewhite"}
            if(header == ""){document.getElementById("header").style.color = "antiquewhite"}
            if(footer == ""){document.getElementById("footer").style.color = "antiquewhite"}
            swal("Ups!","debe llenar todos los campos", "error");
            return
        }
    
        
        let options = {
            body: objeto,
            headers: { "content-type": "application/json" },
            };
    
        let url = `${apiPathJava}updateCompany`
          api.post(url,options).then((res) =>{
            console.log(res, objeto)
              if(!res.err){
                setcompany(res)
                swal("Congratulations!","Se actualizarón los datos correctamente", "success");
              }else{
                swal("Ups!",res.statusText+": token o usuario no autorizado", "error");
              }
        })
      }

  return {
    sendData
  }
}

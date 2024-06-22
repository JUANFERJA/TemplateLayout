import swal from 'sweetalert';
import { paths } from '../helpers/paths';
import axios from 'axios';
import { helpHttp } from '../helpers/helpHttp';

let  api = helpHttp();

export const funcionesRegistrarReclamo = () => {
  
  const {apiFiles, apiPathJava} = paths();
  
  const upLoadFile = (target, setFile, setfileName, id) =>{

    let files = target.files;
    
    for(let i = 0 ; files.length; i++){
        if(files[i].type != "application/pdf"){
            swal("Ups!","Tipo de archivo no valido"+files[i].name,"error");
            return;
        }else{
            if(files.length > 1 ){
                setfileName("ha seleccionado varios archivos");
            }else{
                setfileName(files[0].name);
            }
            document.getElementById(id).style.color = "antiquewhite"
            setFile(files)
            return;
        }
    }
  
    
  }

  const validaData = (objeto) =>{
    const {documento, factura, beneficiario, diagnostico, valor, selectedDate, descripcion} = objeto;
    if(documento == null || factura == null || beneficiario ==""|| diagnostico =="" || descripcion =="" || valor =="" || selectedDate == null){

        if(documento == null){document.getElementById("lbldocumento").style.color="#F68C9F"}
        if(factura == null){document.getElementById("lblfactura").style.color="#F68C9F"}
        if(beneficiario == null){document.getElementById("lblBeneficiario").style.color="#F68C9F"}
        if(diagnostico == null){document.getElementById("lblDiagnotico").style.color="#F68C9F"}
        if(descripcion == null){document.getElementById("lblDescripcion").style.color="#F68C9F"}
        if(valor == null){document.getElementById("lblvalor").style.color="#F68C9F"}
        if(selectedDate == null){document.getElementById("lblfecha").style.color="#F68C9F"}
        swal("Ups!", "debe completar todos los campos")
        return;
    }
    saveReclamo(objeto)
  }
  const saveReclamo = async(objeto) =>{

    const {documento, factura, beneficiario, diagnostico, valor, selectedDate, descripcion, user_id, navigate} = objeto;

    let fecha = new Date(selectedDate);    
    let fechaSiniestro = fecha.toDateString();
    let fechaRegistro = new Date;
    fechaRegistro = fechaRegistro.toDateString();
    let state = "new";
    
    let documentoName = await saveFile(documento, "documento");
    let facturaName = await saveFile(factura, "factura");
   
    let data = {
      documentos:documentoName,
      facturas:facturaName, 
      "beneficiary_id":beneficiario,
      "diagnostic_id":diagnostico,
      "value":valor,
      "creation_date":fechaRegistro,
      "sinister_date":fechaSiniestro,
      "description":descripcion,
      "state":state,
      "user_id":user_id
    }
    console.log("data para un nuevo reclamo", data)
    data.id = Date.now();
    let url = `${apiPathJava}saveClaim`;
    let options = {
    body: data,
    headers: { "content-type": "application/json" },
    };
    api.post(url, options).then((res) => {        
    });
   
    navigate(`/misReclamos/${user_id}`)

  }

  const enableInputFile = (id) =>{
    document.getElementById(id).click();
  }

  const saveFile = async (files, tipo) =>{
    let FileName = [];
    const f = new FormData();

    for (let i = 0; i < files.length; i++) {        
      FileName.push({
        name:files[i].name,
        type_file:tipo,
        path_file:`C:/inetpub/wwwroot/static/media/reclamos/${files[i].name}`
      })
      f.append("files", files[i])
  }
   
    await axios.post(`${apiFiles}saveFilesReclamos`, f).then(response => {
      console.log("mi respuesta", response)
    }).catch(error =>{
      console.log("mi respuesta", error)           
    })  ;

    return FileName
  }


  return {
    upLoadFile,
    validaData,
    enableInputFile
  }
}

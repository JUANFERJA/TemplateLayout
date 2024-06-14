import swal from 'sweetalert';

export const funcionesRegistrarReclamo = () => {
  
  
  const upLoadFile = (target, setFile, setfileName, id) =>{

    let files = target.files;
    console.log("mis datos para el file", target.files)
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
    const {documento, factura, nombres, ndocumento, descripcion, valor} = objeto;
    if(documento == null || factura == null || nombres ==""|| ndocumento =="" || descripcion =="" || valor ==""){

        if(documento == null){document.getElementById("lbldocumento").style.color="#F68C9F"}
        if(factura == null){document.getElementById("lblfactura").style.color="#F68C9F"}
        if(nombres == null){document.getElementById("lblNombres").style.color="#F68C9F"}
        if(ndocumento == null){document.getElementById("lblnrodocumento").style.color="#F68C9F"}
        if(descripcion == null){document.getElementById("lbldescripcion").style.color="#F68C9F"}
        if(valor == null){document.getElementById("lblvalor").style.color="#F68C9F"}
        
        swal("Ups!", "debe completar todos los campos")
        return;
    }
    saveReclamo(objeto)
  }
  const saveReclamo = (objeto) =>{
    console.log("mi data", objeto)
  }

  const enableInputFile = (id) =>{
    document.getElementById(id).click();
  }
  return {
    upLoadFile,
    validaData,
    enableInputFile
  }
}

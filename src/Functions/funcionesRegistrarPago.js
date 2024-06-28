import swal from 'sweetalert';
import { helpHttp } from '../helpers/helpHttp';
import { paths } from '../helpers/paths';
let  api = helpHttp();
const {apiPathJava} = paths();
export const funcionesRegistrarPago = () => {
  
    const validaData = async(objeto, claim, navigate, setlogin) =>{

        const{ deductible, coinsurance, uncovered_expenses, reimbursement} = objeto;

        if(deductible == "" || coinsurance == "" || uncovered_expenses == "" || reimbursement ==""){
            if(deductible ==""){document.getElementById("deducible").style.color = "antiquewhite";}
            if(coinsurance ==""){document.getElementById("coaseguro").style.color = "antiquewhite";}
            if(uncovered_expenses ==""){document.getElementById("noCubierto").style.color = "antiquewhite";}
            if(reimbursement ==""){document.getElementById("factura").style.color = "antiquewhite";} 
            
            swal("Ups!","las contraseñas no coinciden","error");
            return;
        }
        const {id_claim, observation, creation_date, sinister_date, insured_id, id_beneficiary,cod_diagnostic, analist_id} = claim;
        let res = await saveData(objeto, "saveReserve");
        let dataUpdateClaim = {
            id_claim,
            "cod":id_claim,
            "description":observation,
            "state":"pagado",
            creation_date,
            sinister_date,
            insured_id,
            "beneficiary_id":id_beneficiary,
            "diagnostic_id":cod_diagnostic,
            analist_id
        }
        if(res == true){
            saveData(dataUpdateClaim, "updateStateClaim");
            swal("Felicitaciones!","El pago se registro con éxito","success");
            await setlogin(false);
            navigate(`/analistReclamos/${analist_id}`)
            setlogin(true)
        }

    }

    const saveData = (objeto, endpoint) =>{

        objeto.id = Date.now();
        let url = `${apiPathJava}${endpoint}`;
        let options = {
        body: objeto,
        headers: { "content-type": "application/json" },
        };
        let response = api.post(url, options).then((res) => { 
            if(res){ 
                console.log("respuesta en el if", res)                  
                return true   
            }else{
                console.log("respuesta en el else", res) 
                return false;
            } 
        });
        console.log("mi respuesta", response)
        return response
    }
  
    
    return {
        validaData
  }
}

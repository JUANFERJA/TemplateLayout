export const funcionesForms = () => {
    const addValue = (target, id, setValue) =>{
        document.getElementById(id).style.color = "antiquewhite";
        if(target.value === ""){
            document.getElementById(id).style.color = "#F68C9F";
        }  
        setValue(target.value)
      }
  

      return {
          addValue
      }
}

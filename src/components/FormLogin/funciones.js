
export const funciones = () => {

 
  //metodo para hacer la consulta a la bd para el login
  const login = (usuario, pass, setuser, setlogin, navigate) =>{
        setuser({
            id:1,
            nombre:usuario,
            pass:pass,
            rol:1,
        })
        setlogin(true);
        navigate(`/Reclamos/${1}`);
  }
  return{
   login
  }
}

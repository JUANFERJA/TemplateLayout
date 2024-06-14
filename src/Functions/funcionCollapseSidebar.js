import React from 'react'

export const funcionCollapseSidebar = () => {
  
  const collapseSidebar = () =>{
    var Sidebar = document.getElementById("cuerpo");
    Sidebar.classList.toggle("Sidebarmove");
  }

 const outLogin = (setLogin, navigate) =>{
  setLogin(false);
  navigate("/Login");
 }

  return{
    collapseSidebar,
    outLogin
  }
}

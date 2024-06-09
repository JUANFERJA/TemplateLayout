import React from 'react'

export const funcionCollapseSidebar = () => {
  
  const collapseSidebar = () =>{
    var Sidebar = document.getElementById("cuerpo");
    Sidebar.classList.toggle("Sidebarmove");
  }



  return{
    collapseSidebar
  }
}

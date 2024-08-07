import React, { useContext } from 'react'
import { funcionCollapseSidebar } from '../../Functions/funcionCollapseSidebar'
import { UserContext } from '../../context/UserContext';

export const NavBar = ({company}) => {
  const {collapseSidebar} = funcionCollapseSidebar();
  const {user} = useContext(UserContext);
  const {email, full_name} = user;
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
  <div class="container-fluid">
    <i className={`fa fa-bars faHamburguer`} onClick={collapseSidebar}></i>
    <span className='logo'>{company.name}</span>    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="mynavbar">
      <ul class="navbar-nav me-auto">
       
      </ul>
      <form class="d-flex">
        <i className={`fa fa-globe faNav`}></i>
        <h6 className='text-white nameNavbar'>{full_name}</h6>
      </form>
    </div>
  </div>
</nav>
)
}

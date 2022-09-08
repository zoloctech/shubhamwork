import React from 'react'
import {Link} from 'react-router-dom'
import {SidebarstyleWrapperStyled} from "./Sidebarstyle"

function Sidebar({sidenav}) {
  console.log(sidenav)
  
  return (
    <>
 <div>
            {/* <SidebarstyleWrapperStyled> */}
            {/* <!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="index.html">
                    <div className="sidebar-brand-short si_bar_logo"><img src="./img/LOGO.png" alt="" /></div>
                    <div className="sidebar-brand-text si_bar_logo mx-3"><img src="./img/LOGO.png" alt="" /> </div>
                </Link>

                <hr className="sidebar-divider my-0" />


                <li className="nav-item " id="sidebarToggle">
                    <Link className="ml-1 nav-link collapsed" to="/">
                        <i className="fas fa-chevron-left"></i>
                        <span className="ml-2 coll-men"></span>
                    </Link>
                </li>

                {sidenav.map(({ label, name, link }) => (
                <li className="nav-item active" key={name}>
                    <Link className="nav-link collapsed" exact to={link}>
                        <span>{label}</span></Link>
                  <hr className="sidebar-divider "/>
                </li>
                
                ))}
               
                </ul>
                {/* </SidebarstyleWrapperStyled> */}
        </div>
    </>
  )
}

export default Sidebar
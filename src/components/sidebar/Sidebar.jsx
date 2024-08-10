import React from 'react'
import './Sidebar.css'
import logo from '../../images/logo1.png'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div id='sidebar'>
        <div class='logo'>
            <img src={logo} alt="" style= {{width:'140px', marginTop: '50px'}} />
        </div>
        <div id='menu'>
            <ul > 
                <li class='active'><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/property'>Property</Link></li>
                <li><Link to='/tenants'>Tenants</Link></li>
                <li><Link to='/add_property'>Add Property</Link></li>
                <li><Link to='/maintainer'>Maintainer</Link></li>
                <li><Link to='/contacts'>Contacts</Link></li>
            </ul> 
        </div>
               
    </div>
  )
}

export default Sidebar
import React from 'react'
import './Topnav.css'
import hamburger from '../../images/hamburger.svg'
import user from '../../images/user.svg'
const Topnav = () => {
  return (
    <div id='topnav1'>
        <div id='topnav'>
            <div class='hamburger'>
                <img src={hamburger} alt="" class='hamburger'/>
                <label htmlFor="">English</label>
            </div>

            <div class='user'> 
                <img src={user} alt="" class=''/>
                <div class='label'>
                    <div>
                        <label htmlFor="">Delta_user</label>
                    </div> 
                    <div>                    
                        <label htmlFor="" class='tid'>TID: 23545</label>
                    </div>             
                </div>                
            </div>         
        </div>
        <div id="bottomnav">
            <label htmlFor="">dashboard</label>
        </div>
    </div>
  )
}

export default Topnav
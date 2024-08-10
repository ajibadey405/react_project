import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import Topnav from '../topnav/Topnav'
import './Property.css'
import property1 from '../../images/property1.svg'
import property2 from '../../images/property3.svg'
import property4 from '../../images/property4.svg'
import unit from '../../images/unit.svg'
import room from '../../images/room.svg'
import edit from '../../images/edit.svg'
import del from '../../images/delete.svg'

const Property = () => {
  return (
    <div id='property'>
        <div id='left-side'>
            <Sidebar/> 
        </div>
        <div id='right-side'>
              <Topnav title='property'/>
              <div id="property_wrapper">              
                <div id='parent'>
                  <img src={property1} alt="" width={'460px'} height={'220px'}/>
                  <div>
                    <h3>Oceanview Retreat</h3>
                  </div>
                  <div id="unit_room">
                    <div id='unit'> 
                      <img src={unit} alt="" />
                      <label htmlFor="">4 Unit</label>
                    </div>
                    <div id='unit'> 
                      <img src={room} alt="" />
                      <label htmlFor="">20 Rooms</label>
                    </div>
                  </div>
                  <p>Welcome to Oceanview Retreat, an exquisite beachfront property located in the vibrant city of Miami, Florida. <br/>Situated along the pristine shores of the Atlantic Ocean...</p>
                  <div id='edit-del'>
                    <img src={edit} alt="" />
                    <img src={del} alt="" />
                  </div>
                </div>

                <div id='parent'>
                  <img src={property2} alt="" width={'460px'} height={'220px'}/>
                  <div>
                    <h3>Oceanview Retreat</h3>
                  </div>
                  <div id="unit_room">
                    <div id='unit'> 
                      <img src={unit} alt="" />
                      <label htmlFor="">4 Unit</label>
                    </div>
                    <div id='unit'> 
                      <img src={room} alt="" />
                      <label htmlFor="">20 Rooms</label>
                    </div>
                  </div>
                  <p>Welcome to Oceanview Retreat, an exquisite beachfront property located in the vibrant city of Miami, Florida. <br/>Situated along the pristine shores of the Atlantic Ocean...</p>
                  <div id='edit-del'>
                    <img src={edit} alt="" />
                    <img src={del} alt="" />
                  </div>
                </div>              
              </div>


              <div id="property_wrapper">              
                <div id='parent'>
                  <img src={property4} alt="" width={'460px'} height={'220px'}/>
                  <div>
                    <h3>Oceanview Retreat</h3>
                  </div>
                  <div id="unit_room">
                    <div id='unit'> 
                      <img src={unit} alt="" />
                      <label htmlFor="">4 Unit</label>
                    </div>
                    <div id='unit'> 
                      <img src={room} alt="" />
                      <label htmlFor="">20 Rooms</label>
                    </div>
                  </div>
                  <p>Welcome to Oceanview Retreat, an exquisite beachfront property located in the vibrant city of Miami, Florida. <br/>Situated along the pristine shores of the Atlantic Ocean...</p>
                  <div id='edit-del'>
                    <img src={edit} alt="" />
                    <img src={del} alt="" />
                  </div>
                </div>

                <div id='parent'>
                  <img src={property2} alt="" width={'460px'} height={'220px'}/>
                  <div>
                    <h3>Oceanview Retreat</h3>
                  </div>
                  <div id="unit_room">
                    <div id='unit'> 
                      <img src={unit} alt="" />
                      <label htmlFor="">4 Unit</label>
                    </div>
                    <div id='unit'> 
                      <img src={room} alt="" />
                      <label htmlFor="">20 Rooms</label>
                    </div>
                  </div>
                  <p>Welcome to Oceanview Retreat, an exquisite beachfront property located in the vibrant city of Miami, Florida. <br/>Situated along the pristine shores of the Atlantic Ocean...</p>
                  <div id='edit-del'>
                    <img src={edit} alt="" />
                    <img src={del} alt="" />
                  </div>
                </div>              
              </div>


        </div>
    </div>
  )
}

export default Property
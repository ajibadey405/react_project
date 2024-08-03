import React from 'react'
import Topnav from '../topnav/Topnav'
import Login from '../login/Login'
import Sidebar from '../sidebar/Sidebar'
import './Dashboard.css'
import settings from '../../images/settings.svg'

const button = {
  float: 'right',
  textDecoration: 'none',
  border: '1px solid #B7B7B7',
  padding: '5px 10px',
  color: '#45A9EA',
  borderRadius: '4px',
  marginTop: '20px'
}

const Dashboard = () => {
  return (
    <div id='dashboard'>
        <div id='left-side'>
            <Sidebar/> 
        </div>
        <div id='right-side'>
              <Topnav/>
            <div style={{width:'100%', height: '100px',background:'#fff', marginTop: '27px', position:'relative'}}>
                <div id='parent'>
                    <div class="child active">
                      <div class='card-title1'>
                        <h5>Total Property</h5>
                        <h3>45</h3>
                      </div>
                    </div>
                    <div class="child">
                    <div class='card-title'>
                        <h5>Total Unit</h5>
                        <h3>142</h3>
                      </div>                      
                    </div>
                    <div class="child">
                    <div class='card-title'>
                        <h5>Total Income</h5>
                        <h3>&#8358;56456.00</h3>
                      </div>
                    </div>
                    <div class="child">
                    <div class='card-title'>
                        <h5>Total Expense</h5>
                        <h3>&#8358;26456.00</h3>
                      </div>
                    </div>
            </div>  
            </div>

            <div id='wrapper__card'>
              <div id='wrapper1'>
                <h3>Payment History</h3>
                <table>
                  <tr>
                    <th>Payment Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                  <tr>
                    <td>September 2023</td>
                    <td>&#8358;4568.00</td>
                    <td>Paid</td>
                  </tr>
                  <tr>
                    <td>October 2023</td>
                    <td>&#8358;4568.00</td>
                    <td>Paid</td>
                  </tr>
                  <tr>
                    <td>November 2023</td>
                    <td>&#8358;4568.00</td>
                    <td>Paid</td>
                  </tr>
                </table>
                <a href="#" style={button}>See Invoices</a>
              </div>
              <div id='wrapper2' style={{position:'relative'}}>
              <h3>Maintenance Status</h3>
                <table>
                  <tr>
                    <td>Request #001</td>
                    <td>In Progress</td>
                  </tr>
                  <tr>
                    <td>Request #002</td>
                    <td class='completed'>Completed</td>
                  </tr>
                  <tr>
                    <td>Request #002</td>
                    <td>Pending</td>
                  </tr>
                  </table>

              <img src={settings} alt="" style={{position:'absolute', top:'63px', left:'250px'}} />
              </div>
            </div>
               
        </div>
    </div>
    
  )
}

export default Dashboard
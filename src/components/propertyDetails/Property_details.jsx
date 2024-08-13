import React from 'react'
import './Property_details.css'
import Sidebar from '../sidebar/Sidebar'
import Topnav from '../topnav/Topnav'
import pdetails1 from '../../images/pdetails1.svg'
import pdetails2 from '../../images/pdetails2.svg'
import pdetails3 from '../../images/pdetails3.svg'
import pdetails4 from '../../images/pdetails4.svg'

const Property_details = () => {
  return (
    <div id='property_details'>
        <div id='left-side'>
            <Sidebar/> 
        </div>
        <div id='right-side'>
              <Topnav title='property'/>
              <div id='property_details__wrapper'>
                <div id="property_details__container">
                    <div id="property_details__left">
                        <img src={pdetails1} alt=""/>
                        <div id="property_details__images">
                            <img src={pdetails2} alt="" />
                            <img src={pdetails3} alt="" />
                            <img src={pdetails4} alt="" />
                        </div>
                    </div>
                    <div id="property_details__right">
                        <h3>Oceanview Retreat</h3>
                        <p>Welcome to Oceanview Retreat, an exquisite beachfront property located in the vibrant city of Miami, Florida. Situated along the pristine shores of the Atlantic Ocean, this luxurious estate offers a truly unparalleled coastal living experience. With breathtaking panoramic views of the ocean and direct access to a private white sandy beach, Oceanview Retreat is a haven for relaxation and rejuvenation. Immerse yourself in the soothing sounds of the waves and indulge in the serenity of the surroundings</p>

                        <h3>Property Information</h3>
                        <table>
                            <tr>
                                <td>Bedrooms :</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Bathrooms :</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>Monthly  Rent :</td>
                                <td>&#8358;2000</td>
                            </tr>
                            <tr>
                                <td>Property Address :</td>
                                <td> 123 Oceanview Drive, Miami, FL 12345</td>
                            </tr>
                        </table>


                    </div>
                </div>
                

              </div>
        </div>


    </div>
  )
}

export default Property_details
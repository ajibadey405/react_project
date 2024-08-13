import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/login/Login'
import Login_header from './components/login/Login_header'
import Module from './components/module/Module'
import Register from './components/register/Register'
import Sass from './components/sass/Sass'
import './index.css'
import Home from './components/home/Home'
import Nav from './components/nav/Nav'
import Topnav from './components/topnav/Topnav'
import Dashboard from './components/dashboard/Dashboard'
import Property from './components/property/Property'
import Property_details from './components/propertyDetails/Property_details'

function App() {

  return (
    <>
      <div>
        {/* <Login_header title="Please Login your account."/>
        <Login />
        <br/> <br/> <br/> <br/>
        <Register/>
        <Module/>
        <Sass/> */}
        {/* <Nav/> */}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/topnav' element={<Topnav/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/property' element={<Property/>} />
          <Route path='/propertyDetails' element={<Property_details />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App

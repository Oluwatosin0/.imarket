import React from 'react'
import Nav from '../components/Nav';
import Logindetails from '../components/Logindetails';
import Footer from '../components/Footer';



function Login() {
  return (
    <div className=' bg-white overflow-hidden'>
        <Nav />
        <Logindetails />
        <Footer />
    </div>
  )
}

export default Login
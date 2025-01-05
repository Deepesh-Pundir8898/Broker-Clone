import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import "./layout.scss"
import Navbar2 from '../../components/navbar/Navbar2'

const Layout = () => {
  const location = useLocation();
  // console.log(location);
  const navbar = location.pathname === '/' ? <Navbar /> : <Navbar2 />
  return (
    <>
      <div className='layout'>
        {navbar}
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
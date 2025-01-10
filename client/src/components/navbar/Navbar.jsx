import React, { useState } from 'react'
import "./navbar.scss"
import logo from "../../../public/Untitled-127-x-40-px.png"
import { CgProfile } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open , setOpen] = useState(false);
 
  const user = false;

  return (
    <div className='header1'>
      <nav>
        <div className={open ?'menu-icon active':'menu-icon'}>
          <IoMenu onClick={()=>setOpen((prev) => !prev)}/>
        </div>
        <div className={open ? "menu active" : "menu"}>
        <ul>
          
          
            <li><a >HOME</a></li>
            <li><a href="">FOR SALE</a></li>
            <li><a href="">FOR RENT</a></li>
            <li><a href="">POST YOUR REQUIREMENT</a></li>
            <li><a href="">OTHERS <FaAngleDown /></a></li>
            <li><a href="">PROPERTIES <FaAngleDown /></a></li>
          </ul>  
        </div>
        <div className='left'>
          <a href=""><img src={logo} alt="" /></a>  
        </div>
        <div className='right1'>
          <ul>
          <li><Link to={'./'}>Home</Link></li>
          <li><Link to={'./forRent'}>FOR SALE</Link></li>
          <li><Link to={'./forSale'}>FOR RENT</Link></li>
          <li><Link to={'./requirements'}>POST YOUR REQUIREMENT</Link></li>
          <li><Link to={'./listPage'}>OTHERS <FaAngleDown /></Link></li>
          <li><Link to={'./properties'}>PROPERTIES <FaAngleDown /></Link></li>
          {
            user ?(
                <li><Link to={'./profile'} className='profile'><CgProfile /></Link></li>
             
            ):<>
              <li><Link to={'./profile'}><CgProfile /></Link></li>
              <li>
                <button>CREATE A LISTING</button>
              </li>
            </>
          }
          
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

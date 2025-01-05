import React, { useState } from 'react'
import "./navbar.scss"
import logo from "../../../public/Untitled-127-x-40-px.png"
import { CgProfile } from "react-icons/cg";
import { FaAngleDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [open , setOpen] = useState(false);
  return (
    <div className='header1'>
      <nav>
        <div className={open ?'menu-icon active':'menu-icon'}>
          <IoMenu onClick={()=>setOpen((prev) => !prev)}/>
        </div>
        <div className={open ? "menu active" : "menu"}>
        <ul>
            <li><a href="">HOME</a></li>
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
            <li><a href="">HOME</a></li>
            <li><a href="">FOR SALE</a></li>
            <li><a href="">FOR RENT</a></li>
            <li><a href="">POST YOUR REQUIREMENT</a></li>
            <li><a href="">OTHERS <FaAngleDown /></a></li>
            <li><a href="">PROPERTIES <FaAngleDown /></a></li>
            <a href="" className='profile'><CgProfile /></a>
            <li>
              <button>CREATE A LISTING</button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

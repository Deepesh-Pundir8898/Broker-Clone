import React from 'react'
import "./footer.scss"
import { FaFacebookF } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='left'>
        <p>© BrokerNetwork - All rights reserved</p>
      </div>
      <div className='right'>
        <FaFacebookF />
        <IoLogoLinkedin />
        <FaInstagramSquare />
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import {Link} from 'react-router-dom'
import "./card.scss"
import { IoBedSharp } from "react-icons/io5";
import { FaBath } from "react-icons/fa";
import { CiSaveDown2 } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoChatboxOutline } from "react-icons/io5";

const Card = ({item}) => {
  return (
    <div>
      <div className='card'>
        <Link to={`/${item.id}`} className='imageContainer'>
          <img src={item.img} alt="img" />
          <div className='img-opacity'></div>
          <p className='price'>₹{item.price}</p>
          <div className='icons'>
            <CiSaveDown2 />
            <CiHeart />
            <IoChatboxOutline />
          </div>
        </Link>
        <div className="textContainer">
          <p className="title">{item.title}</p>
          <p className="address">{item.address}</p>
          <div className='feature'>
            <p className="bedroom">
              <IoBedSharp /> {item.bedroom}
            </p>
            <p className="bathroom">
              <FaBath /> {item.bathroom}
            </p>
          </div>
          <button>Details</button>
        </div>
        
        
      </div>
    </div>
  )
}

export default Card

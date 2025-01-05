import React from 'react'
import "./pin.scss"
import { Link } from 'react-router-dom'
import { Marker , Popup } from 'react-leaflet'

const Pin = ({item}) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
        <Popup>
            <div className='popupContainer'>
                <img src={item.img} alt="" />
                <div className='txtContainer'>
                    <Link to={`/${item.id}`}>{item.title}</Link>
                    <span className='bed'>{item.bedroom} Bedroom</span>
                    <b>₹{item.price}</b>
                </div>
            </div>
        </Popup>
    </Marker>
  )
}

export default Pin

import React from 'react'
import "./map.scss"
import Pin from '../pin/pin'
import { MapContainer ,TileLayer, Marker, Popup } from 'react-leaflet'

const Map = ({items}) => {
    console.log(items)
  return (
    <MapContainer center={[51.5074, -0.1278]} zoom={5} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
   {items.map(item=>(
    <Pin item={item} key={item.id}/>
   ))}
  </MapContainer>
  )
}
import "./map.scss"

export default Map

import React from 'react'
import "./Listpage.scss"
import { listData } from '../../lib/dummyData'
import Filter from '../../components/filter/Filter';
import Card from '../../components/card/Card';
import Map from '../../components/map/Map';
import "leaflet/dist/leaflet.css"

const ListPage = () => {

  const data = listData;

  return (
    <div className='listPage'>
      <div className='mapContainer'>
        <Map items={data} />
      </div>

      <div className='listContanier'>
        <div className='wrapper'>
          <Filter />
          <div className='cards'>
            {data.map(item=>(
              <Card key={item.id} item={item} />
            ))}
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default ListPage
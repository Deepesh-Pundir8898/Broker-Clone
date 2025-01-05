import React, { useState } from 'react'
import "./filter.scss"

const Filter = () => {
    const [filterData ,setFilterData] = useState({
        location:"",
        range:0,
        cities:"",
        status:"",
        type:"",
        bedrooms:0,
        bathrooms:0,
        minArea:0,
        maxArea:0,
        propertyId:"",
        price:25
    })
    const setLocation = (e) => {
        setFilterData({ ...filterData, location: e.target.value });
      };
    const setRange=(e)=>{
        setFilterData({...filterData,range:e.target.value});
    }
    const setPrice=(e)=>{
        setFilterData({...filterData,price:e.target.value});
    }

  return (
    <div className='filter'>
        <div className='top'>
            <div className="item">
                <input type="text" name='location' placeholder='Location' value={filterData.location} onChange={setLocation}/>
            </div>
            <div className="item">
                <label htmlFor="range">Radius {filterData.range} km</label>
                <input type="range" name='range' className='range' placeholder='Location' value={filterData.range} min={0} max={100} onChange={setRange}/>
            </div>
      </div>
      <div className="middle">
            <div className="item">
                <input type="text" name='cities' placeholder='All Cities' />
            </div>
            <div className="item">
                <select name="status" id="status">
                    <option value="" hidden>Status</option>
                    <option value="rent">For Rent</option>
                    <option value="sale">For Sale</option>
                </select>
            </div>
            <div className="item">
                <input type="text" name='type' placeholder='Type' />
            </div>
            <div className="item">
                <input type="number" name='bedrooms' placeholder='Bedrooms' />
            </div>
            <div className="item">
                <input type="number" name='bathrooms' placeholder='Bathrooms' />
            </div>
            <div className="item">
                <input type="number" name='minArea' placeholder='Min. Area' />
            </div>
            <div className="item">
                <input type="number" name='maxArea' placeholder='Max. Area' />
            </div>
            <div className="item">
                <input type="text" name='propertyId' placeholder='Property ID' />
            </div>
      </div>
      <div className='bottom'>
        <div className="item">
            <label htmlFor="price">Price Range From <b>₹50</b> To <b>₹25,000</b></label>
            <input type="range" name='price' id='price'  value={filterData.price} min={50} max={25000} onChange={setPrice}/>
        </div>
      </div>
    <button>Search</button>

    </div>
  )
}

export default Filter
 
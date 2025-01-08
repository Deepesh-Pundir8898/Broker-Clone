import React from 'react'
import "./singlePage.scss"
import Slider from '../../components/slider/Slider'
import { singlePostData } from '../../lib/dummyData'
import { IoLocationSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { MdOutlinePrint } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { MdOutlineAreaChart } from "react-icons/md";

const SinglePage = () => {
  const postData = singlePostData;
  return (
    <div className='singlePage'>
      <div className='header-section'>
        <div className='header'>
          <div className='title'>
            <p>{postData.title}</p>
            <div className="btns">
              <button>Featured</button>
              <button>For Sale</button>
              <button>Hot Offer</button>
            </div>
          </div>
          <div className='price-section'>
            <div className="icons">
              <CiHeart />
              <CiShare2 />
              <MdOutlinePrint />
            </div>
            <p className='price'>₹ {postData.price} K/sq.ft</p>
          </div>
        </div>
        <div className='location'><IoLocationSharp />{postData.completeAddress}</div>
      </div>
      <div className='details-section'>
        <div className='details'>
          <div className='wrapper'>
            <Slider items={postData} />
            <div className="info">
                <div className='overviewSection'>
                  <p className='sectionTitle'>Overview</p>
                  <div className='features'>
                    <div className='propertyStatus'>
                      {postData.propertyStatus}
                      <p>Property Status</p>  
                    </div>
                    <div className='bedroom'>
                      {postData.bedRooms}
                      <p><FaBed /> Bedrooms</p>  
                    </div>
                    <div className='bathroom'>
                      {postData.bathroom}
                      <p><FaBath /> Bathrooms</p>  
                    </div>
                    <div className='propertyStatus'>
                      
                    <MdOutlineAreaChart /><p> {postData.area} sq.ft.</p>  
                    </div>
                  </div>
                  
                </div>
                <div className='descriptionSection'>
                  <p className='sectionTitle'>Description</p>
                  <div className='description'>
                    <h1>{postData.title}</h1>
                    <p>{postData.description}</p>
                  </div>
                </div>
                <div className='addressSection'>
                  <p className="sectionTitle">Address</p>
                  <div className='address'>
                    <div>
                      <p className='add-title'>Address</p>
                      <p>{postData.address}</p>
                    </div>
                    <div>
                      <p className='add-title'>City</p>
                      <p>{postData.city}</p>
                    </div>
                    <div>
                      <p className='add-title'>State/county</p>
                      <p>{postData.state}</p>
                    </div>
                    <div>
                      <p className='add-title'>Country</p>
                      <p>{postData.country}</p>
                    </div>
                  </div>
                </div>
                <div className='deatilsSection'>
                  <p className="sectionTitle">Details</p>
                  <div className="details">
                  <div>
                      <p>Price:</p>
                      <p>₹ {postData.price} K/sq.ft</p>
                    </div>
                    <div>
                      <p>Property Size:</p>
                      <p>{postData.area} sq.ft.</p>
                    </div>
                    <div>
                      <p>Bedrooms:</p>
                      <p>{postData.bedRooms}</p>
                    </div>
                    <div>
                      <p>Bathrooms:</p>
                      <p>{postData.bathroom}</p>
                    </div>
                    <div>
                      <p>Property Status:</p>
                      <p>{postData.propertyStatus}</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <div className='chatBox'>
          <div className='wrapper'>
edwedqwe
          </div> 
        </div>
      </div>
      
    </div>
  )
}

export default SinglePage

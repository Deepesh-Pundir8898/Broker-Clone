import React, { useState } from 'react'
import "./slider.scss"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiCloseLargeFill } from "react-icons/ri";
import { CiMap } from "react-icons/ci";

import { RiGalleryFill } from "react-icons/ri";
import Map from '../map/Map';

const Slider = ({items}) => {
  const [imageIndex , setImageIndex] = useState(null);
  const [viewMap , setViewMap] = useState('slider')
  const images = items.images;

  const prevImage = ()=>{
    setImageIndex((prev)=>prev === 0 ? images.length-1 :prev-1)
  }

  const nextImage = ()=>{
    setImageIndex((prev)=>prev === images.length-1 ? 0 :prev+1)
  }
  const closeSlider=()=>{
    setImageIndex(null);
  }

  return (
    <div className='slider'>
      <div className='viewMap'>
        <button className={viewMap !== 'slider'?'sliderBtn':'sliderBtn active'} onClick={()=>setViewMap('slider')}>
          <RiGalleryFill />
        </button>
        <button className={viewMap !== 'map'?'mapBtn':'mapBtn active'}>
          <CiMap  onClick={()=>setViewMap('map')}/>
        </button>

      </div>
      {viewMap == "slider" ?
        <div className='sliderContainer'>
        
          {imageIndex !== null && <div className="fullSlider">
            <div className='leftArrow' onClick={prevImage}><IoIosArrowBack /></div>
            <div className='imageContainer'>
      const [imageIndex , setImageIndex] = useState(null);
                <img src={images[imageIndex]} alt="" />
            </div>
            <div className='rightArrow' onClick={nextImage}><IoIosArrowForward /></div>
            <div className="close" onClick={closeSlider}>
              <RiCloseLargeFill />
            </div>
          </div>}
          <div className='bigImage'>
            <img src={images[0]} alt="" onClick={()=>{
                setImageIndex(0)
              }}/>
          </div>
          <div className='smallImage'>
            {images.slice(1).map((image,index)=>(
              <img key={index} src={image} alt="" onClick={()=>{
                setImageIndex(index+1)
              }}/>
            ))}
          </div>
      </div> :
      <div className='mapContainer'>
        <Map items={items}/>  
      </div>
      }
    </div>
  )
}

export default Slider

import React from 'react'
import "./homePage.scss"
import Navbar from '../../components/navbar/Navbar'
import SearchBar from '../../components/searchBar/SearchBar'

const HomePage = () => {
  return (
    <>
    <div className='img-opacity'></div>
    <div className='hero-section'>
      <div className='hero-content'>
        <h1>Welcome To Brokernetwork</h1>
        <p>The best way to discover and trade your property</p>
      </div>
      <SearchBar />
    </div>
    
    </>
  )
}

export default HomePage

import React from 'react'
import "./homePage.scss"
import Navbar from '../../components/navbar/Navbar'
import SearchBar from '../../components/searchBar/SearchBar'
import List from '../../components/List/List'
import { MdPlayArrow } from "react-icons/md";
import { FaQuoteLeft } from "react-icons/fa";

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
    <div className='featuredListingContainer'>
      <div className='listTitle'>
        <h1>Discover Our Featured Listings</h1>
        <p>BROWSE YOUR DREAM PROPERTY</p>
      </div>
      <div className='allList'>
        <List />
      </div>
    </div>

    <div className='propertiesContainer'>
      <div>
        <div className='appartmentSection'>
        <div className='content'>
          <h1>Discover the Perfect Property or Rent House with Broker Network</h1>
          <p>When it comes to renting a house or buying a property , location, amenities, and price are often the biggest concerns. With Broker Network, you get access to a diverse range of properties across the city, from luxury apartments in high-rise buildings to cozy, budget-friendly homes. Our vast network of property listings ensures that you find the required property that aligns with your specific requirements.</p>
        </div>
        <div className='appartment'>
        <div className='img-opacity'></div>
          <div className='top'>
            <p>5 Properties</p>
            <h2>Apartment</h2>
          </div>
          <div className="bottom">
            <p>More Details</p>
            <MdPlayArrow />
          </div>
        </div>
      </div>
      <div className='openPlotsSection'>
      <div className='img-opacity'></div>
        <div className='top'>
            <p>24 Properties</p>
            <h2>Open Plots</h2>
          </div>
          <div className="bottom">
            <p>More Details</p>
            <MdPlayArrow />
          </div>
      </div></div>
    </div>

    <div className='exploreCitiesContainer'>
      <div className='citiesTitle'>
        <h1>Explore Cities</h1>
        <p>Explore cities and choose your home in any city you want.</p>
      </div>
      <div className='cities hyderabad'>
        <div className='img-opacity'></div>
          <div className='top'>
            <p>79 Properties</p>
            <h2>Hyderabad</h2>
          </div>
          <div className="bottom">
            <p>More Details</p>
            <MdPlayArrow />
          </div>
        </div>
        <div className='cities delhi'>
        <div className='img-opacity'></div>
          <div className='top'>
            <p>7 Properties</p>
            <h2>Delhi NCR</h2>
          </div>
          <div className="bottom">
            <p>More Details</p>
            <MdPlayArrow />
          </div>
        </div><div className='cities bangalore'>
        <div className='img-opacity'></div>
          <div className='top'>
            <p>23 Properties</p>
            <h2>Bangalore</h2>
          </div>
          <div className="bottom">
            <p>More Details</p>
            <MdPlayArrow />
          </div>
        </div><div className='cities mumbai'>
        <div className='img-opacity'></div>
          <div className='top'>
            <p>40 Properties</p>
            <h2>Mumbai</h2>
          </div>
          <div className="bottom">
            <p>More Details</p>
            <MdPlayArrow />
          </div>
        </div>
    </div>

    <div className="descriptionContainer">
      <h1>How to Find Your Ideal Hyderabad Rent House on Broker Network</h1>
      <ul>
        <li><b>Search Listings:</b> Use our advanced search filters to find a <b>property</b> that matches your criteria. You can filter by location, price, number of bedrooms, and other preferences to narrow down your options.</li>
        <li><b>View Property Details</b>: Each <b>property</b> listing comes with detailed information about the property, including photos, floor plans, and rental terms. This helps you get a clear picture of the house before you schedule a visit.</li>
        <li><b>Contact the Broker:</b> Once you’ve found a <b>property</b> you’re interested in, simply reach out to the broker directly through our platform. They will assist you with scheduling a visit, negotiating rental terms, and finalizing the lease.</li>
        <li><b>Move In:</b> After completing the necessary formalities, it’s time to move into your new <b>house!</b> Our brokers will be there to guide you through every step, ensuring a smooth transition.</li>
      </ul>
    </div>

    <div className="testimonialsContainer">
      <div className='testimonial'>
        <FaQuoteLeft />
        <p>Listing properties in BrokerNetwork is very easy and was able to connect with right customers without any hastle. The CRM provided by them helped me to gain more leads and manage site visits.</p>

        <div>
          <p>Naresh Patel</p>
          <p>Realtor, Real Investor.</p>
        </div>
      </div>
      <div className='testimonial'>
        <FaQuoteLeft />
        <p>Brokernetwork was helpful throughout the process of home buying journey. I was able to check various listings provided on the website and contacted directly with the developer person.</p>

        <div>
          <p>Suresh Kumar</p>
          <p>Customer</p>
        </div>
      </div>
      <div className='testimonial'>
        <FaQuoteLeft />
        <p>Brokernetwork helped me to increase the scope of my business by gaining access to multiple properties in Ghatkesar municipality and was able to get more customer leads from the website.</p>

        <div>
          <p>Raju</p>
          <p>Real Estate Agent</p>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default HomePage

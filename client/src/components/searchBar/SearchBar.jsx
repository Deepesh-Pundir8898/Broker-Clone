import React, { useState } from 'react'
import "./searchBar.scss"
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const types =["All Status","For Rent","For Sale"];
    const [query , setQuery] = useState({
        type:"All Status",
        ptype:"",
        location:"",
        psize:0,
        budget:0
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...query, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/listPage?type=${query.type}&location=${query.location}`);
        // navigate(`/listPage`);
    };
    const switchType=(type)=>{
        setQuery({...query,type:type})
    }

  return (
    <div className='searchBar'>
       <div className='type'>
        {types.map((type)=>(
            <button key={type} onClick={()=>switchType(type)} className={query.type === type ?"active" : ""}>{type}</button>
        ))}
        
        {/* <button onClick={()=>switchType("rent")}>For Rent</button>
        <button onClick={()=>switchType("sale")}>For Sale</button> */}
       </div>
       <form action="" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="ptype">Looking for</label>
            <input type="text" name="ptype" id='ptype' placeholder='Property Type' onChange={handleChange} />
        </div>
        <div>
            <label htmlFor="location">Location</label>
            <input type="text" name="location" id='location' placeholder='All cities' onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="psize">Property Size</label>
            <input type="number" name="psize" id='psize' placeholder='Bedrooms' min={1} max={6} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="budget">Your budget</label>
            <input type="number" name="budget" id='budget' placeholder='Max Price' onChange={handleChange}/>
        </div>
        <button type='submit'>Search</button>
        
       </form>
    </div>
  )
}

export default SearchBar

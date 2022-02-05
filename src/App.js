import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Listings from './Listings'

const bnbUrl = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=9'
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState([])

  const removeListing = (id) => {
    const newListings = listings.filter((listing) => listing.fields.id !== id);
    setListings(newListings)
  }

  const fetchListings = async () => {
    setLoading(true);
    try {
      const response = await fetch(bnbUrl);
      const {records} =  await response.json()
      setLoading(false)
      setListings(records)
    } catch (error) {
      setLoading(false)
      console.log(error)
      
    }
  }

  useEffect(() => {
    fetchListings();
  },[])
  
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (listings.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no listings left</h2>
          <button className='btn' onClick={()=> fetchListings()}>
            refresh
          </button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Listings listings={listings} removeListing={removeListing} />
    </main>
  )
}

export default App

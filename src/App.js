import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Listings from './Listings'

const bnbUrl = 'https://public.opendatasoft.com/api/records/1.0/search/?dataset=airbnb-listings&q=&rows=9'
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState([])

  const fetchListings = async () => {
    setLoading(true);
    const response = await fetch(bnbUrl);
    const {records} =  await response.json()
    console.log(records)
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
  return (
    <main>
      <Listings />
    </main>
  )
}

export default App

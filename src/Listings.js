import React from 'react';
import Listing from './Listing';
const Listings = ({listings}) => {
  return (
    <section>
      <div className="title">
        <h2>BnB Listings</h2>
        <div className="underline"></div>
      </div>
      <div>
        {listings.map((listing => {
          return <Listing key={listing.recordid} {...listing.fields}/>
        }))}
      </div>
    </section>
  )
};

export default Listings;

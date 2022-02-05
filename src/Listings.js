import React from 'react';
import Listing from './Listing';
const Listings = ({listings, removeListing}) => {
  return (
    <section>
      <div className="title">
        <h2>BnB Listings</h2>
        <div className="underline"></div>
      </div>
      <div>
        {listings.map((listing => {
          return <Listing key={listing.fields.id} {...listing.fields} removeListing={removeListing}/>
        }))}
      </div>
    </section>
  )
};

export default Listings;

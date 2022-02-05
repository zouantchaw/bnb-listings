import React, { useState } from 'react';

const Tour = ({xl_picture_url, space, price, name, description}) => {
  const [readMore, setReadMore] = useState(true)
  return (
    <article className='single-listing'>
      <img src={xl_picture_url} alt="" />
      <footer>
        <div className="listing-info">
          <h4>{name}</h4>
          <h4 className="listing-price">${price}/night</h4>
        </div>
        <p>
          {
            space ? (readMore ? space : `${space.substring(0, 150)}...`) : (readMore ? description : `${description.substring(0, 150)}...`)
          }
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        {/* <button className='host-btn'>Contact Host</button> */}
        <button className='delete-btn'>Not Interested</button>
      </footer>
      {/* {console.log(listing)} */}
    </article>
  )
};

export default Tour;

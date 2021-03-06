import React from 'react'

const Card = ({ image, category, total, numberOfLegendary, numberOfRare, numberOfCommon, price }) => {

  return (
    <div className="card">
      <h3 className="subtitle">Premade {category} Box</h3>
      <figure className="image">
        <img src={image} alt="star-wars logo" />
      </figure>
      <div className="card-content">
        <div className="content">
          <p>This box contains {total} items:</p>
          <ul><li>{numberOfLegendary} Legendary Items,</li>
            <li>{numberOfRare} Rare items,</li>
            <li>{numberOfCommon} Common Items</li>
          </ul>
          <p> Item price: <b>£{price}</b> </p>
        </div>
      </div>
    </div>
  )
}

export default Card

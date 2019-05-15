import React from 'react'

const Card = ({ image, category, total, numberOfLegendary, numberOfRare, numberOfCommon, price }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-header-title">Premade {category} Box</h3>
      </div>
      <div className="card-image">
        <figure className="image is-128x128">
          <img src={image} alt={'Premade Star Wars Box'} />
        </figure>
      </div>
      <div className="card-header">
        <h4 className="card-header-title">{category}</h4>
      </div>
      <div className="card-content">
        <div className="content">
          <p>This box contains {total} items:</p>
          <ul><li>{numberOfLegendary} Legendary Items,</li>
            <li>{numberOfRare} Rare items,</li>
            <li>{numberOfCommon} Common Items</li>
          </ul>
          <p> Item price: £{price} </p>
        </div>
      </div>
    </div>
  )
}

export default Card

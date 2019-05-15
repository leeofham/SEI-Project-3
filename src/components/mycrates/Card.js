import React from 'react'

const Card = ({ name, image, category, total, numberOfLegendary, numberOfRare, numberOfCommon }) => {

  return (
    <div className="card is-shady">
      <figure className="image is-128x128">
        <img src={image ? image:'../../images/default.jpg'} alt={name} />
      </figure>
      <h3 className="card-header-title">{name}</h3>
      <h4 className="card-header-title">Categories: {category} </h4>
      <div className="card-content">
        <div className="content">
          <p>This box contains {total} items:</p>
          <ul><li>{numberOfLegendary} Legendary Items,</li>
            <li>{numberOfRare} Rare items,</li>
            <li>{numberOfCommon} Common Items</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Card

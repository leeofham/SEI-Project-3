import React from 'react'

const Card = ({ image, category, total, numberOfLegendary, numberOfRare, numberOfCommon, price }) => {
  const backgroundStyle = {
    background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4) ), url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'darken'
  }

  return (
    <div className="card carousel" style={backgroundStyle}>
      <div className="card-header carousel">
        <h3 className="card-header-title carousel">Premade {category} Box</h3>
      </div>
      <div className="card-content carousel">
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

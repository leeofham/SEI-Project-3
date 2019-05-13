import React from 'react'

const Card = ({ name, image, numberOfLegendary, contents }) => {
  console.log(contents)

  return (
    <div className="card is-shady">
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={name} />
        </figure>
      </div>
      <div className="card-header">
        <h3 className="card-header-title">This should show brand: Star Wars {numberOfLegendary}</h3>
      </div>
      <div className="card-header">
        <h4 className="card-header-title">This should show category: {contents[0].category} </h4>
      </div>
      <div className="card-content">
        <div className="content">
          <p>Brand {name}</p>
        </div>
      </div>
    </div>
  )
}

export default Card

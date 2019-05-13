import React from 'react'

const Card = ({ image, category, total }) => {
  return (
    <div className="card is-shady">
      <div className="card-header">
        <h3 className="card-header-title">Premade {category} Box</h3>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={'Premade Star Wars Box'} />
        </figure>
      </div>
      <div className="card-header">
        <h4 className="card-header-title">{category}</h4>
      </div>
      <div className="card-content">
        <div className="content">
          <p>Premade {category} box with {total} items</p>
        </div>
      </div>
    </div>
  )
}

export default Card

import React from 'react'

const Card = ({ name, image, category }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-header-title">{name}</h3>
      </div>
      <div className="card-image">
        <figure className="image">
          <img src={image} alt={name} />
        </figure>
      </div>
      <div className="card-header">
        <h4 className="card-header-title">{category}</h4>
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

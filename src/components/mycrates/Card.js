import React from 'react'

const Card = ({ name, image, category, total }) => {

  return (
    <div className="card is-shady">
      <div className="card-image">
        <figure className="image is-128x128">
          <img src={image ? image:'../../images/default.jpg'} alt={name} />
        </figure>
      </div>
      <div className="card-header">
        <h3 className="card-header-title">{name}</h3>
      </div>
      <div className="card-header">
        <h4 className="card-header-title">{category} </h4>
      </div>
      <div className="card-content">
        <div className="content">
          <p>Your {name} box with {total} items</p>
        </div>
      </div>
    </div>
  )
}

export default Card

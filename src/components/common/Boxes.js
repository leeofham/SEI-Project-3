import React from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'

class BoxesChoice extends React.Component {

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">Choose your box:</h1>
          <button className="button is-primary">Premade Box</button>
          <button className="button is-primary">Mystery Box</button>
        </div>
      </section>
    )
  }
}

export default BoxesChoice

import React from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'

class BoxesChoice extends React.Component {

  render() {
    return (
      <section className="section">
        <div className="boxes-choice-container">
          <h1 className="title is-1">Choose your box:</h1>
          <div className="level">
            <div className="level-left">
              <Link to={'/premade'} className="button is-link is-outlined is-large">Premade Box</Link>
            </div>
            <div className="level-right">
              <Link to={'/mycrates'}  className="button is-link is-outlined is-large">Create your own Box</Link>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default BoxesChoice

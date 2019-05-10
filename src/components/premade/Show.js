import React from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
// import Auth from '../../lib/Auth.js'

class Show extends React.Component {


}
return (
  <section className="section">
    <div className="container">
      <div className="level">
        <div className="level-left">
          <h1 className="title is-1">{name}</h1>
        </div>
        {this.canModify() &&
          <div className="level-right">
            <Link to={`/premade/${_id}/edit`} className="button is-primary">Edit</Link>
            <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
          </div>
        }
      </div>
      <hr />

      <div className="columns is-multiline">
        <div className="column is-half-desktop is-full-tablet">
          <figure className="image">
            <img src={image} alt={name} />
          </figure>
        </div>

        <div className="column is-half-desktop is-full-tablet">
          <article>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </article>
          <button>Small</button>
          <button>Medium</button>
          <button>Large</button>
          <hr />
          <h2 className="title is-4">Uploaded by {createdBy.username}</h2>
        </div>
      </div>
    </div>
  </section>
)


export default Show

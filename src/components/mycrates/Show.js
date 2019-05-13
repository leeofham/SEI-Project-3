import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      box: null,
      product: []
    }
  }

  canModify(){
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.box.createdBy
  }

  componentDidMount() {
    axios.get(`/api/boxes/${this.props.match.params.id}`)
      .then(res => this.setState({ box: res.data}))
  }

  render() {
    if(!this.state.box) return null
    const { image, name } = this.state.box

    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{name}</h1>
          {this.canModify() &&
            <Link to={`/mycrates/${this.state.box._id}/edit`} className="button is-primary">Edit</Link>
          }
          <hr />

          <div className="columns is-multiline">
            <div className="column is-half-desktop is-full-tablet">
              <figure className="image is-128x128">
                <img src={image} alt={name} />
              </figure>
            </div>

            <div className="column is-half-desktop is-full-tablet">
              <article>
                <p>This box promises:
                BE A REBEL Wear officially licensed items inspired by Star Wars the Original Trilogy</p>
                <p>SAVE THE GALAXY Channel your inner Rebel with premium items from the Star Wars Universe Villains</p>
                <p>THE FORCE IS WITH YOU Bring the Star Wars galaxy to life with authentic apparel & accessories.</p>
                <p>Order below and Add to your basket!</p>
              </article>
              <hr />
              {Auth.isAuthenticated() && <Link to="/basket" className="button">View my Basket</Link>}
              {!Auth.isAuthenticated() && <Link to="/login" className="button">Login</Link>}
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Show

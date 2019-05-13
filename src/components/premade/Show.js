import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      premade: null,
      product: []
    }

  }

  componentDidMount() {
    axios.get(`/api/premade/${this.props.match.params.id}`)
      .then(res => this.setState({ premade: res.data}))
  }


  render() {
    console.log(this.state.product)
    console.log(this.state.premade)

    if(!this.state.premade) return null
    const { image, name } = this.state.premade

    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{name}</h1>



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
              {Auth.isAuthenticated() && <Link to="/basket" className="navbar-item">View my Basket</Link>}
              {!Auth.isAuthenticated() && <Link to="/login" className="navbar-item">Login</Link>}

              <hr />
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Show

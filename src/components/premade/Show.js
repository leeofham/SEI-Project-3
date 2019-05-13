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

    if(!this.state.premade) return null
    const { image, name, description } = this.state.premade

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
              <p>{description}</p>
              <hr />
              {Auth.isAuthenticated() && <Link to="/ordered" className="button is-dark">Buy Now!</Link>}
              {!Auth.isAuthenticated() && <Link to="/login" className="button is-dark">Login</Link>}
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Show
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
    const { image, name, description } = this.state.box

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
              <p>{description}</p>
              <hr />
              {Auth.isAuthenticated() && <Link to="/ordered" className="button">Buy Now!</Link>}
              {!Auth.isAuthenticated() && <Link to="/login" className="button">Login</Link>}
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Show

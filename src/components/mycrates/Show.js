import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      mycrates: null,
      product: []
    }
  }


  componentDidMount() {
    axios.get(`/api/boxes/${this.props.match.params.id}`)
      .then(res => this.setState({ mycrates: res.data}))
      .then(this.setPrice)
  }

  // canModify(){
  //   return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.box.createdBy
  // }


  render() {
    if(!this.state.mycrates) return null
    const { image, brandName, description } =
    this.state.mycrates

    return (
      <section className="section">
        <div className="container">
          <h2 className="titleh2 is-fullwidth-desktop">{brandName} My Crates Box</h2>
          <hr />

          <div className="columns is-multiline">
            <div className="column is-half-desktop is-full-tablet">
              <figure className="image is-square">
                <img src={image ? image:'../../images/default.jpg'} alt={name} />
              </figure>
            </div>

            <div className="column is-half-desktop is-full-tablet">
              <p className="largerText">{description}</p>
              <hr />
              {Auth.isAuthenticated() && <Link to={{
                pathname: '/basket',
                state: this.state.mycrates
              }} className="buttonNew">Add to your basket</Link>}
              {!Auth.isAuthenticated() && <Link to="/login" className="buttonNew">Login</Link>}
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Show

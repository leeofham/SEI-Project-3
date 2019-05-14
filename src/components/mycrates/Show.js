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

    this.setPrice = this.setPrice.bind(this)

  }

  canModify(){
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.box.createdBy
  }

  componentDidMount() {
    axios.get(`/api/boxes/${this.props.match.params.id}`)
      .then(res => this.setState({ box: res.data}))
      .then(this.setPrice)
  }

  handleSubmit(e) {
    e.preventDefault()


  }

  setPrice(){
    if(this.state.box.total === 3){
      this.setState({...this.state.box,  price: 10})
    } else if(this.state.box.total === 6){
      this.setState({price: 15})
    } else {
      this.setState({price: 25})
    }
  }

  render() {
    if(!this.state.box) return null
    const { image, name, description } = this.state.box
    const { price } = this.state
    console.log(this.state)

    return (
      <section className="section">
        <div className="container">
          <h2 className="titleh2 is-fullwidth-desktop">{name}</h2>
          {this.canModify() &&
            <Link to={`/mycrates/${this.state.box._id}/edit`} className="buttonNew">Edit</Link>
          }
          <hr />

          <div className="columns is-multiline">
            <div className="column is-half-desktop is-full-tablet">
              <figure className="image is-128x128">
                <img src={image ? image:'../../images/default.jpg'} alt={name} />
              </figure>
            </div>

            <div className="column is-half-desktop is-full-tablet">
              <p className="largerText">{description}</p>
              <hr />
              <p>£{price}</p>
              {Auth.isAuthenticated() && <Link to="/basket" className="buttonNew">Add to your basket</Link>}
              {!Auth.isAuthenticated() && <Link to="/login" className="buttonNew">Login</Link>}
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Show

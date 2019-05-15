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
      .then(this.setPrice)
  }


  render() {

    if(!this.state.premade) return null
    const { image, brandName, description, numberOfLegendary, numberOfCommon, numberOfRare, total, price } = this.state.premade

    return (
      <section className="section">
        <div className="container">
          <h2 className="titleh2 is-fullwidth-desktop">{brandName} Premade Box</h2>
          <hr />

          <div className="columns is-multiline">
            <div className="column is-half-desktop is-full-tablet">
              <figure className="image is-square">
                <img src={image} alt={name} />
              </figure>
            </div>

            <div className="column is-half-desktop is-full-tablet">
              <div className="largerText">
                <p>{description} </p>
                <br/>
                <p>This box contains {total} items:</p>
                <ul><li>{numberOfLegendary} Legendary Items,</li>
                  <li>{numberOfRare} Rare items,</li>
                  <li>{numberOfCommon} Common Items</li>
                </ul>
                <br />
              </div>

              <hr />
              <div id="price-para"className="largerText">
                <p >£{price}, free shipping within UK and EU.</p>
              </div>
              <br />
              {Auth.isAuthenticated() && <Link to={{
                pathname: '/basket',
                state: this.state.premade
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

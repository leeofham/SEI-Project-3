import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

import Card from './Card'

class Index extends React.Component {

  constructor() {
    super()

    this.state = {
      boxes: [],
      premade: []
    }
  }

  componentDidMount() {
    axios('/api/premade')
      .then(res => this.setState({ boxes: res.data }))
      .then(() => this.setState({premade: this.state.boxes.filter(item => item.name === 'Premade')}))

  }

  render() {
    return (
      <section className="section">
        <div className="container">
          {Auth.isAuthenticated() && <Link to="/premade" className="button">Premade Box</Link>}
          <hr />
          <div className="columns is-multiline">
            {this.state.premade.map(premade =>
              <div key={premade._id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to={`/premade/${premade._id}`}>
                  <Card {...premade} />
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default Index

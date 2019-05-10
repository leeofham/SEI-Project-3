import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

import Card from './Card'

class Index extends React.Component {

  constructor() {
    super()

    this.state = {
      premades: []
    }
  }

  componentDidMount() {
    axios('/api/premade')
      .then(res => this.setState({ premades: res.data }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          {Auth.isAuthenticated() && <Link to="/premade" className="button">Premade Box</Link>}
          <hr />
          <div className="columns is-multiline">
            {this.state.premades.map(premade =>
              <div key={premade._id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to={`/premades/${premade._id}`}>
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

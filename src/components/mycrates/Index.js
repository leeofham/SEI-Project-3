import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

import Card from './Card'

class Index extends React.Component {

  constructor() {
    super()

    this.state = {
      mycrates: []
    }
  }

  componentDidMount() {
    axios('/api/boxes')
      .then(res => this.setState({ mycrates: res.data }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          {Auth.isAuthenticated() && <Link to="/mycrates" className="button">My Crates</Link>}
          <hr />
          <div className="columns is-multiline">
            {this.state.mycrates.map(mycrate =>
              <div key={mycrate._id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to={`/mycrates/${mycrate._id}`}>
                  <Card {...mycrate} />
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

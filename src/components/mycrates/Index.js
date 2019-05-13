import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Auth from '../../lib/Auth'

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
      .then(() => this.setState({premade: this.state.mycrates.filter(item => item.name !== 'Premade')}))
  }

  render() {
    return (
      <section className="section index">
        <h2 className="title is-fullwidth-desktop">My Crates</h2>
        <div className="container">

          <div className="columns is-multiline is-centered">
            {this.state.mycrates.map(mycrate =>
              <div key={mycrate._id} className="column is-one-quarter-desktop is-one-third-tablet">
                <Link to={`/mycrates/${mycrate._id}`}>
                  <Card {...mycrate} />
                </Link>
              </div>
            )}

          </div>
          {<Link to='/mycrates/new'><button className="button"> Make another crate!</button></Link>}
        </div>
      </section>
    )
  }
}

export default Index

import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'


import Card from './Card'

class Index extends React.Component {

  constructor() {
    super()

    this.state = {
      mycrates: null
    }
  }

  componentDidMount() {
    axios('/api/boxes')
      .then(res => this.setState({ mycrates: res.data }))
  }

  render() {
    if(!this.state.mycrates) return null
    const user = Auth.getPayload().sub

    return (
      <section className="section index">
        <h2 className="title is-fullwidth-desktop">My Crates</h2>
        <h3 className="title is-fullwidth-desktop">If you have not made a crate</h3>
        <div className="container">
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            autoPlay={true}
            interval={2000}
            stopOnHover={true}
          >
            {this.state.mycrates.map(mycrate =>
              (user === mycrate.createdBy) &&
              <div id="carousel" key={mycrate._id}>
                <Link to={`/mycrates/${mycrate._id}`}>
                  <Card {...mycrate} />
                </Link>
              </div>
            )
            }
          </Carousel>
        </div>
      </section>
    )
  }
}

export default Index
// {<Link to='/mycrates/new'><button className="button"> Make another crate!</button></Link>}

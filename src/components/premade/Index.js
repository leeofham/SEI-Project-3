import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import Auth from '../../lib/Auth'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

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
      <section className="section index">
        <h2 className="titleh2 is-fullwidth-desktop">Choose a premade crate...</h2>
        <div className="container">
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={2000}
            stopOnHover={true}
            width={'400px'}
          >
            {this.state.premade.map(premade =>
              <div id="carousel" key={premade._id}>
                <Link to={`/premade/${premade._id}`}>
                  <Card {...premade} />
                </Link>
              </div>
            )}
          </Carousel>

        </div>
      </section>
    )
  }
}

export default Index

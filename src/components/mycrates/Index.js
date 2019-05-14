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

    this.filterArray = this.filterArray.bind(this)
  }

  componentDidMount() {
    axios('/api/boxes')
      .then(res => this.setState({ mycrates: res.data }))
  }

  filterArray(){
    console.log('i am running')
    const user = Auth.getPayload().sub
    console.log(user, 'this is the user')
    console.log(typeof this.state.mycrates)
    const filteredCrates = this.state.mycrates.filter(mycrate => {
      if(mycrate.createdBy === user) {
        return mycrate.createdBy.includes(user)
      }
    })
    return filteredCrates
  }

  render() {
    if(!this.state.mycrates) return null
    console.log(this.state, 'i am state')

    return (
      <section className="section index">
        <h2 className="title is-fullwidth-desktop">My Crates</h2>
        <div className="container">
          <h3 className="title is-fullwidth-desktop">If you have not made a crate</h3>
          {<Link to='/mycrates/new'><button className="button"> Make another crate!</button></Link>}
          <Carousel
            showThumbs={false}
            showStatus={false}
            showArrows={true}
            autoPlay={true}
            interval={2000}
            stopOnHover={true}
          >
            {this.filterArray().map(mycrate =>
              <div id="carousel" key={mycrate._id}>
                <Link to={`/mycrates/${mycrate._id}`}>
                  <Card {...mycrate} />
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

// {this.state.mycrates.map(mycrate =>
//   <div id="carousel" key={mycrate._id}>
//     <Link to={`/mycrates/${mycrate._id}`}>
//       <Card {...mycrate} />
//     </Link>
//   </div>
// )}

import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'


import Card from './Card'
const user = Auth.getPayload().sub

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

  saveDetails(){

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
    console.log(this.state.user)

    return (
      <section className="section index">


        <h2 className="titleh2 is-fullwidth-desktop">Your personally curated crates</h2>
        <div className="container">

          <p>  When you make the crate of your dreams you will see them all here! </p>

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
            {this.filterArray().map(mycrate =>
              <div id="carousel" key={mycrate._id}>
                <Link to={`/mycrates/${mycrate._id}`}>
                  <Card {...mycrate} />
                </Link>
              </div>
            )}
          </Carousel>
          <Link to="/mycrates/new" className="buttonNew">Make another crate!</Link>
          <h2 className="titleh2 is-fullwidth-desktop">Manage your account</h2>
          <p>Username </p>
          <input className='input' value={user}></input>
          <p>Full Name</p>
          <input className='input' placeholder='1234'></input>
          <p>Last Name</p>
          <input className='input' placeholder='1234'></input>
          <p>Address</p>
          <input className='input' placeholder='1234'></input>
          <p>Email</p>
          <input className='input' placeholder='1234'></input>


          <button className="button" onClick={this.changeDetails}>Save your details!</button>

        </div>
      </section>
    )
  }
}

export default Index
// <h3 className="title is-full-width-desktop">If you have not made a crate</h3>

// {this.state.mycrates.map(mycrate =>
//   <div id="carousel" key={mycrate._id}>
//     <Link to={`/mycrates/${mycrate._id}`}>
//       <Card {...mycrate} />
//     </Link>
//   </div>
// )}

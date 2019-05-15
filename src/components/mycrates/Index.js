import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import Promise from 'bluebird'

import Card from './Card'
// const user = Auth.getPayload().sub

class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      mycrates: null,
      data: {},
      errors: {}
    }
    this.filterArray = this.filterArray.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  componentDidMount() {
    Promise.props({
      mycrates: axios.get('/api/boxes').then(res => res.data),
      user: axios.get(`/api/users/${Auth.getPayload().sub}`).then(res => res.data)
    })
      .then(res => this.setState({ mycrates: res.mycrates, data: res.user }))
      .catch(err => console.error(err))
  }

  filterArray(){
    return this.state.mycrates.filter(mycrate => mycrate.createdBy === Auth.getPayload().sub)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    const token = Auth.getToken()
    axios.put(`/api/users/${this.state.data._id}`, this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/premade'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
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

          <form id='form-profile' onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input id='form-profile'className='input' name="username" placeholder="e.g. John" value={this.state.data.username} onChange={this.handleChange}></input>
              </div>
            </div>

            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input id='form-profile'className='input' name="firstName" placeholder="e.g. Mr Smith" value={this.state.data.firstName} onChange={this.handleChange}></input>
              </div>
            </div>

            <div className="field">
              <label className="label">Last Name</label>
              <div className="control">
                <input id='form-profile'className='input' name="lastName" placeholder="e.g. Mr Smith" value={this.state.data.lastName} onChange={this.handleChange}></input>
              </div>
            </div>

            <div className="field">
              <label className="label">Address</label>
              <div className="control">
                <input className='input' name="address" placeholder="1 Nerd Road" value={this.state.data.address} onChange={this.handleChange}></input>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input id='form-profile' className='input' name ="email" placeholder="1 Nerd Road" value={this.state.data.email} onChange={this.handleChange}></input>
              </div>
            </div>


            <button className="buttonNew" onClick={this.changeDetails}>Save your details!</button>


          </form>
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

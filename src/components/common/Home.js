import React from 'react'
import { HashLink as Hash } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

// <Link to={'/premade'} className="button is-link is-outlined is-large">Premade Box</Link>

// <Link to={'/mystery'}  className="button is-link is-outlined is-large">Mystery Box</Link>

const Home = () => {
  const heroBG = {
    background: 'linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3) ), url(../images/background2.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundBlendMode: 'darken'
  }
  return (
    <div className="div">
      <section className="hero is-fullheight-with-navbar" style={heroBG}>
        <div className="hero-body">
          <div id="align-hero" className="container has-text-centered ">
            <h1> Welcome to Nerd Crate! </h1>
            <p> A place to find your favourite merchandise </p>
            <Hash smooth to="#how-it-works">
              <button className="button">How it works...</button>
            </Hash>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="hero is-fullheight-with-navbar" style={heroBG}>
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1> How it works... </h1>
          </div>
        </div>
        <div id="steps" className="columns is-centered has-text-centered">
          <div className="column is-one-third-desktop is-half-tablet">
            <div className="column-style">
              <h2> Step One: </h2>


              {Auth.isAuthenticated() && <Link to={'/mycrates'} className="button is-link is-outlined is-large">
                <h3> Create your account </h3>
              </Link>}
              {!Auth.isAuthenticated() && <Link to={'/login'} className="button is-link is-outlined is-large">
                <h3> Create your account </h3>
              </Link>}
            </div>
          </div>

          <div className="column is-one-third-desktop is-half-tablet">
            <div className="column-style">
              <h2> Step Two, choose a box:  </h2>
              <Link to={'/premade'} className="button is-link is-outlined is-large">
                <h3> Premade </h3>
              </Link>

              <Link to={'/mycrates/new'} className="button is-link is-outlined is-large">
                <h3> Make your own </h3>
              </Link>
            </div>
          </div>

          <div className="column is-one-third-desktop is-half-tablet">
            <div className="column-style">
              <h2> Step Three: </h2>
              <Link to={'/basket'} className="button is-link is-outlined is-large">
                <h3> Add to your basket and pay </h3>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

// linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2) ),

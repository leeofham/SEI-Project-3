import React from 'react'
import { HashLink as Hash } from 'react-router-hash-link'

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
      <section id="how-it-works" className="hero is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1> How it works... </h1>
          </div>
        </div>
        <div id="steps" className="columns is-centered has-text-centered">
          <div className="column is-one-third-desktop is-half-tablet">
            <div className="column-style">
              <h2> Step One: </h2>
              <h3> Create your account </h3>
            </div>
          </div>
          <div className="column is-one-third-desktop is-half-tablet">
            <div className="column-style">


              <h2> Step Two: </h2>
              <h3> Choose a premade box or make your own </h3>
            </div>

          </div>
          <div className="column is-one-third-desktop is-half-tablet">
            <div className="column-style">


              <h2> Step Three: </h2>
              <h3> Add to your basket </h3>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

// linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2) ),

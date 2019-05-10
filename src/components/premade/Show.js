import React from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'

class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      premade: null
    }

  }

  componentDidMount() {
    axios.get(`/api/premade/${this.props.match.params.id}`)
      .then(res => this.setState({ premade: res.data}))
  }


  render() {
    if(!this.state.premade) return null
    const { name, _id, image } = this.state.premade

    return (
      <section className="section">
        <div className="container">
          <div className="level">
            <div className="level-left">
              <h1 className="title is-1">{name}</h1>
            </div>
            <div className="level-right">
            </div>
          </div>
          <hr />

          <div className="columns is-multiline">
            <div className="column is-half-desktop is-full-tablet">
              <figure className="image">
                <img src={image} alt={name} />
              </figure>
            </div>

            <div className="column is-half-desktop is-full-tablet">
              <article>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              </article>
              <button>Small</button>
              <button>Medium</button>
              <button>Large</button>
              <hr />
            </div>
          </div>
        </div>
      </section>
    )
  }
}


export default Show

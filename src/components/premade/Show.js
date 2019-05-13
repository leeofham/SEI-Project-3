import React from 'react'
import axios from 'axios'

class Show extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      premade: null,
      product: []
    }

  }

  componentDidMount() {
    axios.get(`/api/premade/${this.props.match.params.id}`)
      .then(res =>res.data)
      .then(res => {
        this.setState({ premade: res.premade, product: res.product })
      })
  }


  render() {
    console.log(this.state.product)
    console.log(this.state.premade)

    if(!this.state.premade) return null
    const { image, name } = this.state.premade

    return (
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{name}</h1>



          <hr />

          <div className="columns is-multiline">
            <div className="column is-half-desktop is-full-tablet">
              <figure className="image is-128x128">
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

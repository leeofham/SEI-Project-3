import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../mycrates/Card'

class Basket extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      newItem: props.location.state,
      basket: []
    }
  }


  componentDidMount() {
    const { newItem } = this.state
    let basket = []
    if( JSON.parse(localStorage.getItem('Basket'))) {
      basket = JSON.parse(localStorage.getItem('Basket'))
    }
    if(!newItem){
      this.setState({ basket: [...basket] })
    } else {
      this.setState({ basket: [...basket, newItem ]}, () => localStorage.setItem('Basket', JSON.stringify(this.state.basket)))
    }

  }

  render() {
    console.log(this.state.basket, 'this.state.basket')
    if(!this.state.basket) return null
    // const user = Auth.getPayload().sub

    return (
      <section id="boxes" className="section">
        <h1 className="title is-1">Your basket is empty</h1>

        <div>

          {this.state.basket.map((product, index) =>
            <div className="basket" key={index}>
              <Card {...product} />

            </div>
          )}
        </div>

        <Link to={'/boxes'} className="button is-link is-outlined is-large">Continue Shopping</Link>

        <Link to={'/checkout'} className="button is-link is-outlined is-large">Check Out</Link>
      </section>
    )
  }
}

export default Basket

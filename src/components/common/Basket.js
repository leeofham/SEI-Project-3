import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../mycrates/Card'
import Cart from '../../lib/Cart'

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
    const basket = Cart.getContents()
    if(!newItem){
      this.setState({ basket: [...basket] })
    } else {
      this.setState({ basket: [...basket, newItem ]}, () => Cart.setContents(this.state.basket))
    }

  }
  render() {
    console.log(this.state.newItem, 'this is price')
    console.log(this.state.basket, 'this.state.basket')
    if(!this.state.basket){
      <h1 className="title is-1">Your basket is empty</h1>
      return null
    }
    // const user = Auth.getPayload().sub

    return (
      <section id="boxes" className="section">

        {this.state.basket.length === 0 && <h1 className="title is-1">Items in your basket </h1>}

        <div className="basket">
          {this.state.basket.map((product, index) =>
            <div id="basket-item" key={index}>
              <Card {...product } />
            </div>
          )}
        </div>
        <h4> Total cost: {} </h4>
        <Link to={'/premade'} className="button is-link is-outlined is-large">Continue Shopping</Link>

        <Link to={'/checkout'} className="button is-link is-outlined is-large">Check Out</Link>
      </section>
    )
  }
}

export default Basket

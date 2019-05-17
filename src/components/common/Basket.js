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

  getTotal() {
    return this.state.basket.reduce((sum, box) => {
      return sum + box.price
    }, 0)
  }

  render() {
    console.log(this.state.newItem, 'this is price')
    console.log(this.state.basket, 'this.state.basket')
    console.log(this.state.basket.map(price => price.price ), 'this.state.basket')
    if(!this.state.basket){
      <h1 className="title is-1">Your basket is empty</h1>
      return null
    }
    // const user = Auth.getPayload().sub

    return (
      <section className="basket section">
        <div className="container">

          <h1 className="titleh2"> Your Shopping Basket </h1>
          {this.state.basket.length === 0 && <h1 className="title is-5"> There are no items in your basket </h1>}

          <div className="columns is-multiline">
            {this.state.basket.map((product, index) =>
              <div className="column is-4-desktop is-6-tablet" key={index}>
                <Card {...product}/>
              </div>
            )}
          </div>

          <h4> Total cost: £{this.getTotal()} </h4>
          <p><Link to={'/premade'} className="button is-link is-outlined is-large">Continue Shopping</Link></p>
          <br />
          <p><Link to={'/checkout'} className="button is-link is-outlined is-large">Check Out</Link></p>
          <br />
        </div>
      </section>
    )
  }
}

export default Basket

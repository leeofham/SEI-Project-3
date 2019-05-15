import React from 'react'

class Checkout extends React.Component{
  constructor(){
    super()

    this.state = {
      active: false
    }

    this.purchase = this.purchase.bind(this)
  }

  purchase(){
    this.setState({
      active: !this.state.active
    })
  }

  render(){
    return(
      <section className="Section">
        <div className="container">
          <p>Click the button below to Pay Now!</p>
          <button className="button" onClick={this.purchase}>Buy Now</button>
        </div>
        <div className={`modal ${this.state.active ? ' is-active' : ''}`}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Purchase Complete!</p>
              <button className="delete" aria-label="close" onClick={this.purchase}></button>
            </header>
            <section className="modal-card-body">
              <p>Thanks for the money bruv</p>
            </section>
          </div>
        </div>

      </section>
    )
  }
}

export default Checkout

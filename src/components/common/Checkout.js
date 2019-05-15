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
      <section className="section">
        <div className="container">
          <div className="card checkoutCard">
            <h1 className="title checkoutTitle"> Thanks for ordering with us!</h1>
            <p className='checkoutTitle'>Click the button below to Pay Now!</p>
            <button className="button checkoutButton" onClick={this.purchase}>Buy Now</button>
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
        </div>

      </section>
    )
  }
}

export default Checkout

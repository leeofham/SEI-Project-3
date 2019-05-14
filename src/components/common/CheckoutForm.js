import React from 'react'
import PayPalButton from 'react-paypal-button'

class CheckoutForm extends React.Component {
  render(){
    return (
      <PayPalButton
        env='sandbox'
        sandboxID= {process.env.PAYPAL_SANDBOX_ID}
        amount='0.01'
        currency='GBP'
        commit={true}
      />
    )
  }
}
export default CheckoutForm

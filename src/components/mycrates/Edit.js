import React from 'react'
import axios from 'axios'

import Form from './Form'
import Auth from '../../lib/Auth'

class Edit extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // promise props allows us to make multiple promises at the same time
    // but handle them all with 'then' block
    // this means we dont have to keep setting state for each request
    axios.get(`/api/mycrates/${this.props.match.params.id}`)
      .then(res => res.data)
      .catch(err => this.setState({ errors: err.response.data.errors}))
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    const token = Auth.getToken()

    axios.put(`/api/mycrates/${this.state.data._id}`, this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/mycrates'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <Form
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                data={this.state.data}
                errors={this.state.errors}
                houses={this.state.houses}
              />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Edit

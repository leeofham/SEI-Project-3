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
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/boxes/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data}))
      .catch(err => this.setState({ errors: err.response.data.errors}))
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    const token = Auth.getToken()

    axios.put(`/api/boxes/${this.state.data._id}`, this.state.data, {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/mycrates'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  handleDelete() {
    const token = Auth.getToken()
    axios.delete(`/api/boxes/${this.state.data._id}`, this.state.data,  {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(() => this.props.history.push('/mycrates'))
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
              <button className="button is-danger" onClick={this.handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Edit

import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import Flash from '../../lib/Flash'

class Login extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {},
      error: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/login', this.state.data)
      .then(res => {
        Auth.setToken(res.data.token)
        Flash.setMessage('success', res.data.message)
        this.props.history.push('/premade')
      })
      .catch(() => this.setState({ error: 'Invalid credentials' }))
  }

  render() {
    console.log(this.state)
    return (
      <section className="section">
        <div className="container">
          <h2 className="titleh2  is-fullwidth-desktop">{'It\'s time to login... '}</h2>

          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      className="input"
                      name="email"
                      placeholder="eg: nerd@nerdcrate.com"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      name="password"
                      type="password"
                      placeholder="eg: ••••••••"
                      onChange={this.handleChange}
                    />
                  </div>

                  {this.state.error && <div className="help is-danger">{this.state.error}</div>}
                </div>

                <button className="buttonNew">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Login

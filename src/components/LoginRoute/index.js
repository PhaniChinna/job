import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showErrorMsg, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="Login-container">
        <div className="Login-Route">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="Website-logo1"
            alt="website logo"
          />
          <form className="Form-container" onSubmit={this.submitForm}>
            <label className="Label-User" htmlFor="username">
              USERNAME
            </label>
            <input
              className="input-User"
              value={username}
              type="text"
              id="username"
              placeholder="Username"
              onChange={this.onChangeUsername}
            />
            <label className="Label-Password" htmlFor="password">
              PASSWORD
            </label>
            <input
              className="input-Password"
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={this.onChangePassword}
            />
            <button className="Button-password" type="submit">
              Login
            </button>
            {showErrorMsg && <p className="Error">*{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login

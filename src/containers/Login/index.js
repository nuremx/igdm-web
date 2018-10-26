import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'

import './styles.pcss'

class Login extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
  }

  state = {
    user: '',
    password: '',
  }

  onChange = ({ target: { name, value } }) => this.setState({ [name]: value })

  onSubmit = (event) => {
    event.preventDefault()

    localStorage.setItem('token', 'value')
    this.props.history.replace('/')
  }

  render() {
    const {
      state: { user, password },
    } = this

    return (
      <div className="login">
        <form onSubmit={this.onSubmit}>
          <TextField
            id="standard-name"
            label="Usuario"
            value={user}
            name="user"
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="standard-name"
            label="Contraseña"
            value={password}
            name="password"
            type="password"
            onChange={this.onChange}
            margin="normal"
            variant="outlined"
          />
          <Button
            className="submit"
            variant="contained"
            color="primary"
            type="submit"
          >
            Ingresar
          </Button>
        </form>
      </div>
    )
  }
}

export default Login

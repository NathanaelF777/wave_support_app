import React, {Component} from 'react'

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({[e.target.id]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.setUser(this.state)
  }

  render(){
    return(
      <div>
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="username" id="username" value={this.state.username} onChange={this.handleChange}/>
          <input type="text" placeholder="password" id="password" value={this.state.password} onChange={this.handleChange}/>
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default Login

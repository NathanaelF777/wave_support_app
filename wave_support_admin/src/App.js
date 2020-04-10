import React, {Component} from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Nav from './components/Nav.js'
import Login from './components/Login.js'
import Categories from './components/Categories.js'
import Tickets from './components/Tickets.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: false
    }
    this.setUser = this.setUser.bind(this)
    this.logOut = this.logOut.bind(this)
  }

  setUser(user) {
    this.setState({
      user: user
    })
  }

  logOut() {
    this.setState({
      user: false
    })
  }

  render() {
    return(
      <>
      <Router>
        {this.state.user
      ?<div className='container'>
        <Nav name={this.state.user.username}/>
        <Route path='/' exact component={Categories}/>
        <Route path='/tickets' exact component={Tickets}/>
      </div>
        : <Login setUser={this.setUser}/>
        }
      </Router>
      </>
    )
  }
}


export default App;

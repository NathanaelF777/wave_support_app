import React, {Component} from 'react'
import { HashRouter as Router, Route, Link } from "react-router-dom";

class Nav extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){
    return(
      <div>
        <h3>Hello {this.props.name}</h3>
        <Link to="/">Categories</Link>
        <Link to="/tickets">Tickets</Link>
      </div>
    )
  }
}

export default Nav

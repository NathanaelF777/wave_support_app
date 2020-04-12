import React, {Component} from 'react'
import Articles from './Articles.js'
import CategoryPage from './CategoryPage.js'
import { HashRouter as Router, Route, Link } from "react-router-dom";

class Categories extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories: []
    }
    this.getCategories = this.getCategories.bind(this)
  }

  componentDidMount() {
    this.getCategories()
  }

  async getCategories(){
    let response = await fetch(`http://localhost:3001/categories`)
    let data = await response.json()
    this.setState({
      categories: data
    })
  }

  render(){
    return(
      <div>
        <div>
          {this.state.categories.map(cat => (
            <div>
              <Link to={`/category/${cat.name}`} >{cat.name}</Link>
            </div>
          ))}
        </div>
        <div>
          {this.state.categories.map(cat => (
            <div>
              <Route exact path={`/category/${cat.name}`} render={(props) => <CategoryPage {...props} category={cat} />} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Categories

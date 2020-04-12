import React, {Component} from 'react'
import Articles from './Articles.js'
import Category from './Category.js'
import { HashRouter as Router, Route, Link } from "react-router-dom";
import Async from 'react-async'

class Categories extends Component {
  constructor(props){
    super(props)
    this.state = {
      categories: [],
      currentCategory: {}
    }
    this.getCategories = this.getCategories.bind(this)
    this.selectCategory = this.selectCategory.bind(this)
  }

  componentDidMount() {
    this.getCategories()
  }

  async getCategories(){
    try {
      let response = await fetch(`http://localhost:3001/categories/`)
      let data = await response.json()
      this.setState({
        categories: data,
        currentCategory: data[0]
      })
      console.log(this.state.currentCategory)
    } catch (error){
      console.log(error);
    }
  }

  selectCategory(category){
    this.setState({
      currentCategory: category
    })
  }

  render(){
    return(
      <div>
        {this.state.categories.map(cat => (
          <button onClick={()=> {this.selectCategory(cat)}}>{cat.name}</button>
        ))}
        <div>
          <Category category={this.state.currentCategory} />
        </div>
      </div>
    )
  }
}

export default Categories

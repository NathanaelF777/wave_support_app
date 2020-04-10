import React, {Component} from 'react'
import Articles from './Articles.js'

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
        {this.state.categories.map(cat => (
          <div>
            <h2>{cat.name}</h2>
            <Articles category={cat}/>
          </div>
        ))}
      </div>
    )
  }
}

export default Categories

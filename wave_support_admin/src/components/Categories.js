import React, {Component} from 'react'

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
    let response = await fetch(`http://localhost:3000/categories`)
    let data = await response.json()
    console.log(data)
    this.setState({
      categories: data
    })
  }

  render(){
    return(
      <div>
        {this.state.categories.map(cat => (
          <h2>{cat.name}</h2>
        ))}
      </div>
    )
  }
}

export default Categories

import React, {Component} from 'react'
import Article from './Article.js'

class Articles extends Component {
  constructor(props){
    super(props)
    this.state = {
      articles: []
    }
    this.getArticles = this.getArticles.bind(this)
  }

  componentDidMount() {
    this.getArticles()
  }

  async getArticles(){
    let response = await fetch(`http://localhost:3001/categories/${this.props.category.id}`)
    let data = await response.json()
    this.setState({
      articles: data.articles
    })
  }

  render(){
    return(
      <div>
        {this.state.articles.map(article => (
          <Article article={article} />
        ))}
      </div>
    )
  }
}

export default Articles

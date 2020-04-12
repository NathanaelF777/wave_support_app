import React, {Component} from 'react'
import Article from './Article.js'

class Category extends Component {
  constructor(props){
    super(props)
    this.state = {
      articles: this.props.articles,
      currentArticle: {}
    }
    this.displayArticle = this.displayArticle.bind(this)
  }

  componentDidMount(){
    console.log(this.props.category);
  }

  displayArticle(article){
    this.setState({
      currentArticle: article
    })
  }

  render(){
    return(
      <div>
        <h3>{this.props.category.name}</h3>
          <div>
            {this.state.articles.map(article => (
              <div>
                <button>{article.title}</button>
                {this.state.currentArticle === article
                  ? <Article art={article} />
                : <></>
                }
              </div>
            ))}
          </div>
      </div>
    )
  }
}

export default Category

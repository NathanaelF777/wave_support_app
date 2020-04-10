import React, {Component} from 'react'

class Article extends Component {
  render(){
    return(
      <div>
        <h3>{this.props.article.title}</h3>
        <p>{this.props.article.body}</p>
      </div>
    )
  }
}

export default Article

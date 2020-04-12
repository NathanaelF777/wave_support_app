import React, {Component} from 'react'

class Article extends Component {
  render(){
    return(
      <div>
        <p>{this.props.article.body}</p>
      </div>
    )
  }
}

export default Article

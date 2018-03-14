import React from 'react';
import { Link } from 'react-router-dom';

class CommentsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllComments();
  }

  render() {
    return (
      <div className="all-comments">
        <p className="comment-count">{this.props.comments.length} Comments</p>
        {this.props.comments.map((comment)=>{
          return (
            <article className="one-comment">
              <li className="comment-body">{comment.body}</li>
              <li className="comment-author">posted by: {comment.author_id}</li>
            </article>
          );
        })}
      </div>
    );
  }
}

export default CommentsIndex;

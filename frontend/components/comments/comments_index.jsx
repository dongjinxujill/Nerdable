import React from 'react';
import { Link } from 'react-router-dom';

class CommentsIndex extends React.Component {
  constructor(props){
    super(props);
    // this.handleDelete = this.handleDelete.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllComments();
  }

  componentWillReceiveProps(nextProps){
    if (this.props.errors.length !== nextProps.errors.length){
      return nextProps.errors.map((err)=>{
        return <p>{err}</p>;
      });
    }
  }

  renderErrors(){
    if (this.props.errors.length){
        return this.props.errors.map((err)=>{
          return <p>{err}</p>;
        }
      );
    }
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
              <button className="delete-comment-button" onClick={()=>this.props.deleteComment(comment.id)}><i class="fas fa-trash-alt"></i></button>
            </article>
          );
        })}
      </div>
    );
  }
}

export default CommentsIndex;

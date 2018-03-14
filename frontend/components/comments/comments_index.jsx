import React from 'react';
import { Link } from 'react-router-dom';

class CommentsIndex extends React.Component {
  constructor(props){
    super(props);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderDeleteButton = this.renderDeleteButton.bind(this);
    this.getUsername = this.getUsername.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllComments(this.props.project.id);
  }

  componentWillReceiveProps(nextProps){
    // debugger
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

  renderDeleteButton(comment){
    if (!this.props.currentUser){
      return '';
    }
    if (this.props.currentUser.id === comment.author_id){
      return <button className="delete-comment-button" onClick={()=>this.props.deleteComment(comment.id)}><i class="fas fa-trash-alt"></i></button>
    }
  }

  getUsername(comment){
    return this.props.users[comment.author_id].username;
  }

  render() {
    // debugger
    return (
      <div className="all-comments">
        <p className="comment-count">{this.props.comments.length} Comments</p>
        {this.props.comments.map((comment)=>{
          return (
            <article className="one-comment">
              <div className="comment-author-create">
                <li className="comment-author">posted by: {this.getUsername(comment)}</li>
                <li className="comment-create-at" value={comment.createAt}>at: {comment.createAt}</li>
              </div>
              <li className="comment-body">{comment.body}</li>
              {this.renderDeleteButton(comment)}
            </article>
          );
        })}
      </div>
    );
  }
}

export default CommentsIndex;

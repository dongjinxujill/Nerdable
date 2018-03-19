import React from 'react';
import { Link } from 'react-router-dom';

class CommentsIndex extends React.Component {
  constructor(props){
    super(props);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderDeleteButton = this.renderDeleteButton.bind(this);
    this.getUsername = this.getUsername.bind(this);
    this.renderHeadshot = this.renderHeadshot.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllComments(this.props.project.id);
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

  renderDeleteButton(comment){
    if (!this.props.currentUser){
      return '';
    }
    if (this.props.currentUser.id === comment.author_id){
      return <button className="delete-comment-button" onClick={()=>this.props.deleteComment(comment.id)}>X</button>;
    }
  }

  getUsername(comment){
    if (this.props.users[comment.author_id]){
      return this.props.users[comment.author_id].username;
    }
  }

  renderHeadshot(comment){
    if (this.props.users[comment.author_id].image_url){
      return this.props.users[comment.author_id].image_url;
    } else if (this.props.users[comment.author_id].image){
      return this.props.users[comment.author_id].image;
    }
  }

  render() {
    return (
      <div className="all-comments">
        <p className="comment-count">{this.props.comments.length} Comments</p>
        {this.props.comments.map((comment)=>{
          return (
            <article className="one-comment">
              <div className="comment-author-create">
                <img className="comment-author-headshot" src={this.renderHeadshot(comment)}/>
                <li className="comment-author">posted by: <Link to={`/users/${this.props.users[comment.author_id].id}`}>{this.getUsername(comment)}</Link></li>
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

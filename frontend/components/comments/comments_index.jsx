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
        {this.props.comments.map((comment,idx)=>{
          return (
            <article className="one-comment" key={idx-40} >
              <div className="comment-author-create" key={idx-100} >
                <img key={idx+100}  className="comment-author-headshot" src={this.renderHeadshot(comment)}/>
                <li key={idx+200}  className="comment-author">posted by: {this.getUsername(comment)}</li>
                <li key={idx+1}  className="comment-create-at" value={comment.createAt}>at: {comment.createAt}</li>
              </div>
              <li key={idx-50} className="comment-body">{comment.body}</li>
              {this.renderDeleteButton(comment)}
            </article>
          );
        })}
      </div>
    );
  }
}

export default CommentsIndex;

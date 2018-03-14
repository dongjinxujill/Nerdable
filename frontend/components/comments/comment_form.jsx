import React from 'react';
import { withRouter } from 'react-router-dom';


class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.state = {body:"", project_id: this.props.project.id, author_id: this.props.currentUser[0].id};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleErrors = this.handleErrors.bind(this);
  }
  //
  // componentDidMount(){
  //   this.setState({body: "", project_id: this.props.project.id, author_id: this.props.currentUser[0].id});
  // }

  componentWillUnmount(){
    this.props.clearCommentErrors();
  }

  update(field){
    return (e)=>{
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){

    e.preventDefault();
    this.props.createComment(this.state);
  }
  //
  // handleErrors(e){
  //   e.preventDefault();
  //   if (this.props.error){
  //     return this.props.error;
  //   }
  // }

  render(){
    // debugger
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <input className="comment-input" type="text" onChange={this.update("body")} placeholder="Post comment..."/>
        <button className="comment-submit">Post</button>
      </form>

    )
  }

}

export default CommentForm;

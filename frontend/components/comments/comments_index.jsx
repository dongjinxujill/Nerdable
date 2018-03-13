import React from 'react';
import { Link } from 'react-router-dom';

class CommentsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchAllComments();
  }

  render() {
    return (
      <div>
        {this.props.comments.map((comment)=>{
          return (
            <div>
              <li>{comment.body}</li>
              <li>{comment.author_id}</li>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CommentsIndex;

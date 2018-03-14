import { connect } from 'react-redux';
import CommentForm from './comment_form';
import {createComment, deleteComment, clearCommentErrors
} from '../../actions/comments_actions';

const msp = (state, ownProps) => {
  // debugger
  const project = ownProps.project;
  const currentUser = Object.values(state.entities.users);
  // debugger
  return {
    commentIds: project.comment_ids,
    project,
    currentUser,
    // error: state.entities.errors.comment
  };
};

const mdp = dispatch => ({
  createComment: comment => dispatch(createComment(comment)),
  clearCommentErrors: () => dispatch(clearCommentErrors())
});

export default connect(msp,mdp)(CommentForm);

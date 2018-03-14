import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import { fetchAllComments, deleteComment } from '../../actions/comments_actions';

const mapStateToProps = (state, ownProps) => {
  const project = ownProps.project;
  const currentUser = state.entities.users;
  // debugger
  return {
    comments: Object.values(project.comments),
    errors: state.errors.comment
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllComments: () => dispatch(fetchAllComments()),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex);

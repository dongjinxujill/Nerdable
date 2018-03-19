import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import { fetchAllComments, deleteComment } from '../../actions/comments_actions';

const mapStateToProps = (state, ownProps) => {
  const project = ownProps.project;
  const comments = [];
  project.comment_ids.map((id)=>{
    if (state.entities.comments[id]) {
      return comments.push(state.entities.comments[id]);
    }
  });

  return {
    currentUser: state.session.currentUser,
    comments: comments || [],
    errors: state.errors.comment,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllComments: (projectId) => dispatch(fetchAllComments(projectId)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex);

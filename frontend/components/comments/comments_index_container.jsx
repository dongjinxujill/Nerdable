import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import { fetchAllComments } from '../../actions/comments_actions';

const mapStateToProps = (state, ownProps) => {
  const project = ownProps.project;
  const currentUser = state.entities.users;
  return {
    comments: Object.values(project.comments)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllComments: () => dispatch(fetchAllComments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex);

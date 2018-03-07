import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/projects_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    project: state.entities.projects[ownProps.match.params.projectId],
    authors: state.entities.users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);

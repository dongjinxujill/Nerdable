import { connect } from 'react-redux';
import ProjectShow from './project_show';
import { fetchProject } from '../../actions/projects_actions';
import { fetchAllComments } from '../../actions/comments_actions';
import { fetchAllSteps } from '../../actions/steps_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.entities.projects[ownProps.match.params.projectId],
    authors: state.entities.users,
    steps: Object.values(state.entities.steps)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchProject: id => dispatch(fetchProject(id)),
  fetchAllComments: projectId => dispatch(fetchAllComments(projectId)),
  fetchAllSteps: projectId => dispatch(fetchAllSteps(projectId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectShow);

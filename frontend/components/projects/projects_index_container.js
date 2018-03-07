import { connect } from 'react-redux';
import ProjectsIndex from './projects_index';
import { fetchAllProjects, deleteProject } from '../../actions/projects_actions';

const mapStateToProps = state => {
  return {
    projects: Object.values(state.entities.projects)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchAllProjects: () => dispatch(fetchAllProjects()),
  deleteProject: id => dispatch(deleteProject(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsIndex);

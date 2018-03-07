import { connect } from 'react-redux';
import ProjectsIndex from './projects_index';
import { fetchAllProjects, deleteProject } from '../../actions/projects_actions';

const mapStateToProps = state => {
  return {
    projects: Object.values(state.entities.projects),
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllProjects: () => dispatch(fetchAllProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsIndex);

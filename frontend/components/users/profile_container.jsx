import { connect } from 'react-redux';
import Profile from './profile';
import {fetchUser} from '../../actions/users_actions';
import {fetchAllProjects, deleteProject} from '../../actions/projects_actions';

const msp = (state, ownProps) => {
  const user = state.session.currentUser;
  // debugger
  const projectIds= state.entities.users[ownProps.match.params.userId].project_ids;
  const projectRes = [];
  projectIds.map((projectId)=>{
    projectRes.push(state.entities.projects[projectId]);
  });
  const projects = projectRes || null;
  return {user, projects, currentUser: state.session.currentUser};
};

const mdp = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchAllProjects: () => dispatch(fetchAllProjects()),
  deleteProject: projectId => dispatch(deleteProject(projectId))
});

export default connect(msp,mdp)(Profile);

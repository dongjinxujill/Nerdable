import { connect } from 'react-redux';
import Profile from './profile';
import {fetchUser, fetchAllUsers} from '../../actions/users_actions';
import {fetchAllProjects, deleteProject} from '../../actions/projects_actions';

const msp = (state, ownProps) => {
  const user = state.entities.users;
  let projects;
  if (state.entities.users[ownProps.match.params.userId]){
    if(state.entities.users[ownProps.match.params.userId].project_ids) {
      if (state.entities.projects[state.entities.users[ownProps.match.params.userId].project_ids[0]]){
        const projectIds = state.entities.users[ownProps.match.params.userId].project_ids;
        const projectRes = [];
        projectIds.map((projectId)=>{
          projectRes.push(state.entities.projects[projectId]);
        });
        projects = projectRes;
      } else {
        projects = null;
      }
    } else {
      projects = null;
    }
  }else {
    projects = null;
  }

  return {user, projects, currentUser: state.session.currentUser, userId: ownProps.match.params.userId};
};

const mdp = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchAllProjects: () => dispatch(fetchAllProjects()),
  deleteProject: projectId => dispatch(deleteProject(projectId))
});

export default connect(msp,mdp)(Profile);

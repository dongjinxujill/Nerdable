import { connect } from 'react-redux';
import ProjectsSearchResult from './projects_search_result';
import { fetchSearchedProjects,deleteProject } from '../../actions/projects_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    projects: state.entities.search,
    currentUser: state.session.currentUser
  };
};

const mdp = (dispatch) => {
  return {
    fetchSearchedProjects: projects => dispatch(fetchSearchedProjects(projects)),
    deleteProject: id => dispatch(deleteProject(id))
  };
};


export default connect(
  mapStateToProps,
  mdp
)(ProjectsSearchResult);

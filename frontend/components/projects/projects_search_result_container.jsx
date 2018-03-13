import { connect } from 'react-redux';
import ProjectsSearchResult from './projects_search_result';
import { fetchSearchedProjects } from '../../actions/projects_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    projects: state.entities.search
  };
};

const mdp = (dispatch) => {
  return {
    fetchSearchedProjects: projects => dispatch(fetchSearchedProjects(projects))
  };
};


export default connect(
  mapStateToProps,
  mdp
)(ProjectsSearchResult);

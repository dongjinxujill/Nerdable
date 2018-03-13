import { connect } from 'react-redux';
import ProjectsSearch from './projects_search';
import { fetchSearchedProjects } from '../../actions/projects_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    projects: Object.values(state.entities.search)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchedProjects: query => dispatch(fetchSearchedProjects(query))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectsSearch);

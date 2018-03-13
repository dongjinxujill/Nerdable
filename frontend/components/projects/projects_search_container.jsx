import { connect } from 'react-redux';
import ProjectsSearch from './projects_search';
import { fetchSearchedProjects } from '../../actions/projects_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    projects: Object.values(state.entities.search)
  };
};


export default connect(
  mapStateToProps,
  null
)(ProjectsSearch);

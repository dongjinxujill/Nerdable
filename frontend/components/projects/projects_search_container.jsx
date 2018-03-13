import { connect } from 'react-redux';
import ProjectsSearch from './projects_search';
import { fetchSearchedProjects } from '../../actions/projects_actions';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    projects: state.entities.search,
    currentUser:state.entities.users
  };
};


export default connect(
  mapStateToProps,
  null
)(ProjectsSearch);

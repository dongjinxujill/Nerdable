import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { fetchSearchedProjects } from '../../actions/projects_actions';


const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchSearchedProjects: query => dispatch(fetchSearchedProjects(query)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);

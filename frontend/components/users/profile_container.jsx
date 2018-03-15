import { connect } from 'react-redux';
import Profile from './profile';
import {fetchUser} from '../../actions/users_actions';

const msp = (state, ownProps) => {
  // debugger
  const userId = ownProps.match.params.userId;
  return {userId};
};

const mdp = dispatch => {
  // debugger
  return {fetchUser: (id) => dispatch(fetchUser(id))};
};

export default connect(msp,mdp)(Profile);

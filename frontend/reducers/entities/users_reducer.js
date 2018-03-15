import merge from 'lodash/merge';
import {RECEIVE_ALL_PROJECTS,RECEIVE_PROJECT,REMOVE_PROJECT} from '../../actions/projects_actions';
import {RECEIVE_ALL_USERS, RECEIVE_USER} from '../../actions/users_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
      return merge({}, state, action.payload.users);
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.payload.user.id]: action.payload.user}, action.payload.users);
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      // debugger
      return merge({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
};

export default usersReducer;

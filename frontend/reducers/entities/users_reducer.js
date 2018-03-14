import merge from 'lodash/merge';
import {RECEIVE_ALL_PROJECTS,RECEIVE_PROJECT,REMOVE_PROJECT
} from '../../actions/projects_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
      return merge({}, state, action.payload.users);
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.payload.user.id]: action.payload.user}, action.payload.users);
    default:
      return state;
  }
};

export default usersReducer;

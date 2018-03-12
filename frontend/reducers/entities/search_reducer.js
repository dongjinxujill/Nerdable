import merge from 'lodash/merge';
import {RECEIVE_ALL_PROJECTS} from '../../actions/projects_actions';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
      return merge({}, state, action.payload.projects.query);
    default:
      return state;
  }
};

export default searchReducer;

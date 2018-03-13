import merge from 'lodash/merge';
import {RECEIVE_SEARCHED_PROJECTS} from '../../actions/projects_actions';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCHED_PROJECTS:
    debugger
      return merge({}, state, action.projects);
    default:
      return state;
  }
};

export default searchReducer;

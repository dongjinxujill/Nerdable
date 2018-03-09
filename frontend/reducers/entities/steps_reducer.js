import merge from 'lodash/merge';
import {RECEIVE_PROJECT} from '../../actions/projects_actions';

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PROJECT:
      return merge({}, state, action.project.steps);
    default:
      return state;
  }
};

export default stepsReducer;

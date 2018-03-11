import {RECEIVE_STEP,DELETE_STEP} from '../../actions/steps_actions';
import {
  RECEIVE_PROJECT
} from '../../actions/projects_actions';
import merge from 'lodash/merge';

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STEP:
      return merge({}, state, action.step);
    case RECEIVE_PROJECT:
      return merge({}, action.payload.project.steps);
    case DELETE_STEP:
      let curr = merge({}, state);
      delete curr[action.stepId];
      return curr;
    default:
      return state;
  }
};

export default stepsReducer;

import merge from 'lodash/merge';
import {RECEIVE_STEP,REMOVE_STEP} from '../../actions/steps_actions';

const stepsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STEP:
      return merge({}, state, {[action.payload.step.id]: action.payload.step});
    case REMOVE_STEP:
      const curr = merge({}, state);
      delete curr[action.stepId];
      return curr;
    default:
      return state;
  }
};

export default stepsReducer;

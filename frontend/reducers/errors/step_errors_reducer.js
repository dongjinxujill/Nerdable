import {RECEIVE_STEP_ERRORS, CLEAR_STEP_ERRORS
} from '../../actions/steps_actions';
import merge from 'lodash/merge';


const stepErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STEP_ERRORS:
      return merge([],action.errors);
    case CLEAR_STEP_ERRORS:
      return [];
    default:
      return state;
  }
};

export default stepErrorsReducer;

import {
  RECEIVE_PROJECT_ERRORS
} from '../../actions/projects_actions';
import merge from 'lodash/merge';


const projectErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PROJECT_ERRORS:
      return merge([],action.errors);
    default:
      return state;
  }
};

export default projectErrorsReducer;

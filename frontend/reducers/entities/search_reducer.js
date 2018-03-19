import merge from 'lodash/merge';
import {RECEIVE_SEARCHED_PROJECTS,REMOVE_PROJECT} from '../../actions/projects_actions';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCHED_PROJECTS:
      return action.payload;
    case REMOVE_PROJECT:
      const currState = merge([],state);
      for (let i = 0; i < currState.length; i++){
        if (currState[i].id === action.projectId){
          delete currState[i];
        }
      }
      return currState;
    default:
      return state;
  }
};

export default searchReducer;

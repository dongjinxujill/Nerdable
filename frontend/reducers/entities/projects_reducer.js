import merge from 'lodash/merge';
import {RECEIVE_ALL_PROJECTS,RECEIVE_PROJECT,REMOVE_PROJECT
} from '../../actions/projects_actions';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
      return merge({}, state, action.payload.projects);
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.payload.project.id]: action.payload.project});
    case REMOVE_PROJECT:
      const curr = merge({}, state);
      delete curr[action.projectId];
      return curr;
    default:
      return state;
  }
};

export default projectsReducer;

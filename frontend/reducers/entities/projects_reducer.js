import merge from 'lodash/merge';
import {RECEIVE_ALL_PROJECTS,RECEIVE_PROJECT,REMOVE_PROJECT, RECEIVE_SEARCHED_PROJECTS
} from '../../actions/projects_actions';
import {RECEIVE_COMMENT}from '../../actions/comments_actions';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
      return merge({}, state, action.payload.projects);
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.payload.project.id]: action.payload.project});
    case RECEIVE_COMMENT:
      const projectId = Object.values(state).map((project)=>{
        return project.id;
      });
      state[projectId].comments[action.comment.id] = action.comment;
      return state;
    case REMOVE_PROJECT:
      const curr = merge({}, state);
      delete curr[action.projectId];
      return curr;
    default:
      return state;
  }
};

export default projectsReducer;

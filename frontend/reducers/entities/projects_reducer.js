import merge from 'lodash/merge';
import {RECEIVE_ALL_PROJECTS,RECEIVE_PROJECT,REMOVE_PROJECT, RECEIVE_SEARCHED_PROJECTS
} from '../../actions/projects_actions';
import {RECEIVE_COMMENT, DELETE_COMMENT}from '../../actions/comments_actions';

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
      const curr1 = merge({}, state);
      curr1[projectId].comments[action.comment.id] = action.comment;
      return curr1;
    case DELETE_COMMENT:
      const project2Id = Object.values(state).map((project)=>{
        return project.id;
      });
      const curr2 = merge({}, state);
      delete curr2[project2Id].comments[action.commentId];
      return curr2;
    case REMOVE_PROJECT:
      const curr3 = merge({}, state);
      delete curr3[action.projectId];
      return curr3;
    default:
      return state;
  }
};

export default projectsReducer;

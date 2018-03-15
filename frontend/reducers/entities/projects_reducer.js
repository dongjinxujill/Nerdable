import merge from 'lodash/merge';
import {RECEIVE_ALL_PROJECTS,RECEIVE_PROJECT,REMOVE_PROJECT, RECEIVE_SEARCHED_PROJECTS
} from '../../actions/projects_actions';
import {RECEIVE_COMMENT, DELETE_COMMENT}from '../../actions/comments_actions';
import {RECEIVE_STEP, DELETE_STEP, RECEIVE_ALL_STEPS}from '../../actions/steps_actions';

const projectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
      return merge({}, state, action.payload.projects);
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.payload.project.id]: action.payload.project});
    // case RECEIVE_ALL_STEPS:
    //   // debugger
    case RECEIVE_STEP:
      const currState = merge({}, state);
      const project1 = currState[action.step.project_id];
      if (!project1.step_ids.includes(action.step.id)){
        project1.step_ids.push(action.step.id);
      }
      return currState;
    case RECEIVE_COMMENT:
    // debugger
      const curr1 = merge({}, state);
      const project = curr1[action.comment.project_id];
      project.comment_ids.push(action.comment.id);
      return curr1;
    case DELETE_COMMENT:
    // debugger
      const project2Id = Object.values(state).map((project)=>{
        return project.id;
      });
      const curr2 = merge({}, state);
      delete curr2[project2Id][action.commentId];
      return curr2;
      // debugger
      // const curr2 = merge({}, state);
      // const project = curr2[action.commentId]
    case REMOVE_PROJECT:
      const curr3 = merge({}, state);
      delete curr3[action.projectId];
      return curr3;
    default:
      return state;
  }
};

export default projectsReducer;

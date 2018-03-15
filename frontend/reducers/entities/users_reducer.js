import merge from 'lodash/merge';
import {RECEIVE_ALL_PROJECTS,RECEIVE_PROJECT,REMOVE_PROJECT} from '../../actions/projects_actions';
import {RECEIVE_ALL_USERS, RECEIVE_USER} from '../../actions/users_actions';
import {RECEIVE_ALL_COMMENTS} from '../../actions/comments_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_PROJECTS:
    // debugger
      // debugger
      // const projectIds = state[action.payload.user_id].project_ids;
      // projectIds.map((projectId)=>{
      //   if (action.payload.projects[projectId])
      // })
      return merge({}, action.payload.users);
    case RECEIVE_PROJECT:
      return merge({}, state, {[action.payload.user.id]: action.payload.user}, action.payload.users);
    case REMOVE_PROJECT:
      // let currState = merge({}, state);
      // Object.values(currState).map((project)=>{
      //   if (project.project_ids.includes(action.projectId)){
      //     delete project.project_ids[action.projectId];
      //   }
      // });

      delete state[state.author_id].project_ids[action.projectId];
      return state;
    // case RECEIVE_ALL_COMMENTS:
    //   return merge({}, state,action.payload.users);
    case RECEIVE_ALL_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      // debugger
      return merge({}, state, {[action.user.id]: action.user});
    default:
      return state;
  }
};

export default usersReducer;
